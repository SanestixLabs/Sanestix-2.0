import { Search, PenTool, Code2, TestTube2, Rocket, RefreshCcw } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-[#00bfff]" />,
      step: "01",
      title: "Discovery & Audit",
      desc: "In 30 minutes, we audit your current lead capture, identify automation gaps, and map the exact AI system that will drive results.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-[#00bfff]" />,
      step: "02",
      title: "System Architecture",
      desc: "We design your entire system — website architecture, chatbot flows, automation sequences, and CRM setup — tailored to your workflow.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#00bfff]" />,
      step: "03",
      title: "Development & Training",
      desc: "Our team builds your site and trains the AI on your products, pricing, tone, and business logic. You review every decision.",
    },
    {
      icon: <TestTube2 className="w-6 h-6 text-[#00bfff]" />,
      step: "04",
      title: "QA & Real-World Testing",
      desc: "We run real-world tests on every chatbot scenario, automation flow, and CRM integration — and refine until everything is perfect.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#00bfff]" />,
      step: "05",
      title: "Deployment",
      desc: "Smooth deployment to production. Your AI system goes live and immediately starts capturing and converting leads — from hour one.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-[#00bfff]" />,
      step: "06",
      title: "Optimization & Retraining",
      desc: "Monthly performance reviews, AI retraining, and proactive updates ensure your system keeps outperforming as your business grows.",
    }
  ];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-4 mb-6 justify-center">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
              How It Works
            </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-6">
          From idea to impact — <span className="text-[#00bfff]">in 6 simple steps.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto mb-20">
          We turn your goals into intelligent systems, designed to deliver real results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-start bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#00bfff]/10 dark:bg-[#00bfff]/20 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <div className="text-[10px] font-bold text-[#00bfff] uppercase tracking-widest mb-3">Step {step.step}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
