import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, MapPin, Building, ArrowRight, Download, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
  onDownloadBrochure: (project: Project) => void;
}

export function ProjectModal({ project, onClose, onEnquire, onDownloadBrochure }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'amenities' | 'location'>('overview');

  useEffect(() => {
    setActiveImageIndex(0);
    setActiveTab('overview');
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-5xl bg-[#181B19] text-[#F6F3ED] rounded-lg shadow-2xl border border-[#B89B68]/40 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141715]/90 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-brand text-xs uppercase tracking-widest text-[#B89B68]">
              {project.category}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B89B68]" />
              {project.location}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          {/* Main Title & Status Strip */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BE92] mb-1 font-medium">
                <span>{project.status === 'Completed' ? 'Ready for Handover' : project.status === 'Ongoing' ? 'Active Development' : 'Pre-Launch Preview'}</span>
                <span className="text-neutral-500">·</span>
                <span>Fictional Demonstration</span>
              </div>
              <h2 id="modal-project-title" className="font-serif text-3xl sm:text-4xl text-[#F6F3ED] font-light">
                {project.name}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs uppercase tracking-wider text-neutral-400">Indicative Pricing</p>
              <p className="font-serif text-xl sm:text-2xl text-[#D4BE92] font-normal">{project.priceRange}</p>
            </div>
          </div>

          {/* Interactive Image Gallery Carousel */}
          <div className="relative rounded overflow-hidden border border-white/10 bg-black aspect-[16/9] max-h-[460px]">
            <img
              src={project.galleryImages[activeImageIndex]}
              alt={`${project.name} - slide ${activeImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Carousel Navigation Buttons */}
            {project.galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Thumbnail Navigation Strip */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
              <span className="bg-black/60 px-2.5 py-1 rounded border border-white/20">
                Image {activeImageIndex + 1} of {project.galleryImages.length}
              </span>
              <div className="flex gap-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-10 h-7 rounded overflow-hidden border transition-all ${
                      activeImageIndex === idx ? 'border-[#B89B68] scale-105' : 'border-white/30 opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Facts Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-white/5 border border-white/10 text-xs">
            <div>
              <p className="text-neutral-400 uppercase tracking-wider text-[11px]">Configuration</p>
              <p className="font-medium text-[#F6F3ED] mt-0.5">{project.configuration}</p>
            </div>
            <div>
              <p className="text-neutral-400 uppercase tracking-wider text-[11px]">Carpet Area</p>
              <p className="font-medium text-[#F6F3ED] mt-0.5">{project.area}</p>
            </div>
            <div>
              <p className="text-neutral-400 uppercase tracking-wider text-[11px]">Possession Timeline</p>
              <p className="font-medium text-[#F6F3ED] mt-0.5">{project.possession}</p>
            </div>
            <div>
              <p className="text-neutral-400 uppercase tracking-wider text-[11px]">City / Micro-Market</p>
              <p className="font-medium text-[#F6F3ED] mt-0.5">{project.city}, Maharashtra</p>
            </div>
          </div>

          {/* Segmented Detail Tabs */}
          <div className="border-b border-white/15 flex gap-2">
            {(['overview', 'specifications', 'amenities', 'location'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-3 text-xs uppercase tracking-wider font-medium transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-[#B89B68] text-[#D4BE92]'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Panes */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-light text-[#F6F3ED] mb-3">Architectural Narrative</h3>
                <p className="text-neutral-300 text-sm leading-relaxed font-light">{project.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#B89B68] font-semibold mb-3">Project Distinctions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B89B68] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-light text-[#F6F3ED] mb-4">Engineering & Material Specifications</h3>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <span className="text-neutral-400 font-medium uppercase tracking-wider">{spec.label}</span>
                    <span className="sm:col-span-2 text-neutral-200">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-light text-[#F6F3ED] mb-4">Curated Lifestyle & Wellness Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.amenities.map((item, i) => (
                  <div key={i} className="p-3 rounded bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-neutral-200">
                    <div className="w-2 h-2 rounded-full bg-[#B89B68]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'location' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-light text-[#F6F3ED] mb-4">Strategic Location & Connectivity</h3>
              <p className="text-xs text-neutral-400 mb-4">
                Situated at {project.location}, positioned for effortless arterial connectivity to prime business corridors, private transit links, and coastal expressways.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.connectivity.map((conn, i) => (
                  <div key={i} className="p-3 rounded bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-neutral-300">{conn.landmark}</span>
                    <span className="text-[#D4BE92] font-semibold tracking-wide">{conn.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fictional Demonstration Notice */}
          <div className="p-3 rounded bg-white/5 border border-[#B89B68]/30 text-[11px] text-neutral-400">
            <span className="text-[#D4BE92] font-semibold uppercase tracking-wider">Showcase Notice: </span>
            This is a fictional real estate development created for demonstration by SP VisionWorks. All configurations, pricing, and timelines are conceptual sample data and do not imply real-world RERA approvals or solicitations.
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#141715] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            onClick={() => onDownloadBrochure(project)}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#B89B68]" />
            <span>Download Sample Brochure</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(project.name);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] transition-colors rounded flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Enquire for this Landmark</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
