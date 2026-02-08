import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UYWNIX - #1 Global Technology Solutions | AI, Blockchain & Marketing",
  description: "UYWNIX is the global leader in AI Agents, Business Automation, and Digital Marketing. Transforming businesses in India, UAE, USA, and worldwide.",
  keywords: "AI Agents, Business Automation, Global Technology Solutions, Digital Marketing, Blockchain, Web3, UYWNI Social App, Next Gen Tech",
  openGraph: {
    title: "UYWNIX - Global Tech & AI Solutions",
    description: "Empowering businesses with AI Agents, Automation, and Next-Gen Marketing.",
    type: "website",
    locale: "en_US",
    siteName: "UYWNIX",
  },
  twitter: {
    card: "summary_large_image",
    title: "UYWNIX - AI & Global Tech",
    description: "Leading the revolution in AI Agents and Business Automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
