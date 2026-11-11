import { ShieldCheck, HardHat, Compass, HeartHandshake, Clock, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/siteData';

export function WhyChooseUsSection() {
  const getIcon = (number: string) => {
    switch (number) {
      case '01': return <HardHat className="w-5 h-5 text-[#D4BE92]" />;
      case '02': return <ShieldCheck className="w-5 h-5 text-[#D4BE92]" />;
      case '03': return <Compass className="w-5 h-5 text-[#D4BE92]" />;
      case '04': return <Clock className="w-5 h-5 text-[#D4BE92]" />;
      case '05': return <HeartHandshake className="w-5 h-5 text-[#D4BE92]" />;
      case '06': return <Sparkles className="w-5 h-5 text-[#D4BE92]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4BE92]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#181B19] text-[#F6F3ED] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4BE92] mb-3">
            <span>The Aurevia Benchmark</span>
            <span className="text-neutral-500">/</span>
            <span>Why Discerning Clients Trust Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F6F3ED] [text-wrap:balance]">
            Engineering Rigor in Every <br />
            <span className="italic font-normal text-[#D4BE92]">Structural Dimension</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            In luxury real estate, true prestige is invisible to the casual eye—it resides in the foundation bedrock, the metallurgical density of the steel, and the fidelity of execution.
          </p>
        </div>

        {/* 6 Grid Cards with Structural Metric Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-[#202321] p-8 rounded-lg border border-white/10 hover:border-[#B89B68]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded bg-white/5 border border-white/10 group-hover:bg-[#B89B68]/20 transition-colors">
                    {getIcon(item.number)}
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-xl font-light text-[#D4BE92] tabular-nums block">
                      {item.metricValue}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#F6F3ED] font-light mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="uppercase tracking-wider">Aurevia Standard</span>
                <span className="text-[#D4BE92] font-mono">0{item.number} / 06</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
