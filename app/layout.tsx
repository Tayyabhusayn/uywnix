import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uywnix.com'),
  title: {
    default: "UYWNIX - AI Automation Company | Global Tech Solutions",
    template: "%s | UYWNIX"
  },
  description: "UYWNIX is a premier AI Automation Company providing AI Sales Agents, AI Voice Employees, and Workflow Automation. Serving businesses in London, New York, Dubai, Singapore, Toronto, Sydney, and 50+ cities worldwide with ROI-driven AI solutions.",
  keywords: "AI Automation Company, AI Sales Agents, AI Voice Employees, Business Process Automation, Custom AI Solutions, Digital Transformation, AI Chatbots for Business, Dubai AI Company, USA AI Automation, UK AI Automation, AI Agency London, AI Automation New York, AI Automation Singapore, AI Automation Dubai, AI Automation Toronto, AI Automation Sydney, Real Estate AI Automation, AI for Legal Firms, Solar Industry AI, Automated Lead Qualification, 24/7 AI Customer Support, Enterprise AI Solutions, AI Automation Services Worldwide",
  authors: [{ name: "UYWNIX Team" }],
  creator: "UYWNIX",
  publisher: "UYWNIX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "UYWNIX - Global Tech & AI Solutions",
    description: "Empowering businesses with AI Agents, Automation, and Next-Gen Marketing.",
    url: 'https://uywnix.com',
    siteName: "UYWNIX",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UYWNIX AI Automation',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UYWNIX - AI & Global Tech",
    description: "Leading the revolution in AI Agents and Business Automation.",
    images: ['/og-image.png'],
    creator: "@UYWNIX",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UYWNIX",
              "url": "https://uywnix.com",
              "logo": "https://uywnix.com/logo.png",
              "description": "Global AI Automation Company",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@uywnix.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/uywnix/",
                "https://x.com/UYWNIX",
                "https://www.instagram.com/uywnix",
                "https://www.facebook.com/profile.php?id=61557697956190"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
