"use client";

import { useState } from "react";
import { UserCheck, Smartphone, ShieldCheck, Mail, CheckCircle2, ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserCheck,
    title: "Check Qualification Requirements",
    subtitle: "Resident of Japan & Valid ID",
    description:
      "Applicants must reside in Japan and hold a valid Residence Card (Zairyu Card) or Special Permanent Resident Certificate with at least 3 months remaining validity.",
  },
  {
    step: "02",
    icon: Smartphone,
    title: "Download App or Apply Online",
    subtitle: "Complete English Application",
    description:
      "Use our English Smartphone Application or online web form. Fill in your personal details, tax identification (My Number), and address in Japan.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Verify Identity Digitally",
    subtitle: "eKYC Biometric Verification",
    description:
      "Scan your Residence Card chip and take a quick selfie verification using your smartphone camera. No paper mailing required for standard eKYC.",
  },
  {
    step: "04",
    icon: Mail,
    title: "Receive Card & Bank in English",
    subtitle: "PowerFlex Activated in ~1 Week",
    description:
      "Your multi-currency Cash Card will arrive at your registered address. Log in to PowerDirect English internet banking and start banking immediately!",
  },
];

export default function AccountOpeningGuide() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="open-account" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Open an SBI Shinsei Bank Account
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Opening your PowerFlex account in Japan is fast and straightforward with full English guidance at every step.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`bg-slate-50 rounded-2xl p-6 border ${
                  activeStep === idx
                    ? "border-red-500 bg-red-50/20 ring-2 ring-red-500/20"
                    : "border-slate-200 hover:border-slate-300"
                } transition duration-300 flex flex-col justify-between cursor-pointer space-y-4 relative`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
                      {s.step}
                    </div>
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{s.subtitle}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{s.title}</h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-1 text-xs font-bold text-red-600">
                  <span>Step Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Documents Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-1">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">What Documents Do I Need?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Valid Residence Card (Zairyu Card), Individual Number (My Number Card/Juminhyo with My Number), Japanese phone number, and address proof.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => alert("Launching English Application Portal...")}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition text-sm flex items-center gap-2"
            >
              <span>Start Application Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
