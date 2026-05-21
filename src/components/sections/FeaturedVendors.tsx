"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star, Navigation } from "lucide-react";
import { VENDORS } from "@/lib/data";

export default function FeaturedVendors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-5 relative">
        <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:bg-purple hover:text-white transition-colors">
          <ChevronLeft size={18} />
        </button>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide px-8">
          {VENDORS.slice(0, 4).map((v, i) => (
            <div key={i} className="min-w-[350px] max-w-[350px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all shrink-0">
              {/* Image */}
              <div className="w-full h-[220px] bg-white relative overflow-hidden p-3">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover rounded-sm" />
                {v.badge && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[11px] font-semibold px-3 py-1 rounded-sm flex items-center gap-1.5">
                    <i className="fas fa-crown text-yellow-600 text-[10px]" /> Oppvenuz Choice
                  </span>
                )}
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="text-base font-bold mb-1.5">{v.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">{v.desc}</p>
                {/* Rating row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm font-semibold">{v.rating}</span>
                  </div>
                  <span className="text-xs text-purple font-medium">{v.reviews} Reviews</span>
                </div>
                <p className="text-xs text-gray-500 mb-2.5">{v.orders} Orders in last month</p>
                {/* Address */}
                <div className="flex items-start gap-1.5 mb-3 text-xs text-gray-500">
                  <Navigation size={12} className="text-purple mt-0.5 shrink-0" />
                  <span className="line-clamp-2">{v.address}</span>
                </div>
                {/* Price + Book */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-800">{v.price}</span>
                  <button className="bg-purple text-white px-5 py-2 rounded-md text-xs font-semibold hover:bg-purple-dark transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:bg-purple hover:text-white transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
