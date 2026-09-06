const fs = require('fs');
const content = \            We design and engineer custom platforms, SaaS products, dashboards, and applications built around the way your business actually works.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 lg:mb-12">
            <a href="/contact" className="w-full sm:w-auto">
              <Button className="bg-[#0a0f1c] hover:bg-black text-white rounded-xl px-8 h-14 text-base w-full shadow-lg font-medium">
                Build With Sanestix <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="rounded-xl px-8 h-14 text-base w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">
                Discuss Your Idea
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-6 pt-6 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-[#0a192f]">100+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 leading-tight">Systems<br/>Built</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200 shrink-0"></div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-[#0a192f]">8+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 leading-tight">Industries<br/>Served</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200 shrink-0"></div>
            <div className="hidden md:flex flex-col gap-1">
              <span className="text-3xl font-bold text-[#0a192f]">4+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 leading-tight">Countries<br/></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] xl:w-[55%] relative z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="relative w-full max-w-[750px]">
            <img src="/hero1.png" alt="AI Engineering Graphic" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
);

const Slide5 = () => (
  <div className="flex-1 flex flex-col lg:flex-row items-center relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 py-4 lg:py-6 gap-8">
    <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center relative z-20">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Restaurants & Hospitality
            </p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.05] font-extrabold tracking-tight mb-6 text-[#0a192f]">
          Your restaurant, <br />
          running <span className="text-[#00bfff]">smarter.</span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-[480px] mb-8 leading-relaxed">
          From AI calling agents to WhatsApp ordering and automated reservations, we build systems that keep your restaurant moving — so you can focus on what matters most.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 lg:mb-12">
          <a href="/industries/food-restaurants" className="w-full sm:w-auto">
            <Button className="bg-[#0a0f1c] hover:bg-black text-white rounded-xl px-8 h-14 text-base w-full shadow-lg font-medium">
              Explore Restaurant Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="/process" className="w-full sm:w-auto">
            <Button variant="outline" className="rounded-xl px-8 h-14 text-base w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">
              See How It Works
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-6 pt-6 border-t border-slate-100">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-[#0a192f]">3x</span>
            <span className="text-[10px] sm:text-xs text-slate-500 leading-tight">More<br/>Reservations</span>
          </div>
          <div className="w-[1px] h-12 bg-slate-200 shrink-0"></div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-[#0a192f]">60%</span>
            <span className="text-[10px] sm:text-xs text-slate-500 leading-tight">Lower Missed<br/>Calls</span>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-[50%] xl:w-[55%] relative z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
      <div className="relative w-full max-w-[750px]">
          <img src="/hero1.png" alt="Graphic" className="w-full h-auto object-contain" />
      </div>
    </div>
  </div>
);

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [<Slide1 key="s1" />, <Slide5 key="s5" />, <Slide4 key="s4" />, <Slide3 key="s3" />, <Slide2 key="s2" />];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#f8f9fa] relative overflow-hidden flex flex-col pt-32 pb-24 border-b border-slate-100 min-h-[90vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-1 flex flex-col"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 mt-12 flex items-center justify-between z-20 relative">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={\w-2 h-2 rounded-full transition-all \\}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-400" />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ArrowRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
\
fs.appendFileSync('src/components/home/HeroSlider.tsx', content);
