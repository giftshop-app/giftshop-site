"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const merchantFAQs: Record<string, { q: string; a: string }[]> = {
  "Getting Started": [
    {
      q: "What is GiftShop?",
      a: "GiftShop is a Shopify app that lets merchants send real, physical gifts to their customers — directly from their store's product catalog. It's built to help you retain customers, win back lapsed buyers, and turn your best customers into loyal advocates. You send the gift; GiftShop handles the secure delivery link, claim flow, and fulfillment.",
    },
    {
      q: "How do I install GiftShop?",
      a: "Search for 'GiftShop' in the Shopify App Store and click Install. GiftShop will request a small set of permissions to access your customers, orders, and products — all needed to power the gifting experience. Once installed, you'll land on your dashboard and can send your first gift in minutes.",
    },
    {
      q: "What Shopify permissions does GiftShop require?",
      a: "GiftShop requests read access to your customers, orders, and products. This allows us to surface your product catalog for gift selection, look up customer data to personalise the experience, and create draft orders for gift fulfilment. We never write to your store without your action — no orders are created until a recipient actually claims their gift.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes — GiftShop includes a 14-day free trial with no credit card required. You can send gifts, set up automations, and explore every feature during the trial period. After 14 days, you can choose a plan that fits your store.",
    },
    {
      q: "What happens if I uninstall GiftShop?",
      a: "Any pending (unclaimed) gifts will no longer be claimable once the app is uninstalled. Gifts that have already been claimed and fulfilled are unaffected. Your store's order history remains intact in Shopify. If you reinstall in the future, your gift history will be restored.",
    },
  ],
  "Sending Gifts": [
    {
      q: "How do I send a gift to a customer?",
      a: "From your GiftShop dashboard, go to Gifts → Send a Gift. Search for your customer by name or email, pick one or more products from your catalog, write an optional personal message, and hit Send. Your customer will receive a branded email with a secure link to claim their gift.",
    },
    {
      q: "Can I let the recipient choose their own products?",
      a: "Yes. When selecting products, you can mark individual items as 'recipient's choice' — meaning the recipient picks the variant (size, colour, etc.) themselves when they claim. You can also leave the entire gift open-ended, where the recipient chooses from the products you've selected. Alternatively, you can pre-select everything so it's a complete surprise.",
    },
    {
      q: "Can I add a personal message?",
      a: "Absolutely. There's a message field in the gift creation flow. Your note is displayed prominently in the claim email and on the claim page, styled in a card with the sender's name. It's a great way to make the experience feel personal rather than transactional.",
    },
    {
      q: "Can I see a customer's gift history before sending?",
      a: "Yes. When you search for a customer in the gift flow, GiftShop shows you their last gift date so you can avoid over-gifting or sending duplicates. The dashboard also surfaces customer value tiers and purchase frequency to help you decide who to gift and when.",
    },
    {
      q: "What happens after I send a gift?",
      a: "The recipient receives a branded email from your store with a secure, one-time claim link. The gift appears in your gift list as 'Pending'. Once they claim it, GiftShop converts the draft order into a real Shopify order and fulfils it through your normal workflow. You'll see the status update to 'Claimed' in your dashboard.",
    },
    {
      q: "Can I cancel a gift after sending it?",
      a: "Yes, pending gifts can be cancelled before the recipient claims them. Once a gift has been claimed and an order created in Shopify, it follows your standard order cancellation or refund process.",
    },
  ],
  "Automations": [
    {
      q: "What are automated gifts?",
      a: "Automations let GiftShop send gifts automatically based on customer behaviour — no manual work required. You set the rules once, and GiftShop triggers the right gift at the right moment: welcoming new customers, rewarding loyal ones, or winning back customers who haven't purchased in a while.",
    },
    {
      q: "What triggers are available for automations?",
      a: "GiftShop supports four automation triggers: New Customer (fires on a customer's first purchase), Nth Order (fires when a customer reaches a specific order number, e.g. their 5th order), High Spender (fires when a customer crosses a total spend threshold), and Win-Back (fires for customers who haven't purchased within a defined number of days).",
    },
    {
      q: "Can I add conditions to an automation?",
      a: "Yes. Each automation supports optional conditions — for example, only trigger for customers with a minimum order count, above a spend threshold, or with specific customer tags. This keeps your gifting targeted and cost-effective.",
    },
    {
      q: "Can I pause or archive an automation?",
      a: "Yes. Automations can be set to Active, Paused, or Archived at any time. Pausing stops new gifts from being triggered while keeping the automation's configuration intact. Archiving removes it from your active list but preserves the historical data.",
    },
  ],
  "Gift Status & Tracking": [
    {
      q: "What do the gift statuses mean?",
      a: "Pending means the gift has been sent and the recipient hasn't claimed it yet. Claimed means the recipient completed the claim form and their order has been created in Shopify. Expired means the claim window closed before the recipient acted. Cancelled means you or an automation cancelled the gift before it was claimed.",
    },
    {
      q: "How do I know when a customer claims their gift?",
      a: "Your gift list updates in real time — the status changes from Pending to Claimed and shows the claim date. You can view all your gifts and their current statuses from the Gifts page in your GiftShop dashboard.",
    },
    {
      q: "When do gifts expire?",
      a: "Gift claim links expire after a set period (configured in your settings). Once expired, the link becomes inactive and the gift is marked as Expired. If a customer tries to use an expired link, they'll see a friendly message explaining it's no longer valid and directing them to contact your store.",
    },
    {
      q: "Can I find and share a gift's claim link manually?",
      a: "Yes. In your Settings page, GiftShop lists all your gifts with their claim URLs. You can copy any link directly to your clipboard and share it via a different channel if needed — for example, if a customer missed the original email.",
    },
  ],
  "Branding & Customisation": [
    {
      q: "Can I brand the gift email with my logo?",
      a: "Yes. Upload your logo in Settings → Brand Assets and it will appear in every gift email and on the claim page. GiftShop automatically falls back to your Shopify Brand logo if none is uploaded, or displays a stylised initial letter as a last resort — so every gift always looks professional.",
    },
    {
      q: "What format and size should my logo be?",
      a: "Upload a PNG or JPG file up to 2MB. Square or circular logos work best since GiftShop displays logos in a circular format. For best results, use a logo with a transparent or white background at a minimum size of 120×120px.",
    },
    {
      q: "Can I customise the email copy or design?",
      a: "The gift email is designed to be clean and on-brand out of the box. You can personalise the message included with each gift, and your logo sets the brand tone. Full email template customisation is on our roadmap for a future release.",
    },
  ],
  "Data & Privacy": [
    {
      q: "What customer data does GiftShop access?",
      a: "GiftShop reads customer names, email addresses, order history, and product data — only what's needed to power the gifting experience. We never sell or share your customer data. All data is encrypted in transit and at rest.",
    },
    {
      q: "Is GiftShop GDPR compliant?",
      a: "Yes. GiftShop handles GDPR data requests, customer data deletion, and shop redaction through Shopify's mandatory webhook system. Recipients are also shown a consent checkbox during the claim flow before any of their data is stored in GiftShop's systems.",
    },
    {
      q: "What happens to my data if I uninstall?",
      a: "When you uninstall GiftShop, a shop redaction request is automatically triggered per Shopify's GDPR requirements. Your store and customer data is purged from GiftShop's database within 48 hours of the request.",
    },
  ],
};

