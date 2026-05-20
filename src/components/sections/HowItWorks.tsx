export default function HowItWorks() {
  return (
    <section className="py-14 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <p className="text-sm uppercase tracking-[3px] text-gray-500 font-medium mb-2">FIND OUT MORE</p>
        <h2 className="font-[family-name:var(--font-family-heading)] text-[36px] font-bold mb-12">How It Works Step by Step</h2>

        {/* Staggered steps with wave connector */}
        <div className="relative flex justify-between items-start max-w-[1000px] mx-auto">
          {/* Dashed wave connector SVG */}
          <svg className="absolute top-[60px] left-[15%] w-[70%] h-[120px] z-0 max-md:hidden" viewBox="0 0 700 120" fill="none">
            <path d="M0,80 Q175,0 350,60 Q525,120 700,40" stroke="#ddd" strokeWidth="2" strokeDasharray="8 6" fill="none" />
          </svg>

          {/* Step 1 — top left */}
          <div className="text-center max-w-[240px] relative z-10">
            <div className="relative inline-block mb-4">
              <div className="w-[120px] h-[120px] bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="8" y="6" width="28" height="36" rx="3" stroke="#5B2D8E" strokeWidth="2"/><line x1="14" y1="16" x2="30" y2="16" stroke="#C5942A" strokeWidth="2"/><line x1="14" y1="22" x2="30" y2="22" stroke="#C5942A" strokeWidth="2"/><line x1="14" y1="28" x2="24" y2="28" stroke="#C5942A" strokeWidth="2"/><circle cx="12" cy="16" r="1.5" fill="#5B2D8E"/><circle cx="12" cy="22" r="1.5" fill="#5B2D8E"/><circle cx="12" cy="28" r="1.5" fill="#5B2D8E"/></svg>
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-100 text-gray-700 rounded-full text-xs font-bold flex items-center justify-center border border-gray-200">01</span>
            </div>
            <h4 className="text-sm font-bold mb-1.5">Share Your Requirements</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">Tell us about your event type, location, date, budget, and the services you need. The more details, the better!</p>
          </div>

          {/* Step 2 — lower center */}
          <div className="text-center max-w-[240px] relative z-10 mt-16">
            <div className="relative inline-block mb-4">
              <div className="w-[120px] h-[120px] bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="10" y="14" width="30" height="24" rx="3" stroke="#5B2D8E" strokeWidth="2"/><path d="M18 14V8a7 7 0 0114 0v6" stroke="#C5942A" strokeWidth="2"/><circle cx="25" cy="24" r="4" stroke="#5B2D8E" strokeWidth="1.5"/><circle cx="16" cy="24" r="3" stroke="#5B2D8E" strokeWidth="1.5"/><circle cx="34" cy="24" r="3" stroke="#5B2D8E" strokeWidth="1.5"/></svg>
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-100 text-gray-700 rounded-full text-xs font-bold flex items-center justify-center border border-gray-200">02</span>
            </div>
            <h4 className="text-sm font-bold mb-1.5">Get Curated Vendor Matches</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">We shortlist trusted vendors that fit your needs and budget. Compare profiles, packages, and real reviews all in one place.</p>
          </div>

          {/* Step 3 — top right */}
          <div className="text-center max-w-[240px] relative z-10">
            <div className="relative inline-block mb-4">
              <div className="w-[120px] h-[120px] bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="8" y="10" width="22" height="30" rx="2" stroke="#5B2D8E" strokeWidth="2"/><path d="M30 20h8a3 3 0 013 3v10a3 3 0 01-3 3h-8" stroke="#C5942A" strokeWidth="2"/><polyline points="15,22 18,25 24,19" stroke="#5B2D8E" strokeWidth="2" fill="none"/></svg>
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-100 text-gray-700 rounded-full text-xs font-bold flex items-center justify-center border border-gray-200">03</span>
            </div>
            <h4 className="text-sm font-bold mb-1.5">Connect & Book with Confidence</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">Chat with vendors, ask questions, and book the one that feels right. We&apos;re here to support you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
