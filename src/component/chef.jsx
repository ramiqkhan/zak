import React from "react";

const chefs = [

  {
    id: 2,
    name: "Mirko",
    country: "France",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bg: "bg-rose-800",      // wine red
  },
  {
    id: 3,
    name: "Alex John",
    country: "USA",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bg: "bg-emerald-800",   // herbs green
  },
  {
    id: 4,
    name: "Sara Lee",
    country: "Italy",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bg: "bg-yellow-700",    // mustard
  },
  {
    id: 5,
    name: "David Kim",
    country: "Korea",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bg: "bg-stone-700",     // chocolate brown
  },
];


const ChefSection = () => {
  return (
    <div>
      {chefs.map((chef) => (
        <section
          key={chef.id}
  className={`${chef.bg} h-[60vh] flex flex-col items-center justify-center text-white`}

        >
          {/* CARD */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl w-[280px] text-center">
            <img
              src={chef.img}
              alt={chef.name}
              className="w-full h-[360px] object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold tracking-widest uppercase">
                {chef.name}
              </h2>
              <p className="text-sm opacity-80">{chef.country}</p>

              <button className="mt-3 px-4 py-2 bg-black text-white rounded-full text-xs tracking-widest hover:scale-105 transition">
                SEE HIS MASTERPIECE
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ChefSection;
