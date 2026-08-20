import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - UYWNIX AI",
  description: "The page you are looking for does not exist. Explore our AI services.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center flex-col p-4 relative overflow-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center relative z-10 max-w-lg">
        <div className="w-24 h-24 bg-white border border-slate-100 shadow-xl rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl animate-bounce">
          🤖
        </div>
        <h1 className="text-8xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">System Error: Page Not Located</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The autonomous agent could not find the requested resource. It may have been moved or deleted from the mainframe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-lg hover:-translate-y-0.5"
          >
            Return Home
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition shadow-sm hover:shadow-md"
          >
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
}
