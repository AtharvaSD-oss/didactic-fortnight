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
    rotation: 'md:-rotate-3',
    scale: 'scale-100 hover:scale-105',
  },
  {
    id: 'experience',
    title: 'THE EXPERIENCE',
    subtitle: '270cc Sodi RT10 Pro Series Telemetry',
    image: '/hero-side.jpg',
    badge: 'FEATURED EXPERIENCE',
    rotation: 'rotate-0',
    scale: 'scale-105 hover:scale-110 shadow-2xl border-[#FFB800] dark:border-[#FFD43B] z-20',
    featured: true,
  },
  {
    id: 'thrill',
    title: 'THE THRILL',
    subtitle: 'Rotax & FMSCI National Championship Fleet',
    image: '/hero-front.jpg',
    badge: 'HIGH-OCTANE',
    rotation: 'md:rotate-3',
    scale: 'scale-100 hover:scale-105',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FFFFFF] dark:bg-[#050505] transition-colors duration-500 relative z-20 border-t border-[#E5E7EB] dark:border-white/10 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB800]/15 dark:bg-[#FFD43B]/20 border border-[#FFB800]/40 text-[#FF5A1F] dark:text-[#FFD43B] font-sans text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#FF5A1F] dark:text-[#FFD43B]" /> ARENA GALLERY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#111111] dark:text-white uppercase tracking-tight">
            THE ARENA <span className="text-[#FFB800] dark:text-[#FFD43B]">SHOWCASE</span>
          </h2>
          <p className="text-sm font-sans text-[#555555] dark:text-[#CFCFCF] max-w-xl mx-auto">
            Experience the action, intensity, and craftsmanship of Kartomania through our high-resolution visual cards.
          </p>
        </div>

        {/* 3 Premium Overlapping Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              onClick={() => setSelectedImage(card)}
              className={`
                relative group rounded-[24px] overflow-hidden cursor-pointer border border-[#E5E7EB] dark:border-white/10 hover:border-[#FFB800] dark:hover:border-[#FFD43B]
                transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-2xl bg-white dark:bg-[#181818]
                h-[420px] sm:h-[480px] flex flex-col justify-end
                ${card.rotation} ${card.scale}
              `}
            >
              {/* Image */}
              <motion.img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-100 dark:brightness-90 contrast-105"
              />

              {/* Light / Dark Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Glass Reflection Swipe Line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 dark:via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3.5 py-1 rounded-full bg-white/90 dark:bg-black/70 border border-white/40 dark:border-white/20 text-[#111111] dark:text-white font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 dark:bg-black/60 border border-white/50 dark:border-white/20 text-[#111111] dark:text-white group-hover:bg-[#FFB800] dark:group-hover:bg-[#FFD43B] group-hover:text-black transition-colors duration-300 shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Left Title */}
              <div className="relative z-20 p-6 space-y-1 text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white uppercase tracking-tight group-hover:text-[#FFB800] dark:group-hover:text-[#FFD43B] transition-colors">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#181818] border border-[#E5E7EB] dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-white/90 dark:bg-black/70 text-[#111111] dark:text-white hover:text-[#FF5A1F] dark:hover:text-[#FFD43B] border border-[#E5E7EB] dark:border-white/20 transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[75vh] object-contain bg-black" />

              <div className="p-6 bg-[#F8F9FB] dark:bg-[#111111] border-t border-[#E5E7EB] dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF5A1F] dark:text-[#FFD43B] uppercase font-bold">{selectedImage.badge}</span>
                  <h4 className="text-2xl font-display font-bold text-[#111111] dark:text-white uppercase">{selectedImage.title}</h4>
                  <p className="text-xs font-sans text-[#555555] dark:text-[#CFCFCF] mt-1">{selectedImage.subtitle}</p>
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
