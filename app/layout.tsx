import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://giftshop.co"),
  title: "GiftShop. Coming soon.",
  description: "Win new customers. Reward the ones you have. Built for Shopify merchants.",
  openGraph: {
    title: "GiftShop. Coming soon.",
    description: "Win new customers. Reward the ones you have. Built for Shopify merchants.",
    siteName: "GiftShop",
    type: "website",
    url: "https://giftshop.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "GiftShop. Coming soon.",
    description: "Win new customers. Reward the ones you have. Built for Shopify merchants.",
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
