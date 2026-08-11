import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Maximize2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const TrackExperienceSection = ({ onOpenBooking }) => {
  const [activeImage, setActiveImage] = useState(null);

  const experienceCards = [
    {
      id: 'track-environment',
      title: '720M OUTDOOR CIRCUIT',
      subtitle: 'CHAMPIONSHIP ARENA',
      tag: 'TRACK INFRASTRUCTURE',
      image: '/images/kart-track-2.webp',
      alt: 'Kartomania 720m Outdoor Asphalt Circuit Environment',
      desc: 'Engineered by national racing drivers featuring high-grip polymer asphalt, technical switchbacks, high-speed sweeping arcs, and FIA-spec red/green apex kerbs.',
      stats: [
        { label: 'LENGTH', val: '720M' },
        { label: 'TURNS', val: '14 APEXES' },
        { label: 'SURFACE', val: 'ASPHALT' }
      ]
    },
    {
      id: 'race-results',
      title: 'RACE LIKE A PRO',
      subtitle: 'LIVE TIMING LEADERBOARD',
      tag: 'RACEFACER TELEMETRY',
      image: '/images/race-results.webp',
      alt: 'Kartomania Live Race Timing Leaderboard and Results',
      desc: 'Championship-grade digital transponders track your sector splits, lap times, and telemetry down to 1/1000th of a second with real-time stadium screen updates.',
      stats: [
        { label: 'ACCURACY', val: '0.001s' },
        { label: 'SYSTEM', val: 'RACEFACER' },
        { label: 'DISPLAYS', val: 'LIVE HUD' }
      ]
    },
    {
      id: 'karts-fleet',
      title: 'OUR FLEET',
      subtitle: 'READY TO RACE',
      tag: '4 FLEET TIERS',
      image: '/images/karts.webp',
      alt: 'Kartomania Professional Fleet of Go-Karts on Staging Grid',
      desc: 'Precision-tuned fleet of Honda GX200 7 BHP, SODI RT8 9 BHP, SODI Pro 12 BHP, and Honda Twin 390cc 15 BHP karts with race slicks and protective safety wraps.',
      stats: [
        { label: 'TOP FLEET', val: '15 BHP TWIN' },
        { label: 'SAFETY', val: 'F1 PRO WRAP' },
        { label: 'STARTING', val: '₹550' }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* 1. Header with Motorsport Accents */}
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/15 border border-[#EE3124]/40 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> REAL KARTOMANIA TRACK EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-gray-950 leading-[1.05]">
          AUTHENTIC MOTORSPORT. <span className="text-[#EE3124]">CHAMPIONSHIP GRID.</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Step into India's premier 720-meter outdoor asphalt racing arena. From golden sunset heats to millisecond-accurate race telemetry and our championship kart fleet.
        </p>
      </div>

      {/* 2. Primary Large Cinematic Hero Showcase (kart-track-1.webp) */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0a0c12] border border-gray-800 shadow-2xl mb-8 sm:mb-10 group">
        <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] overflow-hidden">
          <img
            src="/images/kart-track-1.webp"
            alt="Kartomania Sunset Outdoor Circuit Atmosphere"
            loading="eager"
            className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Motorsport Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

          {/* Top Floating Badge & Lightbox Trigger */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                CINEMATIC TRACK VIEW
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
                SUNSET RACING SESSIONS
              </span>
            </div>

            <button
              onClick={() => setActiveImage({
                src: '/images/kart-track-1.webp',
                title: 'Kartomania Sunset Racing Arena',
                tag: '720M OUTDOOR ASPHALT',
                desc: 'Experience the exhilarating sunset and floodlit evening heats on our 720-meter championship asphalt circuit.'
              })}
              aria-label="Expand cinematic track image"
              className="p-2.5 rounded-full bg-black/60 hover:bg-[#EE3124] text-white border border-white/20 hover:border-[#EE3124] transition-colors shadow-lg cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Hero Content Overlay */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-2xl text-left">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#FFD700] uppercase tracking-widest block">
                // ENTERTAINLAND MALL &bull; SECTOR 83 GURUGRAM
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight drop-shadow-lg">
                THE GOLDEN HOUR <span className="text-[#EE3124]">AT KARTOMANIA</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed drop-shadow-md">
                High-banked curves, floodlit night racing, and championship asphalt engineered for maximum mechanical grip. Owned, designed, and maintained by active national racing champion Mr. Rohit Khanna.
              </p>
            </div>

            {/* Quick Action CTA inside Hero Card */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <MagneticButton onClick={onOpenBooking} className="py-3 sm:py-3.5 px-6 sm:px-8 text-xs font-bold shadow-xl">
                BOOK SESSION NOW 🏁
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Integrated Circuit Telemetry Strip Underneath Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-800 bg-[#0c0e17] border-t border-gray-800 text-center font-mono">
          <div className="p-3 sm:p-4">
            <div className="text-[10px] text-gray-400 uppercase">TRACK LENGTH</div>
            <div className="text-lg sm:text-xl font-display font-bold text-[#EE3124]">720 METERS</div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="text-[10px] text-gray-400 uppercase">CHAMPIONSHIP TURNS</div>
            <div className="text-lg sm:text-xl font-display font-bold text-white">14 APEXES</div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="text-[10px] text-gray-400 uppercase">TOP SPEED</div>
            <div className="text-lg sm:text-xl font-display font-bold text-[#FFD700]">85 KM/H</div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="text-[10px] text-gray-400 uppercase">SAFETY SYSTEM</div>
            <div className="text-lg sm:text-xl font-display font-bold text-white">F1 PRO BARRIER</div>
          </div>
        </div>
      </div>

      {/* 3. Three-Card Feature Grid for Track-2, Race-Results & Karts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {experienceCards.map((card) => (
          <div
            key={card.id}
            className="group rounded-2xl bg-[#0c0e17] border border-gray-800 hover:border-[#EE3124]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
          >
            {/* Image Container with Hover Zoom & Badges */}
            <div
              onClick={() => setActiveImage({
                src: card.image,
                title: card.title,
                tag: card.tag,
                desc: card.desc
              })}
              className="relative h-60 sm:h-64 overflow-hidden cursor-pointer bg-black"
            >
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-[0.9] group-hover:scale-108 transition-transform duration-600 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-md">
                  {card.tag}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-1.5 rounded-full bg-black/70 text-white flex items-center justify-center">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Card Title on Image */}
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <span className="text-[10px] font-mono text-[#FFD700] uppercase font-bold tracking-wider block">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase group-hover:text-[#EE3124] transition-colors">
                  {card.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 space-y-4 flex flex-col justify-between flex-grow">
              <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
                {card.desc}
              </p>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-800/80 font-mono text-center">
                {card.stats.map((st, sidx) => (
                  <div key={sidx} className="p-2 rounded-lg bg-black/40 border border-gray-800">
                    <div className="text-[8px] text-gray-400 uppercase">{st.label}</div>
                    <div className="text-xs sm:text-sm font-display font-bold text-white">{st.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
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
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#0c0e17] border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#EE3124] font-bold uppercase tracking-wider">
                    {activeImage.tag}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white uppercase">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-400 max-w-2xl">
                    {activeImage.desc}
                  </p>
                </div>

                <MagneticButton onClick={() => { setActiveImage(null); onOpenBooking(); }} className="py-2.5 px-6 text-xs whitespace-nowrap">
                  Book This Experience 🏁
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrackExperienceSection;
