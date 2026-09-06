import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <div className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="bg-[#0f172a] rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row relative">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 md:w-2/3 md:left-1/3">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80" 
              alt="Plumber fixing pipes" 
              className="w-full h-full object-cover opacity-40 md:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center md:w-3/5 lg:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00bfff]"></div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#00bfff] uppercase">
                Case Study
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              How a plumbing business booked 3x more jobs with AI
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed max-w-md">
              See how we helped a Seattle-based plumbing company automate calls, qualify leads, and fill their calendar — 24/7.
            </p>
            
            <a href="/process">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-xl px-6 h-12 w-max font-semibold text-sm">
                Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Right Stats */}
          <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center md:w-2/5 lg:w-1/2 md:items-end">
            <div className="flex flex-col gap-8 md:text-right">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#00bfff] mb-1">3x</div>
                <div className="text-xs text-slate-400 font-medium">More Bookings</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#00bfff] mb-1">70%</div>
                <div className="text-xs text-slate-400 font-medium">Less Missed Calls</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#00bfff] mb-1">24/7</div>
                <div className="text-xs text-slate-400 font-medium">AI Receptionist</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
