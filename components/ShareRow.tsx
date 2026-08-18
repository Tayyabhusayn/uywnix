"use client";

import { useState } from "react";
import { Linkedin, Twitter, MessageCircle, Facebook, Link2, Check } from "lucide-react";

export default function ShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const btn =
    "px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all";

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#0077b5] text-white`}>
        <Linkedin className="w-4 h-4" /> LinkedIn
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className={`${btn} bg-white text-slate-900`}>
        <Twitter className="w-4 h-4" /> X
      </a>
      <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#25D366] text-white`}>
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#1877F2] text-white`}>
        <Facebook className="w-4 h-4" /> Facebook
      </a>
      <button onClick={copyLink} className={`${btn} bg-white/5 border border-white/15 text-white`}>
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Link2 className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
