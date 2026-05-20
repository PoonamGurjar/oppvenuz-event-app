"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { INVITE_CARDS } from "@/lib/data";

export default function EInvites() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Gold glows */}
      <div className="absolute -left-8 top-1/2 w-[120px] h-[120px] bg-radial-[closest-side] from-gold-light to-transparent opacity-12 rounded-full" />
      <div className="absolute -right-8 top-[30%] w-[120px] h-[120px] bg-radial-[closest-side] from-gold-light to-transparent opacity-12 rounded-full" />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <h2 className="text-center font-[family-name:var(--font-family-heading)] text-[28px] font-bold mb-1">Elegant E-Invites for Every Occasion</h2>
        <p className="text-center text-[13px] text-gray-500 max-w-[600px] mx-auto mb-7">
          From birthdays to weddings, create stunning digital invitations that capture the spirit of your celebration.
        </p>
      </div>

      {/* Full-width carousel */}
      <div className="relative w-screen ml-[calc(-50vw+50%)] overflow-hidden">
        <button onClick={() => scroll(-1)} className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow hover:bg-purple hover:text-white hover:border-purple transition-colors">
          <ChevronLeft size={14} />
        </button>
        <div ref={trackRef} className="flex gap-5 px-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2.5">
          {INVITE_CARDS.map((card) => (
            <div key={card.label} className="min-w-[220px] max-w-[220px] h-[300px] rounded-xl overflow-hidden shadow-lg shrink-0 relative cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all snap-start">
              <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-5 pb-3">
                <span className="text-white text-xs font-medium">{card.label}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow hover:bg-purple hover:text-white hover:border-purple transition-colors">
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
