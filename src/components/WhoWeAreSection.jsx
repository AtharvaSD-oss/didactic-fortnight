import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ShieldCheck, Gauge, Users, Flag } from 'lucide-react';

const EXPERIENCE_HIGHLIGHTS = [
  {
    number: "01",
    title: "RACING",
    icon: Flag,
    desc: "~600m high-speed outdoor asphalt layout with 11 technical apexes, hairpins, and full-throttle overtaking straights."
  },
  {
    number: "02",
    title: "PERFORMANCE",
    icon: Gauge,
    desc: "Engineered 270cc Sodi RT10 Pro & Twin 500cc karts with live RaceFacer millisecond telemetry tracking."
  },
  {
    number: "03",
    title: "SAFETY",
    icon: ShieldCheck,
    desc: "Impact-absorbing polymer barrier protection, DOT helmets, sanitary balaclavas, & certified track marshals."
  },
  {
    number: "04",
    title: "COMMUNITY",
    icon: Users,
    desc: "Northern India's hub uniting beginner racers, corporate racing leagues, and championship academy pilots."
  }
];

const LEAP_FROG_PHOTOS = [
  {
    src: "/leap-frog/leap-frog-1.jpg",
    title: "National Championship Grid",
    tag: "JK TYRE NATIONALS",
    desc: "Leap Frog Racing driver lined up on the national championship grid."
  },
  {
    src: "/leap-frog/leap-frog-2.jpg",
    title: "Podium Ceremony",
    tag: "50+ NATIONAL WINS",
    desc: "Founder Rohit Khanna and academy drivers celebrating national podium trophies."
  },
  {
    src: "/leap-frog/leap-frog-3.jpg",
    title: "Telemetry & Chassis Setup",
    tag: "PRO ACADEMY",
    desc: "Professional telemetry debriefs and live kart tuning at the paddock."
  }
];

// Counting Stats Sub-Component
const StatCounter = ({ end, suffix = "", label, number }) => {
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
    <div ref={ref} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] text-left hover:border-[#F47C20] transition-all duration-300 shadow-sm">
      <span className="font-mono text-xs font-bold text-[#F47C20] tracking-widest block mb-2">{number}</span>
      <div className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] mb-1">
        {count}
        {suffix}
      </div>
      <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#666666]">
        {label}
      </p>
    </div>
  );
};

const MARQUEE_ITEMS = [
  { text: "SPEED", separator: "◆", highlight: false },
  { text: "PRECISION", separator: "//", highlight: true },
  { text: "ADRENALINE", separator: "×", highlight: false },
  { text: "PERFORMANCE", separator: "•", highlight: true },
  { text: "RACING", separator: "◆", highlight: false },
  { text: "COMPETE", separator: "→", highlight: false },
  { text: "KARTING", separator: "//", highlight: true },
  { text: "PURE SPEED", separator: "•", highlight: false },
  { text: "RACE YOUR LIMITS", separator: "◆", highlight: true }
];

