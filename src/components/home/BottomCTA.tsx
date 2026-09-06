import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomCTA() {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="bg-[#f8fafc] dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#00bfff]/10 dark:bg-[#00bfff]/20 flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-[#00bfff]" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to automate and scale your business?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Book a free strategy call and let's build your AI system today.
              </p>
            </div>
          </div>

          <a href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button className="bg-[#0a192f] hover:bg-black text-white rounded-xl px-8 h-12 w-full">
              Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>

        </div>
      </div>
    </div>
  );
}
