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
      const duration = 2000; // 2s count
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
    <div ref={ref} className="p-6 rounded-2xl bg-white border border-gray-200/80 text-center space-y-1 shadow-md hover:shadow-xl hover:border-[#EE3124]/40 transition-all group">
      <div className="text-3xl sm:text-4xl font-display font-black text-gray-900 group-hover:text-[#EE3124] transition-colors">
        {count}{suffix}
      </div>
      <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">
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
      // Left side image clip mask reveal & scale 1.15 -> 1
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, opacity: 0.5, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        {
          scale: 1,
          opacity: 1,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 1.2,
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
      className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 text-gray-900 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left Side Image with Clip Mask & Scale 1.15 -> 1 */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100 group">
            <img
              ref={imgRef}
              src="/gallery/gallery-1.jpg"
              alt="Kartomania Circuit & Fleet"
              data-cursor="VIEW"
              className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-between shadow-lg">
              <span className="font-mono text-xs text-[#EE3124] font-bold uppercase tracking-widest">// ARENA TELEMETRY</span>
              <span className="font-mono text-[10px] text-gray-700 font-semibold uppercase">ENTERTAINLAND MALL ARENA</span>
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div ref={textRef} className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> WHO WE ARE
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-black text-gray-950 uppercase tracking-tight leading-tight"
          >
            NORTHERN INDIA'S PREMIER <span className="text-[#EE3124]">PRO KARTING</span> ARENA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans font-normal"
          >
            Founded by veteran motorsport driver <strong className="text-gray-950">Mr. Rohit Khanna</strong> (with over 20+ years of active Indian & international racing experience), Kartomania offers an unparalleled high-speed indoor racing circuit designed with Formula 1 precision.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans"
          >
            From beginners taking their first apex to seasoned racers competing in national championships, our arena combines Sodi race karts, polymer asphalt multi-level tracks, and millisecond timing telemetry.
          </motion.p>

          <div className="pt-4">
            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3.5 px-7 text-xs">
              EXPERIENCE THE THRILL &rarr;
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        <StatCounter end={680} suffix="m" label="LONGEST INDOOR TRACK" />
        <StatCounter end={14} label="RACING TURNS & APEXES" />
        <StatCounter end={5} label="KART FLEET CATEGORIES" />
        <StatCounter end={1000} suffix="+" label="RACES COMPLETED WEEKLY" />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
