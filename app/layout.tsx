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
    images: [
      {
        url: 'https://uywnix.com/og-image.png', // We need to add this image
        width: 1200,
        height: 630,
        alt: 'UYWNIX AI Automation',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UYWNIX - AI & Global Tech",
    description: "Leading the revolution in AI Agents and Business Automation.",
    images: ['https://uywnix.com/og-image.png'],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
