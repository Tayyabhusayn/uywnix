import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            UYWNIX
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products/uywni" className="hover:text-primary/80 transition-colors">Social App</Link>
            <Link href="/ai-agent" className="hover:text-primary/80 transition-colors">AI Agent</Link>
            <Link href="/newsroom" className="hover:text-primary/80 transition-colors">Newsroom</Link>
            <Link href="#contact" className="hover:text-primary/80 transition-colors">Contact</Link>
          </div>
          <Link href="/products/uywni" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          The Next Generation <br/> Social Media
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          UYWNIX reimagines connection. AI-first, privacy-focused, and built for the future of decentralized interaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products/uywni" className="bg-primary text-primary-foreground h-12 px-8 rounded-full flex items-center justify-center font-medium text-lg hover:opacity-90 transition-opacity">
            Explore UYWNI
          </Link>
          <Link href="/ai-agent" className="border border-input bg-background h-12 px-8 rounded-full flex items-center justify-center font-medium text-lg hover:bg-accent hover:text-accent-foreground transition-colors">
            Business AI
          </Link>
        </div>
      </section>

      {/* AI First Section */}
      <section className="w-full py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">AI First Engineering</h2>
            <p className="text-muted-foreground">Automating the future of business and connection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl">🤖</div>
              <h3 className="text-xl font-bold mb-2">Business Automation</h3>
              <p className="text-muted-foreground">Deploy intelligent agents to handle customer support, lead gen, and internal workflows autonomously.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl">🔗</div>
              <h3 className="text-xl font-bold mb-2">Decentralized Social</h3>
              <p className="text-muted-foreground">UYWNI App gives power back to users with blockchain-verified identity and content ownership.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl">⚡</div>
              <h3 className="text-xl font-bold mb-2">Global Tech Solutions</h3>
              <p className="text-muted-foreground">Expert software development services for India, UAE, EU, USA, and Australia.</p>
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
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 UYWNIX. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
