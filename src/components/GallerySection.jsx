import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    id: 'sunset-pitlane',
    src: '/gallery/kartomania-sunset-pitlane.jpg',
    alt: 'Kartomania Sunset Track and Pitlane',
    category: 'Track & Circuit',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-[280px] sm:h-[340px] md:h-[400px]',
  },
  {
    id: 'formula-racing',
    src: '/gallery/avalanche-formula-racing.jpg',
    alt: 'Formula Racing Car #10',
    category: 'Racing Heritage',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[340px] md:h-[400px]',
  },
  {
    id: 'racefacer-timing',
    src: '/gallery/racefacer-live-timing.jpg',
    alt: 'RaceFacer Live Timing Screen',
    category: 'Live Timing',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[360px]',
  },
  {
    id: 'kart-fleet',
    src: '/gallery/kartomania-fleet-canopy.jpg',
    alt: 'Kart Fleet Pitlane',
    category: 'Fleet & Pitlane',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[360px]',
  },
  {
    id: 'track-circuit',
    src: '/gallery/kartomania-track-circuit.jpg',
    alt: 'Kartomania 720M Circuit',
    category: 'Track & Circuit',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[360px]',
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
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900 relative z-20"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Camera className="w-3.5 h-3.5" /> MOTORSPORT IN ACTION
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          KARTOMANIA <span className="text-[#EE3124]">GALLERY</span>
        </h2>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer
                  ${isActive
                    ? 'bg-[#EE3124] text-white shadow-md shadow-[#EE3124]/25 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-200/80'
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`
                group relative rounded-2xl overflow-hidden border border-gray-200/90 bg-gray-900 shadow-sm hover:shadow-2xl hover:border-[#EE3124]
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
                <div className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-[#EE3124] hover:border-[#EE3124] transition-colors shadow-lg">
                  <Maximize2 className="w-4 h-4" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="absolute top-2 right-2 z-30 p-3 rounded-full bg-black/80 text-white hover:text-[#EE3124] border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={prevPhoto}
                aria-label="Previous Photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#EE3124] border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextPhoto}
                aria-label="Next Photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#EE3124] border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Clean Image Viewport */}
              <div className="relative w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl">
                <img
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
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
