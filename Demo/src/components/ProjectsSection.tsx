import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onEnquire: (projectName: string) => void;
}

type FilterCategory = 'All' | 'Residential' | 'Commercial' | 'Luxury Villas' | 'Ongoing' | 'Completed';

export function ProjectsSection({ onSelectProject, onEnquire }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS_DATA;
    if (activeFilter === 'Residential') return PROJECTS_DATA.filter((p) => p.category === 'Residential');
    if (activeFilter === 'Commercial') return PROJECTS_DATA.filter((p) => p.category === 'Commercial');
    if (activeFilter === 'Luxury Villas') return PROJECTS_DATA.filter((p) => p.category === 'Luxury Villas');
    if (activeFilter === 'Ongoing') return PROJECTS_DATA.filter((p) => p.status === 'Ongoing');
    if (activeFilter === 'Completed') return PROJECTS_DATA.filter((p) => p.status === 'Completed');
    return PROJECTS_DATA;
  }, [activeFilter]);

  const filterTabs: FilterCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Luxury Villas',
    'Ongoing',
    'Completed'
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#202321] text-[#F6F3ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4BE92] mb-3">
              <span>Curated Portfolio</span>
              <span className="text-neutral-500">/</span>
              <span>Maharashtra, India</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F6F3ED] [text-wrap:balance]">
              Architectural Landmarks & <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D4BE92]">Signature Sanctuaries</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-300 font-light leading-relaxed">
            Explore our curated portfolio of completed and active masterplans. Each development represents an uncompromising synthesis of engineering rigor, biophilic design, and timeless aesthetic restraint.
          </p>
        </div>

        {/* Filter Controls (Segmented Tab Bar) */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 border border-white/10 rounded-lg max-w-full overflow-x-auto mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#B89B68] text-[#141715] shadow-sm font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'All' ? 'All Developments' : tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#181B19] rounded-lg overflow-hidden border border-white/10 hover:border-[#B89B68]/50 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Image Container with Subtle Hover Zoom */}
              <div
                className="relative aspect-[16/11] overflow-hidden bg-black cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.heroImage}
                  alt={`${project.name} - ${project.location}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B19] via-transparent to-transparent opacity-80" />

                {/* Status Indicator (Subtle unboxed top corner element) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : project.status === 'Ongoing' ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  <span>{project.status}</span>
                </div>

                {/* Quick Quick-View Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-[#181B19]/90 text-xs uppercase tracking-wider text-[#D4BE92] border border-[#B89B68]/40 rounded flex items-center gap-1.5 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separators (anti-pill compliant) */}
                  <div className="flex items-center gap-2 text-xs text-[#D4BE92] uppercase tracking-wider mb-2 font-medium">
                    <span>{project.category}</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400">{project.configuration}</span>
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-serif text-2xl text-[#F6F3ED] font-light hover:text-[#D4BE92] transition-colors cursor-pointer mb-2"
                  >
                    {project.name}
                  </h3>

                  {/* Location with Icon */}
                  <p className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#B89B68] shrink-0" />
                    <span>{project.location}</span>
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed font-light mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Bottom: Price, Specs link, and CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Indicative Pricing</span>
                    <span className="font-serif text-sm font-medium text-[#D4BE92] tabular-nums">
                      {project.priceRange}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#F6F3ED] hover:text-[#D4BE92] transition-colors group/btn cursor-pointer py-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#B89B68]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 italic">
            Demonstration Portfolio: All six projects showcase fictional architectural properties created by SP VisionWorks. All configurations, pricing, and masterplan representations are sample demonstrative assets.
          </p>
        </div>
      </div>
    </section>
  );
}
