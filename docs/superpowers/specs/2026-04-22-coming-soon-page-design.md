# Coming Soon Page — Design Spec

**Date:** 2026-04-22
**Status:** Design — awaiting implementation plan
**Scope:** giftshop.co (Next.js marketing site, deploys from `v2` branch)

## Goal

Hide the current giftshop.co marketing site behind a branded "coming soon" page that captures early-access email signups. GiftShop is pre-launch (not yet on Shopify App Store); the marketing site's primary purpose until launch is waitlist capture.

The mechanism must be:
- **Non-destructive** — all existing pages (`/`, `/faq`, `/privacy`, `/support`) remain in the codebase, untouched
- **Reversible in ~30s** — flip a single Vercel env var and redeploy to restore the real site
- **Previewable** — a secret URL parameter sets a bypass cookie so team/partners can view the real site while it's hidden
- **Bot-resistant** — honeypot + per-IP rate limiting on the capture endpoint

## Visual direction

Selected from brainstorm iteration: **Variation C4 — "Airy & elegant"**.

- Soft gradient background: `#FFFFFF` → `#FFF5F7` (top to bottom)
- Logo top-left: red square mark + "Giftshop" wordmark (matches existing site header)
- Badge: white pill with 1px grey border, pulsing red dot, **"COMING SOON"** text
- Headline: **"Great gifts, _growing stores._"** — "growing stores" in red italic (`#DA1B2B`)
- Sub-copy: _"Strategic gifting for Shopify merchants is almost here. Join the early access list."_
- Email input + primary CTA: **"Get early access →"**
- Decor: 6–8 scattered emoji gift assets (🎁 🎀 ✨) at various rotations, with gentle idle bob animation
- Mobile: stacked layout, same gradient, fewer + smaller decor elements

Asset choice — emojis to start. If Matt wants higher polish post-launch, we can swap to illustrated 3D renders or photographed gift boxes without touching any layout code (just replace the decor component).

## Architecture

### Toggle mechanism — middleware + env var

- Add `middleware.ts` at project root
- Reads `process.env.COMING_SOON_MODE`
- If `"true"` and the request is NOT for one of the allow-listed paths AND NOT carrying the bypass cookie → rewrite to `/coming-soon` while preserving the original URL in the browser (not a redirect — a rewrite)
- If unset or `"false"` → middleware is a no-op; every page works normally

**Allow-list** (always reachable regardless of toggle):
- `/coming-soon` (the page itself)
- `/api/*` (API routes)
- `/_next/*` (Next.js internals)
- Static assets: `/favicon.ico`, `/icon.svg`, `/robots.txt`, any file with an extension

**Turning it off:**
1. Vercel dashboard → env vars → set `COMING_SOON_MODE=false` (or delete it)
2. Redeploy: `cd /Users/matthewschmidt/giftshopshopify/giftshop-site && npx vercel deploy --prod`
3. Real site is live again in ~30 seconds

### Preview bypass — secret query param → cookie

- When a request comes in with `?preview=<value>`:
  - If `<value>` matches env var `COMING_SOON_BYPASS_KEY` → middleware sets cookie `gs-preview=1` (HttpOnly, Secure, SameSite=Lax, 30-day expiry) and serves the real page
  - Otherwise ignore the param
- On subsequent requests, the cookie alone bypasses the gate (no query param needed)
- Cookie is scoped to the `giftshop.co` domain

**To revoke preview access for someone:** rotate `COMING_SOON_BYPASS_KEY` in Vercel → redeploy. Existing cookies remain valid until their 30-day expiry; if needed, add a server-side cookie version check (out of scope for v1).

## The `/coming-soon` page

### Route: `app/coming-soon/page.tsx`

Client component (uses form state). Renders:

- **Logo header** — red square glyph + "Giftshop" wordmark, top-left
- **Main content card** (centered, max-width ~480px):
  - Badge pill with pulsing red dot + "COMING SOON"
  - Headline "Great gifts, *growing stores.*"
  - Sub-copy paragraph
  - `<EmailCaptureForm />` — email input + "Get early access →" button
