import { ArrowRight, Wrench, ShoppingCart, Home, Heart, TrendingUp } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      id: "b2b-services",
      icon: <Wrench className="w-5 h-5 text-[#00bfff]" />,
      title: "B2B Services",
      desc: "Automate leads, bookings and customer support.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    },
    {
      id: "fashion-retail",
      icon: <ShoppingCart className="w-5 h-5 text-[#00bfff]" />,
      title: "Fashion & Retail",
      desc: "Boost sales with AI agents and smart automation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
    {
      id: "real-estate",
      icon: <Home className="w-5 h-5 text-[#00bfff]" />,
      title: "Real Estate",
      desc: "Capture, qualify, and nurture leads automatically.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      id: "healthcare",
      icon: <Heart className="w-5 h-5 text-[#00bfff]" />,
      title: "Healthcare",
      desc: "Streamline patient communication and admin.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      id: "finance-insurance",
      icon: <TrendingUp className="w-5 h-5 text-[#00bfff]" />,
      title: "Finance & Insurance",
      desc: "Automate workflows and enhance client experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 justify-center">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
              Industries We Serve
            </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-6">
          Built for <span className="text-[#00bfff]">real-world industries.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto mb-16">
          We don't just build software. We engineer systems that solve real operational bottlenecks in specific industries.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50">
              <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 dark:opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="mb-4">{ind.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{ind.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{ind.desc}</p>
                <a href={`/industries/${ind.id}`} className="text-[#00bfff] text-sm font-semibold flex items-center hover:text-[#0099cc]">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
