import { Play } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center font-[family-name:var(--font-family-heading)] text-[28px] font-bold mb-8">Reviews and Testimonials from some of our recent Clients</h2>

        <div className="grid grid-cols-2 gap-8 items-start max-lg:grid-cols-1">
          {/* Video */}
          <div
            className="rounded-xl overflow-hidden relative h-[300px] cursor-pointer"
            style={{ background: `url(${IMAGES.brideGroom}) center/cover` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-purple rounded-full flex items-center justify-center shadow-xl">
              <Play size={20} className="text-white ml-0.5" fill="white" />
            </div>
          </div>

          {/* Right: h3 outside card */}
          <div>
            <h3 className="text-base font-semibold mb-3.5 leading-snug">What Our Clients Are Saying About Their Experience With Us</h3>
            <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200">
              <span className="text-[32px] text-gold font-serif leading-none block mb-1">❝</span>
              <div className="text-gold text-sm mb-2.5">★★★★★</div>
              <p className="text-[13px] text-gray-500 italic leading-relaxed mb-3.5">
                &ldquo;Our Meena made planning our engagement really easy. The vendors recommended were top quality. We loved every moment and it all felt so personalized.&rdquo;
              </p>
              <p className="text-[13px] font-semibold">Nikita &amp; Aman</p>
              <div className="flex gap-1.5 mt-3.5">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-purple" : "bg-gray-200"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
