import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - UYWNIX AI Solutions",
  description: "AI Automation solutions for Real Estate, Healthcare, E-Commerce, Finance, Legal, and Education sectors.",
};

const industries = [
  {
    icon: "🏠",
    title: "Real Estate",
    problem: "Agents waste hours answering 'Is this available?'",
    solution: "Our AI Agents qualify leads instantly, book viewings 24/7, and follow up automatically."
  },
  {
    icon: "🏥",
    title: "Healthcare",
    problem: "Patient support is slow and administrative costs are high.",
    solution: "AI schedulers handle appointments, prescription refills, and patient FAQs securely (HIPAA compliant)."
  },
  {
    icon: "🛍️",
    title: "E-Commerce",
    problem: "Cart abandonment and high support volume.",
    solution: "Instant support bots that handle returns, tracking, and personalized product recommendations."
  },
  {
    icon: "💰",
    title: "Finance & Fintech",
    problem: "Manual data entry and compliance checks.",
    solution: "Automated document processing (OCR), fraud detection, and instant customer verification (KYC)."
  },
  {
    icon: "⚖️",
    title: "Legal",
    problem: "Hours spent on client intake and contract review.",
    solution: "AI automates client onboarding forms and summarizes lengthy legal documents in seconds."
  }
];

export default function IndustriesPage() {
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
          <h1 className="text-5xl font-bold tracking-tight mb-6">Industries We Transform</h1>
          <p className="text-xl text-muted-foreground">
            Tailored AI automation strategies for high-growth sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{ind.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{ind.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">The Problem</p>
                  <p className="text-sm text-muted-foreground">{ind.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Our Solution</p>
                  <p className="text-sm text-muted-foreground">{ind.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-secondary/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-muted-foreground mb-8">Our automation frameworks are adaptable to any business model.</p>
          <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            Talk to an Expert
          </Link>
        </div>
      </main>
    </div>
  );
}
