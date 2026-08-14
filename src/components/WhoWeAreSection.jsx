import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Camera, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

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

const LEAP_FROG_PHOTOS = [
  {
    src: "/leap-frog/leap-frog-1.jpg",
    title: "Rotax Max Championship Chassis #71",
    tag: "COMPETITION KART",
    desc: "Championship-winning Rotax 2-stroke race kart in full competition trim at the JK Tyre National Championship."
  },
  {
    src: "/leap-frog/leap-frog-2.jpg",
    title: "JK Tyre National Karting Championship Grid",
    tag: "NATIONAL GRID",
    desc: "Mr. Rohit Khanna and the Leap Frog Racing squad lined up on the national championship starting grid."
  },
  {
    src: "/leap-frog/leap-frog-4.jpg",
    title: "Championship Race Action & Pit Telemetry",
    tag: "CIRCUIT ACTION",
    desc: "High-G apex cornering and live engine telemetry monitoring during national championship finals."
  }
];

const CATEGORIES = ['ALL', 'Track & Circuit', 'Live Timing', 'Fleet & Pitlane', 'Racing Heritage'];

const StatCounter = ({ end, suffix = '', label, number = "01" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="p-6 rounded-2xl bg-[#141414] border border-white/10 text-left hover:border-[#F47C20] transition-all duration-300">
      <span className="font-mono text-xs font-bold text-[#F47C20] tracking-widest block mb-2">{number}</span>
      <div className="text-3xl sm:text-5xl font-display font-bold text-white mb-1">
        {count}
        {suffix}
      </div>
      <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888]">
        {label}
      </p>
    </div>
  );
};

