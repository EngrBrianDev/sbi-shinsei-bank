"use client";

export default function QuickServicesGrid() {
  return (
    <section className="py-16 bg-[#E2EDF8] border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A6A7D] tracking-tight">
            Explore our products and services
          </h2>
        </div>

        {/* 2 Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Internet Banking */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition">
            <a href="https://bk.web.sbishinseibank.co.jp/SFC/apps/services/www/SFC/desktopbrowser/default/login?mode=1&lang=ENG" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src="/images/internet-banking-card.jpg"
                  alt="Internet Banking"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="bg-[#2172B8] text-white p-3 flex items-center justify-between font-extrabold text-sm">
                <span>Internet Banking</span>
                <span className="text-xs font-semibold flex items-center gap-1">
                  <span>Read more</span>
                  <span>&raquo;</span>
                </span>
              </div>
            </a>
          </div>

          {/* Card 2: Foreign Currency Deposits */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition">
            <a href="#foreign-currency" className="block group">
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src="/images/foreign-currency-card.jpg"
                  alt="Foreign Currency Deposits"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="bg-[#2172B8] text-white p-3 flex items-center justify-between font-extrabold text-sm">
                <span>Foreign Currency Deposits</span>
                <span className="text-xs font-semibold flex items-center gap-1">
                  <span>Read more</span>
                  <span>&raquo;</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Subtext link below cards */}
        <div className="text-right max-w-4xl mx-auto mt-4">
          <a
            href="https://www.sbishinseibank.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#2172B8] hover:underline"
          >
            For other products, please see Japanese page
          </a>
        </div>

        {/* Large Center Green Open Account CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="#open-account"
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#70C000] hover:bg-[#60b000] text-white text-base font-extrabold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <span>Open an account</span>
            <span className="text-lg font-bold">&raquo;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
