import { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown, Sparkles, Building2, Eye } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenEnquiry: () => void;
}

const HERO_PERSPECTIVES = [
  {
    id: 'tower',
    number: '01',
    label: 'Skyline Landmark',
    location: 'Worli Sea Face, Mumbai',
    image: '/src/assets/images/hero_aurevia_tower_1794373691703.jpg',
    tagline: '62-Storey Waterfront Residential Icon'
  },
  {
    id: 'penthouse',
    number: '02',
    label: 'Penthouse Living',
    location: 'Pali Hill, Bandra West',
    image: '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
    tagline: 'Double-Height Travertine & Italian Marble Living'
  },
  {
    id: 'pool',
    number: '03',
    label: 'Sky Infinity Deck',
    location: '400-Foot Observation Level',
    image: '/src/assets/images/sky_infinity_pool_1794373727683.jpg',
    tagline: 'Cantilevered Rooftop Pool Overlooking Arabian Sea'
  }
];

export function HeroSection({ onExploreProjects, onOpenEnquiry }: HeroSectionProps) {
  const [activePerspectiveIndex, setActivePerspectiveIndex] = useState(0);

  // Subtle auto-rotation every 7 seconds if not manually clicked
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePerspectiveIndex((prev) => (prev + 1) % HERO_PERSPECTIVES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activePerspective = HERO_PERSPECTIVES[activePerspectiveIndex];

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#141715] text-[#F6F3ED]">
      {/* Background Architectural Perspectives with Smooth Crossfade */}
      {HERO_PERSPECTIVES.map((p, idx) => (
        <div
          key={p.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activePerspectiveIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={p.image}
            alt={p.label}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform transition-transform duration-10000 ease-out"
          />
        </div>
      ))}

      {/* Measured Luxury Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141715] via-[#141715]/65 to-[#141715]/40" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#141715]/30 to-[#141715]/80" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col justify-between min-h-[90vh]">
        {/* Top Kicker */}
        <div className="flex items-center justify-between gap-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#B89B68]/40 bg-[#181B19]/70 backdrop-blur-md rounded text-xs uppercase tracking-[0.25em] text-[#D4BE92]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B68]" />
            <span>Building Spaces. Creating Legacies.</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-neutral-300 font-mono tracking-wider">
            <span className="text-[#B89B68]">{activePerspective.number}</span>
            <span className="text-neutral-500">/</span>
            <span>03</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300 uppercase tracking-widest text-[11px]">{activePerspective.location}</span>
          </div>
        </div>

        {/* Central Editorial Statement */}
        <div className="my-auto max-w-4xl pt-8 pb-12">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F6F3ED] leading-[1.08] mb-6 [text-wrap:balance]">
            Crafting Landmarks. <br />
            <span className="italic font-normal text-[#D4BE92]">Shaping Tomorrow.</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-10 [text-wrap:balance]">
            Conceiving ultra-luxury sky mansions, sustainable private estates, and Grade-A commercial complexes across Maharashtra, built with unyielding structural integrity and timeless architectural restraint.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] transition-all duration-300 rounded shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium text-[#F6F3ED] bg-white/10 hover:bg-white/15 border border-[#B89B68]/40 backdrop-blur-md transition-all duration-300 rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Private Viewing</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Perspective Switcher & Structural Metrics */}
        <div className="pt-8 border-t border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* Engineering Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl text-left">
            <div>
              <span className="font-serif text-xl sm:text-2xl text-[#D4BE92] font-normal tabular-nums block">
                M70 Grade
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mt-0.5">
                Concrete Spec
              </span>
            </div>

            <div>
              <span className="font-serif text-xl sm:text-2xl text-[#D4BE92] font-normal tabular-nums block">
                100% Escrow
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mt-0.5">
                Milestone Ringfenced
              </span>
            </div>

            <div>
              <span className="font-serif text-xl sm:text-2xl text-[#D4BE92] font-normal tabular-nums block">
                IGBC Platinum
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mt-0.5">
                Green Standards
              </span>
            </div>

            <div>
              <span className="font-serif text-xl sm:text-2xl text-[#D4BE92] font-normal tabular-nums block">
                99.2% Punctual
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mt-0.5">
                Handover Rate
              </span>
            </div>
          </div>

          {/* Interactive Architectural Perspective Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-black/60 border border-white/15 rounded-lg backdrop-blur-md self-start lg:self-auto">
            {HERO_PERSPECTIVES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePerspectiveIndex(idx)}
                className={`px-3.5 py-1.5 text-xs rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                  activePerspectiveIndex === idx
                    ? 'bg-[#B89B68] text-[#141715] font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-neutral-400 hover:text-[#D4BE92] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
