import { useState } from 'react';
import { CheckCircle2, ChevronRight, HardHat, FileText, Compass, Sparkles, Key } from 'lucide-react';
import { JOURNEY_PHASES } from '../data/siteData';

export function ConstructionJourney() {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(2); // Default to Phase 03: Construction

  const currentPhase = JOURNEY_PHASES[selectedPhaseIndex];

  const getPhaseIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-4 h-4" />;
      case 1: return <FileText className="w-4 h-4" />;
      case 2: return <HardHat className="w-4 h-4" />;
      case 3: return <Sparkles className="w-4 h-4" />;
      case 4: return <Key className="w-4 h-4" />;
      default: return <HardHat className="w-4 h-4" />;
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#202321] text-[#F6F3ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4BE92] mb-3">
            <span>Execution Protocol</span>
            <span className="text-neutral-500">/</span>
            <span>From Groundbreak to Keys</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F6F3ED] [text-wrap:balance]">
            The Five-Phase <br />
            <span className="italic font-normal text-[#D4BE92]">Construction Journey</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Our digitized, milestone-driven construction framework guarantees structural longevity, transparent buyer oversight, and strict timeline adherence.
          </p>
        </div>

        {/* Phase Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-black/40 border border-white/10 rounded-lg mb-12">
          {JOURNEY_PHASES.map((phase, idx) => (
            <button
              key={phase.phaseNumber}
              onClick={() => setSelectedPhaseIndex(idx)}
              className={`p-3 sm:p-4 rounded text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedPhaseIndex === idx
                  ? 'bg-[#B89B68] text-[#141715] shadow-lg font-medium'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${selectedPhaseIndex === idx ? 'text-[#141715]' : 'text-[#D4BE92]'}`}>
                  Phase {phase.phaseNumber}
                </span>
                <span className={selectedPhaseIndex === idx ? 'text-[#141715]' : 'text-neutral-400'}>
                  {getPhaseIcon(idx)}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold truncate">
                {phase.name.split('&')[0]}
              </p>
              <span className={`text-[11px] mt-1 block ${selectedPhaseIndex === idx ? 'text-[#202321]/80' : 'text-neutral-400'}`}>
                {phase.timeline}
              </span>
            </button>
          ))}
        </div>

        {/* Active Phase Detailed Deep Dive Card */}
        <div className="bg-[#181B19] rounded-lg border border-white/10 p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BE92] font-mono mb-1">
                <span>Phase {currentPhase.phaseNumber} Protocol</span>
                <span className="text-neutral-500">·</span>
                <span>{currentPhase.timeline}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#F6F3ED] font-light">
                {currentPhase.name}
              </h3>
            </div>

            <div className="p-3 rounded bg-white/5 border border-white/10 text-xs">
              <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">Quality Standard</span>
              <span className="text-[#D4BE92] font-medium block mt-0.5">{currentPhase.auditStandards}</span>
            </div>
          </div>

          <p className="my-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-4xl">
            {currentPhase.summary}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B89B68] font-semibold mb-4">
              Key Engineering Deliverables & Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentPhase.deliverables.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded bg-black/30 border border-white/5 flex items-start gap-3 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B68] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
