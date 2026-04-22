# Coming Soon Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a non-destructive "coming soon" gate for giftshop.co that captures early-access emails into a Klaviyo list, with an env-var toggle to flip back to the real site and a secret preview bypass for the team.

**Architecture:** Next.js middleware rewrites all requests to `/coming-soon` when `COMING_SOON_MODE=true`, except for an allow-list (static assets, API routes, and requests carrying the `gs-preview=1` cookie). The coming-soon page POSTs to `/api/early-access`, which validates + rate-limits + forwards to the Klaviyo v2024-10-15 REST API. Existing page components (`/`, `/faq`, `/privacy`, `/support`) are untouched.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, Klaviyo REST API, Vercel hosting.

**Branch:** `coming-soon-page` (already created off `v2`). Do not push to `v2` until every verification step in Task 8 passes and Matt gives explicit approval.

**Spec:** `docs/superpowers/specs/2026-04-22-coming-soon-page-design.md`

---

## File structure

**New files:**
- `lib/klaviyo.ts` — Klaviyo client helper (`upsertProfile`, `addProfileToList`)
- `app/api/early-access/route.ts` — POST handler, validates + rate-limits + calls Klaviyo
- `app/coming-soon/coming-soon.module.css` — page-scoped keyframes (`idleBob`, `badgePulse`)
- `app/coming-soon/decor.tsx` — scattered emoji decor layer
- `app/coming-soon/email-capture-form.tsx` — client-component form with states
- `app/coming-soon/page.tsx` — page composes decor + form + copy
- `middleware.ts` — Next.js middleware at project root

**Modified files:**
- None. Existing `app/page.tsx`, `app/faq/*`, `app/privacy/*`, `app/support/*`, `app/layout.tsx`, `app/globals.css` stay untouched.

---

## Testing approach

This repo has no existing test infrastructure. Rather than adding Vitest just for this feature (a separate concern), tasks use **concrete verification commands** — curl, `next dev`, `next build`, type-check — run at the end of each task to confirm the unit works. These are integration-style checks that exercise the real code path, which is the highest-value check for a feature of this shape (middleware + UI + third-party API).

Each task ends with a verification step (`Expected:` block) and a commit step.

---

## Task 1: Klaviyo client helper

**Files:**
- Create: `lib/klaviyo.ts`

- [ ] **Step 1: Write the helper with two exports**

Create `lib/klaviyo.ts`:

```ts
const KLAVIYO_BASE = "https://a.klaviyo.com/api";
const KLAVIYO_REVISION = "2024-10-15";

function klaviyoHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Klaviyo-API-Key ${apiKey}`,
    revision: KLAVIYO_REVISION,
    accept: "application/json",
    "content-type": "application/json",
  };
}

/**
 * Creates a Klaviyo profile. If the profile already exists (409),
 * extracts and returns the existing profile ID from the error body.
 * Returns the profile ID on success.
 */
export async function upsertProfile(email: string, apiKey: string): Promise<string> {
  const res = await fetch(`${KLAVIYO_BASE}/profiles/`, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify({
      data: { type: "profile", attributes: { email } },
    }),
  });

  if (res.status === 201) {
    const body = await res.json();
    return body.data.id as string;
  }

  if (res.status === 409) {
    const body = await res.json().catch(() => ({}));
    // Klaviyo nests the existing ID under errors[].meta.duplicate_profile_id
    const existingId =
      body?.errors?.[0]?.meta?.duplicate_profile_id ??
      body?.meta?.duplicate_profile_id;
    if (typeof existingId === "string") return existingId;
    throw new Error(`Klaviyo 409 without duplicate_profile_id: ${JSON.stringify(body)}`);
  }

  const text = await res.text().catch(() => "");
  throw new Error(`Klaviyo profile upsert failed: ${res.status} ${text}`);
}

/**
 * Adds a profile to a list. Idempotent on Klaviyo's side — repeat calls succeed.
 */
