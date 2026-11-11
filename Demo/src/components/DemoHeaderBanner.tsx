import { useState } from 'react';
import { Sparkles, X, ExternalLink } from 'lucide-react';
import { DEMO_SHOWCASE_INFO } from '../data/siteData';

interface DemoHeaderBannerProps {
  onOpenContact: () => void;
}

export function DemoHeaderBanner({ onOpenContact }: DemoHeaderBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Demonstration Notice" className="relative z-50 bg-[#202321] text-[#F6F3ED] border-b border-[#B89B68]/30 px-4 py-2.5 text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B68]"></span>
          <span className="text-[#B89B68] font-semibold tracking-wide uppercase text-[11px]">
            {DEMO_SHOWCASE_INFO.agencyName}
          </span>
          <span className="hidden sm:inline text-neutral-400">·</span>
          <span className="text-neutral-300">
            Live Client Demonstration Showcase for Builders & Real Estate Developers
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={onOpenContact}
            className="text-[#D4BE92] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-normal"
          >
            <span>Request Builder Website Proposal</span>
            <ExternalLink className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss showcase banner"
            className="text-neutral-400 hover:text-white p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
