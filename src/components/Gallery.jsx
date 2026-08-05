import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';

const cards = [
  {
    id: 'track',
    title: 'THE TRACK',
    subtitle: '550m Polymer Asphalt Multi-Level Arena',
    image: '/hero-sunset.jpg',
    badge: 'CIRCUIT SCHEMATIC',
    rotation: '-rotate-2',
    scale: 'scale-95 hover:scale-100',
  },
  {
    id: 'experience',
    title: 'THE EXPERIENCE',
    subtitle: '270cc Sodi RT10 Pro Series Telemetry',
    image: '/hero-side.jpg',
    badge: 'FEATURED EXPERIENCE',
    rotation: 'rotate-0',
    scale: 'scale-105 hover:scale-110 border-[#FFD700]/60 shadow-[0_0_50px_rgba(255,215,0,0.25)]',
    featured: true,
  },
  {
    id: 'thrill',
    title: 'THE THRILL',
    subtitle: 'Rotax & FMSCI National Championship Fleet',
    image: '/hero-front.jpg',
    badge: 'HIGH-OCTANE',
    rotation: 'rotate-2',
    scale: 'scale-95 hover:scale-100',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-28 px-4 max-w-7xl mx-auto relative z-20 border-t border-white/10 select-none">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] font-mono text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#FFD700]" /> ARENA SHOWCASE
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          CINEMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC]">GALLERY</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          Immerse yourself in Northern India's premier karting arena through our visual showcase.
        </p>
      </div>

      {/* 3-Card Desktop & Mobile Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
            onClick={() => setSelectedImage(card)}
            className={`
              relative group rounded-3xl overflow-hidden cursor-pointer border border-white/15 hover:border-[#FFD700]/70
              transition-all duration-500 shadow-2xl backdrop-blur-md bg-[#0c0c14]
              h-[420px] sm:h-[480px] flex flex-col justify-end
              ${card.rotation} ${card.scale}
            `}
          >
            {/* Background Zoom Image */}
            <motion.img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/60 via-transparent to-[#07070a]/60" />

            {/* Top Pill Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[#FFD700] font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                {card.badge}
              </span>
            </div>

            {/* Top Right Zoom Icon */}
            <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 border border-white/10 text-white group-hover:bg-[#FFD700] group-hover:text-black transition-colors duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Left Title & Description */}
            <div className="relative z-20 p-6 space-y-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white uppercase tracking-tight group-hover:text-[#FFD700] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs font-mono text-gray-300 font-normal">
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#0c0c14] border border-[#FFD700]/60 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,215,0,0.3)]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:text-[#FFD700] border border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[75vh] object-contain bg-black" />

              <div className="p-6 bg-[#09090f] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FFD700] uppercase font-bold">{selectedImage.badge}</span>
                  <h4 className="text-2xl font-display font-bold text-white uppercase">{selectedImage.title}</h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">{selectedImage.subtitle}</p>
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
