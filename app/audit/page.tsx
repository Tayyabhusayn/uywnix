import Link from "next/link";
import AuditWizard from "@/components/AuditWizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Audit | Free Automation Analysis",
  description: "Get a custom analysis of your business workflows. Find out exactly where AI can save you money and increase revenue.",
};

export default async function AuditPage({
  searchParams,
}: {
  searchParams: Promise<{ goal?: string }>;
}) {
  const params = await searchParams;
  const goal = params.goal;
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Intelligence Audit</h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Our AI engine will analyze your operational structure and identify high-value automation opportunities.
          </p>
          {goal && (
            <p className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-sm text-violet-300">
              🎯 Your goal: <span className="font-semibold text-white">{goal}</span>
            </p>
          )}
        </div>

        <AuditWizard />
      </main>
    </div>
  );
}
