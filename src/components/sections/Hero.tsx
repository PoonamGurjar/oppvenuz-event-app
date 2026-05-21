import { IMAGES } from "@/lib/data";

export function HeroBanner() {
  return (
    <div className="w-full h-[280px] overflow-hidden relative">
      <img src={IMAGES.venue} alt="Wedding venue" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple/30" />
    </div>
  );
}

export function HeroText() {
  return (
    <section className="bg-white py-10 text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Search filters row — gradient bordered inputs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="relative rounded-lg overflow-hidden p-[2px]" style={{ background: "linear-gradient(to right, #C5942A, #5B2D8E)" }}>
            <select className="rounded-lg px-5 py-2.5 text-sm text-gray-500 outline-none w-[220px] appearance-none bg-white cursor-pointer">
              <option>Find Your Service</option>
            </select>
          </div>
          <div className="relative rounded-lg overflow-hidden p-[2px]" style={{ background: "linear-gradient(to right, #C5942A, #5B2D8E)" }}>
            <select className="rounded-lg px-5 py-2.5 text-sm text-gray-500 outline-none w-[220px] appearance-none bg-white cursor-pointer">
              <option>Select Location</option>
            </select>
          </div>
          <button className="text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow-md" style={{ background: "linear-gradient(135deg, #C5942A, #5B2D8E)" }}>
            Search <i className="fas fa-search" />
          </button>
        </div>

        <h1 className="font-[family-name:var(--font-family-heading)] text-[42px] font-bold text-gray-900 mb-4 leading-tight">
          Trusted. Reviewed. Recommended.
        </h1>
        <p className="text-gray-500 text-[15px] max-w-[700px] mx-auto leading-relaxed">
          Explore a curated list of the most reliable vendors and companies near you. Whether you&apos;re planning an event,
          looking for services, or starting a project, our top-rated partners are here to help you make it happen effortlessly.
        </p>
      </div>
    </section>
  );
}
