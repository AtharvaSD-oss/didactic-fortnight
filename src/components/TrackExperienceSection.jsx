import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

const TrackExperienceSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const showcaseItems = [
    {
      num: '01',
      tag: 'THE TRACK',
      title: 'Where every lap becomes a story.',
      image: '/images/kart-track-1.webp',
      alt: 'Kartomania outdoor go-karting track at sunset',
      desc: 'The sunset atmosphere over Kartomania’s 720m high-grip outdoor asphalt arena.'
    },
    {
      num: '02',
      tag: 'THE CIRCUIT',
      title: 'Built for speed. Designed for adrenaline.',
      image: '/images/kart-track-2.webp',
      alt: 'Kartomania racing circuit',
      desc: '14 technical apex turns, high-speed straights, and pro-level barrier systems.'
    },
    {
      num: '03',
      tag: 'RACE DAY',
      title: 'Every second counts.',
      image: '/images/race-results.webp',
      alt: 'Live Kartomania race leaderboard',
      desc: 'Real-time telemetry, split sector timing, and official RaceFacer leaderboard classifications.'
    },
    {
      num: '04',
      tag: 'THE KARTS',
      title: 'Your machine. Your line. Your race.',
      image: '/images/karts.webp',
      alt: 'Kartomania go-karts lined up at the circuit',
      desc: 'Precision-tuned fleet of Honda GX200, SODI Pro, and 15 BHP Twin-Engine machinery on the staging grid.'
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-gray-900 transition-colors duration-300"
    >
      {/* 1. Technical Motorsport Editorial Heading */}
      <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-14 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EE3124] animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#EE3124] uppercase">
            // VISUAL SHOWCASE
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-gray-950 uppercase leading-[0.92]">
            THE KARTOMANIA
          </h2>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#EE3124] via-[#FFD700] to-gray-800 uppercase leading-[0.92]">
            EXPERIENCE
          </h2>
        </div>

        <p className="text-xs sm:text-base font-mono text-gray-600 max-w-2xl leading-relaxed pt-1">
          An authentic, cinematic chronicle of our 720m asphalt circuit, live RaceFacer telemetry, and pro-calibrated racing fleet.
        </p>
      </div>

      {/* 2. Asymmetric Editorial Gallery Layout */}
      <div className="space-y-6 sm:space-y-8">
        
        {/* CARD 01 — THE TRACK (Dominant Hero Visual, ~16:9 Aspect Ratio) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setActiveImage(showcaseItems[0])}
          className="group relative w-full h-[340px] sm:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-2xl cursor-pointer"
        >
          <img
            src={showcaseItems[0].image}
            alt={showcaseItems[0].alt}
            loading="eager"
            className="w-full h-full object-cover object-[center_60%] filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Motorsport Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          {/* Top Badge & Lightbox Trigger */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                01 / THE TRACK
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
                SUNSET ARENA
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          {/* Bottom Editorial Content */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1 sm:space-y-2 max-w-xl text-left transform transition-transform duration-500 group-hover:-translate-y-1">
              <span className="font-mono text-xl sm:text-3xl font-black text-[#FFD700] tracking-wider block">
                01
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight">
                THE TRACK
              </h3>
              <p className="text-xs sm:text-base font-serif italic text-gray-200 drop-shadow-md">
                "{showcaseItems[0].title}"
              </p>
            </div>

            {/* Hover Interactive Indicator */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
              <span>View Experience</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>

        {/* 2-COLUMN ASYMMETRIC ROW: 02 THE CIRCUIT & 03 RACE DAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* CARD 02 — THE CIRCUIT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveImage(showcaseItems[1])}
            className="group relative w-full h-[320px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <img
              src={showcaseItems[1].image}
              alt={showcaseItems[1].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                02 / THE CIRCUIT
              </span>
              <div className="p-2 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between gap-2">
              <div className="space-y-1 text-left transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-lg sm:text-2xl font-black text-[#FFD700] tracking-wider block">
                  02
                </span>
                <h3 className="text-lg sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                  THE CIRCUIT
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-gray-200">
                  "{showcaseItems[1].title}"
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors shrink-0">
                <span className="hidden sm:inline">View</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

          {/* CARD 03 — RACE DAY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveImage(showcaseItems[2])}
            className="group relative w-full h-[320px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <img
              src={showcaseItems[2].image}
              alt={showcaseItems[2].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                03 / RACE DAY
              </span>
              <div className="p-2 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between gap-2">
              <div className="space-y-1 text-left transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-lg sm:text-2xl font-black text-[#FFD700] tracking-wider block">
                  03
                </span>
                <h3 className="text-lg sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                  RACE DAY
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-gray-200">
                  "{showcaseItems[2].title}"
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors shrink-0">
                <span className="hidden sm:inline">View</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* CARD 04 — THE KARTS (Wide Cinematic Fleet Showcase, ~21:9 Aspect Ratio) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setActiveImage(showcaseItems[3])}
          className="group relative w-full h-[280px] sm:h-[380px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-2xl cursor-pointer"
        >
          <img
            src={showcaseItems[3].image}
            alt={showcaseItems[3].alt}
            loading="lazy"
            className="w-full h-full object-cover object-[center_65%] filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                04 / THE KARTS
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
                READY TO RACE
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1 sm:space-y-2 max-w-xl text-left transform transition-transform duration-500 group-hover:-translate-y-1">
              <span className="font-mono text-xl sm:text-3xl font-black text-[#FFD700] tracking-wider block">
                04
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight">
                THE KARTS
              </h3>
              <p className="text-xs sm:text-base font-serif italic text-gray-200 drop-shadow-md">
                "{showcaseItems[3].title}"
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
              <span>View Experience</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. Minimal Section Footer Line */}
      <div className="pt-10 sm:pt-14 border-t border-gray-200 mt-10 sm:mt-14 flex items-center justify-between text-xs sm:text-sm font-mono font-bold tracking-widest text-gray-500 uppercase">
        <div className="flex items-center gap-2 text-gray-800">
          <span className="text-[#EE3124]">BUILT FOR THE RACE.</span>
          <span className="hidden sm:inline text-gray-400">&bull;</span>
          <span className="text-gray-900">MADE FOR THE EXPERIENCE.</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#EE3124]">
          <span className="hidden sm:inline text-[10px] tracking-widest uppercase">MOTORSPORT HERITAGE</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* 4. Fullscreen High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative max-w-5xl w-full bg-[#0c0e17] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/80 text-white hover:text-[#EE3124] border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeImage.image}
                  alt={activeImage.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#0c0e17] border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase">
                      {activeImage.num}
                    </span>
                    <span className="text-[11px] font-mono text-[#FFD700] font-bold uppercase tracking-wider">
                      {activeImage.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-white uppercase">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-400 max-w-2xl">
                    {activeImage.desc}
                  </p>
                </div>

                <button
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#EE3124] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrackExperienceSection;
