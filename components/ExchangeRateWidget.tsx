"use client";

import { useState } from "react";
import { ArrowRightLeft, TrendingUp, RefreshCw, Calculator, DollarSign, Info } from "lucide-react";

interface Rate {
  currency: string;
  name: string;
  flag: string;
  tts: number; // Bank sells to customer (JPY cost per 1 unit)
  ttb: number; // Bank buys from customer (JPY payout per 1 unit)
  change: string;
}

const initialRates: Rate[] = [
  { currency: "USD", name: "US Dollar", flag: "🇺🇸", tts: 154.25, ttb: 153.75, change: "+0.15" },
  { currency: "EUR", name: "Euro", flag: "🇪🇺", tts: 167.40, ttb: 166.80, change: "-0.08" },
  { currency: "AUD", name: "Australian Dollar", flag: "🇦🇺", tts: 101.85, ttb: 101.15, change: "+0.32" },
  { currency: "GBP", name: "British Pound", flag: "🇬🇧", tts: 196.10, ttb: 195.20, change: "+0.45" },
  { currency: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", tts: 93.50, ttb: 92.80, change: "-0.05" },
  { currency: "CAD", name: "Canadian Dollar", flag: "🇨🇦", tts: 112.30, ttb: 111.60, change: "+0.12" },
  { currency: "SGD", name: "Singapore Dollar", flag: "🇸🇬", tts: 115.80, ttb: 115.10, change: "+0.04" },
  { currency: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", tts: 19.82, ttb: 19.68, change: "0.00" },
];

export default function ExchangeRateWidget() {
  const [rates, setRates] = useState<Rate[]>(initialRates);
  const [lastUpdated, setLastUpdated] = useState<string>("Today 15:30 JST");
  const [amount, setAmount] = useState<number>(1000);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [direction, setDirection] = useState<"buy" | "sell">("buy"); // buy JPY or sell JPY

  const handleRefresh = () => {
    // Slight random simulation tweak to demonstrate live interactivity
    const updated = rates.map((r) => {
      const delta = (Math.random() * 0.1 - 0.05).toFixed(2);
      return {
        ...r,
        tts: parseFloat((r.tts + parseFloat(delta)).toFixed(2)),
        ttb: parseFloat((r.ttb + parseFloat(delta)).toFixed(2)),
      };
    });
    setRates(updated);
    const now = new Date();
    setLastUpdated(`${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} JST`);
  };

  const activeRateObj = rates.find((r) => r.currency === selectedCurrency) || rates[0];
  const convertedValue =
    direction === "buy"
      ? (amount * activeRateObj.tts).toLocaleString("en-US", { maximumFractionDigits: 0 })
      : (amount / activeRateObj.ttb).toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <section id="foreign-currency" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full mb-2">
              <TrendingUp className="w-3.5 h-3.5" /> Real-time Foreign Exchange Rates
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              SBI Shinsei PowerFlex Exchange Rates
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Competitive rates for 13 major foreign currencies with zero hidden commissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">As of: {lastUpdated}</span>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5 text-sky-600" /> Refresh Rates
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Rate Table (Left Side) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center text-xs font-bold tracking-wider uppercase">
              <span>Currency Pair</span>
              <div className="flex items-center gap-8">
                <span className="w-20 text-right">TTS (Buy Foreign)</span>
                <span className="w-20 text-right">TTB (Sell Foreign)</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-sm">
              {rates.map((rate) => (
                <div
                  key={rate.currency}
                  onClick={() => setSelectedCurrency(rate.currency)}
                  className={`p-3.5 flex items-center justify-between hover:bg-sky-50/50 cursor-pointer transition ${
                    selectedCurrency === rate.currency ? "bg-sky-50/80 font-bold" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{rate.flag}</span>
                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        {rate.currency}/JPY
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            rate.change.startsWith("+")
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {rate.change}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{rate.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-sm">
                    <span className="w-20 text-right font-mono font-bold text-slate-900">
                      ¥{rate.tts.toFixed(2)}
                    </span>
                    <span className="w-20 text-right font-mono font-semibold text-slate-600">
                      ¥{rate.ttb.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>TTS: Rate applied when exchanging JPY into foreign currency. TTB: Rate when exchanging foreign currency to JPY.</span>
            </div>
          </div>

          {/* FX Calculator Widget (Right Side) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-lg">Currency Calculator</h3>
              </div>
              <span className="text-xs text-sky-300 font-mono">Live Simulation</span>
            </div>

            {/* Direction Toggle */}
            <div className="grid grid-cols-2 gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setDirection("buy")}
                className={`py-2 text-xs font-bold rounded-lg transition ${
                  direction === "buy" ? "bg-sky-600 text-white shadow" : "text-slate-300 hover:text-white"
                }`}
              >
                JPY ➔ {selectedCurrency} (Buy Foreign)
              </button>
              <button
                onClick={() => setDirection("sell")}
                className={`py-2 text-xs font-bold rounded-lg transition ${
                  direction === "sell" ? "bg-sky-600 text-white shadow" : "text-slate-300 hover:text-white"
                }`}
              >
                {selectedCurrency} ➔ JPY (Sell Foreign)
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 font-semibold mb-1">
                  {direction === "buy" ? `Amount in ${selectedCurrency}` : `Amount in ${selectedCurrency}`}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 px-3 text-white font-mono font-bold text-lg focus:outline-none focus:border-sky-500"
                  />
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="absolute right-2 top-2 bg-slate-800 border border-slate-700 text-white text-xs font-bold py-1.5 px-2 rounded-lg"
                  >
                    {rates.map((r) => (
                      <option key={r.currency} value={r.currency}>
                        {r.flag} {r.currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conversion Result Box */}
              <div className="bg-slate-950/80 border border-sky-500/30 rounded-xl p-4 text-center space-y-1">
                <div className="text-xs text-slate-400 font-medium">Estimated Exchange Total</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono">
                  {direction === "buy" ? `¥${convertedValue}` : `${convertedValue} ${selectedCurrency}`}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Applied Rate: 1 {selectedCurrency} = ¥
                  {direction === "buy" ? activeRateObj.tts : activeRateObj.ttb}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => alert(`Initiating FX Trade for ${amount} ${selectedCurrency}...`)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <ArrowRightLeft className="w-4 h-4" />
              <span>Exchange Foreign Currency Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
