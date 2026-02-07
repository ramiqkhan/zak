import React, { useState } from 'react';

const ZakNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    { id: 1, title: "Mindful Mixology: Adapting to the Low to No-ABV Movement", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "ZAK Cup 2026 (APAC)", subtitle: "*Timeless-Twists_", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Refreshing Reinventions: Crafting the Perfect Lemonade with ZAK Flair", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Mindful Mixology: Adapting to the Low to No-ABV Movement", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "ZAK Summer Specials: Cool Down with Exotic Blends", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "ZAK Cup 2026 (APAC)", subtitle: "*Timeless-Twists_", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80" },
  ];

  // Determine how many slides to show based on screen width
  const getItemsToShow = () => {
    if (window.innerWidth < 640) return 1;      // Mobile
    if (window.innerWidth < 1024) return 2;     // Tablet
    return 3;                                   // Desktop
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Update itemsToShow on window resize
  React.useEffect(() => {
    const handleResize = () => setItemsToShow(getItemsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < newsItems.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white py-12 px-4 font-sans overflow-hidden">
      <h2 className="text-center text-sm font-bold tracking-[0.3em] mb-12 text-gray-800">
        FRESH ZAK NEWS
      </h2>

      <div className="relative max-w-full mx-auto">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-20 pointer-events-none">
          <button 
            onClick={prevSlide}
            className={`pointer-events-auto bg-[#3a2a1a]/90 hover:bg-[#2a1a0a] w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          >
            <span className="text-white text-2xl">←</span>
          </button>
          <button 
            onClick={nextSlide}
            className={`pointer-events-auto bg-[#3a2a1a]/90 hover:bg-[#2a1a0a] w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex >= newsItems.length - itemsToShow ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          >
            <span className="text-white text-2xl">→</span>
          </button>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }} 
          >
            {newsItems.map((item) => (
              <div 
                key={item.id} 
                className={`relative flex-shrink-0 aspect-[4/5] overflow-hidden rounded-t-[200px] group cursor-pointer shadow-lg`}
                style={{ width: `calc(${100 / itemsToShow}% - 16px)` }} // responsive width
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="text-lg font-bold leading-tight uppercase tracking-wide">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-4 text-2xl italic font-serif text-yellow-500 drop-shadow-md">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZakNews;