export async function addProfileToList(
  profileId: string,
  listId: string,
  apiKey: string
): Promise<void> {
  const res = await fetch(`${KLAVIYO_BASE}/lists/${listId}/relationships/profiles/`, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify({
      data: [{ type: "profile", id: profileId }],
    }),
  });

  // 204 No Content on success. 409 means already in list — also fine.
  if (res.status === 204 || res.status === 409) return;

  const text = await res.text().catch(() => "");
  throw new Error(`Klaviyo list-add failed: ${res.status} ${text}`);
}
```

- [ ] **Step 2: Type-check**

Run: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx tsc --noEmit`
Expected: no errors (may see pre-existing errors in other files; no new errors in `lib/klaviyo.ts`).

- [ ] **Step 3: Commit**

```bash
git add lib/klaviyo.ts
git commit -m "Add Klaviyo profile + list client helper"
```

---

## Task 2: Early-access API route

**Files:**
- Create: `app/api/early-access/route.ts`

- [ ] **Step 1: Write the route handler**

Create `app/api/early-access/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { upsertProfile, addProfileToList } from "@/lib/klaviyo";

// Simple per-IP rate limit: max 5 requests per 60s window.
// In-memory — resets on cold start, fine for a low-volume waitlist.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitBuckets = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip) ?? [];
  const fresh = bucket.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (fresh.length >= RATE_LIMIT_MAX) {
    rateLimitBuckets.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  rateLimitBuckets.set(ip, fresh);
  return false;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Liberal email check — we do a soft format validation; Klaviyo does the strict check.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let payload: { email?: unknown; honeypot?: unknown };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Fake-success to avoid tipping them off.
  if (typeof payload.honeypot === "string" && payload.honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;
  if (!apiKey || !listId) {
    console.error("[early-access] missing KLAVIYO_API_KEY or KLAVIYO_LIST_ID");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  try {
    const profileId = await upsertProfile(email, apiKey);
    await addProfileToList(profileId, listId, apiKey);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[early-access] klaviyo error:", err);
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Type-check**

Run: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx tsc --noEmit`
Expected: no new errors.

- [ ] **Step 3: Smoke-test locally with a fake env (Klaviyo will 401 — that's fine; we're proving our code path first)**

Start dev:
```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site
KLAVIYO_API_KEY=fake KLAVIYO_LIST_ID=fake npx next dev
```

In a second terminal:
```bash
# Honeypot — should 200 with ok:true, should NOT hit Klaviyo
curl -s -X POST http://localhost:3000/api/early-access \
  -H "content-type: application/json" \
  -d '{"email":"test@example.com","honeypot":"i-am-a-bot"}'
# Expected: {"ok":true}

# Bad email — should 400
curl -s -X POST http://localhost:3000/api/early-access \
  -H "content-type: application/json" \
  -d '{"email":"not-an-email"}' -w "\n%{http_code}\n"
# Expected: status 400, {"ok":false,"error":"invalid_email"}

# Missing body — should 400
curl -s -X POST http://localhost:3000/api/early-access \
  -H "content-type: application/json" \
  -d 'not-json' -w "\n%{http_code}\n"
# Expected: status 400, {"ok":false}

# Valid email with fake key — should 500 (Klaviyo auth fails, our code logs + returns 500)
curl -s -X POST http://localhost:3000/api/early-access \
  -H "content-type: application/json" \
  -d '{"email":"real@example.com"}' -w "\n%{http_code}\n"
# Expected: status 500, {"ok":false,"error":"upstream_error"}
```

Stop dev server when done.

- [ ] **Step 4: Commit**

```bash
git add app/api/early-access/route.ts
git commit -m "Add /api/early-access route with honeypot + rate limit + Klaviyo wiring"
```

---

## Task 3: Page-scoped animation CSS module

**Files:**
- Create: `app/coming-soon/coming-soon.module.css`

- [ ] **Step 1: Write the CSS module**

Create `app/coming-soon/coming-soon.module.css`:

