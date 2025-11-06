export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900">Giftshop</span>
              </div>
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-rose-500 bg-white px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50">
                Homepage v2
              </button>
              <button className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Banner */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2">
              <svg className="h-4 w-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-rose-700">Now Available for Shopify Plus</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-center text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Turn{" "}
            <span className="relative inline-block text-rose-600">
              top customers
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-rose-600/30"></span>
            </span>
            {" "}into{" "}
            <span className="relative inline-block text-rose-600">
              powerful
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-rose-600/30"></span>
            </span>
            {" "}ambassadors
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 sm:text-xl">
            Giftshop helps leading Shopify merchants drive growth and build loyalty through personalized gifting and referral campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-rose-500 px-6 py-3 text-base font-semibold text-white hover:bg-rose-600">
              Get Started for Free
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50">
              Watch Demo
            </button>
          </div>

          {/* Feature Points */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-rose-500"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Headline */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
              Trusted by Leading Shopify Brands
            </h2>
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          {/* Brand Logos Grid */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-400">Brand {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for Shopify Success Section */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Designed for Shopify Success
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Purpose-built for e-commerce growth, Giftshop integrates seamlessly with your Shopify store to deliver measurable results.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Increase Customer Lifetime Value */}
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Increase Customer Lifetime Value</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Turn one-time buyers into loyal brand advocates through strategic gifting campaigns
              </p>
            </div>

            {/* Card 2: Boost Acquisition */}
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Boost Acquisition</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Leverage your existing customers to bring new buyers through personalized gift sharing
              </p>
            </div>

            {/* Card 3: Build Brand Loyalty */}
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Build Brand Loyalty</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Create emotional connections that keep customers coming back for more
              </p>
            </div>

            {/* Card 4: Reduce CAC */}
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Reduce CAC</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Lower customer acquisition costs through organic referrals and word-of-mouth marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Giftshop Works Section */}
      <section className="bg-gradient-to-b from-blue-50/30 to-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How Giftshop Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Get started with strategic gifting in just 4 simple steps. No technical expertise required.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 01: Choose Recipients */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 p-6">
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                01
              </div>
              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-blue-500">
                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Choose Recipients</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Select your most valuable customers from your store
              </p>
            </div>

            {/* Step 02: Select Gifts */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-6">
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                02
              </div>
              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-purple-500">
                <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Select Gifts</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Choose products, collections, or gift cards to send
              </p>
            </div>

            {/* Step 03: Enable Sharing */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 p-6">
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                03
              </div>
              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-rose-500">
                <svg className="h-8 w-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Enable Sharing</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Allow recipients to share gifts with friends and family
              </p>
            </div>

            {/* Step 04: Track & Scale */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 p-6">
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                04
              </div>
              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-orange-500">
                <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Track & Scale</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Monitor performance and scale successful campaigns
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 rounded-lg bg-rose-500 px-8 py-4 text-base font-semibold text-white hover:bg-rose-600">
              Start Your Journey
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Loved by Merchants Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              See how leading Shopify brands are using Giftshop to drive growth and build loyalty.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold leading-8 text-gray-900">
                &ldquo;Giftshop helped us increase our customer lifetime value by 40% within the first quarter. The gift sharing feature is genius.&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-600">Growth Marketing Manager</div>
                <div className="mt-1 text-sm font-medium text-rose-600">Premium Athleisure Brand</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold leading-8 text-gray-900">
                &ldquo;We saw a 25% reduction in customer acquisition costs after implementing Giftshop&apos;s referral gifting campaigns.&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                <div className="text-sm text-gray-600">E-commerce Director</div>
                <div className="mt-1 text-sm font-medium text-rose-600">Sustainable Fashion Brand</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold leading-8 text-gray-900">
                &ldquo;The ROI on our gift campaigns has been incredible. Customers love receiving personalized gifts, and we love the organic growth.&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">Emily Thompson</div>
                <div className="text-sm text-gray-600">Brand Manager</div>
                <div className="mt-1 text-sm font-medium text-rose-600">Beauty & Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Everything you need to know about Giftshop for Shopify
            </p>
          </div>

          {/* FAQ Items */}
          <div className="mt-16 space-y-6">
            {/* FAQ 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500">
                  <span className="text-lg font-bold text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How does Giftshop integrate with my Shopify store?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Giftshop seamlessly integrates with your existing Shopify store through our native app. Installation takes less than 2 minutes, and all your products, customers, and orders sync automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500">
                  <span className="text-lg font-bold text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What types of gifts can I send?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    You can send any products from your store, curated collections, gift cards, or even custom experiences. The platform is flexible to support any gifting strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500">
                  <span className="text-lg font-bold text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How do recipients share gifts with friends?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Recipients receive a beautiful, branded gift experience with easy sharing options. They can share via social media, messaging, or email with customizable limits you set.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500">
                  <span className="text-lg font-bold text-white">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can I track the performance of my gift campaigns?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Yes! Our comprehensive analytics dashboard shows you conversion rates, sharing metrics, customer acquisition costs, and ROI for each campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-rose-500 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">
            Join thousands of Shopify merchants who are already seeing incredible results with strategic gifting.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-rose-600 hover:bg-rose-50">
              Get Started for Free
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-rose-50">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Column 1: Giftshop */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-white">Giftshop</span>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-400">
                The premier gifting platform for Shopify merchants. Built to drive growth, loyalty, and customer lifetime value.
              </p>
            </div>

            {/* Column 2: Product */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Integration</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Button (Bottom Right) */}
      <button className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
}
