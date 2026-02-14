import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents for Business - Demo | UYWNIX",
  description: "Experience the power of UYWNIX AI Agents. See how autonomous business automation can transform your customer support, sales, and operations.",
  alternates: {
    canonical: '/ai-agent',
  },
};

export default function AiAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
