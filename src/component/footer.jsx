import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "FAQ", href: "#" },
    { name: "Legal Notice", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Our Commitments", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-[#2B1B10] text-white/90 pt-16 pb-10 px-8 md:px-24 overflow-hidden">
      
      {/* --- TOP SECTION: LINKS --- */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 mb-20 relative z-10">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[13px] font-medium hover:text-white transition-colors tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* --- MIDDLE SECTION: LOGO & COPYRIGHT --- */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end relative z-10">
        
        {/* Copyright Text */}
        <div className="text-[12px] text-white/40 mb-10 md:mb-0">
          © 2026 ZAK Incorporated. All rights reserved
        </div>

        {/* The Colorful Flame/Leaf Icon (As per Image) */}
        <div className="relative w-32 h-32 md:w-44 md:h-44">
           <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M50 95C25 80 15 50 25 25C35 10 65 10 75 25C85 50 75 80 50 95Z" 
                fill="url(#zak-gradient)" 
              />
              <defs>
                <linearGradient id="zak-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#6B2D8C" }} />
                  <stop offset="25%" style={{ stopColor: "#D62C5B" }} />
                  <stop offset="50%" style={{ stopColor: "#E85D33" }} />
                  <stop offset="75%" style={{ stopColor: "#F7B52C" }} />
                  <stop offset="100%" style={{ stopColor: "#7BC143" }} />
                </linearGradient>
              </defs>
           </svg>
        </div>
      </div>

      {/* --- BOTTOM SECTION: HUGE DECORATIVE TEXT --- */}
      <div className="absolute bottom-[-20px] left-0 w-full select-none pointer-events-none opacity-[0.05]">
        <h2 className="text-[15vw] md:text-[20vw] font-[1000] leading-none text-white tracking-widest text-center">
          ZAK
        </h2>
      </div>

      {/* --- LANGUAGE SELECTOR (Floating Right) --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-sm text-[12px] font-bold shadow-xl">
          <img 
            src="https://flagcdn.com/w20/gb.png" 
            alt="UK Flag" 
            className="w-5 h-auto"
          />
          English
          <ChevronRight size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;