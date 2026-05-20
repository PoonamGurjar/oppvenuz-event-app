import { ArrowRight } from "lucide-react";
import { BLOGS } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <p className="text-[11px] uppercase tracking-[2px] text-gold font-semibold mb-1">TIPS & INSIGHTS</p>
        <h2 className="font-[family-name:var(--font-family-heading)] text-[28px] font-bold mb-1">The Latest Blog Posts</h2>
        <p className="text-[13px] text-gray-500 max-w-[600px] mx-auto mb-7">Insights, ideas, and inspiration to help you plan your celebration with confidence</p>

        <div className="grid grid-cols-3 gap-5 text-left max-md:grid-cols-1">
          {BLOGS.map((blog) => (
            <div key={blog.title} className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="h-[170px] bg-gray-200 overflow-hidden relative">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                <span className="absolute top-2.5 left-2.5 bg-gold text-white text-[10px] font-semibold px-2.5 py-0.5 rounded uppercase">{blog.tag}</span>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold mb-1.5 leading-snug">{blog.title}</h4>
                <p className="text-xs text-gray-500 mb-2.5 leading-relaxed">{blog.desc}</p>
                <a href="#" className="text-purple text-xs font-semibold flex items-center gap-1 hover:underline">
                  Read More <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
