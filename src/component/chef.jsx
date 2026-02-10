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
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-gray-800">
          Meet Our Chefs
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Passionate artists behind our signature flavors
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className={`${chef.bg} rounded-xl overflow-hidden shadow-2xl flex flex-col items-center text-white`}
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />

            <div className="p-4 w-full text-center space-y-2">
              <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase">
                {chef.name}
              </h2>
              <p className="text-sm md:text-base opacity-80">{chef.country}</p>

              <button className="mt-3 px-4 py-2 bg-black text-white rounded-full text-xs md:text-sm tracking-widest hover:scale-105 transition-transform">
                SEE HIS MASTERPIECE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefSection;