- **Decor layer** — 6–8 absolutely-positioned emoji spans with randomised rotations, behind content (pointer-events: none)
- **Footer microtext** (optional) — "© 2026 Giftshop" bottom-center

### `<EmailCaptureForm />` component (`app/coming-soon/email-capture-form.tsx`)

- Controlled `email` state
- Hidden honeypot field `website` — bots fill it, real users don't; submissions with a non-empty honeypot fail silently with a fake success
- Client-side format check (HTML5 `type="email"` + basic regex on submit)
- POST `/api/early-access` with `{ email, honeypot }`
- States:
  - `idle` — form visible
  - `submitting` — button shows spinner, input disabled
  - `success` — form replaced with "You're on the list 🎁 We'll be in touch."
  - `error` — inline red text below input: "Something went wrong. Try again?"

### Metadata (`app/coming-soon/page.tsx`)

```ts
export const metadata = {
  title: "Giftshop — Coming Soon",
  description: "Strategic gifting for Shopify merchants. Join the early access list.",
  robots: { index: false, follow: false },  // don't index the gated page
};
```

## API route — `app/api/early-access/route.ts`

POST-only route handler. Validates → submits to Klaviyo.

### Flow

1. Parse JSON body `{ email: string, honeypot?: string }`
2. If `honeypot` is non-empty → return 200 `{ ok: true }` immediately (don't tip off bots; don't call Klaviyo)
3. Validate email format (simple regex; reject empty / malformed)
4. Apply rate limit — in-memory Map keyed by request IP, 5 requests / 60s window. If exceeded → return 429
5. **Submit to Klaviyo**:
   - Create/update profile: `POST https://a.klaviyo.com/api/profiles/`
     ```json
     {
       "data": {
         "type": "profile",
         "attributes": { "email": "<email>" }
       }
     }
     ```
     - On 201 (new profile) → capture `data.id`
     - On 409 (already exists) → extract existing `id` from the error response's `meta.duplicate_profile_id` or `errors[0].meta`
   - Add profile to list: `POST https://a.klaviyo.com/api/lists/{KLAVIYO_LIST_ID}/relationships/profiles/`
     ```json
     {
       "data": [{ "type": "profile", "id": "<profile-id>" }]
     }
     ```
   - Headers on both requests:
     ```
     Authorization: Klaviyo-API-Key <KLAVIYO_API_KEY>
     revision: 2024-10-15
     accept: application/json
     content-type: application/json
     ```
6. On success → return 200 `{ ok: true }`
7. On Klaviyo failure → log error server-side (Vercel logs), return 500 `{ ok: false }` — the client shows the generic error state

### Error handling

- Klaviyo timeout / 5xx: log + return 500 (user sees error state; they can retry)
- Klaviyo 4xx (other than 409 for duplicate profile): log + return 500
- Duplicate email (409 on profile create): treat as success — fetch existing profile ID, add to list anyway (Klaviyo list-add is idempotent)

Rate-limit bucket is **in-memory** (simple `Map<ip, number[]>`) — fine for a waitlist with low traffic. Lives in the route module. Vercel's serverless cold starts will reset it; that's acceptable for this use case.

## Environment variables

Required in Vercel (Production + Preview):

| Var | Purpose | Example |
|---|---|---|
| `COMING_SOON_MODE` | `"true"` to enable the gate; unset or `"false"` disables it | `true` |
| `COMING_SOON_BYPASS_KEY` | Secret that unlocks preview cookie via `?preview=<key>` | long random string, e.g. 32+ chars |
| `KLAVIYO_API_KEY` | Klaviyo private API key — **create a new one**, scoped to Profiles + Lists only | `pk_xxxxxxxxxxxx` |
| `KLAVIYO_LIST_ID` | ID of the "Early Access — giftshop.co" list (created manually in Klaviyo UI) | `ABC123` |

