import React from "react";
import ChefSection from "../component/chef";

const Team = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden bg-[#1a1a1a]">
        
        {/* BACKGROUND IMAGE */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] scale-110 animate-subtle-zoom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')", 
          }}
        >
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px]">

          <div className="relative flex flex-col items-center my-8">
            <div className="w-[1px] h-36 bg-gradient-to-b from-white/80 to-transparent"></div>
            <div className="absolute top-0 w-2.5 h-2.5 rounded-full border border-white/60 bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
          </div>

          <div className="w-full max-w-4xl px-6">
            <div className="h-[0.5px] w-full bg-white/30 mb-10"></div>
            
            <h2 className="text-[16px] md:text-[22px] font-black tracking-[0.45em] uppercase leading-relaxed">
              as a family business we are encouraging and collaborative <br className="hidden md:block" /> manufacturer
            </h2>
            
            <div className="h-[0.5px] w-full bg-white/30 mt-10"></div>
          </div>
        </div>
      </section>

{/* WHITE INFO SECTION */}
<section className="bg-white text-black py-20 px-6">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    
    <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide text-black">
      Our Story
    </h3>

    <p className="leading-relaxed text-lg font-semibold text-black">
      ZAK is a tapestry of passionate, beautiful and different people that come together 
      as a family united by the love of a brand.
    </p>

    <p className="leading-relaxed text-lg font-semibold text-black">
      Founded in 1912, this family business has managed to reinvent itself and establish 
      a global presence while maintaining its roots and original values.
    </p>

  </div>
</section>
  <ChefSection />
  <section className="bg-white text-center py-20 px-4">
  {/* Centered Image with Text */}
  <div className="flex flex-col items-center mb-16">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
        alt="Historic Building"
        className="w-80 h-80 object-cover rounded-lg"
      />
      <h2 className="absolute inset-0 flex flex-col items-center justify-center text-[28px] md:text-4xl font-bold text-[#3b2c0a] tracking-widest">
        FOREVER PIONEERING <br /> SINCE 1912
      </h2>
    </div>

    <div className="w-px h-12 bg-[#e6d6c2] my-6 mx-auto"></div>

    <button className="bg-[#3b2c0a] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:opacity-90 transition">
      DISCOVER OUR MONIN STORIES
    </button>
  </div>

  {/* Four Info Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-left">
    <div className="flex flex-col items-center md:items-start space-y-3">
      <span className="text-2xl md:text-3xl mb-2">🌎</span>
      <p className="text-sm md:text-base text-gray-700">
        We create high-quality, great-tasting products that align with our commitment to naturality and more mindful consumption.
      </p>
    </div>
    <div className="flex flex-col items-center md:items-start space-y-3">
      <span className="text-2xl md:text-3xl mb-2">👥</span>
      <p className="text-sm md:text-base text-gray-700">
        We foster relationships with local and extended communities, providing them with the needed support to make a positive impact.
      </p>
    </div>
    <div className="flex flex-col items-center md:items-start space-y-3">
      <span className="text-2xl md:text-3xl mb-2">🌱</span>
      <p className="text-sm md:text-base text-gray-700">
        We are learning how to grow our own ingredients while cultivating long-term, high-quality relationships with trusted suppliers who share our values.
      </p>
    </div>
    <div className="flex flex-col items-center md:items-start space-y-3">
      <span className="text-2xl md:text-3xl mb-2">💧</span>
      <p className="text-sm md:text-base text-gray-700">
        We care about protecting our ecosystems and strive to manage natural resources efficiently and sustainably.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default Team;
