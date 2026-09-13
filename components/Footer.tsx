"use client";

import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-slate-400 text-xs font-sans border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            {/* SBI Logo Mark SVG */}
            <div className="relative flex flex-col items-center">
              <svg className="w-10 h-2.5 text-[#E60012]" viewBox="0 0 100 25" fill="currentColor">
                <path d="M 0,25 Q 50,0 100,25 Q 50,8 0,25 Z" />
              </svg>
              <span className="text-lg font-black tracking-tighter text-white leading-none">
                SBI
              </span>
            </div>
            <span className="text-base font-bold text-white tracking-tight">SBI Shinsei Bank, Limited</span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            SBI Shinsei Bank, Limited is a registered financial institution in Japan (Kanto Local Finance Bureau No. 10). Member of Japan Bankers Association.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Individual Banking</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#powerflex" className="hover:text-white transition">PowerFlex Account</a>
            </li>
            <li>
              <a href="#foreign-currency" className="hover:text-white transition">Foreign Currency Deposit</a>
            </li>
            <li>
              <a href="#goremit" className="hover:text-white transition">GoRemit Remittance</a>
            </li>
            <li>
              <a href="#stepup" className="hover:text-white transition">Step Up Program</a>
            </li>
            <li>
              <a href="#open-account" className="hover:text-white transition">New Account Application</a>
            </li>
          </ul>
        </div>

        {/* Corporate Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Corporate & IR</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://corp.sbishinseibank.co.jp/en/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
                Corporate Overview <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://corp.sbishinseibank.co.jp/en/ir/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
                Investor Relations <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://www.sbishinseibank.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
                Japanese Website <Globe className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="bg-[#0F141C] border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://www.sbishinseibank.co.jp/english/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="https://www.sbishinseibank.co.jp/english/security.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              Security Policy
            </a>
            <span>•</span>
            <a href="https://www.sbishinseibank.co.jp/english/solicitation.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              Solicitation Policy
            </a>
            <span>•</span>
            <a href="https://www.sbishinseibank.co.jp/english/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              Terms of Use
            </a>
          </div>

          <div>
            © SBI Shinsei Bank, Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
