import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