### One-time setup steps

1. In Klaviyo UI → Lists & Segments → Create List → name it "Early Access — giftshop.co" → copy the list ID
2. In Klaviyo UI → Settings → API Keys → Create Private API Key → name it "Marketing Site — Early Access" → grant scopes `profiles:write`, `lists:write` → copy key
3. Add all four env vars in Vercel
4. Generate `COMING_SOON_BYPASS_KEY`: `openssl rand -base64 32` — share with Matt only

## File changes summary

### New files
- `middleware.ts` — Next.js middleware for the gate
- `app/coming-soon/page.tsx` — the page
- `app/coming-soon/email-capture-form.tsx` — client component for the form
- `app/coming-soon/decor.tsx` — gift asset decor layer
- `app/coming-soon/coming-soon.module.css` — page-scoped animation keyframes (idle bob, badge pulse)
- `app/api/early-access/route.ts` — POST handler
- `lib/klaviyo.ts` — Klaviyo client helper (two functions: `upsertProfile`, `addToList`)
- `docs/superpowers/specs/2026-04-22-coming-soon-page-design.md` — this spec

### Modified files
- `.gitignore` — add `.superpowers/` (brainstorm companion artifacts)

### Unmodified
- `app/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `app/support/page.tsx`, `app/layout.tsx`, `app/globals.css` — all untouched

## Accessibility

- All interactive elements use real `<button>`/`<input>` (no `<div onClick>`)
- Form has a visible label (or `aria-label` if visually hidden)
- `prefers-reduced-motion` media query disables the idle bob + badge pulse animations
- Color contrast checked: red CTA on white, grey text on gradient — both AA compliant

## Testing & verification

Before pushing to `v2`:

1. Local dev with `COMING_SOON_MODE=true`:
   - Visit `/` → see coming-soon page
   - Visit `/faq` → see coming-soon page (URL stays `/faq`)
   - Visit `/privacy` → see coming-soon page
   - Visit `/?preview=<KEY>` → cookie sets, see real homepage
   - Visit `/faq` after bypass → real FAQ page
2. Local dev with `COMING_SOON_MODE=false`:
   - All pages work normally, no gate
3. Form submission:
   - Valid email → success state, profile appears in Klaviyo list
   - Invalid email → client-side validation blocks
   - Duplicate email → still shows success (no error to user)
   - Fill honeypot → silent success, nothing hits Klaviyo
   - Hammer endpoint 6 times in 60s → 6th returns 429
4. Mobile viewport: layout stacks correctly, no horizontal scroll

## Deployment plan

1. Implement on branch `coming-soon-page` (already created off `v2`)
2. Manual preview deploy on Vercel: `vercel deploy` (without `--prod`) → test on the preview URL
3. Once verified, merge `coming-soon-page` → `v2`
4. Add all four env vars to Vercel production
5. `git push origin v2` → then **manual** `npx vercel deploy --prod` (auto-deploy is unreliable for this repo per existing lessons)
6. Verify on giftshop.co:
   - Main URL shows coming-soon
   - `?preview=<KEY>` unlocks real site for Matt
   - Test signup → check Klaviyo list for the email

## Rollback

If something goes wrong on production:

- **Fast**: set `COMING_SOON_MODE=false` in Vercel → redeploy → real site restored, coming-soon code still in repo for next attempt
- **Full rollback**: revert the merge commit on `v2`, push, redeploy — removes all code

## Out of scope (explicitly)

These are NOT included in v1; flag if wanted as a follow-up:

- Double opt-in / confirmation email (Klaviyo can handle this via list settings if enabled there — no app code needed)
- Custom launch-day email template (build when you're actually ready to launch)
- Social share preview images (OG image) for `/coming-soon` — current site's `opengraph-image.tsx` still applies; we can swap later
- Analytics (plausible, posthog) — not in this spec; add later if wanted
- Illustrated / photographed gift assets — start with emoji, upgrade later
- A/B testing different headlines — not warranted at waitlist volume