```css
@keyframes idleBob {
  0%, 100% { transform: var(--base-transform) translateY(0); }
  50% { transform: var(--base-transform) translateY(-8px); }
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

@keyframes headlineFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

.decor {
  animation: idleBob 4s ease-in-out infinite;
  will-change: transform;
}

.badgeDot {
  animation: badgePulse 2s ease-in-out infinite;
}

.headlineEnter {
  animation: headlineFadeUp 0.6s ease-out both;
}

@media (prefers-reduced-motion: reduce) {
  .decor,
  .badgeDot,
  .headlineEnter {
    animation: none;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/coming-soon/coming-soon.module.css
git commit -m "Add coming-soon page animation module"
```

---

## Task 4: Decor component

**Files:**
- Create: `app/coming-soon/decor.tsx`

- [ ] **Step 1: Write the decor component**

Create `app/coming-soon/decor.tsx`:

```tsx
import styles from "./coming-soon.module.css";

type DecorItem = {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  rotate: number;
  delay: string;
  opacity?: number;
};

// Desktop layout — positions tuned for ~1200px+. Mobile uses a trimmed subset via CSS.
const DESKTOP_ITEMS: DecorItem[] = [
  { emoji: "🎁", top: "12%", left: "8%",  size: "56px", rotate: -12, delay: "0s",   opacity: 0.9 },
  { emoji: "🎀", top: "18%", right: "10%", size: "62px", rotate: 16,  delay: "0.4s", opacity: 0.9 },
  { emoji: "✨", top: "48%", left: "5%",  size: "42px", rotate: -22, delay: "0.8s", opacity: 0.8 },
  { emoji: "✨", top: "45%", right: "6%", size: "48px", rotate: 20,  delay: "1.2s", opacity: 0.8 },
  { emoji: "🎁", top: "75%", left: "18%", size: "66px", rotate: 12,  delay: "1.6s", opacity: 0.9 },
  { emoji: "🎀", top: "78%", right: "15%", size: "58px", rotate: -14, delay: "2.0s", opacity: 0.9 },
  { emoji: "✨", top: "30%", left: "45%", size: "28px", rotate: 8,   delay: "2.4s", opacity: 0.5 },
];

// A trimmed set for small viewports — less crowded.
const MOBILE_ITEMS: DecorItem[] = [
  { emoji: "🎁", top: "14%", left: "4%",  size: "40px", rotate: -12, delay: "0s",   opacity: 0.9 },
  { emoji: "🎀", top: "18%", right: "6%", size: "44px", rotate: 16,  delay: "0.4s", opacity: 0.9 },
  { emoji: "🎁", top: "72%", left: "6%",  size: "44px", rotate: 12,  delay: "1.2s", opacity: 0.9 },
  { emoji: "🎀", top: "76%", right: "6%", size: "40px", rotate: -14, delay: "1.6s", opacity: 0.9 },
];

function renderItem(item: DecorItem, idx: number, key: string) {
  const baseTransform = `rotate(${item.rotate}deg)`;
  return (
    <span
      key={`${key}-${idx}`}
      aria-hidden="true"
      className={styles.decor}
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        right: item.right,
        fontSize: item.size,
        opacity: item.opacity ?? 1,
        animationDelay: item.delay,
        // The keyframes reference --base-transform so bob preserves rotation.
        ["--base-transform" as string]: baseTransform,
        transform: baseTransform,
        userSelect: "none",
      }}
    >
      {item.emoji}
    </span>
  );
}

export function Decor() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {DESKTOP_ITEMS.map((item, idx) => renderItem(item, idx, "d"))}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
        {MOBILE_ITEMS.map((item, idx) => renderItem(item, idx, "m"))}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx tsc --noEmit`
Expected: no new errors in `app/coming-soon/decor.tsx`.

- [ ] **Step 3: Commit**

```bash
git add app/coming-soon/decor.tsx
git commit -m "Add decor layer for coming-soon page"
```

---

## Task 5: Email capture form

**Files:**
- Create: `app/coming-soon/email-capture-form.tsx`

- [ ] **Step 1: Write the form component**

Create `app/coming-soon/email-capture-form.tsx`:

