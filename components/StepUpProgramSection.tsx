"use client";

import { useState } from "react";
import { ShieldCheck, Check, Sparkles, Star, Award, Crown, ArrowRight } from "lucide-react";

interface Tier {
  name: string;
  badge: string;
  color: string;
  bgHeader: string;
  borderColor: string;
  icon: any;
  atmFee: string;
  transferFee: string;
  fxSpread: string;
  requirements: string[];
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Standard",
    badge: "Basic Tier",
    color: "text-slate-600",
    bgHeader: "bg-slate-800 text-white",
    borderColor: "border-slate-200",
    icon: ShieldCheck,
    atmFee: "¥110 / withdrawal",
    transferFee: "1 free / month",
    fxSpread: "Standard FX Spread",
    requirements: ["Default tier upon opening PowerFlex account"],
  },
  {
    name: "Silver",
    badge: "Popular",
    color: "text-slate-700",
    bgHeader: "bg-gradient-to-r from-slate-400 to-slate-600 text-white",
    borderColor: "border-slate-300",
    icon: Star,
    atmFee: "5 Free / month",
    transferFee: "3 Free / month",
    fxSpread: "10% FX Spread Discount",
    requirements: [
      "Total account balance of ¥1 Million+",
      "OR Foreign Currency deposit of ¥300,000+",
      "OR Salary Direct Deposit setup",
    ],
  },
  {
    name: "Gold",
    badge: "Recommended",
    color: "text-amber-700",
    bgHeader: "bg-gradient-to-r from-amber-500 to-yellow-600 text-white",
    borderColor: "border-amber-400",
    icon: Award,
    atmFee: "Unlimited Free",
    transferFee: "5 Free / month",
    fxSpread: "25% FX Spread Discount",
    requirements: [
      "Total account balance of ¥5 Million+",
      "OR Foreign Currency deposit of ¥1 Million+",
      "OR SBI Securities connection",
    ],
    recommended: true,
  },
  {
    name: "Platinum",
    badge: "VIP Tier",
    color: "text-purple-700",
    bgHeader: "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-950 text-white",
    borderColor: "border-purple-500",
    icon: Crown,
    atmFee: "Unlimited Free",
    transferFee: "10 Free / month",
    fxSpread: "50% FX Spread Discount",
    requirements: [
      "Total account balance of ¥20 Million+",
      "OR Foreign Currency deposit of ¥5 Million+",
      "OR Housing Loan holder",
    ],
  },
];

export default function StepUpProgramSection() {
  const [selectedTier, setSelectedTier] = useState<string>("Gold");

  return (
    <section id="stepup" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Shinsei Step Up Program
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The More You Bank, The More You Save
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Enjoy higher tier benefits like zero-fee ATM access at 7-Eleven, free domestic transfers, and discounted exchange spreads.
          </p>
        </div>

        {/* 4 Tiers Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              onClick={() => setSelectedTier(t.name)}
              className={`bg-slate-950 rounded-2xl border ${
                selectedTier === t.name ? t.borderColor + " ring-2 ring-amber-400/50" : "border-slate-800"
              } overflow-hidden shadow-xl hover:border-slate-600 transition duration-300 flex flex-col justify-between cursor-pointer relative group`}
            >
              {t.recommended && (
                <div className="bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider py-1 text-center font-mono">
                  ★ Most Popular Choice ★
                </div>
              )}

              <div>
                {/* Header */}
                <div className={`${t.bgHeader} p-5 flex items-center justify-between`}>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">{t.badge}</span>
                    <h3 className="text-2xl font-extrabold tracking-tight">{t.name}</h3>
                  </div>
                  <t.icon className="w-8 h-8 opacity-90" />
                </div>

                {/* Body Features */}
                <div className="p-5 space-y-5 text-xs">
                  {/* ATM Benefit */}
                  <div className="space-y-1">
                    <span className="text-slate-400 font-medium">Convenience Store ATMs</span>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {t.atmFee}
                    </div>
                  </div>

                  {/* Transfer Benefit */}
                  <div className="space-y-1">
                    <span className="text-slate-400 font-medium">Domestic Transfers</span>
                    <div className="text-sm font-bold text-sky-400">{t.transferFee}</div>
                  </div>

                  {/* FX Spread Benefit */}
                  <div className="space-y-1">
                    <span className="text-slate-400 font-medium">Foreign Exchange Rates</span>
                    <div className="text-xs font-semibold text-amber-300">{t.fxSpread}</div>
                  </div>

                  {/* Qualifications */}
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      Qualification Criteria:
                    </span>
                    {t.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-400 leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-slate-900 bg-slate-900/50">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Checking eligibility for Step Up ${t.name} tier...`);
                  }}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
