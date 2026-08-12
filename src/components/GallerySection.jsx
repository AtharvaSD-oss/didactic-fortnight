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

const GallerySection = () => {
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
    setActivePhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
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
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111] relative z-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-10 sm:mb-14 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT IN ACTION
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
            KARTOMANIA <span className="text-[#F47C20]">GALLERY</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-3.5 py-1.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'bg-[#F47C20] text-white shadow-sm'
                    : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#FFF0E5] hover:text-[#F47C20] border border-[#E5E5E5]'
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean Photo Gallery Grid - No Text on Images */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`
                group relative rounded-2xl overflow-hidden border-2 border-[#E5E5E5] bg-[#F9F9F9] shadow-sm hover:shadow-xl hover:border-[#F47C20]
                transition-all duration-500 cursor-pointer ${photo.aspect}
              `}
              data-cursor="EXPAND"
            >
              {/* Clean Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Subtle Expand Icon on Hover */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 hover:bg-[#F47C20] hover:text-white transition-colors shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Clean Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="absolute top-2 right-2 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#F47C20] border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={prevPhoto}
                aria-label="Previous Photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/80 backdrop-blur-md text-white hover:bg-[#F47C20] hover:text-white border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                aria-label="Next Photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/80 backdrop-blur-md text-white hover:bg-[#F47C20] hover:text-white border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Clean Image Viewport */}
              <div className="relative w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
