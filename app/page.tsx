"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const headerWords = ["earn more", "keep more", "sell more", "grow more"];
  const [currentHeaderWordIndex, setCurrentHeaderWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    shopifyStore: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderWordIndex((prevIndex) => (prevIndex + 1) % headerWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headerWords.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", linkedin: "", shopifyStore: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetInTouch = () => {
    const formSection = document.getElementById("early-access-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus the first input field after a short delay to allow scroll to complete
      setTimeout(() => {
        const firstInput = document.getElementById("name");
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  };

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
              <button 
                onClick={handleGetInTouch}
                className="rounded-xl border-2 border-gray-300/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-95"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Secretive and Elusive */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-6 lg:px-8 overflow-hidden bg-white">
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
            Give more.{" "}
            <span className="relative inline-block text-rose-600 min-w-[180px]">
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
            A new way to enrich and elighten customer relationships. Coming soon.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section id="early-access-form" className="relative py-16 px-6 lg:px-8 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Get Early Access</h2>
              <p className="text-base text-gray-600">
                Join the waitlist to be among the first to experience what we're building.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile URL <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label htmlFor="shopifyStore" className="block text-sm font-medium text-gray-700 mb-2">
                  Shopify Store URL <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="shopifyStore"
                  name="shopifyStore"
                  required
                  value={formData.shopifyStore}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
                  placeholder="yourstore.myshopify.com or https://yourstore.myshopify.com"
                />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="text-sm font-medium text-green-800">
                    Thank you! We've received your information and will be in touch soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm font-medium text-red-800">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gray-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
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
