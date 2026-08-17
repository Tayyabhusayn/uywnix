import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <FeatureGrid />
      <FAQ />
    </main>
  );
}
