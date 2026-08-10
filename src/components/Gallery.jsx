import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    src: "/gallery/rotax-max-kart-71.jpg",
    title: "Rotax Max Kart #71 Apex",
    tag: "NATIONAL KARTING",
    desc: "Starting grid lineup of Tony Kart / Leap Frog Racing Kart #71 at the National Karting Championship.",
    span: "md:col-span-2",
    height: "h-64 sm:h-80"
  },
  {
    src: "/gallery/gallery-1.jpg",
    title: "Sodi RT10 Pro Fleet Lineup",
    tag: "PRO KART FLEET",
    desc: "270cc high-torque race karts prepped for high-speed sessions.",
    span: "md:col-span-1",
    height: "h-64 sm:h-80"
  },
  {
    src: "/gallery/gallery-2.jpg",
    title: "Kartomania Sunset Apex",
    tag: "SUNSET RACE",
    desc: "Karts rounding the hairpin turn as dusk falls over the main arena.",
    span: "md:col-span-1",
    height: "h-56 sm:h-64"
  },
  {
    src: "/gallery/gallery-3.jpg",
    title: "Hairpin Cornering Telemetry",
    tag: "TECHNICAL CHICANE",
    desc: "High-speed cornering along polymer barrier loops.",
    span: "md:col-span-1",
    height: "h-56 sm:h-64"
  },
  {
    src: "/gallery/gallery-4.jpg",
    title: "Podium Victory Celebration",
    tag: "CHAMPIONS",
    desc: "Drivers celebrating qualifying lap records in the paddock.",
    span: "md:col-span-1",
    height: "h-56 sm:h-64"
  },
  {
    src: "/gallery/gallery-5.jpg",
    title: "Pro Karts Fleet Lineup",
    tag: "ARENA FLEET",
    desc: "High-speed race karts lined up in the pitlane.",
    span: "md:col-span-2",
    height: "h-56 sm:h-64"
  }
];

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 bg-white text-gray-900">
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// VISUAL SHOWCASE</span>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          THE <span className="text-[#EE3124]">KARTOMANIA</span> EXPERIENCE
        </h2>
        <p className="text-xs sm:text-sm font-mono text-gray-600 max-w-xl mx-auto">
          Explore real track footage and national championship racing from Kartomania India.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActivePhoto(item)}
            data-cursor="VIEW"
            className={`
              relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-[#EE3124]/70
              transition-all duration-300 shadow-md hover:shadow-xl
              ${item.span} ${item.height} bg-gray-900
            `}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#EE3124] text-white font-mono text-[9px] font-bold uppercase tracking-widest shadow-md">
                {item.tag}
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase group-hover:text-[#FFD700] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-gray-200 line-clamp-1 sm:line-clamp-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Fullscreen Zoom Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#EE3124] border border-white/20 transition-colors"
              >
                ✕
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="p-6 bg-white space-y-2 text-gray-900">
                <span className="font-mono text-[10px] text-[#EE3124] uppercase font-bold tracking-widest">
                  {activePhoto.tag}
                </span>
                <h4 className="text-xl font-display font-bold text-gray-950 uppercase">{activePhoto.title}</h4>
                <p className="text-xs font-mono text-gray-600">{activePhoto.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
