import { IMAGES } from "@/lib/data";

export default function CelebritySection() {
  return (
    <section
      className="py-20 relative overflow-hidden min-h-[360px]"
      style={{ background: `url(${IMAGES.venue}) center/cover` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(58,34,24,0.7)] to-[rgba(90,58,40,0.5)] z-[1]" />
      {/* Gold glow */}
      <div className="absolute -right-8 top-5 w-[200px] h-[200px] bg-radial-[closest-side] from-gold-light to-transparent opacity-12 rounded-full z-[2]" />

      <div className="max-w-[1200px] mx-auto px-5 relative z-[3]">
        <div className="max-w-[480px]">
          {/* Mandala icon */}
          <svg className="w-10 h-10 mb-3" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#C5942A" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="8" fill="#C5942A" opacity="0.3" />
            <circle cx="20" cy="20" r="3" fill="#C5942A" />
            <line x1="20" y1="2" x2="20" y2="12" stroke="#C5942A" />
            <line x1="20" y1="28" x2="20" y2="38" stroke="#C5942A" />
            <line x1="2" y1="20" x2="12" y2="20" stroke="#C5942A" />
            <line x1="28" y1="20" x2="38" y2="20" stroke="#C5942A" />
          </svg>
          <h2 className="font-[family-name:var(--font-family-heading)] text-[30px] font-bold text-white mb-3.5 leading-snug">
            Bring Your Dream Celebrity to Your Event
          </h2>
          <p className="text-[13px] text-white/80 mb-6 leading-relaxed">
            Make your celebration unforgettable with top entertainers, performances, and star-studded moments. From Bollywood artists to international performers — we connect you to the stars.
          </p>
          <a href="#" className="inline-block bg-dark text-gold border-[1.5px] border-gold px-7 py-2.5 rounded-md text-[13px] font-semibold hover:bg-gold hover:text-dark transition-all">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
