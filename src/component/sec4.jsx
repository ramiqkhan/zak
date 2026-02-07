import React from "react";
 // your uploaded image

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
        alt="Hero Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay lines / gradient */}
      <div className="absolute w-full h-full bg-black/20"></div> {/* subtle overlay */}
      <svg className="absolute w-full h-full top-0 left-0" xmlns="http://www.w3.org/2000/svg">
        {/* You can add subtle topographic-style lines here */}
        <path d="M0,100 Q250,50 500,100 T1000,100" stroke="white" strokeWidth="1" fill="transparent" />
        <path d="M0,200 Q250,150 500,200 T1000,200" stroke="white" strokeWidth="1" fill="transparent" />
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Small curved text */}
        <div className="text-white text-sm sm:text-base tracking-widest mb-2">
          MONIN'S WORLD
        </div>

        {/* Vertical line */}
        <div className="w-px h-12 bg-white mb-4"></div>

        {/* Main text */}
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light max-w-2xl">
          As a family business and with our fellowship spirit. We inspire hospitality professionals from all over the world
        </h1>

        {/* Button */}
        <button className="mt-6 bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition-all">
          FIND PARTNERS
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
