import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Agent - UYWNIX Automation",
  description: "Automate your business with UYWNIX AI Agents. Customer support, lead generation, and workflow automation.",
};

export default function AiAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            UYWNIX
          </Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Autonomous Business Agents</h1>
          <p className="text-xl text-muted-foreground">
            Stop doing busy work. Let our AI agents handle your customer interactions, data entry, and sales qualification 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chat Demo Placeholder */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm min-h-[400px] flex flex-col">
            <div className="border-b border-border pb-4 mb-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-semibold text-sm">Sales Agent (Active)</span>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex gap-3">
                <div className="bg-secondary p-3 rounded-lg rounded-tl-none text-sm max-w-[80%]">
                  Hello! How can I help you scale your business today?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none text-sm max-w-[80%]">
                  I need to automate my customer support tickets.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-secondary p-3 rounded-lg rounded-tl-none text-sm max-w-[80%]">
                  I can help with that. Our support agent integrates with Zendesk, Intercom, and Email. It resolves 60% of tickets instantly. Would you like a demo?
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="h-10 bg-secondary rounded-md w-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Your business never sleeps. Neither do our agents.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground">Connects with your existing CRM, Email, and Slack.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Cost Effective</h3>
              <p className="text-muted-foreground">Reduce operational costs by up to 40% while improving response times.</p>
            </div>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold self-start hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
