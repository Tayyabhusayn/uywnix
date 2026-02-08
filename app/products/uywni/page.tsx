import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UYWNI Social App - Next Gen Connection",
  description: "Experience the future of social media with UYWNI. AI-curated, privacy-first, and built for authentic connection.",
};

export default function UywniProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            UYWNIX
          </Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <section className="py-24 container mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6">
          COMING SOON
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8">
          UYWNI
        </h1>
        <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-12">
          The Social Media App that actually <i>gets</i> you.
        </p>
        
        <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-8 shadow-2xl">
          <div className="aspect-[9/19] bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Mockup Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
            <div className="text-center p-6 z-20">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">U</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Welcome to UYWNI</h3>
              <p className="text-zinc-400 text-sm">Connect. Share. Evolve.</p>
              <button className="mt-8 w-full bg-white text-black py-3 rounded-xl font-bold">Sign Up</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Smart Feeds</h3>
            <p className="text-muted-foreground">No more doomscrolling. Our AI curates content that sparks joy and growth, not outrage.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">True Privacy</h3>
            <p className="text-muted-foreground">Your data stays yours. Decentralized storage options ensure you own your digital footprint.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Creator First</h3>
            <p className="text-muted-foreground">Built-in monetization tools that pay creators fairly from day one.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