const recipientFAQs: Record<string, { q: string; a: string }[]> = {
  "About Your Gift": [
    {
      q: "Why did I receive this email?",
      a: "A store you've shopped with is using GiftShop to send you a gift — as a thank-you, a welcome, or just because you're a valued customer. The store chose you specifically and covered the cost of the gift entirely. There's nothing to pay.",
    },
    {
      q: "Is this email legitimate?",
      a: "Yes. GiftShop is a real gifting platform used by Shopify stores. The email you received comes from the store that sent you the gift — the store name and logo are shown at the top. If you're ever unsure, you can contact the store directly using the contact information on their website.",
    },
    {
      q: "What is GiftShop?",
      a: "GiftShop is the platform that powers the gifting experience on behalf of the store. When a merchant wants to send a customer a gift from their store, GiftShop handles the secure claim link, the claim form, and the fulfilment. Think of us as the behind-the-scenes engine — the gift itself comes from the store you know.",
    },
    {
      q: "Do I need to pay anything?",
      a: "No. The gift is completely free to you. The store has already covered the cost of the products and shipping. You only need to provide your shipping address so we know where to send it.",
    },
    {
      q: "Do I need a GiftShop account or Shopify account to claim?",
      a: "No account needed. Claiming your gift only requires filling in a short form with your shipping details. If you've claimed a gift from any GiftShop-powered store before, your details may be pre-filled to make it even faster.",
    },
  ],
  "Claiming Your Gift": [
    {
      q: "How do I claim my gift?",
      a: "Click the 'Claim your gift' button in the email you received. You'll be taken to a secure page where you can see what's in your gift (or choose your own items if the store left that open), enter your shipping address, and confirm. That's it — your gift will be on its way.",
    },
    {
      q: "Can I choose which products I receive?",
      a: "It depends on what the store set up. Some gifts are a pre-selected surprise — you'll see what's included when you click the claim link. Others let you choose a variant (like size or colour), and some let you pick from a curated selection. The claim page will make it clear what your options are.",
    },
    {
      q: "What information do I need to provide?",
      a: "You'll need to enter your email address, name, and shipping address. You'll also select a shipping method. If you've claimed a gift from a GiftShop-powered store before, most of these fields will auto-fill based on your previous claim.",
    },
    {
      q: "How long do I have to claim my gift?",
      a: "Gift claim links expire after a period set by the store — typically a few weeks. Once expired, the link will no longer work. If your link has expired and you believe you should still be able to claim, reach out to the store that sent you the gift directly.",
    },
    {
      q: "My claim link isn't working — what do I do?",
      a: "First, check that the link hasn't expired (the email will usually indicate a deadline). If the link looks valid but still isn't loading, try opening it in a different browser or clearing your browser cache. If it still doesn't work, contact the store that sent you the gift — their details are in the email or on their website.",
    },
    {
      q: "Can a gift be claimed more than once?",
      a: "No. Each gift claim link is unique and can only be used once. This protects both you and the store from any duplicate orders or misuse.",
    },
  ],
  "After Claiming": [
    {
      q: "How will I know my gift was successfully claimed?",
      a: "After submitting the claim form, you'll see a confirmation page with your order details — including the products, your shipping address, and an order number. You'll also receive a confirmation email with everything summarised.",
    },
    {
      q: "When will my gift ship?",
      a: "Shipping times depend on the store that sent you the gift. Once your claim is processed, the store fulfils the order through their normal workflow. Check the confirmation email for any estimated timeframes, or contact the store directly if you have questions.",
    },
    {
      q: "How will I receive my tracking information?",
      a: "Tracking details are sent by the store once your order has shipped — typically via the same email address you used to claim. If you haven't received tracking after a few business days, check your spam folder or contact the store.",
    },
    {
      q: "Can I change my shipping address after claiming?",
      a: "Once a gift is claimed, the order is created immediately in the store's system. To change your address, contact the store directly as soon as possible — they can update it if the order hasn't shipped yet.",
    },
    {
      q: "I claimed my gift but didn't receive a confirmation email — what do I do?",
      a: "Check your spam or promotions folder first. If it's not there, make sure you entered the correct email address during the claim. If you're still stuck, reach out to the store that sent you the gift with your name and the approximate claim date and they'll be able to look it up.",
    },
  ],
  "Help & Support": [
    {
      q: "Who do I contact if I have an issue with my gift?",
      a: "For anything related to the products, shipping, or your order, contact the store that sent you the gift — their name and contact details are in the original email. For issues with the claim process itself (the link, the form, or the claim page), you can reach GiftShop at support@giftshop.co.",
    },
    {
      q: "What if the gift says it's already been claimed, but I didn't claim it?",
      a: "This can occasionally happen if someone else had access to your email or claim link. Contact the store directly — their details are in the original email — and they'll be able to investigate and assist you.",
    },
    {
      q: "What if I received a gift email by mistake?",
      a: "If you don't recognise the store or don't believe you should have received the gift, simply don't click the claim link. You can also reach out to the store named in the email to let them know. No action is required on your end if you choose not to claim.",
    },
  ],
};

