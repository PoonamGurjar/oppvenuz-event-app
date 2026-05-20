"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DESTINATIONS } from "@/lib/data";

export default function Destinations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-[family-name:var(--font-family-heading)] text-[28px] font-bold mb-1">Create the perfect wedding away from home</h2>
        <p className="text-[13px] text-gray-500 max-w-[600px] mx-auto mb-7">
          Experience the magic of destination weddings at India&apos;s most breathtaking venues — from royal palaces to beachside paradises.
        </p>
      </div>

      <div className="relative w-screen ml-[calc(-50vw+50%)] overflow-hidden mb-7">
        <button onClick={() => scroll(-1)} className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow hover:bg-purple hover:text-white hover:border-purple transition-colors">
          <ChevronLeft size={14} />
        </button>
        <div ref={trackRef} className="flex gap-4 px-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2.5">
          {DESTINATIONS.map((dest) => (
            <div key={dest.name} className="min-w-[230px] rounded-xl overflow-hidden shadow-md bg-white shrink-0 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all snap-start">
              <div className="h-[170px] overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>
              <p className="p-3 text-center text-[13px] font-semibold">{dest.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow hover:bg-purple hover:text-white hover:border-purple transition-colors">
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="text-center">
        <a href="#" className="inline-block bg-gradient-to-r from-purple to-purple-light text-white px-7 py-2.5 rounded-md text-[13px] font-semibold shadow-lg shadow-purple/30 hover:-translate-y-0.5 transition-all">
          Start Planning Now
        </a>
      </div>
    </section>
  );
}
