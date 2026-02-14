import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Automation Services",
  description: "UYWNIX offers advanced AI Agents, Workflow Automation, Web3 Development, and Cybersecurity audits to scale your business globally.",
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    icon: "🤖",
    title: "AI Sales Agents",
    desc: "Autonomous bots that qualify leads, handle objections, and book meetings directly on your calendar."
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "Connect your CRM, Email, and Slack. We build invisible pipelines that make your operations run on autopilot."
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Next-gen mobile and web apps built with React Native and AI backends. Fast, scalable, and beautiful."
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Enterprise-grade security audits. We ensure your automated infrastructure is bulletproof."
  },
  {
    icon: "📈",
    title: "AI Marketing",
    desc: "Data-driven ad campaigns and content generation at scale. Reach global markets instantly."
  },
  {
    icon: "🔗",
    title: "Blockchain & Web3",
    desc: "Decentralized applications (dApps) and smart contracts for the future of finance and ownership."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">UYWNIX</Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            We provide end-to-end technology solutions designed for the AI era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-secondary/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-muted-foreground mb-8">Take our free audit to find the perfect automation strategy for your business.</p>
          <Link href="/audit" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            Start Free Audit
          </Link>
        </div>
      </main>
    </div>
  );
}