// ─── Types ───────────────────────────────────────────────────────────────────

type Audience = "merchants" | "recipients";

// ─── Components ──────────────────────────────────────────────────────────────

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e7eb] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className={`text-base font-semibold leading-6 transition-colors ${open ? "text-[#DA1B2B]" : "text-[#1a1a1a]"}`}>
          {q}
        </span>
        <span className={`mt-0.5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg className={`h-5 w-5 transition-colors ${open ? "text-[#DA1B2B]" : "text-[#9ca3af]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-base leading-7 text-[#4b5563]">{a}</p>
      )}
    </div>
  );
}

function CategorySection({
  category,
  items,
  active,
  onClick,
}: {
  category: string;
  items: { q: string; a: string }[];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div id={category.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24">
      <div className="mb-1">
        <button
          onClick={onClick}
          className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[#FEF9F9]"
        >
          <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors ${active ? "bg-[#DA1B2B]" : "bg-[#d1d5db] group-hover:bg-[#DA1B2B]"}`} />
          <span className={`text-sm font-medium transition-colors ${active ? "text-[#DA1B2B]" : "text-[#4b5563] group-hover:text-[#DA1B2B]"}`}>
            {category}
          </span>
          <span className="ml-auto text-xs text-[#9ca3af]">{items.length}</span>
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [audience, setAudience] = useState<Audience>("merchants");
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(merchantFAQs)[0]
  );

  const faqs = audience === "merchants" ? merchantFAQs : recipientFAQs;

  const handleAudienceSwitch = (next: Audience) => {
    setAudience(next);
    setActiveCategory(
      Object.keys(next === "merchants" ? merchantFAQs : recipientFAQs)[0]
    );
  };

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById(cat.toLowerCase().replace(/\s+/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1a1a1a]">Giftshop</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-medium text-[#4b5563] hover:text-[#DA1B2B] transition-colors">
                Home
              </Link>
              <a
                href="https://apps.shopify.com/giftshop"
                className="rounded-lg bg-[#DA1B2B] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#B81520] transition-colors"
              >
                Install App
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="border-b border-[#e5e7eb] bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEF9F9] px-4 py-1.5 text-sm font-semibold text-[#DA1B2B]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Help Centre
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4b5563]">
            Everything you need to know about GiftShop — whether you're a merchant sending gifts or a customer who's received one.
          </p>

          {/* Audience toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-1">
            <button
              onClick={() => handleAudienceSwitch("merchants")}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                audience === "merchants"
                  ? "bg-white text-[#1a1a1a] shadow-sm"
                  : "text-[#6b7280] hover:text-[#1a1a1a]"
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              For Merchants
            </button>
            <button
              onClick={() => handleAudienceSwitch("recipients")}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                audience === "recipients"
                  ? "bg-white text-[#1a1a1a] shadow-sm"
                  : "text-[#6b7280] hover:text-[#1a1a1a]"
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              I Received a Gift
            </button>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <main className="flex-1 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  Categories
                </p>
                <nav className="space-y-0.5">
                  {Object.entries(faqs).map(([category, items]) => (
                    <CategorySection
                      key={category}
                      category={category}
                      items={items}
                      active={activeCategory === category}
                      onClick={() => scrollToCategory(category)}
                    />
                  ))}
                </nav>

                {/* Contact card */}
                <div className="mt-10 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
                  <p className="text-sm font-semibold text-[#1a1a1a]">Still have questions?</p>
                  <p className="mt-1 text-sm leading-6 text-[#4b5563]">
                    We're happy to help.
                  </p>
                  <a
                    href="mailto:support@giftshop.co"
                    className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#DA1B2B] hover:text-[#B81520] transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    support@giftshop.co
                  </a>
                </div>
              </div>
            </aside>

            {/* Questions */}
            <div className="space-y-14">
              {Object.entries(faqs).map(([category, items]) => (
                <section
                  key={category}
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#DA1B2B]">
                    {category}
                  </h2>
                  <div className="mt-4 divide-y divide-[#e5e7eb] rounded-xl border border-[#e5e7eb] bg-white px-6">
                    {items.map((item) => (
                      <AccordionItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── CTA Banner ── */}
      <section className="border-t border-[#e5e7eb] bg-[#FEF9F9] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Ready to start gifting?</h2>
          <p className="mt-3 text-base leading-7 text-[#4b5563]">
            Install GiftShop on your Shopify store today and send your first gift in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.shopify.com/giftshop"
              className="group flex items-center gap-2 rounded-lg bg-[#DA1B2B] px-8 py-4 text-base font-bold text-white hover:bg-[#B81520] transition-colors"
            >
              Get Started for Free
              <svg className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:support@giftshop.co"
              className="text-base font-semibold text-[#4b5563] hover:text-[#DA1B2B] transition-colors"
            >
              Contact support →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-[#e5e7eb] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DA1B2B]">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#1a1a1a]">Giftshop</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-[#4b5563]">
            <Link href="/faq" className="hover:text-[#DA1B2B] transition-colors">FAQ</Link>
            <a href="mailto:support@giftshop.co" className="hover:text-[#DA1B2B] transition-colors">Support</a>
            <a href="#" className="hover:text-[#DA1B2B] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#DA1B2B] transition-colors">Terms</a>
          </div>
          <p className="text-sm text-[#9ca3af]">© {new Date().getFullYear()} Giftshop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