```tsx
"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="w-full rounded-xl bg-white border border-[#e5e7eb] px-5 py-4 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
      >
        <p className="text-base font-semibold text-[#1a1a1a]">
          You&apos;re on the list <span aria-hidden="true">🎁</span>
        </p>
        <p className="mt-1 text-sm text-[#4b5563]">We&apos;ll be in touch.</p>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      {/* Honeypot — hidden from users, visible to most bots */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <label htmlFor="early-access-email" className="sr-only">
          Email address
        </label>
        <input
          id="early-access-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          className="flex-1 h-12 rounded-xl border border-[#e5e7eb] bg-white px-4 text-base text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none focus:border-[#DA1B2B] focus:ring-2 focus:ring-[#DA1B2B]/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={disabled}
          className="h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#DA1B2B] px-6 text-base font-semibold text-white hover:bg-[#B81520] transition-colors disabled:opacity-70"
        >
          {status === "submitting" ? "Joining..." : "Get early access"}
          {status !== "submitting" && (
            <span aria-hidden="true" className="translate-y-[-1px]">→</span>
          )}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-[#B81520]">
          Something went wrong. Try again?
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx tsc --noEmit`
Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add app/coming-soon/email-capture-form.tsx
git commit -m "Add email capture form with honeypot + states"
```

---

## Task 6: Coming-soon page

**Files:**
- Create: `app/coming-soon/page.tsx`

- [ ] **Step 1: Write the page**

Create `app/coming-soon/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Decor } from "./decor";
import { EmailCaptureForm } from "./email-capture-form";
import styles from "./coming-soon.module.css";

export const metadata: Metadata = {
  title: "Giftshop — Coming Soon",
  description: "Strategic gifting for Shopify merchants. Join the early access list.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF5F7 100%)",
      }}
    >
      {/* Logo header */}
      <header className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 flex items-center gap-2.5">
        <div className="h-7 w-7 rounded-md bg-[#DA1B2B]" aria-hidden="true" />
        <span className="text-lg font-extrabold tracking-tight text-[#1a1a1a]">
          Giftshop
        </span>
      </header>

      {/* Decor layer */}
      <Decor />

      {/* Main content card */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
        <div className="w-full max-w-[520px] text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e7eb] px-3.5 py-1.5">
            <span
              aria-hidden="true"
              className={`inline-block h-2 w-2 rounded-full bg-[#DA1B2B] ${styles.badgeDot}`}
            />
            <span className="text-[11px] font-semibold tracking-[0.14em] text-[#4b5563]">
              COMING SOON
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`${styles.headlineEnter} text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.02em] text-[#1a1a1a]`}
          >
            Great gifts,{" "}
            <span className="italic text-[#DA1B2B]">growing stores.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4b5563] max-w-[440px] mx-auto">
            Strategic gifting for Shopify merchants is almost here. Join the early access list.
          </p>

          {/* Form */}
          <div className="mt-8 max-w-[420px] mx-auto">
            <EmailCaptureForm />
          </div>
        </div>
      </main>

      {/* Footer microtext */}
      <footer className="absolute bottom-5 left-0 right-0 text-center z-10">
        <p className="text-xs text-[#9ca3af]">© 2026 Giftshop</p>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Run dev + visit the page directly**

```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site
npx next dev
```

Open http://localhost:3000/coming-soon in a browser (NOT `/` yet — middleware isn't wired up, the current homepage is still the real one at `/`).

Verify:
- Logo visible top-left
- "COMING SOON" badge with pulsing red dot
- "Great gifts, _growing stores._" with red italic accent
- Sub-copy renders
- Email input + "Get early access →" button
- Gift emojis scattered and gently bobbing
- Resize browser down to ~375px — layout stacks, mobile decor kicks in, no horizontal scroll

Stop dev server when done.

- [ ] **Step 3: Commit**

```bash
git add app/coming-soon/page.tsx
git commit -m "Add coming-soon page composing decor + form"
```

---

## Task 7: Middleware (the gate)

**Files:**
- Create: `middleware.ts` (project root, not inside `app/`)

- [ ] **Step 1: Write the middleware**

Create `middleware.ts` (at project root, same level as `package.json`):

