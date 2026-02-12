import Starfield from "@/components/Starfield";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Navigation - Dark for Hero */}
      <nav className="w-full bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tight flex items-center gap-1 text-white">
            UYWNIX
          </Link>
          
          <div className="hidden md:flex space-x-10 text-sm font-semibold text-gray-300">
            <Link href="/services" className="hover:text-white transition">Solutions</Link>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="/newsroom" className="hover:text-white transition">Resources</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/ai-agent" className="text-sm font-bold text-white hover:underline">Log in</Link>
            <Link href="/audit" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition shadow-lg hover:shadow-white/20">
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section (Space Theme) */}
      <section className="relative w-full py-32 md:py-48 text-center overflow-hidden !bg-black">
        <div className="absolute inset-0 bg-black -z-20"></div>
        <Starfield />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold mb-8 animate-pulse backdrop-blur-sm">
            🚀 THE FUTURE OF WORK IS HERE
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white leading-[0.9] drop-shadow-2xl">
            Automate your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">entire business.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            From tasks and workflows to apps and systems, build and automate anything in one powerful visual platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/audit" className="bg-white text-black h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-gray-200 transition shadow-xl hover:scale-105 transform duration-200">
              Get Started Free
            </Link>
            <Link href="/ai-agent" className="h-14 px-10 rounded-full flex items-center justify-center font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition backdrop-blur-sm">
              Watch Demo
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Solutions Grid (Make.com Style - White) */}

      {/* Solutions Grid (Make.com Style) */}
      <section className="container mx-auto px-4 pb-32">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">SOLUTIONS ACROSS YOUR BUSINESS</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Item 1 */}
          <Link href="/services" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">📢</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Marketing</h3>
            <p className="text-sm text-gray-500">Automate campaigns & content.</p>
          </Link>
          
          {/* Item 2 */}
          <Link href="/ai-agent" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">📈</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Sales</h3>
            <p className="text-sm text-gray-500">Qualify leads 24/7.</p>
          </Link>
          
          {/* Item 3 */}
          <Link href="/services" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">⚙️</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Operations</h3>
            <p className="text-sm text-gray-500">Streamline internal workflows.</p>
          </Link>

          {/* Item 4 */}
          <Link href="/contact" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">🎧</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Customer Exp.</h3>
            <p className="text-sm text-gray-500">Instant AI support agents.</p>
          </Link>

          {/* Item 5 */}
          <Link href="/services" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">💰</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">Finance</h3>
            <p className="text-sm text-gray-500">Invoice processing & OCR.</p>
          </Link>

          {/* Item 6 */}
          <Link href="/services" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">💻</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">IT</h3>
            <p className="text-sm text-gray-500">System integrations.</p>
          </Link>
          
           {/* Item 7 */}
           <Link href="/services" className="group block">
            <div className="text-3xl mb-4 text-black group-hover:-translate-y-1 transition-transform duration-300">👥</div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition">HR</h3>
            <p className="text-sm text-gray-500">Onboarding automation.</p>
          </Link>

           {/* Item 8 */}
           <Link href="/services" className="group block">
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
        </div>
      </footer>
    </main>
  );
}
