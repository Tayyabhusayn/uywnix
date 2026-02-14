import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - AI Automation & Agents",
  description: "Affordable and scalable AI automation plans for businesses of all sizes. From Starter to Enterprise, automate your workflows today.",
  alternates: {
    canonical: '/pricing',
  },
};

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/month",
    desc: "Perfect for small businesses starting with automation.",
    features: [
      "1 AI Support Agent (Web)",
      "Instant FAQ Resolution",
      "Email Lead Capture",
      "Basic Analytics",
      "Email Support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Growth",
    price: "$2,997",
    period: "/month",
    desc: "Full-scale automation for growing companies.",
    features: [
      "Omnichannel Agent (Web + WhatsApp)",
      "CRM Integration (HubSpot/Salesforce)",
      "AI Voice Calling (Inbound)",
      "Advanced Lead Qualification",
      "Priority 24/7 Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for large organizations.",
    features: [
      "Unlimited AI Agents",
      "Custom LLM Fine-Tuning",
      "On-Premise Deployment",
      "Dedicated Account Manager",
      "SLA Guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
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
          <h1 className="text-5xl font-bold tracking-tight mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Invest in automation today, save thousands tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular ? 'border-primary bg-secondary/10 shadow-2xl scale-105 z-10' : 'border-border bg-card'}`}>
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? 'bg-primary text-primary-foreground hover:opacity-90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted-foreground mb-4">Need a custom quote?</p>
          <Link href="/contact" className="text-primary font-bold hover:underline">
            Talk to our Sales Team &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
