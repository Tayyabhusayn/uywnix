import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import FeatureGrid from "@/components/FeatureGrid";
import ProductStrip from "@/components/ProductStrip";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <FeatureGrid />
      <ProductStrip />
      <FAQ />
    </main>
  );
}
