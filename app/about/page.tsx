import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UYWNIX | Top Global AI Automation Agency",
  description: "UYWNIX is the world's leading AI Automation Agency. Learn how we use AI Sales Agents and Voice Employees to help businesses in Dubai, USA, and India scale with 10x ROI and extreme efficiency.",
  keywords: "Top AI Automation Agency, UYWNIX About, AI Business Experts, Global Tech Solutions Company, AI Automation Experts Dubai, USA AI Agency",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">UYWNIX</Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight mb-8">About UYWNIX</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          We believe that humans should do creative work, and AI should do the busy work.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2026, UYWNIX started with a simple goal: to make Enterprise-grade AI accessible to every business.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, we operate globally across India, UAE, USA, and Australia, helping companies save millions of hours through intelligent automation.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h3 className="font-bold text-xl mb-2">AI First</h3>
            <p className="text-muted-foreground">We don't just add AI; we rebuild workflows around it.</p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h3 className="font-bold text-xl mb-2">Global Scale</h3>
            <p className="text-muted-foreground">Serving clients in 4 continents with 24/7 support.</p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h3 className="font-bold text-xl mb-2">Result Driven</h3>
            <p className="text-muted-foreground">We focus on ROI. If it doesn't save money, we don't build it.</p>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to transform your business?</h2>
          <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}