```ts
import { NextRequest, NextResponse } from "next/server";

const BYPASS_COOKIE = "gs-preview";
const BYPASS_COOKIE_VALUE = "1";
const BYPASS_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

// Paths that are always reachable — the coming-soon page itself, API routes,
// Next.js internals, and static files (anything with a file extension).
function isAllowListed(pathname: string): boolean {
  if (pathname === "/coming-soon") return true;
  if (pathname.startsWith("/api/")) return true;
  if (pathname.startsWith("/_next/")) return true;
  if (pathname === "/favicon.ico" || pathname === "/robots.txt" || pathname === "/icon.svg") return true;
  // Anything with a dot in the last segment — treat as a static asset request.
  if (/\.[a-zA-Z0-9]{1,6}$/.test(pathname)) return true;
  return false;
}

export function middleware(req: NextRequest) {
  const mode = process.env.COMING_SOON_MODE;
  if (mode !== "true") return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;

  // Secret preview unlock — if the query param matches, set the bypass cookie
  // and continue to the originally requested page.
  const bypassKey = process.env.COMING_SOON_BYPASS_KEY;
  const previewParam = searchParams.get("preview");
  if (bypassKey && previewParam && previewParam === bypassKey) {
    const res = NextResponse.next();
    res.cookies.set(BYPASS_COOKIE, BYPASS_COOKIE_VALUE, {
      maxAge: BYPASS_COOKIE_MAX_AGE_SECONDS,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return res;
  }

  // Already-unlocked visitors pass through.
  if (req.cookies.get(BYPASS_COOKIE)?.value === BYPASS_COOKIE_VALUE) {
    return NextResponse.next();
  }

  // Allow-listed paths pass through.
  if (isAllowListed(pathname)) return NextResponse.next();

  // Gate active → rewrite to the coming-soon page while preserving the URL.
  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = ""; // strip query params so they don't leak into the rewrite
  return NextResponse.rewrite(url);
}

export const config = {
  // Only run middleware on real page requests — skip _next internals + files.
  // (Belt-and-suspenders with isAllowListed above.)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt).*)"],
};
```

- [ ] **Step 2: Type-check**

Run: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx tsc --noEmit`
Expected: no new errors.

- [ ] **Step 3: Verify gate ON behavior**

```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site
COMING_SOON_MODE=true COMING_SOON_BYPASS_KEY=test-key-123 \
KLAVIYO_API_KEY=fake KLAVIYO_LIST_ID=fake \
npx next dev
```

In the browser (use a fresh incognito window so there are no stale cookies):
- Visit http://localhost:3000/ → coming-soon page renders, URL stays `/`
- Visit http://localhost:3000/faq → coming-soon page renders, URL stays `/faq`
- Visit http://localhost:3000/privacy → coming-soon page renders
- Visit http://localhost:3000/support → coming-soon page renders
- Visit http://localhost:3000/coming-soon directly → renders (not rewritten to itself infinitely)

- [ ] **Step 4: Verify bypass unlock**

Still with gate ON:
- Visit http://localhost:3000/?preview=test-key-123 → real homepage loads, `gs-preview=1` cookie is set (check devtools → Application → Cookies)
- Visit http://localhost:3000/faq (no query param, same browser) → real FAQ page loads (cookie unlocks everything)
- Visit http://localhost:3000/?preview=wrong-key → coming-soon still shows (wrong key is ignored)

In a separate incognito window (no cookie): visits still hit coming-soon.

- [ ] **Step 5: Verify gate OFF behavior**

Stop dev server. Restart without `COMING_SOON_MODE`:
```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx next dev
```

- Visit http://localhost:3000/ → real homepage (not coming-soon)
- Visit http://localhost:3000/coming-soon → still renders the coming-soon page (it's a valid route; just not the gate target)
- Visit http://localhost:3000/faq → real FAQ

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add middleware.ts
git commit -m "Add middleware gate with preview bypass for coming-soon mode"
```

---

## Task 8: End-to-end verification + docs

**Files:**
- None new; verification only.

- [ ] **Step 1: Full production build**

```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx next build
```

