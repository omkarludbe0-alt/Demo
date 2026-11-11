import { Building2, Building, Compass, Layers, HardHat, Leaf, Check } from 'lucide-react';
import { SERVICES_EXPERTISE } from '../data/siteData';

export function ExpertiseSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#987C49]" />;
      case 'Building': return <Building className="w-5 h-5 text-[#987C49]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#987C49]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#987C49]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#987C49]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#987C49]" />;
      default: return <Building2 className="w-5 h-5 text-[#987C49]" />;
    }
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-[#F6F3ED] text-[#202321] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C49] mb-3">
            <span>Core Disciplines</span>
            <span className="text-neutral-400">/</span>
            <span>Comprehensive EPC & Development</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#202321] [text-wrap:balance]">
            End-to-End Architectural & <br />
            <span className="italic font-normal text-[#987C49]">Construction Expertise</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
            From greenfield land acquisition and regulatory masterplanning to structural execution and bespoke turnkey interiors, our interdisciplinary teams manage every phase with engineering precision.
          </p>
        </div>

        {/* 6 Services Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_EXPERTISE.map((service) => (
            <div
              key={service.number}
              className="bg-[#FAF8F5] p-8 rounded-lg border border-neutral-200/80 hover:border-[#B89B68]/60 transition-all duration-300 flex flex-col justify-between shadow-sm group hover:shadow-md"
            >
              <div>
                {/* Number and Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-light text-[#987C49] tracking-wider">
                    {service.number}
                  </span>
                  <div className="p-2.5 rounded bg-[#EAE6DD] group-hover:bg-[#B89B68]/20 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl text-[#202321] font-light mb-1">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#987C49] font-medium mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-6 border-t border-neutral-200 space-y-2.5">
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Key Capabilities</p>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-[#987C49] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
