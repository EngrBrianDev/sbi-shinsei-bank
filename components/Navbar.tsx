"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [individualDropdown, setIndividualDropdown] = useState(false);

  return (
    <header className="w-full font-sans border-b border-slate-200 sticky top-0 z-50 bg-white">
      {/* Top Header Bar (Dark Blue #0A5296) */}
      <div className="bg-[#0A5296] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left Segment Button */}
          <div className="relative">
            <button
              onClick={() => setIndividualDropdown(!individualDropdown)}
              className="bg-white text-[#0A5296] font-bold px-3 py-1 rounded hover:bg-slate-100 transition flex items-center gap-1.5 text-xs shadow-xs"
            >
              <span>Individual</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#0A5296]" />
            </button>

            {individualDropdown && (
              <div className="absolute left-0 top-full mt-1 bg-white text-slate-800 border border-slate-200 rounded shadow-lg w-40 z-50 py-1 font-semibold text-xs">
                <a href="#individual" className="block px-3 py-1.5 hover:bg-slate-100 text-[#0A5296]">
                  Individual
                </a>
                <a href="https://www.sbishinseibank.co.jp/institutional/en/" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100">
                  Institutional
                </a>
                <a href="https://corp.sbishinseibank.co.jp/en/" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100">
                  Corporate
                </a>
                <a href="https://corp.sbishinseibank.co.jp/en/recruitment.html" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100">
                  Recruitment
                </a>
              </div>
            )}
          </div>

          {/* Right Links & Search */}
          <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
            <a href="#fx-rates" className="hover:text-white transition hidden sm:inline">
              Foreign Exchange Rates
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="#interest-rates" className="hover:text-white transition hidden sm:inline">
              Interest Rates
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="#fees" className="hover:text-white transition hidden md:inline">
              Commission Fees
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <a href="#branches" className="hover:text-white transition">
              Branches
            </a>
            <span className="text-white/40">|</span>
            <a href="#atms" className="hover:text-white transition">
              ATMs
            </a>
            <span className="text-white/40">|</span>
            <a href="#inquiries" className="hover:text-white transition">
              Inquiries
            </a>
            <span className="text-white/40">|</span>
            <a
              href="https://www.sbishinseibank.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white font-bold"
            >
              Japanese
            </a>
            <button className="p-1 hover:text-white text-white/80 transition" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar (White Background) */}
      <div className="bg-white py-3 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Exact Official Header Logo Image */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/header-logo.png"
              alt="SBI SHINSEI BANK"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-slate-700 font-bold text-sm">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0A5296] py-2 transition">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition duration-200" />
              </button>
              <div className="absolute left-0 top-full pt-1 w-56 hidden group-hover:block z-50">
                <div className="bg-white border border-slate-200 rounded shadow-lg p-2 space-y-1 text-xs">
                  <a href="#yen-deposit" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Yen Deposit
                  </a>
                  <a href="#foreign-currency" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Foreign Currency Deposit
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0A5296] py-2 transition">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition duration-200" />
              </button>
              <div className="absolute left-0 top-full pt-1 w-64 hidden group-hover:block z-50">
                <div className="bg-white border border-slate-200 rounded shadow-lg p-2 space-y-1 text-xs">
                  <a href="#open-account" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    New Account Application
                  </a>
                  <a href="#powerdirect" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Internet Banking (PowerDirect)
                  </a>
                  <a href="#goremit" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Sending Funds Overseas (GoRemit)
                  </a>
                  <a href="#stepup" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Step Up Program
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0A5296] py-2 transition">
                <span>Support</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition duration-200" />
              </button>
              <div className="absolute left-0 top-full pt-1 w-56 hidden group-hover:block z-50">
                <div className="bg-white border border-slate-200 rounded shadow-lg p-2 space-y-1 text-xs">
                  <a href="#inquiries" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    Inquiries
                  </a>
                  <a href="#faq" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    FAQ
                  </a>
                  <a href="#guides" className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-800">
                    How-to Guides
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* New Applications (Lime Green Button #70C000) */}
            <a
              href="#open-account"
              className="px-4 py-2 bg-[#70C000] hover:bg-[#60b000] text-white text-xs font-extrabold rounded transition shadow-xs"
            >
              New Applications
            </a>

            {/* Login (Blue Button #2172B8) */}
            <Link
              href="/login"
              className="px-5 py-2 bg-[#2172B8] hover:bg-[#1a5f9a] text-white text-xs font-extrabold rounded transition shadow-xs"
            >
              Login
            </Link>
          </div>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#open-account"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 bg-[#70C000] text-white font-extrabold text-xs rounded"
            >
              New Applications
            </a>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 bg-[#2172B8] text-white font-extrabold text-xs rounded"
            >
              Login
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2 text-xs font-bold text-slate-800">
            <a href="#powerflex" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-white rounded">
              Products
            </a>
            <a href="#goremit" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-white rounded">
              Services
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-white rounded">
              Support & FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
