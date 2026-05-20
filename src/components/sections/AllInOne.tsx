"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AIO_CARDS } from "@/lib/data";

export default function AllInOne() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 200, behavior: "smooth" });

  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-2xl font-bold mb-0.5">All - in - One</h2>
        <p className="text-xs text-gray-400 mb-5">Browse the Full List Every Vendor, Every Category, All in One Place</p>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-purple hover:text-white transition-colors">
            <ChevronLeft size={16} />
          </button>
          <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-1">
            {AIO_CARDS.map((card) => (
              <div key={card.title} className="min-w-[170px] max-w-[170px] bg-white border-2 border-purple/20 rounded-xl overflow-hidden shrink-0 hover:shadow-lg hover:border-purple/40 transition-all">
                <div className="h-[130px] overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-2.5">
                  <h4 className="text-sm font-semibold mb-1">{card.title}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-gray-400">Package Starts</p>
                      <p className="text-[10px] text-gray-600">From {card.price}</p>
                    </div>
                    <a href="#" className="text-[10px] text-purple font-bold hover:underline">See More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-purple hover:text-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
        <a href="#" className="block text-right text-purple text-xs font-semibold mt-3 hover:underline">View All</a>
      </div>
    </section>
  );
}
