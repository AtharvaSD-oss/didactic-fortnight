import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Flag, Zap, Gauge, Users } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE_HIGHLIGHTS = [
  {
    number: "01",
    title: "RACING",
    icon: Flag,
    desc: "Pure competition on a 720m outdoor asphalt circuit with 14 technical apexes and high-speed straights."
  },
  {
    number: "02",
    title: "PERFORMANCE",
    icon: Gauge,
    desc: "Engineered 270cc Sodi RT10 Pro & Twin 500cc karts with live millisecond RaceFacer telemetry tracking."
  },
  {
    number: "03",
    title: "THE TRACK",
    icon: Zap,
    desc: "F1-inspired barrier protection, precision kerbs, night track floodlighting, and marshal safety controls."
  },
  {
    number: "04",
    title: "COMMUNITY",
    icon: Users,
    desc: "A thriving motorsport hub connecting beginner drivers, corporate racing leagues, and national champions."
  }
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
  const [activeLeapFrogImg, setActiveLeapFrogImg] = useState(null);

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
              <span className="text-white text-sm font-bold font-mono">/ KARTOMANIA EXPERIENCE</span>
            </div>

            <h2 className="mt-4 text-white font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              BUILT FOR <span className="text-[#F47C20]">THE THRILL.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Top Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="text-left space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // BUILT FOR THE THRILL
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-tight">
              NORTHERN INDIA'S PREMIER <br className="hidden sm:block" />
              <span className="text-[#F47C20]">720M OUTDOOR</span> CIRCUIT
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
              Kartomania is an authentic 720-meter outdoor asphalt racing track at Entertainland Mall, Gurugram. Founded and directed by veteran racer Mr. Rohit Khanna, it provides a championship-grade motorsport environment for drivers of all skill levels.
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right space-y-3">
            <span className="font-mono text-xs text-[#888888] uppercase tracking-widest font-semibold block">
              MANESAR &bull; GURGAON
            </span>
            <MagneticButton href="/experience" className="py-3 px-6 text-xs">
              DISCOVER KARTOMANIA &rarr;
            </MagneticButton>
          </div>
        </div>

        {/* 4 Compact Experience Highlights Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
              // 4 COMPACT EXPERIENCE HIGHLIGHTS
            </span>
            <span className="text-[10px] font-mono text-gray-400 uppercase">
              CHAMPIONSHIP MOTORSPORT FOCUS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_HIGHLIGHTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-all duration-300 space-y-3 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F47C20]">
                      {item.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#F47C20] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
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
    </section>
  );
};

export default WhoWeAreSection;
