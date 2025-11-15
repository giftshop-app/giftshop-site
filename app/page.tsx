"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const headerWords = ["something", "different", "better", "new"];
  const [currentHeaderWordIndex, setCurrentHeaderWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderWordIndex((prevIndex) => (prevIndex + 1) % headerWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headerWords.length]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Giftshop</span>
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center gap-4">
              <button className="rounded-xl border-2 border-gray-300/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Secretive and Elusive */}
      <section className="relative pt-32 pb-32 sm:pt-40 sm:pb-40 px-6 lg:px-8 overflow-hidden bg-white">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.03),transparent_70%)]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Content - Centered and Minimal */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Main Headline - Mysterious */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl mb-8">
            Building{" "}
            <span className="relative inline-block text-rose-600 min-w-[200px]">
              <span
                key={currentHeaderWordIndex}
                className="inline-block animate-word-fade-in"
              >
                {headerWords[currentHeaderWordIndex]}
              </span>
            </span>
          </h1>

          {/* Subheadline - Vague and Elusive */}
          <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto opacity-80">
            A new approach to customer relationships. Coming soon.
          </p>

          {/* Minimal CTA */}
          <div className="mt-12">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all">
              Stay Updated
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer - More Refined */}
      <footer className="bg-gray-950 px-6 py-20 lg:px-8 mt-auto">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Column 1: Giftshop */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">Giftshop</span>
              </div>
              <p className="text-base leading-7 text-gray-400 mb-6">
                The premier gifting platform for Shopify merchants. Built to drive growth, loyalty, and customer lifetime value.
              </p>
              
              {/* Newsletter Signup */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Sign up to our newsletter</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-gray-600">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full text-sm text-white placeholder-gray-500 outline-none bg-transparent"
                    />
                  </div>
                  <button className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 hover:border-gray-600 transition-all whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Integration</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-base leading-7 text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
