import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    id: 'sunset-pitlane',
    src: '/gallery/kartomania-sunset-pitlane.jpg',
    alt: 'Kartomania Sunset Main Straight & Pitlane Canopy',
    category: 'Track & Circuit',
    tag: 'SUNSET TRACK',
    title: 'Main Straight & Pitlane Canopy',
    subtitle: '720M OUTDOOR CIRCUIT',
    desc: 'High-speed asphalt straight under the evening sky, engineered with wide overtaking slipstreams and modern pit shelters.',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 h-[280px] sm:h-[340px] md:h-[380px]',
  },
  {
    id: 'formula-racing',
    src: '/gallery/avalanche-formula-racing.jpg',
    alt: 'Founder Rohit Khanna in Avalanche Formula Racing Car #10',
    category: 'Racing Heritage',
    tag: 'NATIONAL CHAMPIONSHIP',
    title: 'Avalanche Racing #10 • Founder Rohit Khanna',
    subtitle: 'JK TYRE NATIONAL CHAMPIONSHIP GRID',
    desc: 'Founder & veteran champion Rohit Khanna in the cockpit on the national racing grid. Pure motorsport DNA behind Kartomania.',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[340px] md:h-[380px]',
  },
  {
    id: 'racefacer-timing',
    src: '/gallery/racefacer-live-timing.jpg',
    alt: 'RaceFacer Live Race Timing and Leaderboard at Night',
    category: 'Live Timing',
    tag: 'LIVE TELEMETRY',
    title: 'RaceFacer F1-Grade Live Leaderboard',
    subtitle: 'MILLISECOND PRECISION TRANSPONDERS',
    desc: 'Overhead live digital timing display tracking split sectors, fast laps, and race rankings during night racing sessions.',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[350px]',
  },
  {
    id: 'kart-fleet',
    src: '/gallery/kartomania-fleet-canopy.jpg',
    alt: 'Kartomania Go-Kart Fleet Lined up under Pit Lane Canopy',
    category: 'Fleet & Pitlane',
    tag: 'RACING FLEET',
    title: 'Precision-Tuned Kart Fleet',
    subtitle: '4 FLEET CATEGORIES',
    desc: 'High-torque 4-stroke race karts staged under the pitlane canopy, tuned daily by professional mechanics for razor-sharp handling.',
    aspect: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[350px]',
  },
  {
    id: 'track-circuit',
    src: '/gallery/kartomania-track-circuit.jpg',
    alt: 'Kartomania 720M Outdoor Track Circuit with Indian Flag and Polo Cup Arena',
    category: 'Track & Circuit',
    tag: '720M CIRCUIT',
    title: 'Turn 1 Apex & Polo Cup Arena',
    subtitle: '14 CORNERS & CHICANES',
    desc: 'The complete outdoor circuit featuring technical hairpins, polymer impact barriers, national flag staging, and spectator perimeter.',
    aspect: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-1 h-[280px] sm:h-[320px] md:h-[350px]',
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900 relative z-20"
    >
      {/* Top Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Camera className="w-3.5 h-3.5" /> MOTORSPORT IN ACTION
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          KARTOMANIA <span className="text-[#EE3124]">GALLERY</span>
        </h2>

        <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
          Explore authentic photographs from Northern India's premier 720m outdoor circuit, live RaceFacer telemetry, racing fleet, and national motorsport heritage.
        </p>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
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

      {/* Responsive Gallery Grid */}
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
              transition={{ duration: 0.4 }}
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`
                group relative rounded-2xl overflow-hidden border border-gray-200/90 bg-gray-950 shadow-md hover:shadow-2xl hover:border-[#EE3124]
                transition-all duration-500 cursor-pointer ${photo.aspect}
              `}
              data-cursor="EXPAND"
            >
              {/* Photo Background Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlays for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Top Tags & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
                  {photo.tag}
                </span>

                <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 group-hover:bg-[#EE3124] group-hover:border-[#EE3124] transition-colors shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1 text-left">
                <div className="font-mono text-[10px] sm:text-[11px] text-[#FFD700] uppercase font-bold tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#FFD700]" />
                  <span>{photo.subtitle}</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-black text-white uppercase tracking-tight group-hover:text-[#FFD700] transition-colors leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs font-sans text-gray-300 line-clamp-2 leading-relaxed opacity-90">
                  {photo.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
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
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-[#0B0F19] border border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/80 text-white hover:text-[#EE3124] hover:bg-black border border-white/20 transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Floating Navigation Buttons */}
              <button
                onClick={prevPhoto}
                aria-label="Previous Photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/75 backdrop-blur-md text-white hover:text-[#EE3124] hover:bg-black border border-white/20 transition-all cursor-pointer shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextPhoto}
                aria-label="Next Photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/75 backdrop-blur-md text-white hover:text-[#EE3124] hover:bg-black border border-white/20 transition-all cursor-pointer shadow-xl"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Lightbox Image Viewport */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden p-2 sm:p-4">
                <img
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Caption & Controls */}
              <div className="p-4 sm:p-6 bg-[#0B0F19] border-t border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {filteredPhotos[activePhotoIndex].tag}
                    </span>
                    <span className="font-mono text-xs text-gray-400 uppercase">
                      {filteredPhotos[activePhotoIndex].category}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-xl font-display font-bold text-white uppercase">
                    {filteredPhotos[activePhotoIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
                    {filteredPhotos[activePhotoIndex].desc}
                  </p>
                </div>

                <div className="font-mono text-xs text-gray-400 font-bold sm:text-right shrink-0">
                  PHOTO <span className="text-[#EE3124]">{activePhotoIndex + 1}</span> / {filteredPhotos.length}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
