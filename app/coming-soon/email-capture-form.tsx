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

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
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
          className="flex-1 h-14 sm:h-12 rounded-xl border-2 border-[#e5e7eb] bg-white px-5 text-base text-[#1a1a1a] placeholder:text-[#9ca3af] outline-none focus:border-[#DA1B2B] focus:ring-2 focus:ring-[#DA1B2B]/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={disabled}
          className="h-14 sm:h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#DA1B2B] px-6 text-base font-semibold text-white hover:bg-[#B81520] transition-colors disabled:opacity-70"
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
