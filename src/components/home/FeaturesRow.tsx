import { Zap, Archive, BarChart2, Sparkles } from "lucide-react";

export default function FeaturesRow() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#00bfff]" strokeWidth={2} />,
      title: "Save Time",
      description: "Automate repetitive work and focus on what matters.",
    },
    {
      icon: <Archive className="w-6 h-6 text-[#00bfff]" strokeWidth={2} />,
      title: "Reduce Costs",
      description: "Do more with less using intelligent automation.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#00bfff]" strokeWidth={2} />,
      title: "Scale Faster",
      description: "Systems that grow with your business.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#00bfff]" strokeWidth={2} />,
      title: "Smarter Decisions",
      description: "Turn data into actionable insights with AI.",
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00bfff]/10 dark:bg-[#00bfff]/20 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">{feature.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[250px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
