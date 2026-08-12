import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax on the car and headline on scroll
      gsap.to(carRef.current, {
        y: -20,
        scale: 1.01,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-12 bg-white text-[#111111] overflow-hidden select-none"
    >
      {/* Right-Side Vertical Navigation Dots */}
      <div className="hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#F37021] shadow-[0_0_8px_rgba(243,112,33,0.6)] cursor-pointer" title="Home" />
        <span onClick={() => onNavigate('who-we-are')} className="w-2 h-2 rounded-full bg-[#D1D1D1] hover:bg-[#888888] transition-colors cursor-pointer" title="Experience" />
        <span onClick={() => onNavigate('track')} className="w-2 h-2 rounded-full bg-[#D1D1D1] hover:bg-[#888888] transition-colors cursor-pointer" title="Track" />
        <span onClick={() => onNavigate('karts')} className="w-2 h-2 rounded-full bg-[#D1D1D1] hover:bg-[#888888] transition-colors cursor-pointer" title="Karts" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex-1 flex flex-col justify-between">
        
        {/* 1. Top-Left Section Tag */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 self-start mb-2 sm:mb-4 text-left"
        >
          <span className="w-[3px] h-4 bg-[#F37021] rounded-full inline-block" />
          <span className="font-mono text-xs sm:text-sm font-bold text-[#F37021] tracking-wider">01</span>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#333333] tracking-widest uppercase">/ KARTOMANIA</span>
        </motion.div>

        {/* 2. Main Visual Canvas: Giant KARTOMANIA + Foreground Formula Car */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center my-auto min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]">
          
          {/* Giant Condensed Headline: KARTOMANIA */}
          <div ref={titleRef} className="w-full text-center select-none pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[17vw] sm:text-[16vw] lg:text-[14.5vw] xl:text-[13.5rem] font-['Anton',sans-serif] font-black tracking-normal uppercase leading-[0.8] text-[#111111] opacity-[0.98]"
            >
              KARTOMANIA
            </motion.h1>
          </div>

          {/* Foreground White Avalanche Formula Race Car (#10) with Soft Ground Shadow */}
          <motion.div
            ref={carRef}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative w-full max-w-5xl lg:max-w-6xl -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36 z-20"
          >
            {/* Ground Shadow */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-[10%] right-[10%] h-8 sm:h-12 bg-black/20 blur-2xl rounded-full pointer-events-none" />

            <img
              src="/avalanche-car-isolated.png"
              alt="Kartomania Avalanche Racing White Formula Car #10"
              className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />
          </motion.div>

          {/* 3. Left-Side Editorial Content & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 z-30 text-left max-w-md space-y-2 sm:space-y-3"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-display font-extrabold text-[#111111] uppercase tracking-wider leading-snug">
              RACE. EXPERIENCE. REMEMBER.
            </h2>

            <div className="w-12 h-[1.5px] bg-[#EAEAEA]" />

            <p className="text-xs sm:text-sm font-sans text-[#444444] leading-relaxed">
              Where speed meets adrenaline. Experience Kartomania.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#080808] hover:bg-[#1a1a1a] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-lg cursor-pointer group"
              >
                <span>BOOK YOUR RACE</span>
                <ArrowRight className="w-4 h-4 text-[#F37021] group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* 4. Bottom Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pt-4">
          <motion.button
            onClick={() => onNavigate('who-we-are')}
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="p-1 text-[#888888] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Scroll to experience"
          >
            <ChevronDown className="w-5 h-5 text-[#888888]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
