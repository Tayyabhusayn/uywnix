"use client";

import { useState } from "react";
import Link from "next/link";
import RoiCalculator from "@/components/RoiCalculator";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import IndustrySolutions from "@/components/IndustrySolutions";
import TrustBar from "@/components/TrustBar";
import LiveOperations from "@/components/LiveOperations";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900 grid-bg">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tight flex items-center gap-1">
            UYWNIX
          </Link>
          
          <div className="hidden md:flex space-x-10 text-sm font-semibold text-gray-600">
            <Link href="/services" className="hover:text-black transition">Solutions</Link>
            <Link href="/pricing" className="hover:text-black transition">Pricing</Link>
            <Link href="/newsroom" className="hover:text-black transition">Resources</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/audit" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition shadow-lg">
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 space-y-4 animate-in slide-in-from-top-5">
            <Link href="/services" className="block text-lg font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link href="/pricing" className="block text-lg font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/newsroom" className="block text-lg font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/contact" className="block text-lg font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <hr className="border-slate-100"/>
            <Link href="/audit" className="block w-full bg-purple-700 text-white py-3 rounded-xl font-bold text-center" onClick={() => setIsMenuOpen(false)}>
              Get Started Free
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section (Make.com Style) */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <LiveOperations />
        <div className="max-w-4xl relative z-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-black leading-[0.9] animate-slide-up">
            Automate your <br/> <span className="text-gray-400">entire business.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl leading-relaxed animate-slide-up delay-100">
            From tasks and workflows to apps and systems, build and automate anything with our next-generation <b>AI Global Infrastructure</b>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-up delay-200">
            <Link href="/audit" className="bg-black text-white h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-gray-800 transition shadow-xl hover-lift shimmer">
              Get Started Free
            </Link>
            <Link href="/ai-agent" className="h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg text-black border border-gray-200 bg-white/50 backdrop-blur-md hover:bg-gray-50 transition hover-lift">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Solutions Grid (Make.com Style) */}
      <section className="container mx-auto px-4 pb-32">
        <PerformanceMetrics />
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-16 mb-12">SOLUTIONS ACROSS YOUR BUSINESS</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Item 1 */}
          <Link href="/services" className="group block hover-lift animate-slide-up delay-100">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">📢</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Marketing</h3>
            <p className="text-sm text-gray-500">Automate campaigns & content.</p>
          </Link>
          
          {/* Item 2 */}
          <Link href="/ai-agent" className="group block hover-lift animate-slide-up delay-200">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">📈</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Sales</h3>
            <p className="text-sm text-gray-500">Qualify leads 24/7.</p>
          </Link>
          
          {/* Item 3 */}
          <Link href="/services" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">⚙️</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Operations</h3>
            <p className="text-sm text-gray-500">Streamline internal workflows.</p>
          </Link>

          {/* Item 4 */}
          <Link href="/contact" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">🎧</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Customer Exp.</h3>
            <p className="text-sm text-gray-500">Instant AI support agents.</p>
          </Link>

          {/* Item 5 */}
          <Link href="/services" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">💰</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Finance</h3>
            <p className="text-sm text-gray-500">Invoice processing & OCR.</p>
          </Link>

          {/* Item 6 */}
          <Link href="/services" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">💻</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">IT</h3>
            <p className="text-sm text-gray-500">System integrations.</p>
          </Link>
          
           {/* Item 7 */}
           <Link href="/services" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">👥</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">HR</h3>
            <p className="text-sm text-gray-500">Onboarding automation.</p>
          </Link>

           {/* Item 8 */}
           <Link href="/services" className="group block hover-lift animate-slide-up delay-300">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">🚀</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Productivity</h3>
            <p className="text-sm text-gray-500">Personal AI assistants.</p>
          </Link>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50 py-24">
        <RoiCalculator />
      </section>

      <IndustrySolutions />

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm text-gray-500">
          <div>
            <h4 className="text-2xl font-black text-black mb-6 flex items-center gap-1">
               UYWNIX
            </h4>
            <p>Automate your work. Build something new.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-agent" className="hover:text-black">Platform</Link></li>
              <li><Link href="/pricing" className="hover:text-black">Pricing</Link></li>
              <li><Link href="/services" className="hover:text-black">Templates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/newsroom" className="hover:text-black">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black">Community</Link></li>
              <li><Link href="/contact" className="hover:text-black">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-black">About</Link></li>
              <li><Link href="/contact" className="hover:text-black">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Follow Us</h4>
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
