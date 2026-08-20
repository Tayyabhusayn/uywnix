import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents for Business - Demo | UYWNIX",
  description: "Experience the power of UYWNIX AI Agents. See how autonomous business automation can transform your customer support, sales, and operations.",
  alternates: {
    canonical: '/ai-agent',
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UYWNIX AI Agents",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI agents for sales, support, and workflow automation — custom chatbots, lead qualification, and 24/7 customer handling.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "UYWNIX Private Limited" },
};

export default function AiAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      {children}
    </>
  );
}
