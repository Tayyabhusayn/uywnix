import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Websites, Software, AI Automation & Model Training",
  description: "UYWNIX delivers marketing automation, AI model training and fine-tuning, AI agents, software development, websites, and prototypes. One team, every build.",
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    icon: "📣",
    title: "Marketing Automation",
    desc: "AI-powered campaigns that nurture, qualify, and convert leads on autopilot — email, WhatsApp, and ads in one system."
  },
  {
    icon: "🧠",
    title: "AI Model Training & Fine-Tuning",
    desc: "Custom AI models trained and fine-tuned on your own data — for small companies and enterprises alike, with secure deployment options."
  },
  {
    icon: "🤖",
    title: "AI Agents & Chatbots",
    desc: "Autonomous agents and intelligent chatbots that handle support, sales, and operations around the clock."
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Custom web and mobile software, built fast with AI-augmented engineering — and maintained properly after launch."
  },
  {
    icon: "📦",
    title: "Prototype Building",
    desc: "Turn your idea into a clickable prototype in days — test it with real users before spending on a full build."
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
              "serviceType": "AI Automation Company",
              "provider": {
                "@type": "Organization",
                "name": "UYWNIX",
                "url": "https://uywnix.com"
              },
              "areaServed": ["Worldwide", "London", "New York", "Dubai", "Singapore", "Toronto", "Sydney", "Berlin", "Paris", "Amsterdam", "San Francisco", "Los Angeles", "Mumbai", "Bengaluru", "Delhi", "Karachi", "Dhaka", "Riyadh", "Kuala Lumpur", "Hong Kong"],
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
                  "name": "What services does UYWNIX provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UYWNIX provides marketing automation, AI model training and fine-tuning on your own data, AI agents and chatbots, software development, website development, and prototype building."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much do UYWNIX services cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Automation plans start at $999 per month. Websites and landing pages start at $499 with launch offers. Enterprise model training and custom builds are quoted per project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can UYWNIX train AI models on our data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. UYWNIX trains and fine-tunes custom AI models on your own data for small companies and enterprises, including secure and on-premise deployment options."
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
