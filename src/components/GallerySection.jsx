import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    id: 'sunset-pitlane',
    src: '/gallery/kartomania-sunset-pitlane.jpg',
    alt: 'Kartomania Sunset Track and Pitlane',
    category: 'Track & Circuit',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-[280px] sm:h-[360px] md:h-[420px]',
  },
  {
    id: 'formula-racing',
    src: '/gallery/avalanche-formula-racing.jpg',
    alt: 'Formula Racing Car #10',
    category: 'Racing Heritage',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[360px] md:h-[420px]',
  },
  {
    id: 'racefacer-timing',
    src: '/gallery/racefacer-live-timing.jpg',
    alt: 'RaceFacer Live Timing Screen',
    category: 'Live Timing',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[340px] md:h-[380px]',
  },
  {
    id: 'kart-fleet',
    src: '/gallery/kartomania-fleet-canopy.jpg',
    alt: 'Kart Fleet Pitlane',
    category: 'Fleet & Pitlane',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[340px] md:h-[380px]',
  },
  {
    id: 'track-circuit',
    src: '/gallery/kartomania-track-circuit.jpg',
    alt: 'Kartomania 720M Circuit',
    category: 'Track & Circuit',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-1 h-[280px] sm:h-[340px] md:h-[380px]',
  },
];

const CATEGORIES = ['ALL', 'Track & Circuit', 'Live Timing', 'Fleet & Pitlane', 'Racing Heritage'];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const filteredPhotos = selectedCategory === 'ALL'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prevIndex) => (prevIndex + 1) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prevIndex) => (prevIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, nextPhoto, prevPhoto]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] text-white relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
              <span className="text-white text-sm font-bold font-mono">/ GALLERY</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Camera className="w-3.5 h-3.5 text-[#F47C20]" /> // HIGH-OCTANE GALLERY
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-none">
              ACTION ON THE <span className="text-[#F47C20]">720M ASPHALT</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#F47C20] text-white shadow-md'
                    : 'bg-white/5 text-[#AAAAAA] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`relative group rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#F47C20] transition-all duration-300 shadow-md ${photo.aspect}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold tracking-widest block">
                    {photo.category}
                  </span>
                  <span className="text-sm font-display font-bold text-white uppercase tracking-wide">
                    {photo.alt}
                  </span>
                </div>
                <span className="p-2 rounded-full bg-black/60 text-white group-hover:bg-[#F47C20] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer hidden sm:flex"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer hidden sm:flex"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={filteredPhotos[activePhotoIndex].src}
                alt={filteredPhotos[activePhotoIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/20 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[#F47C20] uppercase font-bold tracking-widest block">
                  {filteredPhotos[activePhotoIndex].category}
                </span>
                <span className="text-lg font-display font-bold text-white uppercase tracking-wide">
                  {filteredPhotos[activePhotoIndex].alt}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
