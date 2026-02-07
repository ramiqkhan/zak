import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import van from "../assets/vanila.png";
import Banana from "../assets/Puree-Banana.webp";

const products = [
  {
    id: 1,
    name: "Vanilla",
    brand: "LE SIROP DE ZAK",
    description: "Indulge in the smooth, nutty richness of ZAK Vanilla Syrup - a perfect balance of creamy sweetness and roasted depth.",
    image: van,
    bgColor: "bg-[#F9F7F2]",
    accentColor: "text-[#8BA83B]",
    artImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000",
  },
  {
    id: 2,
    name: "Banana",
    brand: "LE SIROP DE ZAK",
    description: "Discover the timeless elegance of ZAK Banana Syrup. With its smooth, aromatic profile, it brings a classic touch of warmth to your favorites.",
    image: Banana,
    bgColor: "bg-[#FFFBF0]",
    accentColor: "text-[#D4AF37]",
    artImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000",
  },
];

const ProductShowcase = () => {
  const [index, setIndex] = useState(0);
  const currentProduct = products[index];

  const nextSlide = () => setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col lg:block">
      
      {/* --- TOP ARCHED TITLE (Hidden on Mobile for cleaner look, or adjusted) --- */}
      <div  className="absolute top-4 sm:top-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
        <div className="relative w-44 sm:w-64 h-14 sm:h-20 overflow-hidden">
          <svg viewBox="0 0 500 200" className="w-full h-full">
            <path id="curve" fill="transparent" d="M0,150 Q250,50 500,150" />
            <text className="text-[14px] sm:text-[28px] font-bold tracking-[0.2em] uppercase fill-white lg:fill-gray-800 drop-shadow-md lg:drop-shadow-none">
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                Flavours of the month
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen flex-grow">
        
        {/* --- TOP SIDE (Art Image on Mobile, Right Side on Desktop) --- */}
        <div className="w-full lg:w-1/2 lg:order-2 relative h-[45vh] sm:h-[50vh] lg:h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentProduct.artImage}
              src={currentProduct.artImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover brightness-75 lg:brightness-90"
            />
          </AnimatePresence>
          
          {/* Navigation for Mobile (Overlayed on Image) */}
          <div className="absolute bottom-4 right-4 flex gap-2 z-50 lg:hidden">
            <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30"><ChevronLeft size={20} /></button>
            <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* --- BOTTOM SIDE (Text on Mobile, Left Side on Desktop) --- */}
        <div className={`w-full lg:w-1/2 lg:order-1 ${currentProduct.bgColor} flex items-start lg:items-center justify-center p-8 sm:p-12 transition-colors duration-700`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md text-center pt-20 sm:pt-28 lg:pt-0"
            >
              <h4 className={`${currentProduct.accentColor} text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mb-2`}>
                {currentProduct.brand}
              </h4>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif italic text-gray-800 mb-4 leading-tight">
                {currentProduct.name}
              </h2>
              <div className="h-[1px] w-full bg-gray-200 mb-6 sm:mb-8"></div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                {currentProduct.description}
              </p>
              <button className="bg-[#2B1B10] text-white px-10 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-all shadow-md">
                Discover
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- FLOATING BOTTLE (Perfect Responsive Positioning) --- */}
      <div className="absolute top-[28%] sm:top-[42%] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.image}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.8 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative"
          >
            {/* Dynamic Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-6 bg-black/20 blur-2xl rounded-full"></div>

            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation for Desktop (Bottom Right) */}
      <div className="hidden lg:flex absolute bottom-10 right-10 gap-4 z-50">
        <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-all backdrop-blur-sm"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2B1B10] text-white hover:bg-black shadow-xl"><ChevronRight size={24} /></button>
      </div>

    </section>
  );
};

export default ProductShowcase;