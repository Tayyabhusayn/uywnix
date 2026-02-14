"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tight flex items-center gap-1 text-slate-900">
          UYWNIX
        </Link>
        
        <div className="hidden md:flex space-x-10 text-sm font-bold text-gray-500">
          <Link href="/services" className="hover:text-black transition">Solutions</Link>
          <Link href="/pricing" className="hover:text-black transition">Pricing</Link>
          <Link href="/newsroom" className="hover:text-black transition">Resources</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/audit" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-lg hover:-translate-y-0.5 transform">
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-900 z-[110]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col p-8 pt-32 space-y-8 animate-fade-in">
          <Link href="/services" className="text-4xl font-black text-slate-900 tracking-tight hover:text-slate-600 transition" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
          <Link href="/pricing" className="text-4xl font-black text-slate-900 tracking-tight hover:text-slate-600 transition" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="/newsroom" className="text-4xl font-black text-slate-900 tracking-tight hover:text-slate-600 transition" onClick={() => setIsMenuOpen(false)}>Resources</Link>
          <Link href="/contact" className="text-4xl font-black text-slate-900 tracking-tight hover:text-slate-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="pt-8 border-t border-gray-100 mt-4">
            <Link href="/audit" className="block w-full bg-slate-900 text-white py-5 rounded-full font-bold text-center text-xl shadow-xl hover:bg-slate-800 transition" onClick={() => setIsMenuOpen(false)}>
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
