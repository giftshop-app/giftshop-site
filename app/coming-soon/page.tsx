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
      <header className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 flex items-center gap-2.5">
        <div className="h-7 w-7 rounded-md bg-[#DA1B2B]" aria-hidden="true" />
        <span className="text-lg font-extrabold tracking-tight text-[#1a1a1a]">
          Giftshop
        </span>
      </header>

      <Decor />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
        <div className="w-full max-w-[520px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e7eb] px-3.5 py-1.5">
            <span
              aria-hidden="true"
              className={`inline-block h-2 w-2 rounded-full bg-[#DA1B2B] ${styles.badgeDot}`}
            />
            <span className="text-[11px] font-semibold tracking-[0.14em] text-[#4b5563]">
              COMING SOON
            </span>
          </div>

          <h1
            className={`${styles.headlineEnter} text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.02em] text-[#1a1a1a]`}
          >
            Great gifts,{" "}
            <span className="italic text-[#DA1B2B]">growing stores.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4b5563] max-w-[440px] mx-auto">
            Strategic gifting for Shopify merchants is almost here. Join the early access list.
          </p>

          <div className="mt-8 max-w-[420px] mx-auto">
            <EmailCaptureForm />
          </div>
        </div>
      </main>

      <footer className="absolute bottom-5 left-0 right-0 text-center z-10">
        <p className="text-xs text-[#9ca3af]">© 2026 Giftshop</p>
      </footer>
    </div>
  );
}
