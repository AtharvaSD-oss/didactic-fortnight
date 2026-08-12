import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Zap } from 'lucide-react';
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
    <div ref={ref} className="p-6 rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] text-left space-y-2 group hover:border-[#F47C20] transition-colors duration-300 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-[#F47C20] block">
          {number}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F47C20] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A] tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-semibold">
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
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] relative z-20 text-[#111111] bg-white"
    >
      {/* Top Header Tag */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-[#EAEAEA] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest mb-2 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // ABOUT KARTOMANIA
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-tight">
            NORTHERN INDIA'S PREMIER <br className="hidden sm:block" />
            <span className="text-[#F47C20]">720M OUTDOOR</span> TRACK
          </h2>
        </div>
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold">
          MANESAR &bull; GURGAON
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
        {/* Left Image Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#E5E5E5] hover:border-[#F47C20] bg-[#0A0A0A] shadow-md transition-colors duration-500">
            <img
              ref={imgRef}
              src="/about-action.jpg"
              alt="Kartomania & Leap Frog Racing Kart #71"
              className="w-full h-[360px] sm:h-[440px] object-cover object-center filter contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between text-[#0A0A0A]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F47C20] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#F47C20]" /> ARENA TELEMETRY
              </span>
              <span className="font-mono text-[10px] text-[#666666] font-semibold uppercase">ENTERTAINLAND MALL ARENA</span>
            </div>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <p className="text-[#111111] text-base sm:text-lg leading-relaxed font-sans font-medium">
            Founded by veteran motorsport champion <strong className="font-bold text-[#0A0A0A]">Mr. Rohit Khanna</strong> (20+ years of active Indian & international racing championships), Kartomania is the <strong className="font-bold text-[#F47C20]">only racing track owned, run, and maintained by a professional racer</strong>.
          </p>

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
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
    </section>
  );
};

export default WhoWeAreSection;
