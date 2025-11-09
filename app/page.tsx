"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const words = ["grow", "scale", "retain", "delight", "engage", "convert"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <button className="rounded-xl border-2 border-rose-500/30 bg-white px-5 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 hover:border-rose-500 transition-all">
                Get a Demo
              </button>
              <button className="rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Stripe-inspired with mockups */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 px-6 lg:px-8 overflow-hidden bg-white">
        {/* Subtle Background Gradient - Stripe style */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.05),transparent_70%)]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Content - Two Column Layout */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Banner - Minimal Stripe style */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 border border-gray-200/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Now available for all Shopify stores</span>
                </div>
              </div>

              {/* Main Headline - Stripe typography style */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl">
                Gift better.{" "}
                <span className="text-rose-600">Grow faster.</span>
              </h1>

              {/* Subheadline - Stripe style */}
              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
                Giftshop helps leading Shopify merchants drive growth and build loyalty by retaining top customers, and turning them into powerful ambassadors.
              </p>

              {/* CTA Input - Stripe style */}
              <div className="mt-8 flex items-center gap-3 max-w-md">
                <div className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3.5 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full text-base text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="group flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all whitespace-nowrap">
                  Start now
                  <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Feature Points - Minimal Stripe style */}
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="h-3 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Setup in 2 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Column - UI Mockups */}
            <div className="relative hidden lg:block h-[550px] min-h-[550px] flex items-center">
              {/* Mockup 1: Gift Selection Interface (Top) */}
              <div className="absolute top-8 right-12 w-[420px] rounded-xl bg-white shadow-2xl border border-gray-200/50 overflow-hidden transform rotate-[1deg] z-10">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-base font-bold text-gray-900">Select Gift</h3>
                  <p className="text-xs text-gray-500 mt-1">Choose a product to send</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-rose-500 bg-rose-50">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Premium Gift Card</div>
                      <div className="text-xs text-gray-500">$50 value</div>
                    </div>
                    <div className="h-5 w-5 rounded-full border-2 border-rose-500 bg-rose-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300">
                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Product Collection</div>
                      <div className="text-xs text-gray-500">Select from catalog</div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <button className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
                      Send Gift
                    </button>
                  </div>
                </div>
              </div>

              {/* Mockup 2: Campaign Dashboard (Bottom - Nested) */}
              <div className="absolute top-[358px] right-0 w-96 rounded-xl bg-white shadow-2xl border border-gray-200/50 overflow-hidden transform rotate-[-2deg] z-20">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                      <span className="text-sm font-semibold text-gray-900">Active Campaigns</span>
                    </div>
                    <div className="text-xs text-gray-500">Today</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-600">Gifts Sent</span>
                      <span className="text-sm font-bold text-gray-900">1,247</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-600">Referrals Generated</span>
                      <span className="text-sm font-bold text-gray-900">+42.3%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Revenue Impact</span>
                      <span className="text-sm font-bold text-rose-600">$28,492</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section - Asymmetric Layout */}
      <section className="relative pt-12 pb-20 px-6 lg:px-8 overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] [background-size:24px_24px]"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-32 w-80 h-80 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
          <div className="absolute bottom-20 left-32 w-80 h-80 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Headline - More Unique */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">Trusted by Leading Brands</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
          </div>

          {/* Brand Logos Grid - Staggered Layout */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group flex h-28 items-center justify-center rounded-2xl bg-white border-2 border-gray-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="px-4 text-center">
                  <span className="text-sm font-bold text-gray-700 group-hover:text-rose-600 transition-colors">Brand {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to help you grow customers Section - Asymmetric Design */}
      <section className="bg-white py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
              Built to help you{" "}
              <span className="relative inline-block text-rose-600">
                <span className="underline decoration-rose-600 decoration-3 underline-offset-8">
                  {words[currentWordIndex]}
                </span>
              </span>{" "}
              customers
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 font-medium">
              Giftshop&apos;s AI integrates quickly and seamlessly with your Shopify store to re-engage and grow your customers affordably.
            </p>
          </div>

          {/* Feature Cards Grid - Staggered Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Increase Customer Lifetime Value */}
            <div className="group relative rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Increase Customer Lifetime Value</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Turn one-time buyers into loyal brand advocates through strategic gifting campaigns
              </p>
            </div>

            {/* Card 2: Boost Acquisition */}
            <div className="group relative rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-300 hover:-translate-y-2 sm:mt-8">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Boost Acquisition</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Leverage your existing customers to bring new buyers through personalized gift sharing
              </p>
            </div>

            {/* Card 3: Build Brand Loyalty */}
            <div className="group relative rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-300 hover:-translate-y-2 lg:mt-16">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Build Brand Loyalty</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Create emotional connections that keep customers coming back for more
              </p>
            </div>

            {/* Card 4: Reduce CAC */}
            <div className="group relative rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-300 hover:-translate-y-2 sm:mt-8 lg:mt-24">
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Reduce CAC</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Lower customer acquisition costs through organic referrals and word-of-mouth marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Giftshop Works Section - More Dynamic */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05))] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
              How Giftshop Works
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 font-medium">
              Get started with strategic gifting in just 4 simple steps. No technical expertise required.
            </p>
          </div>

          {/* Steps Grid - More Dynamic Layout */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 01: Choose Recipients */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 border-2 border-blue-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-base font-black text-white shadow-lg group-hover:scale-110 transition-transform">
                01
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border-3 border-blue-500 shadow-md group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Choose Recipients</h3>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Select your most valuable customers from your store
              </p>
            </div>

            {/* Step 02: Select Gifts */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 border-2 border-purple-200/50 hover:border-purple-300 hover:shadow-xl transition-all duration-300 sm:mt-12">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-base font-black text-white shadow-lg group-hover:scale-110 transition-transform">
                02
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border-3 border-purple-500 shadow-md group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Select Gifts</h3>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Choose products, collections, or gift cards to send
              </p>
            </div>

            {/* Step 03: Enable Sharing */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-rose-100/50 p-8 border-2 border-rose-200/50 hover:border-rose-300 hover:shadow-xl transition-all duration-300 lg:mt-8">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-base font-black text-white shadow-lg group-hover:scale-110 transition-transform">
                03
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border-3 border-rose-500 shadow-md group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Enable Sharing</h3>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Allow recipients to share gifts with friends and family
              </p>
            </div>

            {/* Step 04: Track & Scale */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 border-2 border-orange-200/50 hover:border-orange-300 hover:shadow-xl transition-all duration-300 sm:mt-12 lg:mt-20">
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-base font-black text-white shadow-lg group-hover:scale-110 transition-transform">
                04
              </div>
              <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white border-3 border-orange-500 shadow-md group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Track & Scale</h3>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Monitor performance and scale successful campaigns
              </p>
            </div>
          </div>

          {/* CTA Button - More Unique */}
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/40 transition-all hover:scale-105">
              Start Your Journey
              <svg className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - More Unique Layout */}
      <section className="bg-white py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
              Loved by Merchants Worldwide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 font-medium">
              See how leading Shopify brands are using Giftshop to drive growth and build loyalty.
            </p>
          </div>

          {/* Testimonials Grid - Staggered */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="group relative rounded-3xl bg-white p-10 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-gray-900 mt-6">
                &ldquo;Giftshop helped us increase our customer lifetime value by 40% within the first quarter. The gift sharing feature is genius.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="font-bold text-lg text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-600 mt-1">Growth Marketing Manager</div>
                <div className="mt-2 text-sm font-semibold text-rose-600">Premium Athleisure Brand</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative rounded-3xl bg-white p-10 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/20 transition-all duration-300 hover:-translate-y-2 lg:mt-12">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-gray-900 mt-6">
                &ldquo;We saw a 25% reduction in customer acquisition costs after implementing Giftshop&apos;s referral gifting campaigns.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="font-bold text-lg text-gray-900">Michael Rodriguez</div>
                <div className="text-sm text-gray-600 mt-1">E-commerce Director</div>
                <div className="mt-2 text-sm font-semibold text-rose-600">Sustainable Fashion Brand</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative rounded-3xl bg-white p-10 border-2 border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/20 transition-all duration-300 hover:-translate-y-2 lg:mt-24">
              <div className="absolute -top-4 left-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-tight text-gray-900 mt-6">
                &ldquo;The ROI on our gift campaigns has been incredible. Customers love receiving personalized gifts, and we love the organic growth.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="font-bold text-lg text-gray-900">Emily Thompson</div>
                <div className="text-sm text-gray-600 mt-1">Brand Manager</div>
                <div className="mt-2 text-sm font-semibold text-rose-600">Beauty & Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - More Unique Design */}
      <section className="bg-gray-50 py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 font-medium">
              Everything you need to know about Giftshop for Shopify
            </p>
          </div>

          {/* FAQ Items - More Unique Styling */}
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="group rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    How does Giftshop integrate with my Shopify store?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Giftshop seamlessly integrates with your existing Shopify store through our native app. Installation takes less than 2 minutes, and all your products, customers, and orders sync automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    What types of gifts can I send?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    You can send any products from your store, curated collections, gift cards, or even custom experiences. The platform is flexible to support any gifting strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    How do recipients share gifts with friends?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Recipients receive a beautiful, branded gift experience with easy sharing options. They can share via social media, messaging, or email with customizable limits you set.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group rounded-3xl bg-white p-8 border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    Can I track the performance of my gift campaigns?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Yes! Our comprehensive analytics dashboard shows you conversion rates, sharing metrics, customer acquisition costs, and ROI for each campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - More Dynamic */}
      <section className="relative bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 px-6 py-32 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255)_1px,transparent_0)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold text-white sm:text-6xl leading-tight drop-shadow-lg">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-rose-50 font-medium">
            Join thousands of Shopify merchants who are already seeing incredible results with strategic gifting.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <button className="group flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-rose-600 shadow-2xl hover:bg-rose-50 transition-all hover:scale-105">
              Get Started for Free
              <svg className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="rounded-2xl border-3 border-white bg-transparent px-10 py-5 text-lg font-bold text-white hover:bg-white/10 transition-all">
              Schedule Demo
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-base text-rose-50">
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">14-day free trial</span>
            </div>
            <div className="h-5 w-px bg-rose-400/50"></div>
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">No setup fees</span>
            </div>
            <div className="h-5 w-px bg-rose-400/50"></div>
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - More Refined */}
      <footer className="bg-gray-950 px-6 py-20 lg:px-8">
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
              <p className="text-base leading-7 text-gray-400">
                The premier gifting platform for Shopify merchants. Built to drive growth, loyalty, and customer lifetime value.
              </p>
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

      {/* Scroll Indicator - Fixed at bottom of viewport */}
      <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-300"
        style={{
          opacity: Math.max(0, 1 - scrollY / 200),
          pointerEvents: scrollY > 200 ? "none" : "auto",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-sm font-semibold">Scroll to explore</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Help Button (Bottom Right) */}
      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-2xl hover:bg-gray-800 hover:scale-110 transition-all">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
}
