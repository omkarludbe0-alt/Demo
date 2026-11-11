import { useState } from 'react';
import { Building2, MapPin, Phone, Mail, Globe, Shield, X, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export function Footer({ onOpenEnquiry }: FooterProps) {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141715] text-[#F6F3ED] border-t border-[#B89B68]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-brand text-xl tracking-[0.2em] uppercase font-semibold text-[#F6F3ED] block">
              AUREVIA <span className="text-[#B89B68] font-light">DEVELOPERS</span>
            </span>
            <p className="text-xs uppercase tracking-widest text-[#D4BE92]">
              Building Spaces. Creating Legacies.
            </p>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              An architectural development atelier sculpting ultra-luxury sky mansions, sustainable estates, and Grade-A commercial landmarks across Maharashtra, India.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">Demonstration Showcase</span>
              <p className="text-xs text-[#D4BE92]">
                Crafted by <strong>SP VisionWorks</strong> to demonstrate high-converting, brand-led digital flagships for real estate builders.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D4BE92] mb-4">
              Developments
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Aurevia Grand (Worli)</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">The Urban Nest (Pune)</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Aurevia Heights (Bandra)</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Greencrest Residency</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">The Landmark (BKC)</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Solstice Villas (Pune)</a></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D4BE92] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#expertise" className="hover:text-white transition-colors">Residential Towers</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Commercial Complexes</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Biophilic Planning</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Turnkey Interior Atelier</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Project Management EPC</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">IGBC Green Building</a></li>
            </ul>
          </div>

          {/* Regional Offices & Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D4BE92] mb-4">
              Maharashtra Desks
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <p>
                <strong className="text-neutral-200 block text-[11px] uppercase">Mumbai HQ:</strong>
                Nariman Point, Mumbai 400021
              </p>
              <p>
                <strong className="text-neutral-200 block text-[11px] uppercase">Pune Office:</strong>
                Lane 5, Koregaon Park, Pune 411001
              </p>
              <p>
                <strong className="text-neutral-200 block text-[11px] uppercase">Concierge:</strong>
                +91 22 6890 4000
              </p>
              <button
                onClick={onOpenEnquiry}
                className="text-xs text-[#D4BE92] hover:underline block pt-1 cursor-pointer font-medium"
              >
                Schedule Private Consultation →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>© {new Date().getFullYear()} Aurevia Developers. Fictional Showcase.</span>
            <span>·</span>
            <span>Website Engineered by SP VisionWorks</span>
            <span>·</span>
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#D4BE92] transition-colors underline cursor-pointer"
            >
              Privacy & Demonstration Disclaimers
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Privacy & Legal Disclaimer Modal */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className="bg-[#181B19] text-[#F6F3ED] max-w-xl w-full p-6 sm:p-8 rounded-lg border border-[#B89B68]/40 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-serif text-xl font-light text-[#F6F3ED]">
                Demonstration & Regulatory Disclosure
              </h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-neutral-300 font-light leading-relaxed max-h-[60vh] overflow-y-auto">
              <p>
                <strong>1. Fictional Demonstration Entity:</strong> &ldquo;Aurevia Developers&rdquo; is a conceptual developer brand designed and created exclusively by <strong>SP VisionWorks</strong> as a live showcase of our web development, user experience design, and digital flagship capabilities for luxury construction builders and real estate developers.
              </p>
              <p>
                <strong>2. No Commercial Solicitation:</strong> The projects, imagery, specifications, pricing figures, and testimonials displayed on this website are creative simulation assets. They do not constitute an offer for sale, an invitation to invest, or an advertisement under the Real Estate (Regulation and Development) Act (RERA).
              </p>
              <p>
                <strong>3. Builder Showcase Inquiries:</strong> Construction firms and developers seeking to commission custom digital flagships, CRM integrations, or investor presentation suites may contact SP VisionWorks through the enquiry channels on this site.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 text-xs uppercase tracking-wider bg-[#B89B68] text-[#141715] font-semibold rounded"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
