"use client";

import { ExternalLink, ChevronRight, HelpCircle, Bell, Video } from "lucide-react";

const newsItems = [
  {
    date: "August 10, 2026",
    title: "Expansion of Notification Services for PowerDirect (Internet Banking) and SBI Shinsei Bank App",
    link: "https://www.sbishinseibank.co.jp/info/news2607_notification_expansion_e.html",
  },
  {
    date: "June 19, 2026",
    title: "Changes to Branch Services",
    link: "https://www.sbishinseibank.co.jp/info/news2606_tempo_e.html",
  },
  {
    date: "June 5, 2026",
    title: "Changes to Account Opening Procedures for Non-Japanese Residents",
    link: "https://www.sbishinseibank.co.jp/info/news2606_accountopening_e.html",
  },
  {
    date: "May 14, 2026",
    title: "[Important] Smartphone Authentication (VIP Access) will end on June 27, 2026",
    link: "https://www.sbishinseibank.co.jp/info/news2605_vipaccess_close_e.html",
  },
  {
    date: "March 29, 2026",
    title: "Planned Change to Smartphone Authentication",
    link: "https://www.sbishinseibank.co.jp/info/news2512_spninsho.html",
  },
];

const faqs = [
  {
    question: "Can I receive funds from overseas?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&id=731",
  },
  {
    question: "How do I change my address and/or my phone number?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&id=796",
  },
  {
    question: "I forgot my 'PowerDirect password' or what should I do if I'm locked out of the Internet Bank?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&id=753",
  },
  {
    question: "How should I terminate my account from overseas?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&category=547&id=112115",
  },
  {
    question: "I am leaving Japan and want to terminate my account but do not have an account for receiving the balance. What should I do?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&category=547&id=112115",
  },
  {
    question: "【Residence card】How can I submit updated information of my residence card?",
    link: "https://faq.sbishinseibank.co.jp/faq_detail.html?page=500&category=918&id=112389",
  },
];

const guides = [
  { title: "First login", link: "https://www.sbishinseibank.co.jp/english/guide/direct/startup.html" },
  { title: "How to login", link: "https://www.sbishinseibank.co.jp/english/guide/direct/" },
  { title: "How to make a domestic fund transfer", link: "https://www.sbishinseibank.co.jp/english/guide/direct/furi.html" },
  { title: "How to buy and sell foreign currency within your account", link: "https://www.sbishinseibank.co.jp/english/guide/direct/fx.html" },
  { title: "How to check your balance", link: "https://www.sbishinseibank.co.jp/english/guide/direct/koza.html" },
  { title: "How to change your domestic fund transfer limit", link: "https://www.sbishinseibank.co.jp/english/guide/f_limit/" },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Section 1: What's New & Frequently Asked Questions Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column: What's new */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#003882] pb-2">
              <Bell className="w-5 h-5 text-[#003882]" />
              <h2 className="text-xl font-extrabold text-[#002B66]">What's new</h2>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {newsItems.map((news, i) => (
                <div key={i} className="py-3.5 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400">{news.date}</div>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003882] hover:text-[#E60012] font-semibold flex items-start gap-1 transition"
                  >
                    <span>{news.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  </a>
                </div>
              ))}
            </div>

            <a
              href="https://www.sbishinseibank.co.jp/english/all_news.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-slate-100 hover:bg-slate-200 text-[#003882] font-extrabold text-xs rounded transition"
            >
              All news
            </a>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#003882] pb-2">
              <HelpCircle className="w-5 h-5 text-[#003882]" />
              <h2 className="text-xl font-extrabold text-[#002B66]">Frequently Asked Questions</h2>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {faqs.map((faq, i) => (
                <li key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#003882] transition">
                  <a
                    href={faq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003882] font-bold hover:underline flex items-start gap-2"
                  >
                    <span className="text-[#E60012] font-bold">Q.</span>
                    <span>{faq.question}</span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://faq.sbishinseibank.co.jp/?page=500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-[#003882] hover:bg-[#002352] text-white font-extrabold text-xs rounded transition"
            >
              More questions
            </a>
          </div>
        </div>

        {/* Section 2: How-to Guide */}
        <div className="bg-[#F4F6F9] rounded-2xl p-8 border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
            <Video className="w-5 h-5 text-[#003882]" />
            <h2 className="text-xl font-extrabold text-[#002B66]">How-to Guide</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {guides.map((g, i) => (
              <a
                key={i}
                href={g.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-[#003882] text-xs font-extrabold text-[#003882] flex items-center justify-between transition group"
              >
                <span>{g.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#003882] transition" />
              </a>
            ))}
          </div>
        </div>

        {/* Branch Disclaimer Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-slate-700 leading-relaxed max-w-4xl mx-auto">
          <strong className="text-amber-900 font-bold block mb-1">Branch Language Notice:</strong>
          Services at our branches are mainly provided in Japanese. Some branches have English speaking staff, but availability is limited. For full English service, please use our English internet banking or call English PowerCall at <strong>0120-456-860</strong>.
        </div>
      </div>
    </section>
  );
}