export const WhoWeAreSection = () => {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [activeLeapFrogImg, setActiveLeapFrogImg] = useState(null);

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
    setActivePhotoIndex((prevIndex) => (prevIndex + 1) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prevIndex) => (prevIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

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
      ref={sectionRef}
      id="who-we-are"
      className="relative w-full bg-[#080808] text-white"
    >
      {/* ── Dark Transition Header Block ── */}
      <div className="bg-[#080808] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-12 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-3">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
              <span className="text-white text-sm font-bold font-mono">/ ABOUT & GALLERY</span>
            </div>

            <h2 className="mt-4 text-white font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              THE KARTOMANIA EXPERIENCE & GALLERY
            </h2>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Top Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // ABOUT KARTOMANIA
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-tight">
              NORTHERN INDIA'S PREMIER <br className="hidden sm:block" />
              <span className="text-[#F47C20]">720M OUTDOOR</span> TRACK
            </h2>
          </div>
          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest font-semibold">
            MANESAR &bull; GURGAON
          </span>
        </div>

        {/* Narrative Story Block */}
        <div className="text-left max-w-4xl space-y-6">
          <p className="text-white text-lg sm:text-2xl leading-relaxed font-sans font-medium">
            Founded by veteran motorsport champion <strong className="font-bold text-white">Mr. Rohit Khanna</strong> (20+ years of active Indian & international racing championships), Kartomania is the <strong className="font-bold text-[#F47C20]">only racing track owned, run, and maintained by a professional racer</strong>.
          </p>

          <p className="text-[#AAAAAA] text-base sm:text-lg leading-relaxed font-sans">
            From beginners learning proper braking lines to pro racers shaving split seconds, Kartomania offers an authentic 720-meter outdoor asphalt circuit with 4 calibrated kart fleet categories and live telemetry timing.
          </p>

          <div className="pt-2">
            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3.5 px-8 text-xs">
              EXPERIENCE THE THRILL &rarr;
            </MagneticButton>
          </div>
        </div>

        {/* 4 Stats Minimal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCounter number="01" end={720} suffix="m" label="OUTDOOR GRAND PRIX TRACK" />
          <StatCounter number="02" end={14} label="RACING TURNS & APEXES" />
          <StatCounter number="03" end={4} label="KART FLEET CATEGORIES" />
          <StatCounter number="04" end={1000} suffix="+" label="RACES COMPLETED WEEKLY" />
        </div>

        {/* ── MOTORSPORT HERITAGE: LEAP FROG RACING SUB-SECTION ── */}
        <div className="pt-12 border-t border-white/10 space-y-12 text-left">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 text-[#F47C20] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT HERITAGE
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-none">
                LEAP FROG <span className="text-[#F47C20]">RACING</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-wider max-w-md">
              Kartomania's official professional motorsport division competing across Indian National Karting Championships.
            </p>
          </div>

          {/* Story Narrative & Racing Accolades */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 font-sans">
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                <strong className="text-[#F47C20]">Leap Frog Racing</strong> is Northern India's championship-winning motorsport academy, founded and directed by veteran racer <strong className="text-white font-bold">Mr. Rohit Khanna</strong>.
              </p>
              <p className="text-[#AAAAAA] text-sm sm:text-base leading-relaxed">
                With multiple podium finishes across the JK Tyre National Karting Championship, Rotax Max Challenge India, and national formula racing championships, our racing academy trains aspiring drivers with real competition telemetry, professional telemetry debriefs, and chassis setup.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono">
                <div className="p-4 rounded-lg bg-[#141414] border border-white/10 hover:border-[#F47C20] text-left space-y-1 transition-colors">
                  <span className="text-[#F47C20] text-xs font-bold block">// EXPERIENCE</span>
                  <div className="text-2xl font-display font-bold text-white">20+ YRS</div>
                  <span className="text-[11px] text-[#888888]">Active Racing</span>
                </div>
                <div className="p-4 rounded-lg bg-[#141414] border border-white/10 hover:border-[#F47C20] text-left space-y-1 transition-colors">
                  <span className="text-[#F47C20] text-xs font-bold block">// PODIUMS</span>
                  <div className="text-2xl font-display font-bold text-white">50+ WINS</div>
                  <span className="text-[11px] text-[#888888]">National Trophies</span>
                </div>
                <div className="p-4 rounded-lg bg-[#141414] border border-white/10 hover:border-[#F47C20] text-left space-y-1 col-span-2 sm:col-span-1 transition-colors">
                  <span className="text-[#F47C20] text-xs font-bold block">// ACADEMY</span>
                  <div className="text-2xl font-display font-bold text-white">PRO TIER</div>
                  <span className="text-[11px] text-[#888888]">Driver Coaching</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#F47C20] transition-colors duration-500 shadow-md group">
                <img
                  src="/leap-frog/leap-frog-4.jpg"
                  alt="Leap Frog Racing Competition Action"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F47C20] font-bold uppercase">// OFFICIAL RACING ACADEMY</span>
                  <span className="text-white bg-black/80 px-2 py-0.5 rounded-sm font-semibold">JK TYRE NATIONALS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real Competition Photography Gallery Grid */}
          <div className="space-y-4 pt-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
                // AUTHENTIC NATIONAL CHAMPIONSHIP PHOTOGRAPHY
              </span>
              <span className="text-[10px] font-mono text-[#888888] uppercase">
                CLICK IMAGE TO EXPAND
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEAP_FROG_PHOTOS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLeapFrogImg(item)}
                  className="group relative rounded-xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <h4 className="text-sm font-display font-bold text-white uppercase tracking-wide group-hover:text-[#F47C20] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Photo Gallery Sub-Section */}
        <div className="pt-12 border-t border-white/10 space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
                <Camera className="w-3.5 h-3.5 text-[#F47C20]" /> // HIGH-OCTANE GALLERY
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
                ACTION ON THE <span className="text-[#F47C20]">720M ASPHALT</span>
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#F47C20] text-white shadow-md'
                      : 'bg-white/5 text-[#AAAAAA] hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`relative group rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#F47C20] transition-all duration-300 shadow-md ${photo.aspect}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold tracking-widest block">
                      {photo.category}
                    </span>
                    <span className="text-sm font-display font-bold text-white uppercase tracking-wide">
                      {photo.alt}
                    </span>
                  </div>
                  <span className="p-2 rounded-full bg-black/60 text-white group-hover:bg-[#F47C20] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Leap Frog Photos */}
      {activeLeapFrogImg && (
        <div
          onClick={() => setActiveLeapFrogImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#141414] border-2 border-[#F47C20] rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveLeapFrogImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-white hover:text-[#F47C20] transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img src={activeLeapFrogImg.src} alt={activeLeapFrogImg.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-[#141414] border-t border-white/10 flex items-center justify-between text-white text-left">
              <div>
                <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold block">{activeLeapFrogImg.tag}</span>
                <h4 className="text-lg font-display font-bold uppercase">{activeLeapFrogImg.title}</h4>
                <p className="text-xs font-sans text-gray-400 mt-1">{activeLeapFrogImg.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer hidden sm:flex"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-[#F47C20] transition-colors cursor-pointer hidden sm:flex"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={filteredPhotos[activePhotoIndex].src}
                alt={filteredPhotos[activePhotoIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/20 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[#F47C20] uppercase font-bold tracking-widest block">
                  {filteredPhotos[activePhotoIndex].category}
                </span>
                <span className="text-lg font-display font-bold text-white uppercase tracking-wide">
                  {filteredPhotos[activePhotoIndex].alt}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhoWeAreSection;
