import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Giftshop",
  description:
    "How Giftshop collects, uses, and protects your data. Our privacy policy covers both merchants and gift recipients.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `Giftshop ("we", "us", "our") operates as a Shopify application that enables merchants to send physical gifts to their customers. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data. This policy applies to two groups of people: merchants who install and use the Giftshop app, and gift recipients who receive and claim gifts through our platform.`,
  },
  {
    id: "data-we-collect",
    title: "Data We Collect",
    subsections: [
      {
        subtitle: "From Merchants (via Shopify)",
        items: [
          "Shop domain and store name",
          "Contact email address",
          "Customer names and email addresses (read access via Shopify API)",
          "Order history and purchase data (read access via Shopify API)",
          "Product catalog information (titles, prices, images, variants)",
          "Brand logo (if uploaded by the merchant)",
        ],
      },
      {
        subtitle: "From Gift Recipients (during claim)",
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Shipping address (street, city, state/province, postal code, country)",
          "Product variant selections (e.g. size, colour)",
          "Shipping method preference",
          "Consent preference (whether you opt in to Giftshop data retention)",
        ],
      },
    ],
  },
  {
    id: "how-we-use-data",
    title: "How We Use Your Data",
    content: `We use the data we collect for the following purposes:`,
    items: [
      "Gift fulfilment — creating and completing orders in Shopify when a recipient claims a gift",
      "Gift notifications — sending branded emails to recipients on behalf of the merchant",
      "Recipient identification — pre-filling claim forms for returning recipients to streamline the experience",
      "Merchant analytics — providing merchants with insights on gift claim rates, customer engagement, and gifting performance",
      "Automation — triggering automated gifts based on customer behaviour (e.g. new customer welcome gifts, win-back campaigns)",
      "Brand customisation — displaying the merchant's logo in emails and claim pages",
      "Platform improvement — understanding usage patterns to improve the Giftshop product",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    content: `We process data under two separate legal bases:`,
    subsections: [
      {
        subtitle: "Merchant Data",
        text: "We process merchant and their customer data under the terms of the Shopify API License and Terms of Use. Merchants authorise Giftshop to access their store data when they install the app and grant API permissions.",
      },
      {
        subtitle: "Recipient Data (Giftshop Consent)",
        text: `When a gift recipient claims a gift, they are presented with an optional consent checkbox. If a recipient opts in, Giftshop retains their information (name, email, shipping address) to pre-fill future claim forms and improve the gifting experience. This consent is separate from the merchant's authorisation — it is a direct relationship between Giftshop and the recipient. Recipients who do not opt in will have their data used only for the immediate gift fulfilment and not retained by Giftshop beyond what is necessary to complete the transaction.`,
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain data according to the following policies:`,
    items: [
      "Merchant session data — deleted immediately when the app is uninstalled",
      "Gift records and customer data — retained while the merchant's app is active; deleted or anonymised within 48 hours of app uninstallation (per Shopify's mandatory shop redaction process)",
      "Consented recipient data — if a recipient opted in to Giftshop data retention, their profile is anonymised (not deleted) when the originating merchant uninstalls, preserving the recipient's cross-merchant gift history",
      "Non-consented recipient data — fully deleted when the originating merchant uninstalls or when a GDPR deletion request is received",
    ],
  },
  {
    id: "data-sharing",
    title: "Third-Party Services",
    content: `We use the following third-party services to operate Giftshop. We do not sell or share your data with any other parties.`,
    subsections: [
      {
        subtitle: "Shopify",
        text: "Our platform. All merchant and customer data is accessed through Shopify's authenticated API. Shopify's own privacy policy governs how they handle your data.",
      },
      {
        subtitle: "Amazon Web Services (AWS)",
        text: "We use AWS for hosting (App Runner), database (RDS PostgreSQL), and file storage (S3 for brand logos). All data is encrypted in transit and at rest. Infrastructure is located in the US East region.",
      },
      {
        subtitle: "SendGrid (Twilio)",
        text: "We use SendGrid to deliver gift notification emails on behalf of merchants. SendGrid processes recipient email addresses solely for email delivery.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `You have the following rights regarding your data:`,
    subsections: [
      {
        subtitle: "For Merchants",
        text: "You can uninstall the Giftshop app at any time through your Shopify admin. Upon uninstallation, all your store data, customer data, gift records, and settings will be deleted or anonymised within 48 hours per Shopify's GDPR requirements.",
      },
      {
        subtitle: "For Gift Recipients",
        text: `You can request access to or deletion of your data at any time by contacting us at privacy@giftshop.co. If you opted in to Giftshop data retention during a gift claim, you can withdraw that consent at any time. We will respond to all data requests within 30 days. You can also exercise your rights through the store that sent you the gift — Shopify provides mechanisms for customers to request their data or its deletion, and those requests are forwarded to us automatically.`,
      },
    ],
    items: [
      "Right to access — request a copy of the data we hold about you",
      "Right to rectification — request correction of inaccurate data",
      "Right to erasure — request deletion of your data",
      "Right to withdraw consent — withdraw your Giftshop data retention consent at any time",
      "Right to data portability — request your data in a machine-readable format",
    ],
  },
  {
    id: "gdpr-compliance",
    title: "GDPR Compliance",
    content: `Giftshop fully implements Shopify's mandatory GDPR webhooks:`,
    items: [
      "Customer Data Request — when a customer requests their data, we compile and return all gift records and profile information associated with their email address",
      "Customer Redaction — when a customer requests deletion, we anonymise or delete their data based on their consent status",
      "Shop Redaction — when a merchant uninstalls and the 48-hour grace period expires, we delete all shop-related data, sessions, and settings",
    ],
  },
  {
    id: "security",
    title: "Security",
    content: `We take the security of your data seriously. All data is encrypted in transit using TLS/SSL and at rest using AES-256 encryption. Access to production systems is restricted and authenticated. We follow the principle of least privilege for API access — Giftshop only requests the Shopify API scopes it needs to function.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `The Giftshop merchant app runs embedded within Shopify's admin panel and uses Shopify's session token authentication — it does not set any third-party cookies. The consumer-facing gift claim pages do not use cookies or tracking scripts.`,
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: `Giftshop is not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. If we make material changes, we will notify merchants through the Giftshop app and update the "Last updated" date below. Continued use of the service after changes constitutes acceptance of the revised policy.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or want to exercise your data rights, contact us at:`,
    items: [
      "Email: privacy@giftshop.co",
      "General support: support@giftshop.co",
    ],
  },
];

export default function PrivacyPage() {
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4b5563]">
            How Giftshop collects, uses, and protects your data — whether
            you&apos;re a merchant using our app or a customer who received a
            gift.
          </p>
          <p className="mt-3 text-sm text-[#9ca3af]">
            Last updated: March 5, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  Sections
                </p>
                <nav className="space-y-0.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#4b5563] transition-colors hover:bg-[#FEF9F9] hover:text-[#DA1B2B]"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d1d5db] transition-colors group-hover:bg-[#DA1B2B]" />
                      {section.title}
                    </a>
                  ))}
                </nav>

                {/* Contact card */}
                <div className="mt-10 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    Questions about privacy?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4b5563]">
                    We&apos;re happy to help.
                  </p>
                  <a
                    href="mailto:privacy@giftshop.co"
                    className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#DA1B2B] transition-colors hover:text-[#B81520]"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    privacy@giftshop.co
                  </a>
                </div>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#DA1B2B]">
                    {section.title}
                  </h2>
                  <div className="mt-4 rounded-xl border border-[#e5e7eb] bg-white px-6 py-6">
                    {section.content && (
                      <p className="text-base leading-7 text-[#4b5563]">
                        {section.content}
                      </p>
                    )}

                    {section.subsections && (
                      <div
                        className={`space-y-6 ${section.content ? "mt-6" : ""}`}
                      >
                        {section.subsections.map((sub) => (
                          <div key={sub.subtitle}>
                            <h3 className="text-sm font-semibold text-[#1a1a1a]">
                              {sub.subtitle}
                            </h3>
                            {"text" in sub && sub.text && (
                              <p className="mt-2 text-base leading-7 text-[#4b5563]">
                                {sub.text}
                              </p>
                            )}
                            {"items" in sub && sub.items && (
                              <ul className="mt-2 space-y-2">
                                {sub.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-3 text-base leading-7 text-[#4b5563]"
                                  >
                                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#DA1B2B]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.items && !section.subsections && (
                      <ul
                        className={`space-y-2 ${section.content ? "mt-4" : ""}`}
                      >
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base leading-7 text-[#4b5563]"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#DA1B2B]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Special case: Your Rights has both subsections AND items */}
                    {section.items && section.subsections && (
                      <ul className="mt-6 space-y-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base leading-7 text-[#4b5563]"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#DA1B2B]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

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
            <a
              href="mailto:support@giftshop.co"
              className="transition-colors hover:text-[#DA1B2B]"
            >
              Support
            </a>
            <Link
              href="/privacy"
              className="font-semibold text-[#DA1B2B]"
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
