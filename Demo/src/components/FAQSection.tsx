import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F6F3ED] text-[#202321] relative border-t border-neutral-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C49] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer & Builder Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#202321] [text-wrap:balance]">
            Frequently Addressed <br />
            <span className="italic font-normal text-[#987C49]">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-lg border border-neutral-300/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#F2EFE8] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#202321] font-light">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#987C49] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
