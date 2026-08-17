"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "AI Agent", href: "/ai-agent" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Audit", href: "/audit" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/uywnix/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/UYWNIX", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/uywnix", label: "Instagram" },
  { icon: Github, href: "https://github.com/Tayyabhusayn/uywnix", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/5 overflow-hidden">
      <div className="relative container mx-auto px-6 py-14">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">UYWNIX</span>
            <Sparkles className="w-4 h-4 text-violet-400" />
          </Link>
          <p className="text-sm text-slate-400 max-w-sm">
            Websites, software, prototypes, and automation — one team, every build.
          </p>
        </div>

        {/* Single clean link row */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">© 2026 UYWNIX. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
}
