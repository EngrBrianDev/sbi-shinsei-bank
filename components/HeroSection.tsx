"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white font-sans text-slate-900">
      {/* Exact Live Hero Banner with Girl Image */}
      <div className="relative w-full max-w-7xl mx-auto border-b border-slate-200 overflow-hidden bg-slate-100">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[340px]">
          {/* Main Hero Background Image featuring Girl with Headphones & Luggage */}
          <img
            src="/images/hero-girl.jpg"
            alt="Free ATM withdrawals at our partner convenience store ATMs - From April 1, 2024, withdrawal fees for 'Standard' stage customers will be free up to 5 withdrawals per month."
            className="w-full h-full object-cover object-center"
          />

          {/* Left Semi-Transparent Blue Overlay with Headline & Text */}
          <div className="absolute left-4 sm:left-12 top-6 sm:top-10 bottom-6 sm:bottom-10 max-w-xl bg-slate-900/60 sm:bg-slate-900/50 backdrop-blur-xs rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
                Free ATM withdrawals at our partner convenience store ATMs
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed drop-shadow-sm">
                - Withdrawal fees for &ldquo;Standard&rdquo; stage customers are free up to 5 times per month.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#powerflex"
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#2172B8] hover:bg-[#1a5f9a] text-white text-xs sm:text-sm font-extrabold rounded transition shadow-md"
              >
                <span>More details</span>
                <span className="text-sm font-bold">&raquo;</span>
              </a>
            </div>
          </div>

          {/* Right Floating Lime Green "Open an account" CTA Button */}
          <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 hidden md:block">
            <a
              href="#open-account"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#70C000] hover:bg-[#60b000] text-white text-base font-extrabold rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              <span>Open an account</span>
              <span className="text-lg font-bold">&raquo;</span>
            </a>
          </div>
        </div>

        {/* Mobile Open Account CTA */}
        <div className="md:hidden p-4 bg-[#70C000] text-center">
          <a
            href="#open-account"
            className="text-white font-extrabold text-sm inline-flex items-center gap-1"
          >
            <span>Open an account</span>
            <span>&raquo;</span>
          </a>
        </div>
      </div>

      {/* "Enjoy the benefits of the PowerFlex" Section */}
      <div className="py-14 bg-[#F0F4F8] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D70B8] tracking-tight">
              Enjoy the benefits of the PowerFlex
            </h2>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Free ATM fees */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-[#002B66]">Free ATM fees</h3>
                <div className="flex justify-center h-16 items-center">
                  <img
                    src="/images/powerflex_icon_01.png"
                    alt="Free ATM fees"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Access our partner convenience stores&apos; ATMs 24/7 for free.<sup className="text-[10px] text-slate-400">*1</sup>
                </p>
              </div>
            </div>

            {/* Box 2: Internet Banking */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-[#002B66]">Internet Banking</h3>
                <div className="flex justify-center h-16 items-center">
                  <img
                    src="/images/powerflex_icon_02.png"
                    alt="Internet Banking"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Access your account whenever and wherever you want.<sup className="text-[10px] text-slate-400">*2</sup>
                </p>
              </div>
            </div>

            {/* Box 3: Bilingual Service */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-[#002B66]">Bilingual Service</h3>
                <div className="flex justify-center h-16 items-center">
                  <img
                    src="/images/powerflex_icon_03.png"
                    alt="Bilingual Service"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  English internet banking and customer support available.
                </p>
              </div>
            </div>

            {/* Box 4: Free Domestic online transfer */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs text-center flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-[#002B66]">
                  Free Domestic online transfer
                </h3>
                <div className="flex justify-center h-16 items-center">
                  <img
                    src="/images/powerflex_icon_04.png"
                    alt="Free Domestic online transfer"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At least one free domestic online transfer per month.<sup className="text-[10px] text-slate-400">*3</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons Below Cards */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#powerflex-details"
              className="px-6 py-3 bg-[#2172B8] hover:bg-[#1a5f9a] text-white font-extrabold text-xs rounded transition flex items-center gap-1 shadow-xs"
            >
              <span>More details about PowerFlex account</span>
              <span>&raquo;</span>
            </a>

            <a
              href="#open-account"
              className="px-8 py-3 bg-[#70C000] hover:bg-[#60b000] text-white font-extrabold text-xs rounded transition flex items-center gap-1 shadow-xs"
            >
              <span>Open an account</span>
              <span>&raquo;</span>
            </a>
          </div>

          {/* Footnotes */}
          <div className="mt-8 text-[11px] text-slate-500 space-y-1 max-w-4xl mx-auto">
            <p>*1 ATM operating hours may differ depending on business hours of the building in which the ATM is installed and system maintenance of SBI Shinsei Bank or partners.</p>
            <p>*2 Due to system maintenance, there are times when this service is unavailable.</p>
            <p>
              *3{" "}
              <a href="#stepup" className="text-[#2172B8] hover:underline font-semibold">
                More details about the Preferential services, Step Up Program
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
