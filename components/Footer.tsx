import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-12 text-sm text-gray-500">
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-2xl font-black text-black mb-6">
             UYWNIX
          </h4>
          <p className="max-w-[200px]">Next-generation AI Global Infrastructure for the modern enterprise.</p>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-[10px]">Product</h4>
          <ul className="space-y-3">
            <li><Link href="/ai-agent" className="hover:text-black transition">Platform</Link></li>
            <li><Link href="/pricing" className="hover:text-black transition">Pricing</Link></li>
            <li><Link href="/services" className="hover:text-black transition">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-[10px]">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/newsroom" className="hover:text-black transition">Newsroom</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact Form</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-[10px]">Company</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-black transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-[10px]">Social</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/company/uywnix/" target="_blank" className="hover:text-black transition">LinkedIn</a>
            <a href="https://x.com/UYWNIX" target="_blank" className="hover:text-black transition">X (Twitter)</a>
            <a href="https://www.instagram.com/uywnix" target="_blank" className="hover:text-black transition">Instagram</a>
            <a href="https://bsky.app/profile/uywnix.bsky.social" target="_blank" className="hover:text-black transition">Bluesky</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
        © 2026 UYWNIX. Global Technology Solutions. Updated Feb 14.
      </div>
    </footer>
  );
}
