import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({ end, suffix = '', label, number = "01" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1800;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="p-6 rounded-xl bg-[#111111] border border-white/10 text-left space-y-2 group hover:border-[#F37021] transition-colors duration-300">
      <span className="font-mono text-xs font-bold text-[#F37021] block">
        {number}
      </span>
      <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-mono text-[10px] text-[#AAAAAA] uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
};

const WhoWeAreSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.05, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#080808] text-white relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Header Tag matching reference layout */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-left">
            <span className="w-[3px] h-4 bg-[#F37021] rounded-full inline-block" />
            <span className="font-mono text-xs sm:text-sm font-bold text-[#F37021] tracking-wider">02</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#888888] tracking-widest uppercase">/ EXPERIENCE</span>
          </div>

          <a
            href="#why-kartomania"
            className="font-mono text-xs font-bold text-[#F37021] uppercase tracking-widest flex items-center gap-2 hover:text-[#ff8a3d] transition-colors"
          >
            <span>VIEW ALL</span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F37021] inline-block" />
            <span>&rarr;</span>
          </a>
        </div>

        {/* Large Headline matching reference */}
        <div className="text-left space-y-3">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-none">
            THE KARTOMANIA <span className="text-[#888888]">EXPERIENCE</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#AAAAAA] uppercase tracking-widest max-w-xl">
            NORTHERN INDIA'S PREMIER 720M OUTDOOR ASPHALT GRAND PRIX CIRCUIT • SECTOR 83 GURGAON
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              <img
                ref={imgRef}
                src="/about-action.jpg"
                alt="Kartomania & Leap Frog Racing Kart #71"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                <span className="font-mono text-xs font-bold uppercase tracking-wider">// ARENA TELEMETRY</span>
                <span className="font-mono text-[10px] text-[#AAAAAA] font-semibold uppercase">ENTERTAINLAND MALL ARENA</span>
              </div>
            </div>
          </div>

          {/* Right Story Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-white text-base sm:text-lg leading-relaxed font-sans font-medium">
              Founded by veteran motorsport champion <strong className="font-bold text-white">Mr. Rohit Khanna</strong> (20+ years of active Indian & international racing championships), Kartomania is the <strong className="font-bold text-white">only racing track owned, run, and maintained by a professional racer</strong>.
            </p>

            <p className="text-[#AAAAAA] text-sm sm:text-base leading-relaxed font-sans">
              From beginners learning proper braking lines to pro racers shaving split seconds, Kartomania offers an authentic 720-meter outdoor asphalt circuit with 4 calibrated kart fleet categories and live telemetry timing.
            </p>

            <div className="pt-2">
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3.5 px-8 text-xs">
                EXPERIENCE THE THRILL &rarr;
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* 4 Stats Minimal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCounter number="01" end={720} suffix="m" label="OUTDOOR GRAND PRIX TRACK" />
          <StatCounter number="02" end={14} label="RACING TURNS & APEXES" />
          <StatCounter number="03" end={4} label="KART FLEET CATEGORIES" />
          <StatCounter number="04" end={1000} suffix="+" label="RACES COMPLETED WEEKLY" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
