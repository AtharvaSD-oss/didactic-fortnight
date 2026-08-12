import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

const TrackExperienceSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const imagesData = {
    hero: {
      num: '01',
      tag: 'THE TRACK',
      quote: 'Where every lap begins.',
      actionText: 'VIEW TRACK',
      image: '/images/kart-track-1.webp',
      alt: 'Kartomania outdoor go-karting track at sunset',
      desc: 'The sunset atmosphere over Kartomania’s 720m high-grip outdoor asphalt arena.'
    },
    circuit: {
      num: '02',
      tag: 'THE CIRCUIT',
      quote: 'Designed for speed. Built for competition.',
      actionText: 'EXPLORE CIRCUIT',
      image: '/images/kart-track-2.webp',
      alt: 'Kartomania outdoor racing circuit',
      desc: '14 technical apex turns, high-speed straights, and pro-level barrier systems at Entertainland Mall.'
    },
    raceDay: {
      num: '03',
      tag: 'RACE DAY',
      quote: 'Every second counts.',
      actionText: 'VIEW LEADERBOARD',
      image: '/images/race-results.webp',
      alt: 'Kartomania live race timing and leaderboard',
      desc: 'Live RaceFacer digital transponder timing accurate to 0.001s, sector splits, and live stadium HUD.'
    },
    machines: {
      num: '04',
      tag: 'THE MACHINES',
      quote: 'Your kart. Your line. Your race.',
      actionText: 'DISCOVER FLEET',
      image: '/images/karts.webp',
      alt: 'Kartomania racing karts lined up at the track',
      desc: 'Championship-calibrated fleet of Honda GX200, SODI Pro, and 15 BHP Twin 390cc race karts.'
    }
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-gray-900 transition-colors duration-300 relative z-20"
    >
      {/* ==================================================
          SECTION HEADER: Formula 1 Editorial Typography
          ================================================== */}
      <div className="space-y-4 mb-10 sm:mb-14">
        {/* Technical Eyebrow & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EE3124] animate-ping" />
            <span className="text-[#EE3124] font-black">01 / 04</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-700">VISUAL ARCHIVE</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <span>TRACK / RACE / EXPERIENCE</span>
          </div>
        </div>

        {/* Small Eyebrow & Ultra-Large Condensed Title */}
        <div className="space-y-1 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm sm:text-lg font-bold tracking-[0.2em] text-gray-500 uppercase block"
          >
            THE KARTOMANIA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter text-gray-950 uppercase leading-[0.88] drop-shadow-sm"
          >
            EXPERIENCE
          </motion.h2>
        </div>

        {/* Supporting Editorial Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs sm:text-base font-sans text-gray-600 max-w-2xl leading-relaxed text-left"
        >
          From the first turn to the final lap, experience real racing, real competition and pure adrenaline at Kartomania.
        </motion.p>
      </div>

      {/* ==================================================
          MAIN VISUAL: 01 THE TRACK (Hero Image)
          ================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setActiveImage(imagesData.hero)}
        className="group relative w-full h-[420px] sm:h-[580px] lg:h-[660px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-2xl cursor-pointer mb-6 sm:mb-8"
      >
        <img
          src={imagesData.hero.image}
          alt={imagesData.hero.alt}
          loading="eager"
          className="w-full h-full object-cover object-[center_55%] filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
        />

        {/* Subtle Dark Gradient only over bottom portion so track & sunset remain clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Top Floating Badge & Lightbox Trigger */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
              01 &bull; THE TRACK
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
              720M OUTDOOR ASPHALT
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Bottom-Left Editorial Content & Interaction */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1 sm:space-y-2 max-w-xl text-left transform transition-transform duration-500 group-hover:-translate-y-1">
            <span className="font-mono text-2xl sm:text-4xl font-black text-[#FFD700] tracking-wider block">
              01
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
              THE TRACK
            </h3>
            <p className="text-xs sm:text-base font-serif italic text-gray-200 drop-shadow-md">
              "{imagesData.hero.quote}"
            </p>
          </div>

          {/* VIEW TRACK Interaction with animated arrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
            <span>{imagesData.hero.actionText}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>

      {/* ==================================================
          SECONDARY ASYMMETRIC EDITORIAL GRID
          ================================================== */}
      <div className="space-y-6 sm:space-y-8">
        
        {/* ROW 1: 02 THE CIRCUIT (55-60% width) + 03 RACE DAY (40-45% width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* IMAGE 2 — THE CIRCUIT (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveImage(imagesData.circuit)}
            className="lg:col-span-7 group relative w-full h-[300px] sm:h-[380px] lg:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <img
              src={imagesData.circuit.image}
              alt={imagesData.circuit.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                02 &bull; THE CIRCUIT
              </span>
              <div className="p-2 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between gap-3">
              <div className="space-y-1 text-left transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-lg sm:text-2xl font-black text-[#FFD700] tracking-wider block">
                  02
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tight leading-snug">
                  THE CIRCUIT
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-gray-200">
                  "{imagesData.circuit.quote}"
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors shrink-0">
                <span className="hidden sm:inline">{imagesData.circuit.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

          {/* IMAGE 3 — RACE DAY (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveImage(imagesData.raceDay)}
            className="lg:col-span-5 group relative w-full h-[300px] sm:h-[380px] lg:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <img
              src={imagesData.raceDay.image}
              alt={imagesData.raceDay.alt}
              loading="lazy"
              className="w-full h-full object-cover object-[center_30%] filter brightness-[0.94] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Top Badge & Live Timing Technical Indicator */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                  03 &bull; RACE DAY
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 text-[#FFD700] border border-[#FFD700]/30 font-mono text-[9px] font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE3124] animate-ping" />
                  LIVE TIMING
                </span>
              </div>

              <div className="p-2 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between gap-3">
              <div className="space-y-1 text-left transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-lg sm:text-2xl font-black text-[#FFD700] tracking-wider block">
                  03
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-display font-bold text-white uppercase tracking-tight leading-snug">
                  RACE DAY
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-gray-200">
                  "{imagesData.raceDay.quote}"
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors shrink-0">
                <span className="hidden sm:inline">{imagesData.raceDay.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ROW 2: IMAGE 4 — THE MACHINES (Wide Cinematic Fleet Showcase, ~21:9) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setActiveImage(imagesData.machines)}
          className="group relative w-full h-[280px] sm:h-[380px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#07070a] border border-gray-800 shadow-2xl cursor-pointer"
        >
          <img
            src={imagesData.machines.image}
            alt={imagesData.machines.alt}
            loading="lazy"
            className="w-full h-full object-cover object-[center_65%] filter brightness-[0.92] contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                04 &bull; THE MACHINES
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
                PRO FLEET
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-full bg-black/60 text-white border border-white/20 group-hover:border-[#EE3124] group-hover:bg-[#EE3124] transition-all">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1 sm:space-y-2 max-w-xl text-left transform transition-transform duration-500 group-hover:-translate-y-1">
              <span className="font-mono text-2xl sm:text-4xl font-black text-[#FFD700] tracking-wider block">
                04
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
                THE MACHINES
              </h3>
              <p className="text-xs sm:text-base font-serif italic text-gray-200 drop-shadow-md">
                "{imagesData.machines.quote}"
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
              <span>{imagesData.machines.actionText}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* ==================================================
          SECTION FOOTER: Minimal Motorsport Divider Line
          ================================================== */}
      <div className="pt-10 sm:pt-14 border-t border-gray-200 mt-10 sm:mt-14 flex items-center justify-between text-xs sm:text-sm font-mono font-bold tracking-widest text-gray-500 uppercase">
        <div className="flex items-center gap-2 text-gray-800">
          <span className="text-[#EE3124]">BUILT FOR THE RACE.</span>
          <span className="hidden sm:inline text-gray-400">&bull;</span>
          <span className="text-gray-900">MADE FOR THE EXPERIENCE.</span>
        </div>

      </div>

      {/* ==================================================
          FULLSCREEN HIGH-RES LIGHTBOX MODAL
          ================================================== */}
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
                    "{activeImage.quote}"
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
