import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Automation Services | AI Sales Agents & Voice Employees",
  description: "UYWNIX provides the world's best AI Automation services. We deploy AI Sales Agents, AI Voice Employees, and Custom Workflow Automation to scale businesses in Dubai, USA, and UK. Get 10x ROI with our expert AI agency.",
  keywords: "Best AI Automation Services, AI Sales Agency, Deploy AI Sales Agents, AI Voice Employee for Business, Lead Qualification Automation, CRM Workflow Integration, High-Ticket AI Solutions",
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    icon: "🤖",
    title: "AI Sales Agents",
    desc: "The best AI Sales Agents for lead qualification. Our autonomous bots handle cold outreach, qualify prospects 24/7, and book high-ticket meetings directly into your calendar with 100% accuracy."
  },
  {
    icon: "📞",
    title: "AI Voice Employees",
    desc: "Hire human-like AI Voice Employees for your business. Perfect for inbound support, appointment setting, and customer follow-ups. Our voice bots sound natural and handle complex logic flawlessly."
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "End-to-end business process automation. We build invisible pipelines connecting your CRM, Email, and internal tools to eliminate manual work and save your team 20+ hours every week."
  },
  {
    icon: "🛡️",
    title: "Enterprise Cybersecurity",
    desc: "Elite security audits and threat detection for automated infrastructures. We ensure your AI systems and customer data are protected by enterprise-grade encryption and HIPAA/GDPR compliance."
  },
  {
    icon: "📈",
    title: "AI Marketing Scale",
    desc: "Dominate your market with AI-driven content generation and ad management. We use advanced data models to optimize your marketing spend and reach global audiences across all social platforms."
  },
  {
    icon: "🔗",
    title: "Custom AI Development",
    desc: "High-performance Next.js and React Native applications with integrated AI backends. We build custom software solutions tailored to your specific business needs and scaling goals."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-24">
        {/* Service Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Automation Agency",
              "provider": {
                "@type": "Organization",
                "name": "UYWNIX",
                "url": "https://uywnix.com"
              },
              "areaServed": ["World", "Dubai", "USA", "India"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services",
                "itemListElement": services.map(s => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "description": s.desc
                  }
                }))
              }
            }),
          }}
        />
        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is an AI Sales Agent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI Sales Agent is an autonomous system designed to qualify leads, handle customer objections, and book meetings 24/7 without human intervention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much can I save with AI Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses typically see a 60% reduction in operational costs and a 10x return on investment (ROI) within the first 6 months of deployment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are AI Voice Employees compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Voice Employees are built with HIPAA and GDPR compliance in mind, ensuring secure and private data handling."
                  }
                }
              ]
            }),
          }}
        />
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
      </main>
    </div>
  );
}
