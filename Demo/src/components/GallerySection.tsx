import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/siteData';

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Exterior' | 'Interior' | 'Landscape' | 'Engineering'>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const prevLightboxImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F6F3ED] text-[#202321] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#987C49] mb-3">
              <span>Architectural Archive</span>
              <span className="text-neutral-400">/</span>
              <span>Photographic Monograph</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#202321] [text-wrap:balance]">
              The Architectural <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#987C49]">Gallery</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {(['All', 'Exterior', 'Interior', 'Landscape', 'Engineering'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#202321] text-[#F6F3ED]'
                    : 'bg-[#EAE6DD] text-neutral-600 hover:text-neutral-900 hover:bg-[#dedad0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const isSpan2 = idx === 0 || idx === 3 || idx === 7;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden rounded-lg bg-neutral-900 cursor-pointer shadow-md ${
                  isSpan2 ? 'md:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Overlay Metadata */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#D4BE92] mb-1">
                    <span>{item.category}</span>
                    <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-light leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-sans mt-0.5 line-clamp-1">
                    {item.projectRef}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox view"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4BE92]">
                  {filteredItems[activeLightboxIndex].category} Photography
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative w-full aspect-[16/10] max-h-[70vh] rounded overflow-hidden bg-black flex items-center justify-center">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={prevLightboxImage}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextLightboxImage}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-300">
              <p className="max-w-2xl font-light">
                {filteredItems[activeLightboxIndex].description}
              </p>
              <span className="text-neutral-500 font-mono">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
