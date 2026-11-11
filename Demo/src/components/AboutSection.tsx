import { ShieldCheck, Clock, Award, Building2 } from 'lucide-react';
import { HIGHLIGHT_STATS } from '../data/siteData';

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F6F3ED] text-[#202321] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Story & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C49]">
              <span>About Aurevia Developers</span>
              <span className="text-neutral-400">/</span>
              <span>Est. 2011</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight mb-8 text-[#202321] [text-wrap:balance]">
              Where Precision Engineering Meets <span className="italic font-normal text-[#987C49]">Timeless Elegance</span>.
            </h2>

            <div className="space-y-5 text-neutral-700 text-base sm:text-lg font-light leading-relaxed mb-10">
              <p>
                Founded on the uncompromising principle that an architectural landmark must endure for generations, Aurevia Developers has redefined luxury residential and commercial landscapes across Mumbai, Pune, and coastal Maharashtra.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base">
                We bridge the boundary between cutting-edge structural engineering and artisanal craft. Every square foot we cast in concrete, every millimeter of Italian travertine we align, and every Schüco acoustic pane we seal represents our solemn covenant of transparency, structural integrity, and punctual delivery.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#EAE6DD] text-[#987C49] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-[#202321]">
                    Absolute Transparency
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal">
                    Clear title deeds, escrow-ringfenced buyer investments, and transparent third-party structural audit logs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#EAE6DD] text-[#987C49] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-[#202321]">
                    Punctual Handover
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal">
                    Precision 4D BIM construction planning ensures our on-time delivery record remains a definitive benchmark.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Material Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded shadow-2xl border border-[#B89B68]/30 group">
              <img
                src="/src/assets/images/architectural_craft_detail_1794373727579.jpg"
                alt="Architectural Craftsmanship - Honed Travertine & Champagne Bronze Screens"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141715]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4BE92] font-semibold">
                  Material Atelier
                </p>
                <p className="font-serif text-lg font-light mt-1">
                  Honed Roman Travertine & Brushed Champagne Bronze Joinery
                </p>
                <p className="text-xs text-neutral-300 mt-1 font-sans">
                  Crafted by master stonemasons and acoustic facade specialists.
                </p>
              </div>
            </div>

            {/* Floating Architectural Callout Box */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#202321] text-[#F6F3ED] p-5 rounded shadow-xl border border-[#B89B68]/40 max-w-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BE92] font-medium mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-serif italic text-sm">
                &ldquo;We do not merely erect buildings; we sculpt enduring sanctuaries that elevate human consciousness.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Statistics Bar with Clear Fictional Demo Disclosures */}
        <div className="mt-20 pt-12 border-t border-neutral-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HIGHLIGHT_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#202321] tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#987C49] mt-2">
                  {stat.label}*
                </span>
                <span className="text-xs text-neutral-500 mt-1">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Demonstration Notice Footnote */}
          <div className="mt-8 text-center sm:text-left">
            <p className="text-[11px] text-neutral-500 italic">
              *Note: Highlight statistics and development volumes are illustrative demonstration figures created by SP VisionWorks to showcase builder portfolio presentation layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
