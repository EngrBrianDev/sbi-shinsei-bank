"use client";

import { useState } from "react";
import { AlertCircle, ChevronRight, X, Sparkles, Bell } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white text-xs md:text-sm py-2 px-4 shadow-inner relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-white text-amber-800 font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" /> Special Offer
          </span>
          <p className="truncate font-medium">
            <strong className="font-bold">Foreign Currency Deposit Campaign:</strong> Preferential interest rates up to <span className="underline decoration-2">5.50% p.a.</span> for 3-month USD Time Deposits!
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#foreign-currency"
            className="hidden sm:flex items-center gap-1 font-bold underline hover:text-amber-100 transition"
          >
            Learn Details <ChevronRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded transition"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
