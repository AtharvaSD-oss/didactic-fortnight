import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';

const cards = [
  {
    id: 'track',
    title: 'THE TRACK',
    subtitle: '550m Polymer Asphalt Multi-Level Arena',
    image: '/hero-sunset.jpg',
    badge: 'CIRCUIT SCHEMATIC',
    rotation: 'md:-rotate-2',
  },
  {
    id: 'experience',
    title: 'THE EXPERIENCE',
    subtitle: '270cc Sodi RT10 Pro Series Telemetry',
    image: '/hero-side.jpg',
    badge: 'FEATURED EXPERIENCE',
    rotation: 'rotate-0',
    featured: true,
  },
  {
    id: 'thrill',
    title: 'THE THRILL',
    subtitle: 'Rotax & FMSCI National Championship Fleet',
    image: '/hero-front.jpg',
    badge: 'HIGH-OCTANE',
    rotation: 'md:rotate-2',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#FFFFFF] transition-colors duration-300 relative z-20 border-t border-[#E5E7EB] select-none">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/40 text-[#FF5A1F] font-sans text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#FF5A1F]" /> ARENA GALLERY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#111111] uppercase tracking-tight">
            THE ARENA <span className="text-[#FFB800]">SHOWCASE</span>
          </h2>
          <p className="text-sm font-sans text-[#555555] max-w-xl mx-auto">
            Experience the action, intensity, and craftsmanship of Kartomania through our high-resolution visual cards.
          </p>
        </div>

        {/* 3 Hardware-Accelerated Overlapping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              onClick={() => setSelectedImage(card)}
              className={`
                relative group rounded-[24px] overflow-hidden cursor-pointer border border-[#E5E7EB] hover:border-[#FFB800]
                transition-all duration-300 transform-gpu shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white
                h-[400px] sm:h-[460px] flex flex-col justify-end
                ${card.rotation} ${card.featured ? 'md:scale-105 z-20 border-[#FFB800]' : 'hover:-translate-y-1.5'}
              `}
            >
              {/* Hardware Accelerated Image Layer */}
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3.5 py-1 rounded-full bg-black/75 border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white group-hover:bg-[#FFB800] group-hover:text-black transition-colors duration-200 shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Left Title */}
              <div className="relative z-20 p-6 space-y-1 text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white uppercase tracking-tight group-hover:text-[#FFB800] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs font-sans text-gray-200 font-normal">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#FF5A1F] border border-white/20 transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                decoding="async"
                className="w-full max-h-[75vh] object-contain bg-black"
              />

              <div className="p-6 bg-[#F8F9FB] border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold">{selectedImage.badge}</span>
                  <h4 className="text-2xl font-display font-bold text-[#111111] uppercase">{selectedImage.title}</h4>
                  <p className="text-xs font-sans text-[#555555] mt-1">{selectedImage.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
