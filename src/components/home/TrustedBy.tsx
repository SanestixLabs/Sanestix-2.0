export default function TrustedBy() {
  const logos = [
    '/trusted-1.png',
    '/trusted-2.jpg',
    '/trusted-3.png',
    '/trusted-4.png',
    '/trusted-5.png',
    '/trusted-6.png',
    '/trusted-7.jpg',
    '/trusted-8.jpg'
  ];

  return (
    <div className="w-full py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden relative transition-colors duration-300">
      <div className="text-center mb-10">
        <p className="text-sm font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">Trusted By Innovative Companies Worldwide</p>
      </div>
      
      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>
        
        {/* We use two identical blocks that animate infinitely to create a seamless marquee */}
        <div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="mx-12 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[120px]">
              <img src={logo} alt={`Trusted Partner ${idx}`} className="h-10 lg:h-12 w-auto object-contain dark:invert dark:brightness-90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
