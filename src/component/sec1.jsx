import React from "react";

const ZakHero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden bg-[#1a1a1a]">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] scale-110 animate-subtle-zoom"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')", 
        }}
      >
        {/* Image par halka sa dark aur warm tint taaki text clear dikhe */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px]">
        
        {/* Top Tagline */}
        <span className="text-[12px] md:text-[15px] font-bold tracking-[0.6em] uppercase opacity-90 mb-2">
          Since
        </span>
        
        {/* Main Big Year */}
        <h1 className="text-8xl md:text-[160px] font-extralight tracking-[0.15em] leading-none mb-6 font-serif">
          1912
        </h1>

        {/* Decorative Vertical Line with Circle Indicator */}
        <div className="relative flex flex-col items-center my-8">
          <div className="w-[1px] h-36 bg-gradient-to-b from-white/80 to-transparent"></div>
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full border border-white/60 bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
        </div>

        {/* Bottom Headline with Horizontal Lines */}
        <div className="w-full max-w-4xl px-6">
          {/* Upper Thin Line */}
          <div className="h-[0.5px] w-full bg-white/30 mb-10"></div>
          
          <h2 className="text-[16px] md:text-[22px] font-black tracking-[0.45em] uppercase leading-relaxed text-balance">
            We are an iconic flavour <br className="hidden md:block" /> manufacturer
          </h2>
          
          {/* Lower Thin Line */}
          <div className="h-[0.5px] w-full bg-white/30 mt-10"></div>
        </div>
      </div>

      {/* Custom Keyframes for the background zoom effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s ease-out infinite alternate;
        }
      `}} />
    </section>
  );
};

export default ZakHero;