export const WhoWeAreSection = () => {
  const [activeLeapFrogImg, setActiveLeapFrogImg] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative w-full bg-white text-[#111111]"
    >
      {/* ── Continuous Motorsport Information Strip with Refined 0-12% / 88-100% Alpha Edge Fade ── */}
      <div className="animate-marquee-container marquee-fade-mask bg-[#FAFAFA] py-3.5 sm:py-4 border-t border-b border-[#EAEAEA] relative overflow-hidden select-none w-full shadow-xs flex">
        {/* 2 Duplicated Track Groups for Mathematically Seamless Infinite Looping */}
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1 ? 'true' : undefined}
            className="animate-marquee-track-group flex items-center shrink-0"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                {/* Compact Racing Ticker Badge */}
                <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
                  <span
                    className={`font-display font-extrabold uppercase text-xs sm:text-sm tracking-wider ${
                      item.highlight ? 'text-[#F47C20]' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
                
                {/* Subtle Racing Telemetry Separator */}
                <span className="mx-3.5 sm:mx-5 font-mono text-[11px] sm:text-xs font-bold text-[#F47C20] select-none">
                  {item.separator}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto space-y-16">
        {/* Top Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-6">
          <div className="text-left space-y-2 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-tight">
              NORTHERN INDIA'S PREMIER <br className="hidden sm:block" />
              <span className="text-[#F47C20]">600M OUTDOOR</span> CIRCUIT
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
              Kartomania is an authentic ~600-meter outdoor asphalt racing track at Entertainland Mall, Gurugram. Founded and directed by veteran racer Mr. Rohit Khanna, it provides a championship-grade motorsport environment for drivers of all skill levels.
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right">
            <span className="font-mono text-xs text-[#888888] uppercase tracking-widest font-semibold block">
              MANESAR &bull; GURGAON
            </span>
          </div>
        </div>

        {/* 4 Compact Experience Highlights Grid */}
        <div className="space-y-4 text-left">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_HIGHLIGHTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 space-y-3 text-left group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F47C20]">
                      {item.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#F47C20] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Stats Minimal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCounter number="01" end={600} suffix="m" label="OUTDOOR GRAND PRIX TRACK" />
          <StatCounter number="02" end={11} label="RACING TURNS & APEXES" />
          <StatCounter number="03" end={4} label="KART FLEET CATEGORIES" />
          <StatCounter number="04" end={1000} suffix="+" label="RACES COMPLETED WEEKLY" />
        </div>

        {/* ── MOTORSPORT HERITAGE: LEAP FROG RACING SUB-SECTION ── */}
        <div className="pt-12 border-t border-[#EAEAEA] space-y-12 text-left">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
                LEAP FROG <span className="text-[#F47C20]">RACING</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#666666] uppercase tracking-wider max-w-md">
              Kartomania's official professional motorsport division competing across Indian National Karting Championships.
            </p>
          </div>

          {/* Story Narrative & Racing Accolades */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 font-sans">
              <p className="text-[#0A0A0A] text-base sm:text-lg leading-relaxed font-medium">
                <strong className="text-[#F47C20]">Leap Frog Racing</strong> is Northern India's championship-winning motorsport academy, founded and directed by veteran racer <strong className="text-[#0A0A0A] font-bold">Mr. Rohit Khanna</strong>.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                With multiple podium finishes across the JK Tyre National Karting Championship, Rotax Max Challenge India, and national formula racing championships, our racing academy trains aspiring drivers with real competition telemetry, professional telemetry debriefs, and chassis setup.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono">
                <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 transition-colors shadow-sm">
                  <span className="text-[#F47C20] text-xs font-bold block">// EXPERIENCE</span>
                  <div className="text-2xl font-display font-bold text-[#0A0A0A]">20+ YRS</div>
                  <span className="text-[11px] text-[#666666]">Active Racing</span>
                </div>
                <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 transition-colors shadow-sm">
                  <span className="text-[#F47C20] text-xs font-bold block">// PODIUMS</span>
                  <div className="text-2xl font-display font-bold text-[#0A0A0A]">50+ WINS</div>
                  <span className="text-[11px] text-[#666666]">National Trophies</span>
                </div>
                <div className="p-4 rounded-lg bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] text-left space-y-1 col-span-2 sm:col-span-1 transition-colors shadow-sm">
                  <span className="text-[#F47C20] text-xs font-bold block">// ACADEMY</span>
                  <div className="text-2xl font-display font-bold text-[#0A0A0A]">PRO TIER</div>
                  <span className="text-[11px] text-[#666666]">Driver Coaching</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E5E5E5] hover:border-[#F47C20] transition-colors duration-500 shadow-md group">
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
            <div className="flex items-center justify-end border-b border-[#EAEAEA] pb-4">
              <span className="text-[10px] font-mono text-[#888888] uppercase">
                CLICK IMAGE TO EXPAND
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEAP_FROG_PHOTOS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLeapFrogImg(item)}
                  className="group relative rounded-xl overflow-hidden bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
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
            className="relative max-w-3xl w-full bg-white border-2 border-[#F47C20] rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveLeapFrogImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-white hover:text-[#F47C20] transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img src={activeLeapFrogImg.src} alt={activeLeapFrogImg.title} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-white border-t border-[#EAEAEA] flex items-center justify-between text-[#111111] text-left">
              <div>
                <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold block">{activeLeapFrogImg.tag}</span>
                <h4 className="text-lg font-display font-bold uppercase text-[#0A0A0A]">{activeLeapFrogImg.title}</h4>
                <p className="text-xs font-sans text-[#555555] mt-1">{activeLeapFrogImg.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAreSection;
