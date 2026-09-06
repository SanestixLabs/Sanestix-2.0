import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Sanestix transformed the way we handle customer calls. Our calendar is always full now.",
      name: "Jason Miller",
      role: "BlueFlow Plumbing, Seattle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      text: "Professional, reliable, and truly understand automation. Highly recommend!",
      name: "Sarah Ahmed",
      role: "E-commerce Founder, UK",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
      text: "They built an AI system that actually works for our business. Incredible team!",
      name: "Daniel Kim",
      role: "Real Estate Agency, Canada",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-4 mb-6 justify-center">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
              Testimonials
            </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-16">
          What our <span className="text-[#00bfff]">clients say.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col h-full transition-colors">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                "{rev.text}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{rev.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{rev.role}</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
