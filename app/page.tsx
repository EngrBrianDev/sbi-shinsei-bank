import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickServicesGrid from "@/components/QuickServicesGrid";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-[#0A5296] selection:text-white">
      {/* 2 Sticky Header Bars (Top Bar #0A5296 + Main Bar with logo header-logo.png) */}
      <Navbar />

      {/* Key Visual Hero Banner (with Girl in airport image hero-girl.jpg + 4 PowerFlex icon cards) */}
      <HeroSection />

      {/* Explore our products and services (2 Cards: Internet Banking & Foreign Currency Deposits) */}
      <QuickServicesGrid />

      {/* What's new, Frequently Asked Questions, and How-to Guide */}
      <FAQSection />

      {/* Official SBI Shinsei Bank Footer */}
      <Footer />
    </div>
  );
}
