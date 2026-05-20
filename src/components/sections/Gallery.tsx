"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const rowRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => rowRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="font-[family-name:var(--font-family-heading)] text-[32px] font-bold mb-1">Our Gallery</h2>
        <p className="text-sm text-gray-500">A glimpse into the unforgettable moments we&apos;ve helped create.</p>
      </div>

      {/* Full-width perspective gallery */}
      <div className="relative w-screen ml-[calc(-50vw+50%)] overflow-hidden py-4" style={{ perspective: "1200px" }}>
        <div ref={rowRef} className="flex gap-5 overflow-x-auto scrollbar-hide px-[10%] items-center" style={{ minHeight: "320px" }}>
          {GALLERY_IMAGES.map((src, i) => {
            // First/last get tilted, center ones straight
            const tilt = i === 0 ? "rotateY(12deg)" : i === GALLERY_IMAGES.length - 1 ? "rotateY(-12deg)" : i < 2 ? "rotateY(6deg)" : i > GALLERY_IMAGES.length - 3 ? "rotateY(-6deg)" : "rotateY(0deg)";
            return (
              <div
                key={i}
                className="min-w-[280px] h-[300px] rounded-xl overflow-hidden shrink-0 shadow-lg hover:shadow-2xl transition-all"
                style={{ transform: tilt, transformOrigin: i < GALLERY_IMAGES.length / 2 ? "right center" : "left center" }}
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows centered below */}
      <div className="flex justify-center gap-2 mt-4">
        <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-purple transition-colors">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-purple transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
