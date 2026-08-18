import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

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
      {/* ── Continuous Motorsport Information Strip with Refined 0-10% / 90-100% Alpha Edge Fade ── */}
      <div className="animate-marquee-container marquee-fade-mask bg-[#FAFAFA] py-3 sm:py-3.5 border-t border-b border-[#EAEAEA] relative overflow-hidden select-none w-full max-w-full shadow-xs flex">
        {/* 2 Duplicated Track Groups for Mathematically Seamless Infinite Looping */}
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1 ? 'true' : undefined}
            className="animate-marquee-track-group flex items-center shrink-0 whitespace-nowrap"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0 cursor-default whitespace-nowrap">
                {/* Precision Architectural Motorsport Telemetry Badge */}
                <div className="marquee-item-badge inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 lg:px-4 lg:py-1.5 rounded-[3px] bg-white border border-[#E5E5E5] shadow-xs shrink-0 whitespace-nowrap">
                  <span
                    className={`marquee-text font-display font-extrabold uppercase text-[11px] sm:text-xs lg:text-[13px] tracking-wider whitespace-nowrap transition-colors duration-200 ${
                      item.highlight ? 'text-[#F47C20]' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
                
                {/* Subtle Racing Telemetry Separator with Balanced Spacing */}
                <span className="mx-3 sm:mx-4 lg:mx-5 font-mono text-[10px] sm:text-xs font-bold text-[#F47C20] select-none shrink-0 whitespace-nowrap">
                  {item.separator}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto space-y-20">
        
        {/* ── 01: Editorial Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest block">
              02 // THE KARTOMANIA EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              NORTHERN INDIA'S PREMIER <br className="hidden sm:block" />
              <span className="text-[#F47C20]">600M OUTDOOR</span> CIRCUIT
            </h2>
          </div>
          <div className="shrink-0 text-left sm:text-right font-mono">
            <span className="text-xs text-[#888888] uppercase tracking-widest font-semibold block">
              ENTERTAINLAND MALL &bull; GURUGRAM
            </span>
          </div>
        </div>

        {/* ── 02: Visual Story Flow: Dominant Image 01 ── */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="relative h-[320px] sm:h-[450px] lg:h-[560px] w-full overflow-hidden">
            <img
              src="/leap-frog/leap-frog-4.jpg"
              alt="Kartomania Grand Prix High Speed Track Action"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-xl text-white space-y-1.5">
                <span className="px-2.5 py-0.5 rounded-[3px] bg-[#F47C20] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider inline-block">
                  SECTOR 01 // MAIN STRAIGHT
                </span>
                <h3 className="text-xl sm:text-3xl font-display font-bold uppercase tracking-tight">
                  AUTHENTIC GRAND PRIX ASPHALT
                </h3>
              </div>
              <span className="font-mono text-xs text-white/80 uppercase font-semibold">
                600 METERS &bull; 11 APEXES
              </span>
            </div>
          </div>
        </div>

        {/* ── 03: Experience Statement ── */}
        <div className="py-4 sm:py-8 border-y border-[#EAEAEA] text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-2xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-[1.15]">
                ENGINEERED FOR THE APEX. <br />
                <span className="text-[#F47C20]">CALIBRATED FOR RAW RACING VELOCITY.</span>
              </p>
            </div>
            <div className="lg:col-span-4 font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              Founded and directed by national champion Mr. Rohit Khanna, Kartomania bridges professional racing telemetry with high-octane everyday entertainment.
            </div>
          </div>
        </div>

        {/* ── 04: Asymmetric Visual Story: Secondary Image & Editorial Narrative ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left">
          {/* Immersive Secondary Image */}
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden min-h-[320px] sm:min-h-[420px]">
            <img
              src="/leap-frog/leap-frog-1.jpg"
              alt="National Championship Starting Grid"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white font-mono text-xs">
              <span className="px-2 py-0.5 rounded-[3px] bg-black/70 backdrop-blur-xs font-bold uppercase">
                ★ JK TYRE NATIONAL GRID PEDIGREE
              </span>
            </div>
          </div>

          {/* Short Narrative & Verified Statistics */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest block">
                // MOTORSPORT HERITAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                LEAP FROG RACING ACADEMY
              </h3>
              <p className="text-sm font-sans text-[#555555] leading-relaxed">
                As Northern India's premier racing academy, Leap Frog Racing has earned over 50+ national podium trophies. Everyday drivers at Kartomania pilot karts tuned on the exact same principles.
              </p>
            </div>

            {/* 4 Clean Stats */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <StatCounter number="01" end={600} suffix="m" label="GP TRACK LENGTH" />
              <StatCounter number="02" end={11} label="TECHNICAL APEXES" />
              <StatCounter number="03" end={20} suffix="+" label="YRS CHAMPIONSHIP PEDIGREE" />
              <StatCounter number="04" end={50} suffix="+" label="NATIONAL TROPHIES" />
            </div>
          </div>
        </div>

        {/* ── 05: Editorial Photo Trio ── */}
        <div className="space-y-4 text-left pt-6 border-t border-[#EAEAEA]">
          <div className="flex items-center justify-between pb-2">
            <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
              // CHAMPIONSHIP ARCHIVE
            </span>
            <span className="text-[10px] font-mono text-[#888888] uppercase">
              CLICK IMAGE TO VIEW FULL FRAME
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEAP_FROG_PHOTOS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLeapFrogImg(item)}
                className="group relative rounded-xl overflow-hidden bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-[3px] bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-xs">
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
