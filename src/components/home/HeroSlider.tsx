import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    rotatingText: "AI Operating Systems.",
    imageDark: "/hero-slide-ai-os.png",
    imageLight: "/ai-integration-hero.jpg",
    tag: "AI Engineering",
    desc: "We design and build intelligent systems that understand, decide, and act — turning your ideas into real business outcomes.",
  },
  {
    rotatingText: "Intelligent Automation.",
    imageDark: "/hero-slide-automation.png",
    imageLight: "/automation-hero.png",
    tag: "Business Automation",
    desc: "We connect your tools, automate your workflows, and let systems handle the work that slows your team down.",
  },
  {
    rotatingText: "Custom Software.",
    imageDark: "/hero-slide-software.png",
    imageLight: "/custom-software-hero.jpg",
    tag: "Software Development",
    desc: "We engineer bespoke platforms, SaaS products, and applications built around the way your business actually works.",
  },
  {
    rotatingText: "Smart Chatbots.",
    imageDark: "/hero-slide-chatbots.png",
    imageLight: "/smart-chatbots-hero.png",
    tag: "Conversational AI",
    desc: "Deploy hyper-realistic AI voice agents and context-aware bots to handle inbound support and outbound sales.",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsDark(root.classList.contains("dark"));

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="w-full bg-[#f8f9fa] dark:bg-slate-950 relative overflow-hidden flex flex-col pt-12 pb-24 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="flex-1 flex flex-col lg:flex-row items-center w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 py-4 lg:py-6 gap-8">
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center relative z-20">
          <div className="w-full max-w-2xl min-h-[400px] flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
                <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
                  {slide.tag}
                </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1] font-extrabold tracking-tight mb-6 text-[#0a192f] dark:text-white">
              We build <br />
              <div className="min-h-[110px] sm:min-h-[120px] lg:min-h-[145px] mt-2 overflow-visible flex items-start">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentSlide}
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="text-[#00bfff] block origin-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {slide.rotatingText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-[480px] mb-8 leading-relaxed min-h-[100px] md:min-h-[90px]">
              {slide.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 lg:mb-12">
              <a href="/contact" className="w-full sm:w-auto">
                <Button className="bg-[#0a0f1c] hover:bg-black text-white rounded-xl px-8 h-14 text-base w-full shadow-lg font-medium">
                  Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/process" className="w-full sm:w-auto">
                <Button variant="outline" className="rounded-xl px-8 h-14 text-base w-full border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">
                  Explore Our Work
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-between gap-2 sm:gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[#0a192f] dark:text-white transition-colors">100+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">Systems<br/>Built</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800 shrink-0 transition-colors"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[#0a192f] dark:text-white transition-colors">8+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">Industries<br/>Served</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800 shrink-0 transition-colors"></div>
              <div className="hidden md:flex flex-col gap-1">
                <span className="text-3xl font-bold text-[#0a192f] dark:text-white transition-colors">4+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">Countries<br/>Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-[50%] xl:w-[55%] relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[600px]">
          {/* Ambient glow behind the image, blends the dark artwork into either theme */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[70%] aspect-square rounded-full bg-gradient-to-br from-[#00bfff]/20 via-[#00bfff]/8 to-transparent blur-3xl" />
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={`img-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full lg:absolute max-w-[750px] flex justify-center lg:justify-end lg:-translate-y-20 xl:-translate-y-24 relative z-10"
            >
              <img 
                src={isDark ? slide.imageDark : slide.imageLight} 
                alt={slide.rotatingText}
                className="w-full h-full object-contain"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 98% 98% at 50% 50%, black 82%, transparent 105%)",
                  maskImage:
                    "radial-gradient(ellipse 98% 98% at 50% 50%, black 82%, transparent 105%)",
                }}
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 mt-12 flex items-center justify-between z-20 relative">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-[#00bfff] w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" aria-label="Previous slide">
            <ArrowLeft className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" aria-label="Next slide">
            <ArrowRight className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
