import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Form | Get in Touch with UYWNIX",
  description: "Contact UYWNIX for inquiries about AI Agents, Business Automation, and Global Tech Solutions. We serve clients across UAE, India, USA, and UK.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">UYWNIX</Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-6">Let's Automate Your Business.</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to deploy your AI workforce? Send us a message and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl">📧</div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <a href="mailto:contact@uywnix.com" className="text-muted-foreground hover:text-primary transition">contact@uywnix.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl">🌍</div>
                <div>
                  <h3 className="font-bold text-lg">Global Locations</h3>
                  <p className="text-muted-foreground">India • UAE • USA • UK • Australia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
            <form action="mailto:contact@uywnix.com" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Name</label>
                <input type="text" name="name" className="w-full p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input type="email" name="email" className="w-full p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
