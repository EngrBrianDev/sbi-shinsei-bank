"use client";

import { useState } from "react";
import { Search, Globe, ChevronDown, ExternalLink } from "lucide-react";

export default function TopUtilityBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchKw, setSearchKw] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchKw.trim()) {
      alert(`Searching SBI Shinsei Bank English site for: "${searchKw}"`);
    }
  };

  return (
    <div className="bg-[#f8f9fa] border-b border-slate-200 text-xs text-slate-700 py-1.5 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Segment Switcher Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 font-bold text-slate-800 hover:text-[#003882] py-1 px-2.5 bg-white border border-slate-300 rounded shadow-xs text-xs transition"
            >
              <span>Individual</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-md w-40 z-50 py-1 font-medium">
                <a href="#individual" className="block px-3 py-1.5 hover:bg-slate-100 text-[#003882] font-bold">
                  Individual
                </a>
                <a href="https://www.sbishinseibank.co.jp/institutional/en/" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100 text-slate-700">
                  Institutional
                </a>
                <a href="https://corp.sbishinseibank.co.jp/en/" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100 text-slate-700">
                  Corporate
                </a>
                <a href="https://corp.sbishinseibank.co.jp/en/recruitment.html" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 hover:bg-slate-100 text-slate-700">
                  Recruitment
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Quick Links, Language & Search */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
          <a href="#fx-rates" className="hover:text-[#003882] transition hidden sm:inline">
            Foreign Exchange Rates
          </a>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <a href="#interest-rates" className="hover:text-[#003882] transition hidden sm:inline">
            Interest Rates
          </a>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <a href="#fees" className="hover:text-[#003882] transition hidden md:inline">
            Commission Fees
          </a>
          <span className="text-slate-300 hidden md:inline">|</span>
          <a href="#branches" className="hover:text-[#003882] transition">
            Branches
          </a>
          <span className="text-slate-300">|</span>
          <a href="#atms" className="hover:text-[#003882] transition">
            ATMs
          </a>
          <span className="text-slate-300">|</span>
          <a href="#inquiries" className="hover:text-[#003882] transition">
            Inquiries
          </a>
          <span className="text-slate-300">|</span>

          {/* Japanese Site Toggle */}
          <a
            href="https://www.sbishinseibank.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-[#003882] hover:underline"
          >
            <span>Japanese</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-1 hover:text-[#003882] text-slate-600 transition"
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Search Input */}
      {searchOpen && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-200">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md ml-auto">
            <input
              type="text"
              placeholder="Search SBI Shinsei Bank..."
              value={searchKw}
              onChange={(e) => setSearchKw(e.target.value)}
              className="flex-1 bg-white border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-[#003882]"
            />
            <button
              type="submit"
              className="bg-[#003882] text-white px-4 py-1.5 rounded font-bold text-xs hover:bg-[#002b66] transition"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
