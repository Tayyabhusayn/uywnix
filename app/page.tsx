"use client";

import { useState } from "react";
import Link from "next/link";
import RoiCalculator from "@/components/RoiCalculator";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            UYWNIX
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products/uywni" className="hover:text-primary/80 transition-colors">Social App</Link>
            <Link href="/services" className="hover:text-primary/80 transition-colors">Services</Link>
            <Link href="/industries" className="hover:text-primary/80 transition-colors">Industries</Link>
            <Link href="/ai-agent" className="hover:text-primary/80 transition-colors">AI Agent</Link>
            <Link href="/newsroom" className="hover:text-primary/80 transition-colors">Newsroom</Link>
            <Link href="/contact" className="hover:text-primary/80 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 space-y-4 text-center">
              <Link href="/products/uywni" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>Social App</Link>
              <Link href="/services" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/industries" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>Industries</Link>
              <Link href="/ai-agent" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>AI Agent</Link>
              <Link href="/newsroom" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>Newsroom</Link>
              <Link href="/contact" className="py-2 hover:bg-secondary rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          The Next Generation <br/> Business Automation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          We build AI Employees that automate your business 24/7. From Customer Support to High-Ticket Sales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/audit" className="bg-primary text-primary-foreground h-12 px-8 rounded-full flex items-center justify-center font-medium text-lg hover:opacity-90 transition-opacity">
            Free Business Audit
          </Link>
          <Link href="/ai-agent" className="border border-input bg-background h-12 px-8 rounded-full flex items-center justify-center font-medium text-lg hover:bg-accent hover:text-accent-foreground transition-colors">
            Try AI Sales Agent
          </Link>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="w-full bg-black py-12">
        <RoiCalculator />
      </section>

      {/* AI First Section - Services */}
      <section className="w-full py-24 bg-secondary/30" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Global Technology Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Officially automating all business operations with AI. We build the workforce of the future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/ai-agent" className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group cursor-pointer block">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-xl font-bold mb-2">Customer Agent for Business</h3>
              <p className="text-muted-foreground">Replace traditional support with intelligent AI Agents that handle inquiries, bookings, and sales 24/7.</p>
            </Link>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Business Automation</h3>
              <p className="text-muted-foreground">End-to-end automation of workflows. From data entry to decision making, we make your business run on autopilot.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-xl font-bold mb-2">AI Voice Calling Agents</h3>
              <p className="text-muted-foreground">Autonomous voice AI that handles inbound support calls and makes outbound sales calls with human-like realism.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">📧</div>
              <h3 className="text-xl font-bold mb-2">Email Automation</h3>
              <p className="text-muted-foreground">Cold outreach at scale. Our AI finds leads, writes personalized emails, and follows up until they reply.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="text-xl font-bold mb-2">Blockchain & Web3</h3>
              <p className="text-muted-foreground">Building the decentralized future with secure, transparent, and scalable blockchain infrastructure.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl font-bold mb-2">App Development</h3>
              <p className="text-muted-foreground">High-performance mobile and web applications tailored for scalability and user experience.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground">Enterprise-grade security audits and protection systems to safeguard your digital assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-border mt-auto">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-4">UYWNIX</h4>
            <p className="text-muted-foreground">Global Technology Solutions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/products/uywni">Social App</Link></li>
              <li><Link href="/ai-agent">AI Agents</Link></li>
              <li><Link href="/industries">Industries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/newsroom">Newsroom</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/uywnix/" target="_blank" className="text-muted-foreground hover:text-primary transition text-sm">LinkedIn</a>
              <a href="https://x.com/UYWNIX" target="_blank" className="text-muted-foreground hover:text-primary transition text-sm">X (Twitter)</a>
              <a href="https://www.instagram.com/uywnix" target="_blank" className="text-muted-foreground hover:text-primary transition text-sm">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61557697956190" target="_blank" className="text-muted-foreground hover:text-primary transition text-sm">Facebook</a>
              <a href="https://bsky.app/profile/uywnix.bsky.social" target="_blank" className="text-muted-foreground hover:text-primary transition text-sm">Bluesky</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 UYWNIX. Global Technology Solutions. Updated Feb 11.
        </div>
      </footer>
    </main>
  );
}