Expected: build completes without errors. Warnings about missing env vars are OK — those are read at request time.

- [ ] **Step 2: Run the built output with gate ON and real-looking env**

```bash
COMING_SOON_MODE=true COMING_SOON_BYPASS_KEY=test-key-123 \
KLAVIYO_API_KEY=fake KLAVIYO_LIST_ID=fake \
npx next start
```

Repeat the browser verifications from Task 7 Step 3–4 against the built output on http://localhost:3000 to confirm production build behaves identically to dev.

Stop server.

- [ ] **Step 3: Klaviyo live-fire test (user-driven, optional before deploy)**

This step needs real Klaviyo credentials and should be run by Matt (not an agent executing the plan).

1. Matt creates list "Early Access — giftshop.co" in Klaviyo → copies list ID
2. Matt creates a Private API Key in Klaviyo with scopes `profiles:write` + `lists:write` → copies key
3. Run locally with real values:
   ```bash
   COMING_SOON_MODE=true COMING_SOON_BYPASS_KEY=test-key-123 \
   KLAVIYO_API_KEY=<real-key> KLAVIYO_LIST_ID=<real-list-id> \
   npx next dev
   ```
4. Submit test email via http://localhost:3000/ form
5. Confirm the email appears in the Klaviyo list within ~30s
6. Submit the SAME email again → form still shows success, no duplicate in list

- [ ] **Step 4: Final git status check + commit lock**

```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site
git status
git log --oneline v2..HEAD
```

Expected:
- Working tree clean
- `git log` shows the spec commit + the 7 task commits (8 total on this branch above `v2`)
- `v2` branch itself is unchanged — verify: `git log origin/v2 -1 --oneline` shows the pre-branch tip

- [ ] **Step 5: STOP — do NOT push to `v2` or deploy to production**

Per Matt's standing rule: never deploy to production without explicit approval. Surface the branch + summary to Matt:

> "Implementation complete on branch `coming-soon-page` (N commits ahead of `v2`). All local verification passed. Ready for: (a) Klaviyo live-fire test with real credentials, (b) Vercel preview deploy, (c) merge into `v2` + `vercel --prod` — pending your approval."

Wait for Matt's explicit go-ahead on each of (a)(b)(c) before touching production.

---

## Self-review

**Spec coverage:**
- Hide-the-site toggle via middleware + env var → Task 7 ✓
- `/coming-soon` page with C4 visuals, logo, badge, headline, sub, form → Tasks 3, 4, 5, 6 ✓
- Gentle idle bob + badge pulse + `prefers-reduced-motion` → Task 3 ✓
- Email capture with honeypot, rate limit, Klaviyo → Tasks 1, 2, 5 ✓
- Preview bypass via `?preview=<key>` + 30-day cookie → Task 7 ✓
- Allow-list (static assets, API, `_next`, coming-soon itself) → Task 7 ✓
- Non-destructive: no modified app page files → Confirmed in file structure ✓
- `robots: noindex` on coming-soon → Task 6 ✓
- Env vars documented → Covered in spec; no env file committed ✓
- Build/verify before deploy → Task 8 ✓
- STOP gate before production → Task 8 Step 5 ✓

**Placeholder scan:** No "TBD"/"TODO"/"fill in later" — every step has either the code or an exact command.

**Type consistency:**
- `lib/klaviyo.ts` exports `upsertProfile(email, apiKey)` and `addProfileToList(profileId, listId, apiKey)` — used with those exact signatures in `app/api/early-access/route.ts`.
- Route handler imports from `@/lib/klaviyo` — the existing `tsconfig.json` path alias supports this; if not, switch to a relative import at implementation time.
- `styles.decor`, `styles.badgeDot`, `styles.headlineEnter` are defined in Task 3 and consumed in Tasks 4 + 6 with matching names.
- `COMING_SOON_MODE`, `COMING_SOON_BYPASS_KEY`, `KLAVIYO_API_KEY`, `KLAVIYO_LIST_ID` — named consistently across all tasks.
- `gs-preview` cookie name used only in middleware (Task 7).
