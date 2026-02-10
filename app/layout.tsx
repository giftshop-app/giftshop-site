import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://giftshop.co"),
  title: "Giftshop - The Perfect Gift Solution",
  description: "Giftshop helps Shopify stores increase retention, boost lifetime value, and turn loyal customers into advocates through strategic gifting.",
  openGraph: {
    title: "Giftshop - The Perfect Gift Solution",
    description: "Giftshop helps Shopify stores increase retention, boost lifetime value, and turn loyal customers into advocates through strategic gifting.",
    siteName: "Giftshop",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
