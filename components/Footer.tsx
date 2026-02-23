"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Platform", href: "/ai-agent" },
    { label: "Pricing", href: "/pricing" },
    { label: "Templates", href: "/services" },
    { label: "API Docs", href: "/services" },
    { label: "Integrations", href: "/services" },
  ],
  solutions: [
    { label: "Marketing", href: "/services" },
    { label: "Sales", href: "/ai-agent" },
    { label: "Operations", href: "/services" },
    { label: "Customer Support", href: "/contact" },
    { label: "Enterprise", href: "/services" },
  ],
  resources: [
    { label: "Documentation", href: "/services" },
    { label: "Blog", href: "/newsroom" },
    { label: "Case Studies", href: "/newsroom" },
    { label: "Community", href: "/contact" },
    { label: "Partners", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Press Kit", href: "/newsroom" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/uywnix/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/UYWNIX", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/uywnix", label: "Instagram" },
  { icon: Github, href: "https://github.com/Tayyabhusayn/uywnix", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative container mx-auto px-6 pt-24 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-3xl font-black tracking-tight">UYWNIX</span>
              <Sparkles className="w-5 h-5 text-violet-400" />
            </Link>
            
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Next-generation AI infrastructure for the modern enterprise. 
              Build, deploy, and scale intelligent agents in minutes.
            </p>

            {/* Newsletter */}
            <div className="max-w-md">
              <p className="text-sm font-semibold text-white mb-3">Stay updated</p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500">
              <span>© 2026 UYWNIX. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/services" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/services" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/services" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute right-8 bottom-24 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
}
