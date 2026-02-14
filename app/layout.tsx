import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmartChatbot from "@/components/SmartChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://uywnix.com'),
  title: {
    default: "UYWNIX - #1 Global Technology Solutions | AI, Blockchain & Marketing",
    template: "%s | UYWNIX"
  },
  description: "UYWNIX is the global leader in AI Agents, Business Automation, and Digital Marketing. Transforming businesses in India, UAE, USA, and worldwide.",
  keywords: "AI Agents, Business Automation, Global Technology Solutions, Digital Marketing, Blockchain, Web3, UYWNI Social App, Next Gen Tech",
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
              "description": "Global AI Automation Agency",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
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
        {children}
        <SmartChatbot />
      </body>
    </html>
  );
}
