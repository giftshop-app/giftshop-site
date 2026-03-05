import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - Giftshop",
  description:
    "Get help with Giftshop. Contact our support team, browse FAQs, or learn how to get started.",
};

const supportChannels = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Support",
    description: "Send us a message and we'll get back to you within 24 hours.",
    action: "support@giftshop.co",
    href: "mailto:support@giftshop.co",
    cta: "Send email",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "FAQ",
    description: "Browse answers to common questions from merchants and gift recipients.",
    action: "Browse FAQ",
    href: "/faq",
    cta: "View FAQ",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Privacy & Data",
    description: "Questions about your data? Read our privacy policy or request data deletion.",
    action: "privacy@giftshop.co",
    href: "/privacy",
    cta: "Privacy policy",
  },
];

const commonTopics = [
  {
    title: "For Merchants",
    items: [
      {
        q: "How do I install Giftshop?",
        a: "Search for \"Giftshop\" in the Shopify App Store and click Install. You'll be guided through granting the required permissions.",
      },
      {
        q: "How do I send a gift to a customer?",
        a: "Open Giftshop from your Shopify admin, search for a customer, select a product, and send. The customer receives an email with a link to claim their gift.",
      },
      {
        q: "Can I set up automated gifts?",
        a: "Yes. Giftshop supports automated gifting for new customers, win-back campaigns, and more. Set these up in the Automations tab.",
      },
      {
        q: "What happens when I uninstall?",
        a: "All your data (sessions, gift records, customer data, settings) is deleted or anonymised within 48 hours per Shopify's GDPR requirements.",
      },
    ],
  },
  {
    title: "For Gift Recipients",
    items: [
      {
        q: "I received a gift email. Is it legitimate?",
        a: "Yes. Giftshop gift emails are sent on behalf of real stores. The email will include the store's name and branding. If you're unsure, contact the store directly.",
      },
      {
        q: "How do I claim my gift?",
        a: "Click the claim link in your gift email. You'll enter your shipping address and select any options (like size or colour), then your gift ships for free.",
      },
      {
        q: "Can I request deletion of my data?",
        a: "Yes. Email privacy@giftshop.co with your request and we'll process it within 30 days.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1a1a1a]">
                Giftshop
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-[#4b5563] transition-colors hover:text-[#DA1B2B]"
              >
                Home
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-[#4b5563] transition-colors hover:text-[#DA1B2B]"
              >
                FAQ
              </Link>
              <a
                href="https://apps.shopify.com/giftshop"
                className="rounded-lg bg-[#DA1B2B] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#B81520]"
              >
                Install App
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#e5e7eb] bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEF9F9] px-4 py-1.5 text-sm font-semibold text-[#DA1B2B]">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Support
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            How can we help?
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4b5563]">
            Whether you&apos;re a merchant using Giftshop or a customer who
            received a gift, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {supportChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                className="group rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:border-[#DA1B2B] hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEF9F9] text-[#DA1B2B] transition-colors group-hover:bg-[#DA1B2B] group-hover:text-white">
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  {channel.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                  {channel.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#DA1B2B] transition-colors group-hover:text-[#B81520]">
                  {channel.cta} &rarr;
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Common Topics */}
      <section className="border-t border-[#e5e7eb] bg-[#f9fafb] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#1a1a1a]">
            Common Questions
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            {commonTopics.map((topic) => (
              <div key={topic.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#DA1B2B]">
                  {topic.title}
                </h3>
                <div className="space-y-4">
                  {topic.items.map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-[#e5e7eb] bg-white px-5 py-4"
                    >
                      <h4 className="text-sm font-semibold text-[#1a1a1a]">
                        {item.q}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#DA1B2B] transition-colors hover:text-[#B81520]"
            >
              View all frequently asked questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DA1B2B]">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#1a1a1a]">Giftshop</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-[#4b5563]">
            <Link
              href="/faq"
              className="transition-colors hover:text-[#DA1B2B]"
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className="font-semibold text-[#DA1B2B]"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#DA1B2B]"
            >
              Privacy
            </Link>
          </div>
          <p className="text-sm text-[#9ca3af]">
            &copy; {new Date().getFullYear()} Giftshop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
