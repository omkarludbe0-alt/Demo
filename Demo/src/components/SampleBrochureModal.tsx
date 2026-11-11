import { useState } from 'react';
import { X, Printer, Download, Check, MapPin, Building2, ShieldCheck, PhoneCall } from 'lucide-react';
import { Project } from '../types';

interface SampleBrochureModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export function SampleBrochureModal({ project, onClose, onEnquire }: SampleBrochureModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!project) return null;

  const handleSimulatedDownload = () => {
    setDownloadSuccess(true);
    // Simulate generation and trigger download of architectural monograph brief
    const element = document.createElement('a');
    const file = new Blob([
      `AUREVIA DEVELOPERS - PROJECT ARCHITECTURAL MONOGRAPH\n` +
      `====================================================\n\n` +
      `PROJECT: ${project.name}\n` +
      `LOCATION: ${project.location}, Maharashtra, India\n` +
      `CATEGORY: ${project.category}\n` +
      `CONFIGURATION: ${project.configuration}\n` +
      `CARPET AREA: ${project.area}\n` +
      `ESTIMATED PRICING: ${project.priceRange}\n` +
      `STATUS: ${project.status} (${project.possession})\n\n` +
      `ARCHITECTURAL OVERVIEW:\n` +
      `${project.fullDescription}\n\n` +
      `SPECIFICATIONS:\n` +
      project.specifications.map((s) => `- ${s.label}: ${s.value}`).join('\n') +
      `\n\nCURATED AMENITIES:\n` +
      project.amenities.map((a) => `- ${a}`).join('\n') +
      `\n\nCONNECTIVITY:\n` +
      project.connectivity.map((c) => `- ${c.landmark}: ${c.distance}`).join('\n') +
      `\n\nDEVELOPER NOTE:\n` +
      `Aurevia Developers - Building Spaces. Creating Legacies.\n` +
      `Corporate Desk: Nariman Point, Mumbai | Koregaon Park, Pune\n` +
      `Demonstration Showcase crafted by SP VisionWorks.\n`
    ], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = `${project.id}-architectural-brochure.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F6F3ED] text-[#202321] rounded-lg shadow-2xl border border-[#B89B68]/60 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#202321] text-[#F6F3ED] border-b border-[#B89B68]/30 shrink-0">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-[#B89B68]" />
            <h2 id="brochure-modal-title" className="font-brand text-xs uppercase tracking-widest text-[#F6F3ED]">
              Architectural Monograph & Brochure Preview
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print brochure"
              className="p-1.5 text-neutral-300 hover:text-white rounded bg-white/5 hover:bg-white/10 transition-colors"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close brochure modal"
              className="p-1.5 text-neutral-300 hover:text-white rounded bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Printable Sheet View */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0">
          {/* Cover Header */}
          <div className="border-b border-neutral-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#987C49] mb-1">
                Aurevia Developers · Monograph {project.id.toUpperCase()}
              </p>
              <h3 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#202321]">
                {project.name}
              </h3>
              <p className="flex items-center gap-1.5 text-xs text-neutral-600 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#987C49]" />
                <span>{project.location}, Maharashtra, India</span>
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">Status & Possession</span>
              <span className="text-sm font-semibold text-[#987C49] block mt-0.5">{project.possession}</span>
              <span className="text-xs text-neutral-600 font-serif mt-1 block">{project.priceRange}</span>
            </div>
          </div>

          {/* Hero Render */}
          <div className="relative aspect-[16/9] rounded overflow-hidden shadow-md border border-neutral-300">
            <img
              src={project.heroImage}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-[#EAE6DD] border border-neutral-300 text-xs">
            <div>
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Typology</span>
              <span className="font-semibold text-[#202321] block mt-0.5">{project.category}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Configuration</span>
              <span className="font-semibold text-[#202321] block mt-0.5">{project.configuration}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Carpet Area</span>
              <span className="font-semibold text-[#202321] block mt-0.5">{project.area}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">RERA Status</span>
              <span className="font-semibold text-[#202321] block mt-0.5">Fictional Demo</span>
            </div>
          </div>

          {/* Narrative */}
          <div>
            <h4 className="font-serif text-2xl font-light text-[#202321] mb-2">Executive Summary</h4>
            <p className="text-neutral-700 text-sm leading-relaxed font-light">{project.fullDescription}</p>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 className="font-serif text-xl font-light text-[#202321] mb-3">Material & Structural Matrix</h4>
            <div className="divide-y divide-neutral-300 border-t border-b border-neutral-300 text-xs">
              {project.specifications.map((s, idx) => (
                <div key={idx} className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-neutral-800 uppercase tracking-wider">{s.label}</span>
                  <span className="sm:col-span-2 text-neutral-600">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="font-serif text-xl font-light text-[#202321] mb-3">Curated Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.amenities.map((a, idx) => (
                <div key={idx} className="flex items-center gap-2 text-neutral-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#987C49]" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <div className="p-3 bg-[#EAE6DD]/70 rounded border border-neutral-300 text-[11px] text-neutral-600">
            <strong>Demonstration Document:</strong> Prepared by SP VisionWorks for prospective builder client presentations. All structural details, carpet areas, and configurations are artistic conceptual placeholders.
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-4 sm:p-6 bg-[#EAE6DD] border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleSimulatedDownload}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#F6F3ED] bg-[#202321] hover:bg-black transition-colors rounded flex items-center justify-center gap-2 cursor-pointer shadow"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Brochure Generated & Saved</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#B89B68]" />
                <span>Download Architectural Brief (.TXT)</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(project.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] transition-colors rounded flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Speak with Private Wealth Desk</span>
          </button>
        </div>
      </div>
    </div>
  );
}
