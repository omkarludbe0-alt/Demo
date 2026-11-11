import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F3ED] text-[#202321] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C49] mb-3">
            <span>Client Voices</span>
            <span className="text-neutral-400">/</span>
            <span>Resident & Corporate Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#202321] [text-wrap:balance]">
            Trusted by Leaders <br />
            <span className="italic font-normal text-[#987C49]">& Visionary Families</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
            Reflections from homeowners and corporate occupiers who experience the tranquility, structural rigor, and white-glove governance of our developments every day.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] p-8 rounded-lg border border-neutral-200/80 hover:border-[#B89B68]/60 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <Quote className="w-8 h-8 text-[#987C49]/40 mb-6" />
                <p className="text-sm text-neutral-700 leading-relaxed font-light italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <p className="font-serif text-lg text-[#202321] font-normal">
                  {t.author}
                </p>
                <p className="text-xs text-[#987C49] font-medium mt-0.5">
                  {t.role}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-2">
                  <span>{t.residence}</span>
                  <span>·</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 italic">
            Demonstration Content: The testimonials, client names, and corporate entities above are fictional representations crafted by SP VisionWorks to showcase luxury real estate social proof layout styling.
          </p>
        </div>
      </div>
    </section>
  );
}
