import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "220px" }}>
      {/* Background image with rounded top corners */}
      <div className="absolute inset-0 rounded-t-[40px] overflow-hidden">
        <img src={IMAGES.venue} alt="FAQ background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-12 flex items-center justify-between gap-8 max-md:flex-col">
        <div className="max-w-[700px]">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[30px] font-bold text-white mb-3">
            Do You Have Any Questions ?
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Have any questions or need help getting started? We&apos;re here to make your planning journey smooth and stress-free.
            Whether you&apos;re curious about vendors, pricing, or how it all works, feel free to reach out—our team is always happy to assist you
          </p>
        </div>
        <a href="#" className="shrink-0 w-[140px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group">
          <ArrowRight size={22} className="text-gray-700 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
