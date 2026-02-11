import Link from "next/link";
import RoiCalculator from "@/components/RoiCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Navigation */}
      <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white">
            UYWNIX<span className="text-blue-500">.</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300">
            <Link href="/products/uywni" className="hover:text-white transition-colors">Social App</Link>
            <Link href="/ai-agent" className="hover:text-white transition-colors">AI Agent</Link>
            <Link href="/newsroom" className="hover:text-white transition-colors">Newsroom</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <Link href="/products/uywni" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-32 md:py-48 text-center container mx-auto px-4 relative">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 animate-pulse">
          🚀 THE FUTURE OF WORK IS HERE
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white leading-tight">
          Automate Your <br/>
          <span className="text-gradient">Entire Business.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          We build <b>AI Employees</b> that work 24/7. From Customer Support to High-Ticket Sales, replace manual busywork with intelligent code.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/audit" className="bg-blue-600 text-white h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Start Free Audit
          </Link>
          <Link href="/ai-agent" className="glass-card text-white h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-white/10 transition-all">
            Try AI Agent
          </Link>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="w-full py-20 relative">
        <div className="absolute inset-0 bg-blue-900/20 blur-[100px] -z-10"></div>
        <RoiCalculator />
      </section>

      {/* AI First Section - Services */}
      <section className="w-full py-32" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Global Technology Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Officially automating all business operations with AI. We build the workforce of the future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/ai-agent" className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all group cursor-pointer block">
              <div className="h-16 w-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-2xl font-bold mb-3 text-white">AI Employees</h3>
              <p className="text-gray-400 leading-relaxed">Replace traditional support with intelligent AI Agents that handle inquiries, bookings, and sales 24/7.</p>
            </Link>
            <div className="glass-card p-8 rounded-3xl hover:border-purple-500/50 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Workflow Automation</h3>
              <p className="text-gray-400 leading-relaxed">End-to-end automation. Connect your CRM, Slack, and Email to run your operations on autopilot.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl hover:border-green-500/50 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Cybersecurity</h3>
              <p className="text-gray-400 leading-relaxed">Enterprise-grade security audits. We ensure your automated infrastructure is bulletproof.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl hover:border-orange-500/50 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-white">AI Marketing</h3>
              <p className="text-gray-400 leading-relaxed">Data-driven marketing strategies powered by predictive AI to maximize ROI and global reach.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl hover:border-pink-500/50 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-2xl font-bold mb-3 text-white">App Development</h3>
              <p className="text-gray-400 leading-relaxed">High-performance mobile and web applications tailored for scalability and user experience.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl hover:border-yellow-500/50 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Blockchain & Web3</h3>
              <p className="text-gray-400 leading-relaxed">Building the decentralized future with secure, transparent, and scalable blockchain infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h4 className="text-2xl font-black text-white mb-6">UYWNIX</h4>
            <p className="text-gray-500">Global Technology Solutions. Automating the workforce of the future.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/products/uywni" className="hover:text-white transition">Social App</Link></li>
              <li><Link href="/ai-agent" className="hover:text-white transition">AI Agents</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/newsroom" className="hover:text-white transition">Newsroom</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          © 2026 UYWNIX. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
