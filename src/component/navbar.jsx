import React, { useState, useEffect } from "react";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Track scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Culture", hasDropdown: true },
    { name: "Commitments", hasDropdown: false },
    { name: "Our Team", hasDropdown: false },
    { name: "News", hasDropdown: true },
  ];

  const rightLinks = [
    { name: "Products & Recipes", hasDropdown: true },
    { name: "Where To Buy", hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-9"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16 flex justify-between items-center relative">
        
        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 z-30"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X className={isScrolled ? "text-black" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} size={28} />
          )}
        </button>

        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-12">
          {leftLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`group relative text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300 opacity-60"
                  />
                )}
              </span>
              <span
                className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-[1000] tracking-[0.35em] transition-all duration-500 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ZAK<span className="text-[14px] align-top font-black ml-1">®</span>
          </h1>
        </div>

        {/* Right Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-12">
          {rightLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`group relative text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300 opacity-60"
                  />
                )}
              </span>
              <span
                className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
              ></span>
            </a>
          ))}

          <div className={`flex items-center gap-8 ml-4 ${isScrolled ? "text-black" : "text-white"}`}>
            <Search size={24} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
            <Globe size={24} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile Search */}
        <Search className={`lg:hidden absolute right-16 sm:right-20 ${isScrolled ? "text-black" : "text-white"}`} size={26} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 ease-in-out shadow-2xl overflow-hidden ${
          mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 sm:p-12 gap-6 text-black font-black uppercase text-xl tracking-[0.25em]">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.name}
              href="#"
              className="flex justify-between items-center border-b border-gray-100 pb-4"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={22} />}
            </a>
          ))}
          <div className="flex gap-6 pt-4">
            <Search size={28} />
            <Globe size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
