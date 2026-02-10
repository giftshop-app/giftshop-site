"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const heroWords = ["revenue", "customers", "referrals", "loyalty"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [activeGiftOption, setActiveGiftOption] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [heroWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGiftOption((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1a1a1a]">Giftshop</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-lg border-[1.5px] border-[#DA1B2B] bg-white px-5 py-2.5 text-sm font-semibold text-[#DA1B2B] hover:bg-[#FEF9F9] transition-colors">
                Get a Demo
              </button>
              <button className="rounded-lg bg-[#DA1B2B] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#B81520] transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 px-6 lg:px-8 bg-white">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-[#f3f4f6] px-5 py-2.5 border border-[#e5e7eb]">
                  <img
                    src="/shopify-assets/brandmark/shopify_glyph.svg"
                    alt="Shopify"
                    className="h-5 w-5 flex-shrink-0"
                    width="20"
                    height="20"
                  />
                  <span className="text-sm font-semibold tracking-wide text-[#4b5563]">Now available for all Shopify stores</span>
                </div>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] sm:text-6xl lg:text-7xl">
                Gift better. Grow{" "}
                <span key={currentWordIndex} className="inline-block text-[#DA1B2B] animate-wordFadeInUp">
                  {heroWords[currentWordIndex]}
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[#4b5563] max-w-xl">
                Giftshop helps stores built on Shopify to increase retention, boost lifetime value, and turn their most loyal customers into advocates.
              </p>

              <div className="mt-8">
                <a
                  href="https://apps.shopify.com/giftshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#DA1B2B] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#B81520] transition-colors"
                >
                  Get started for free
                  <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-[#9ca3af]">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="h-3 w-px bg-[#e5e7eb]"></div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>easily set up in just 2 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Column - UI Mockups */}
            <div className="relative hidden lg:block h-[550px] min-h-[550px]">
              {/* Mockup 1: Gift Selection Interface */}
              <div className="absolute top-8 right-20 w-[420px] rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#e5e7eb] overflow-hidden z-10">
                <div className="p-5 border-b border-[#f3f4f6]">
                  <h3 className="text-base font-bold text-[#1a1a1a]">Select Gift</h3>
                  <p className="text-xs text-[#9ca3af] mt-1">Choose a product to send</p>
                </div>
                <div className="p-5 space-y-3">
                  {/* Inventory */}
                  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${activeGiftOption === 0 ? 'border-2 border-[#DA1B2B] bg-[#FDF4F5]' : 'border border-[#e5e7eb]'}`}>
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${activeGiftOption === 0 ? 'bg-[#DA1B2B]' : 'bg-[#f3f4f6]'}`}>
                      <svg className={`h-6 w-6 ${activeGiftOption === 0 ? 'text-white' : 'text-[#9ca3af]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#1a1a1a]">Inventory</div>
                      <div className="text-xs text-[#9ca3af]">Send from current stock</div>
                    </div>
                    {activeGiftOption === 0 && (
                      <div className="h-5 w-5 rounded-full border-2 border-[#DA1B2B] bg-[#DA1B2B] flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {/* Overstock */}
                  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${activeGiftOption === 1 ? 'border-2 border-[#DA1B2B] bg-[#FDF4F5]' : 'border border-[#e5e7eb]'}`}>
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${activeGiftOption === 1 ? 'bg-[#DA1B2B]' : 'bg-[#f3f4f6]'}`}>
                      <svg className={`h-6 w-6 ${activeGiftOption === 1 ? 'text-white' : 'text-[#9ca3af]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#1a1a1a]">Overstock</div>
                      <div className="text-xs text-[#9ca3af]">Move excess inventory</div>
                    </div>
                    {activeGiftOption === 1 && (
                      <div className="h-5 w-5 rounded-full border-2 border-[#DA1B2B] bg-[#DA1B2B] flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {/* Custom Selection */}
                  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${activeGiftOption === 2 ? 'border-2 border-[#DA1B2B] bg-[#FDF4F5]' : 'border border-[#e5e7eb]'}`}>
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${activeGiftOption === 2 ? 'bg-[#DA1B2B]' : 'bg-[#f3f4f6]'}`}>
                      <svg className={`h-6 w-6 ${activeGiftOption === 2 ? 'text-white' : 'text-[#9ca3af]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#1a1a1a]">Custom Selection</div>
                      <div className="text-xs text-[#9ca3af]">Allow customer to select colors and sizes</div>
                    </div>
                    {activeGiftOption === 2 && (
                      <div className="h-5 w-5 rounded-full border-2 border-[#DA1B2B] bg-[#DA1B2B] flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="pt-3">
                    <button className="w-full rounded-lg bg-[#DA1B2B] px-4 py-3 text-sm font-semibold text-white hover:bg-[#B81520] transition-colors">
                      Send Gift
                    </button>
                  </div>
                </div>
              </div>

              {/* Mockup 2: Analytics */}
              <div className="absolute top-[400px] right-8 w-96 rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#e5e7eb] overflow-hidden z-20">
                <div className="p-4 border-b border-[#f3f4f6]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1a1a1a]">Analytics</span>
                    <div className="text-xs text-[#9ca3af]">Past 30 days</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="text-xs font-medium text-[#9ca3af]">Repeat Purchases</span>
                      <div className="text-lg font-bold text-[#10b981]">+34%</div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#9ca3af]">New Customers</span>
                      <div className="text-lg font-bold text-[#1a1a1a]">128</div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#9ca3af]">Referral Revenue</span>
                      <div className="text-lg font-bold text-[#1a1a1a]">$4,820</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-[#4b5563]">Gifts Claimed</span>
                      <span className="text-sm font-bold text-[#1a1a1a]">89%</span>
                    </div>
                    <div className="h-2 bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div className="h-full bg-[#DA1B2B] rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section - Static Grid */}
      <section className="relative pt-20 pb-20 px-6 lg:px-8 bg-white">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#DA1B2B]"></div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#DA1B2B]">Trusted by Leading Brands</span>
              <div className="h-px w-16 bg-[#DA1B2B]"></div>
            </div>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              Join top merchants growing their business with Giftshop
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`brand-${i}`}
                className="flex flex-col h-32 items-center justify-center rounded-xl bg-white border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] hover:shadow-md transition-all"
              >
                <span className="text-base font-bold text-[#4b5563]">Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Flow Section */}
      <section className="relative bg-white pt-20 pb-24 px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] sm:text-6xl lg:text-7xl mb-6">
                Turn top customers into{" "}
                <span className="text-[#DA1B2B]">powerful advocates</span>
              </h2>
              <p className="text-xl leading-relaxed text-[#4b5563] max-w-xl mb-8">
                Send personalized gifts to your most valuable customers. They share with friends and family, creating organic growth through word-of-mouth referrals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#FDF4F5] flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Target top customers</h3>
                    <p className="text-sm text-[#4b5563]">Identify and reward your most valuable customers with personalized gifts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#FDF4F5] flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Enable sharing</h3>
                    <p className="text-sm text-[#4b5563]">Recipients easily share gifts and discounts with their network</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#FDF4F5] flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">Drive organic growth</h3>
                    <p className="text-sm text-[#4b5563]">Turn loyal customers into brand advocates who bring in new buyers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Static Visual Flow */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Your Brand Card - Top Center */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-xl bg-white border-2 border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center z-30">
                <div className="h-12 w-12 rounded-lg bg-[#DA1B2B] flex items-center justify-center mb-2">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[#1a1a1a]">Your Brand</span>
              </div>

              {/* Top Customers - 3 cards in a row */}
              <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-20">
                <div className="flex items-center justify-center gap-8">
                  {[0, 1, 2].map((i) => (
                    <div key={`top-customer-${i}`} className="w-28 h-28 rounded-xl bg-white border-2 border-[#DA1B2B] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center">
                      <div className="h-10 w-10 rounded-lg bg-[#DA1B2B] flex items-center justify-center mb-2">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-[#1a1a1a]">Top Customer</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friends & Family - Bottom row */}
              <div className="absolute bottom-8 left-0 right-0 z-10">
                <div className="flex items-center justify-center gap-4">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={`friend-${i}`} className="w-20 h-20 rounded-xl bg-white border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center">
                      <svg className="h-5 w-5 text-[#9ca3af] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-[9px] font-medium text-[#4b5563]">Friends</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Static Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 1000 600" preserveAspectRatio="none">
                {/* Lines from Brand to Top Customers */}
                <line x1="500" y1="80" x2="350" y2="225" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="500" y1="80" x2="500" y2="225" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="500" y1="80" x2="650" y2="225" stroke="#e5e7eb" strokeWidth="2" />

                {/* Lines from Top Customers to Friends */}
                <line x1="350" y1="225" x2="200" y2="450" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="350" y1="225" x2="300" y2="450" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="500" y1="225" x2="400" y2="450" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="500" y1="225" x2="600" y2="450" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="650" y1="225" x2="700" y2="450" stroke="#e5e7eb" strokeWidth="2" />
                <line x1="650" y1="225" x2="800" y2="450" stroke="#e5e7eb" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Built to help you grow customers Section */}
      <section className="bg-white pt-20 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1a1a1a] sm:text-6xl leading-tight">
              Built to help you{" "}
              <span className="underline decoration-[#DA1B2B] decoration-3 underline-offset-8 text-[#DA1B2B]">
                grow
              </span>{" "}
              customers
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#4b5563] font-medium">
              Giftshop&apos;s AI integrates quickly and seamlessly with your Shopify store to re-engage and grow your customers affordably.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Increase Customer Lifetime Value */}
            <div className="group relative rounded-xl bg-white p-8 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Increase Customer Lifetime Value</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Turn one-time buyers into loyal brand advocates through strategic gifting campaigns
              </p>
            </div>

            {/* Card 2: Boost Acquisition */}
            <div className="group relative rounded-xl bg-white p-8 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Boost Acquisition</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Leverage your existing customers to bring new buyers through personalized gift sharing
              </p>
            </div>

            {/* Card 3: Build Brand Loyalty */}
            <div className="group relative rounded-xl bg-white p-8 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Build Brand Loyalty</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Create emotional connections that keep customers coming back for more
              </p>
            </div>

            {/* Card 4: Reduce CAC */}
            <div className="group relative rounded-xl bg-white p-8 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#DA1B2B]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Reduce CAC</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Lower customer acquisition costs through organic referrals and word-of-mouth marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Giftshop Works Section */}
      <section className="relative bg-[#fafafa] pt-20 pb-24 px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1a1a1a] sm:text-6xl leading-tight">
              How Giftshop Works
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#4b5563] font-medium">
              Get started with strategic gifting in just 4 simple steps. No technical expertise required.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 01: Choose Recipients - Neutral */}
            <div className="group relative overflow-hidden rounded-xl bg-[#f3f4f6] p-8 border border-[#4b5563]/20 hover:border-[#4b5563]/40 transition-all">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b5563] text-base font-black text-white">
                01
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-xl bg-white border-2 border-[#4b5563]">
                <svg className="h-10 w-10 text-[#4b5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Choose Recipients</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Select your most valuable customers from your store
              </p>
            </div>

            {/* Step 02: Select Gifts - Red */}
            <div className="group relative overflow-hidden rounded-xl bg-[#FDF4F5] p-8 border border-[#DA1B2B]/20 hover:border-[#DA1B2B]/40 transition-all">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#DA1B2B] text-base font-black text-white">
                02
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-xl bg-white border-2 border-[#DA1B2B]">
                <svg className="h-10 w-10 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Select Gifts</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Choose products, collections, or gift cards to send
              </p>
            </div>

            {/* Step 03: Enable Sharing - Gold */}
            <div className="group relative overflow-hidden rounded-xl bg-[#fef5e7] p-8 border border-[#d4a574]/20 hover:border-[#d4a574]/40 transition-all">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4a574] text-base font-black text-white">
                03
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-xl bg-white border-2 border-[#d4a574]">
                <svg className="h-10 w-10 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Enable Sharing</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Allow recipients to share gifts with friends and family
              </p>
            </div>

            {/* Step 04: Track & Scale - Green */}
            <div className="group relative overflow-hidden rounded-xl bg-[#d1fae5] p-8 border border-[#10b981]/20 hover:border-[#10b981]/40 transition-all">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#10b981] text-base font-black text-white">
                04
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-xl bg-white border-2 border-[#10b981]">
                <svg className="h-10 w-10 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]">Track & Scale</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Monitor performance and scale successful campaigns
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-3 rounded-lg bg-[#DA1B2B] px-10 py-5 text-lg font-bold text-white hover:bg-[#B81520] transition-colors">
              Start Your Journey
              <svg className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white pt-20 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1a1a1a] sm:text-6xl leading-tight">
              Loved by Merchants Worldwide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#4b5563] font-medium">
              See how leading Shopify brands are using Giftshop to drive growth and build loyalty.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="group relative rounded-xl bg-white p-10 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-[#1a1a1a] mt-6">
                &ldquo;Giftshop helped us increase our customer lifetime value by 40% within the first quarter. The gift sharing feature is genius.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-[#f3f4f6]">
                <div className="font-bold text-lg text-[#1a1a1a]">Sarah Chen</div>
                <div className="text-sm text-[#4b5563] mt-1">Growth Marketing Manager</div>
                <div className="mt-2 text-sm font-semibold text-[#DA1B2B]">Premium Athleisure Brand</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative rounded-xl bg-white p-10 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-[#1a1a1a] mt-6">
                &ldquo;We saw a 25% reduction in customer acquisition costs after implementing Giftshop&apos;s referral gifting campaigns.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-[#f3f4f6]">
                <div className="font-bold text-lg text-[#1a1a1a]">Michael Rodriguez</div>
                <div className="text-sm text-[#4b5563] mt-1">E-commerce Director</div>
                <div className="mt-2 text-sm font-semibold text-[#DA1B2B]">Sustainable Fashion Brand</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative rounded-xl bg-white p-10 border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-[#DA1B2B] transition-all">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-[#1a1a1a] mt-6">
                &ldquo;The ROI on our gift campaigns has been incredible. Customers love receiving personalized gifts, and we love the organic growth.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-[#f3f4f6]">
                <div className="font-bold text-lg text-[#1a1a1a]">Emily Thompson</div>
                <div className="text-sm text-[#4b5563] mt-1">Brand Manager</div>
                <div className="mt-2 text-sm font-semibold text-[#DA1B2B]">Beauty & Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fafafa] pt-20 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1a1a1a] sm:text-6xl leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#4b5563] font-medium">
              Everything you need to know about Giftshop for Shopify
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="group rounded-xl bg-white p-8 border border-[#e5e7eb] hover:border-[#DA1B2B] transition-all">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DA1B2B]">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    How does Giftshop integrate with my Shopify store?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    Giftshop seamlessly integrates with your existing Shopify store through our native app. Installation takes less than 2 minutes, and all your products, customers, and orders sync automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group rounded-xl bg-white p-8 border border-[#e5e7eb] hover:border-[#DA1B2B] transition-all">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DA1B2B]">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    What types of gifts can I send?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    You can send any products from your store, curated collections, gift cards, or even custom experiences. The platform is flexible to support any gifting strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group rounded-xl bg-white p-8 border border-[#e5e7eb] hover:border-[#DA1B2B] transition-all">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DA1B2B]">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    How do recipients share gifts with friends?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    Recipients receive a beautiful, branded gift experience with easy sharing options. They can share via social media, messaging, or email with customizable limits you set.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group rounded-xl bg-white p-8 border border-[#e5e7eb] hover:border-[#DA1B2B] transition-all">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DA1B2B]">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    Can I track the performance of my gift campaigns?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    Yes! Our comprehensive analytics dashboard shows you conversion rates, sharing metrics, customer acquisition costs, and ROI for each campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Light Background */}
      <section className="relative bg-[#FDF4F5] px-6 py-32 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold text-[#1a1a1a] sm:text-6xl leading-tight">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#4b5563] font-medium">
            Join thousands of Shopify merchants who are already seeing incredible results with strategic gifting.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <button className="group flex items-center gap-3 rounded-lg bg-[#DA1B2B] px-10 py-5 text-lg font-bold text-white hover:bg-[#B81520] transition-colors">
              Get Started for Free
              <svg className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="rounded-lg border-[1.5px] border-[#DA1B2B] bg-transparent px-10 py-5 text-lg font-bold text-[#DA1B2B] hover:bg-[#FEF9F9] transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-base text-[#4b5563]">
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">14-day free trial</span>
            </div>
            <div className="h-5 w-px bg-[#e5e7eb]"></div>
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">No setup fees</span>
            </div>
            <div className="h-5 w-px bg-[#e5e7eb]"></div>
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#DA1B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Light */}
      <footer className="bg-white border-t border-[#e5e7eb] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Column 1: Giftshop */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DA1B2B]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-[#1a1a1a]">Giftshop</span>
              </div>
              <p className="text-base leading-7 text-[#4b5563] mb-6">
                The premier gifting platform for Shopify merchants. Built to drive growth, loyalty, and customer lifetime value.
              </p>

              {/* Newsletter Signup */}
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Sign up to our newsletter</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 focus-within:border-[#DA1B2B] focus-within:ring-1 focus-within:ring-[#DA1B2B]">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full text-sm text-[#1a1a1a] placeholder-[#9ca3af] outline-none bg-transparent"
                    />
                  </div>
                  <button className="rounded-lg bg-[#DA1B2B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#B81520] transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Features</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Integration</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">API</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">About</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Careers</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Contact</a></li>
                <li><a href="#" className="text-base leading-7 text-[#4b5563] hover:text-[#DA1B2B] transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-lg bg-[#DA1B2B] text-white hover:bg-[#B81520] transition-colors">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
}
