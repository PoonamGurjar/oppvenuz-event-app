export default function UtilityBar() {
  return (
    <div className="bg-purple-deeper text-white text-xs">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-12">
        {/* Left: Logo + Lang + Location */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-purple-dark">
            <span className="text-[8px] font-extrabold text-gold leading-none">tpo</span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[8px] font-bold">🌐</span>
            EN <i className="fas fa-chevron-down text-[8px] ml-0.5" />
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <i className="fas fa-map-marker-alt text-gold" />
            <span>Hello Devi<br/>Pune 500083</span>
          </div>
        </div>

        {/* Center: Search — rectangle with gradient bottom border */}
        <div className="flex items-center flex-1 max-w-[550px] mx-6">
          <div className="flex items-center w-full rounded-md overflow-hidden" style={{ border: "2px solid transparent", borderImage: "linear-gradient(to right, #C5942A, #5B2D8E) 1" }}>
            <div className="bg-white text-gray-600 px-3 py-2 text-[12px] border-r border-gray-300 flex items-center gap-1 whitespace-nowrap">
              All <i className="fas fa-caret-down text-[10px]" />
            </div>
            <input type="text" placeholder="Search Oppvenuz" className="flex-1 px-3 py-2 text-[13px] text-gray-800 outline-none bg-white" />
            <button className="px-3.5 py-2" style={{ background: "linear-gradient(135deg, #C5942A, #5B2D8E)" }}>
              <i className="fas fa-search text-white text-sm" />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-[12px]">
          <a href="#" className="hover:text-gold transition-colors">Download App</a>
          <a href="#" className="hover:text-gold transition-colors">Login</a>
          <div className="flex items-center gap-2">
            <i className="fas fa-bars text-lg" />
            <i className="fas fa-user-circle text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom nav row */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-5 text-[13px] text-gray-700 font-medium">
            <a href="#" className="flex items-center gap-1 hover:text-purple transition-colors"><i className="fas fa-bars text-sm" /> All</a>
            <a href="#" className="hover:text-purple transition-colors">Venues</a>
            <a href="#" className="hover:text-purple transition-colors">Vendors</a>
            <a href="#" className="hover:text-purple transition-colors">Gallery</a>
            <a href="#" className="hover:text-purple transition-colors">Blogs</a>
            <a href="#" className="hover:text-purple transition-colors">Explore Indian Wedding</a>
            <a href="#" className="hover:text-purple transition-colors">Testimonials</a>
            <a href="#" className="text-gold font-semibold hover:text-gold-dark transition-colors">E-Invites</a>
            <a href="#" className="text-gold font-semibold hover:text-gold-dark transition-colors">Celebrity Booking</a>
          </div>
          <a href="#" className="border border-gray-800 text-gray-800 px-4 py-1 rounded text-xs font-medium hover:bg-purple hover:text-white hover:border-purple transition-all">
            Become a Vendor
          </a>
        </div>
      </div>
    </div>
  );
}
