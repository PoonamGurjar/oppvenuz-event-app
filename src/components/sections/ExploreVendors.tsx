"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { POPULAR_SEARCHES, ENGAGING_CATEGORIES, FEATURED_CATEGORIES } from "@/lib/data";

function CategoryCard({ cat }: { cat: { label: string; price: string; image: string } }) {
  return (
    <div className="min-w-[170px] max-w-[170px] bg-white border border-gray-200 rounded-xl overflow-hidden shrink-0 hover:shadow-lg transition-all">
      <div className="h-[160px] overflow-hidden">
        <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
      </div>
      <div className="p-2.5">
        <h4 className="text-sm font-semibold mb-0.5">{cat.label}</h4>
        <p className="text-[10px] text-gray-400">Package Starts</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] text-gray-500">From {cat.price}</span>
          <a href="#" className="text-[10px] text-purple font-semibold hover:underline">See More</a>
        </div>
      </div>
    </div>
  );
}

function ScrollRow({ items }: { items: { label: string; price: string; image: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  return (
    <div className="relative">
      <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple hover:text-white transition-colors">
        <ChevronLeft size={14} />
      </button>
      <div ref={ref} className="flex gap-3.5 overflow-x-auto scrollbar-hide px-10 py-1">
        {items.map((cat) => <CategoryCard key={cat.label} cat={cat} />)}
      </div>
      <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple hover:text-white transition-colors">
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function ExploreVendors() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-center font-[family-name:var(--font-family-heading)] text-[36px] font-bold mb-2">Explore Every Vendor</h2>
        <p className="text-center text-[13px] text-gray-500 max-w-[700px] mx-auto mb-10">
          Explore every vendor you need for your special day all in one place. From decorators and photographers to caterers and venues, we bring you a curated list of trusted, verified professionals.
        </p>

        <div className="grid grid-cols-[3fr_9fr] gap-6 max-lg:grid-cols-1">
          {/* Left: Most Popular Searches — stretches full height of right column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold italic mb-0.5">Most Popular Searches</h3>
            <p className="text-xs text-gray-400 mb-4">Top-Booked & Trending See Who&apos;s in Demand Right Now</p>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {POPULAR_SEARCHES.map((s) => (
                <div key={s.label} className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-md transition-all flex flex-col">
                  <div className="flex-1 overflow-hidden min-h-[130px]">
                    <img src={s.image} alt={s.label} className="w-full h-full object-cover" />
                  </div>
                  <p className="p-2 text-xs font-medium text-gray-700 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <a href="#" className="block text-right text-purple text-xs font-semibold mt-3 hover:underline">See all</a>
          </div>

          {/* Right: Engaging + Featured stacked */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-0.5">Most Engaging Category</h3>
              <p className="text-xs text-gray-400 mb-3">Vendors Loved for Their Service, Reviews & Interactions</p>
              <ScrollRow items={ENGAGING_CATEGORIES} />
              <a href="#" className="block text-right text-purple text-xs font-semibold mt-2 hover:underline">See More</a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-0.5">Featured Category</h3>
              <p className="text-xs text-gray-400 mb-3">A Curated Spotlight on Diverse & Standout Event Experts</p>
              <ScrollRow items={FEATURED_CATEGORIES} />
              <a href="#" className="block text-right text-purple text-xs font-semibold mt-2 hover:underline">See More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
