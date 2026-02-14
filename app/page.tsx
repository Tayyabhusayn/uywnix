"use client";

import RoiCalculator from "@/components/RoiCalculator";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import IndustrySolutions from "@/components/IndustrySolutions";
import TrustBar from "@/components/TrustBar";
import LiveOperations from "@/components/LiveOperations";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900 grid-bg">
      {/* Dynamic Hero */}
      <Hero />

      {/* Live Operations Ticker */}
      <div className="hidden md:block">
         <LiveOperations />
      </div>

      <TrustBar />

      {/* Performance Metrics */}
      <section className="py-20">
         <PerformanceMetrics />
      </section>

      {/* Interactive Solutions Grid */}
      <FeatureGrid />

      {/* ROI Section */}
      <section className="bg-slate-50 py-20 md:py-32 border-y border-slate-200">
        <RoiCalculator />
      </section>

      <IndustrySolutions />
    </main>
  );
}
