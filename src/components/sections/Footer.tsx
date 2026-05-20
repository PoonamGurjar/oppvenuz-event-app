import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <>
      {/* Purple top bar — no tag pills above */}
      <div className="bg-gradient-to-r from-purple to-purple-light py-8">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-[1fr_auto_1fr] gap-8 items-center max-lg:grid-cols-1 max-lg:text-center">
          {/* Left: Brand */}
          <div>
            <div className="text-[26px] font-extrabold text-white">tpo</div>
            <div className="text-gold text-xs flex gap-0.5 mt-0.5 max-lg:justify-center">★★★★★</div>
            <div className="flex gap-2.5 mt-1.5 max-lg:justify-center">
              {["facebook-f", "instagram", "twitter", "youtube", "pinterest-p"].map((icon) => (
                <a key={icon} href="#" className="w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center text-white text-[13px] hover:bg-gold transition-colors">
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Phone mockup + App badges */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-20 h-[140px] bg-white/10 rounded-[14px] border-2 border-white/20 flex items-center justify-center">
              <i className="fas fa-mobile-alt text-white/60 text-[28px]" />
            </div>
            <div className="flex gap-2">
              {[
                { icon: "fab fa-google-play", small: "GET IT ON", big: "Google Play" },
                { icon: "fab fa-apple", small: "Download on the", big: "App Store" },
              ].map((badge) => (
                <div key={badge.big} className="inline-flex items-center gap-1.5 bg-black/30 text-white px-3.5 py-2 rounded-md cursor-pointer hover:bg-black/50 transition-colors">
                  <i className={`${badge.icon} text-lg`} />
                  <div className="text-left leading-tight">
                    <small className="text-[8px] opacity-80 block">{badge.small}</small>
                    <span className="text-xs font-semibold">{badge.big}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="text-right max-lg:text-center">
            <p className="text-white text-[13px] font-semibold mb-3">
              Subscribe to get the latest updates, vendor recommendations and wedding inspiration straight to your inbox.
            </p>
            <div className="flex gap-1.5 justify-end max-lg:justify-center">
              <input type="email" placeholder="Your email address" className="px-3.5 py-2 rounded-md text-xs w-[180px] outline-none" />
              <button className="bg-gold text-white px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap hover:bg-gold-dark transition-colors">
                Slay It Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark main footer */}
      <footer className="bg-dark pt-10 pb-5 text-gray-400">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <p className="text-xs leading-relaxed text-gray-500 max-w-[280px]">
              From Makeup Artists to Wedding Venues, Pandit Booking to Wedding Caterers — find everything you need for your dream wedding on tpo.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-white text-[13px] font-semibold mb-3 capitalize">{key === "help" ? "Help and Support" : key === "useful" ? "Useful Links" : key}</h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link}><a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-dark2 border-t border-white/[0.08] py-3.5">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center text-[11px] text-gray-600">
          <span>© 2026 TPO Weddings. All Rights Reserved.</span>
          <div className="flex gap-3.5">
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </>
  );
}
