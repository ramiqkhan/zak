import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banana from "../assets/Puree-Banana.webp";
import lavendar from "../assets/Lavender.webp";
import Rose from "../assets/Rose.webp";
import BlueCuracao from "../assets/Blue-Curacao.webp";

const categories = [
  // Gradients ko Dark/Deep variants mein change kiya hai
  { id: 1, title: "Banana", image: Banana, gradient: "from-[#4d5b12] to-[#1a2e05]" }, 
  { id: 2, title: "lavendar", image: lavendar, gradient: "from-[#2d1b4d] via-[#1a0b2e] to-[#0a0510]" },
  { id: 3, title: "Rose", image: Rose, gradient: "from-[#4d101d] to-[#1a050a]" },
  { id: 4, title: "Curacao", image: BlueCuracao, gradient: "from-[#0a2e4d] to-[#02101a]" }
];

const CategoryCatalog = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.children;
      const centerX = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(centerX - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index];
      if (card) {
        const targetScroll = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
        container.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    }
  };

  const scroll = (direction) => {
    const nextIndex = direction === "right" 
      ? Math.min(activeIndex + 1, categories.length - 1) 
      : Math.max(activeIndex - 1, 0);
    scrollToIndex(nextIndex);
  };

  return (
    // Section background dark kiya hai taaki dark cards blend ho sakein
    <section className="py-24 bg-[#FFFBF0] min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full px-4 relative">
        
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-12 ml-4 md:ml-10">
          <div className="w-[2px] h-10 bg-white"></div>
          <h2 className="text-lg font-bold uppercase tracking-widest text-white">Our Categories</h2>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            // Responsive Padding: mobile pe px-[15%] taaki side cards thode dikhein
            className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory py-20 px-[15%] md:px-[35%]"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((cat, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div 
                  key={cat.id}
                  // Responsive Width: Mobile pe w-[260px]
                  className="flex-none w-[260px] md:w-[400px] snap-center relative"
                  animate={{ 
                    scale: isActive ? 1.1 : 0.85,
                    opacity: isActive ? 1 : 0.3,
                    filter: isActive ? "blur(0px)" : "blur(4px)"
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  {/* CARD BODY */}
                  <div className={`relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b ${cat.gradient}`}>
                    {/* Dark Grainy Texture */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    
                    <div className="relative z-10 p-8 md:p-10 text-center">
                      <h3 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter drop-shadow-2xl">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* BOTTLE IMAGE */}
                  <div className="absolute inset-0 flex items-center justify-center pt-20 md:pt-24 z-20 pointer-events-none">
                    <motion.img 
                      src={cat.image} 
                      alt={cat.title}
                      className="h-[320px] md:h-[520px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                      whileHover={isActive ? { 
                        scale: 1.05, 
                        rotate: 3,
                        y: -10,
                        transition: { duration: 0.3 } 
                      } : {}}
                      animate={{ 
                        y: isActive ? 0 : 30,
                        pointerEvents: isActive ? "auto" : "none" 
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CONTROLS (Responsive Visibility) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between pointer-events-none">
            <button 
              onClick={() => scroll("left")} 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all disabled:opacity-10 text-white"
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all disabled:opacity-10 text-white"
              disabled={activeIndex === categories.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default CategoryCatalog;