import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
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
    <div ref={ref} className="p-5 sm:p-6 rounded-2xl bg-[#15181C] border border-white/10 text-center space-y-1 shadow-sm hover:shadow-xl hover:border-[#C9A45C]/40 transition-all duration-300 group">
      <div className="text-2xl sm:text-3xl font-display font-black text-[#C9A45C] group-hover:text-[#DFBA70] transition-colors">
        {count}{suffix}
      </div>
      <div className="font-mono text-[9px] sm:text-[10px] text-[#B8B1A5] uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
};

const WhoWeAreSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1, opacity: 0.6, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        {
          scale: 1,
          opacity: 1,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 1.1,
          ease: 'power3.out',
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
      className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10 relative z-20 text-[#F4F1EA] bg-[#0B0D0F]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
        
        {/* Left Side Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#15181C] group">
            <img
              ref={imgRef}
              src="/about-action.jpg"
              alt="Kartomania & Leap Frog Racing Kart #71"
              data-cursor="VIEW"
              className="w-full h-[340px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#15181C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
              <span className="font-mono text-xs text-[#C9A45C] font-bold uppercase tracking-wider">// ARENA TELEMETRY</span>
              <span className="font-mono text-[10px] text-[#F4F1EA] font-semibold uppercase">ENTERTAINLAND MALL ARENA</span>
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div ref={textRef} className="lg:col-span-6 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> WHO WE ARE
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight leading-tight"
          >
            NORTHERN INDIA'S PREMIER <span className="text-[#C9A45C]">720M OUTDOOR</span> TRACK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#B8B1A5] text-sm sm:text-base leading-relaxed font-sans font-normal"
          >
            Founded by veteran motorsport champion <strong className="text-[#F4F1EA] font-bold">Mr. Rohit Khanna</strong> (20+ years of active Indian & international racing championships), Kartomania is the <strong className="text-[#C9A45C]">only racing track owned, run, and maintained by a professional racer</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#837D73] text-xs sm:text-sm leading-relaxed font-sans"
          >
            From beginners learning proper braking lines to pro racers shaving split seconds, Kartomania offers an authentic 720-meter outdoor asphalt circuit with 4 calibrated kart fleet categories and live telemetry timing.
          </motion.p>

          <div className="pt-2">
            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-6 text-xs">
              EXPERIENCE THE THRILL &rarr;
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        <StatCounter end={720} suffix="m" label="OUTDOOR GRAND PRIX TRACK" />
        <StatCounter end={14} label="RACING TURNS & APEXES" />
        <StatCounter end={4} label="KART FLEET CATEGORIES" />
        <StatCounter end={1000} suffix="+" label="RACES COMPLETED WEEKLY" />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
