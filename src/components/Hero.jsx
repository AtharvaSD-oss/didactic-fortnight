import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flag, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);

  // Responsive GSAP ScrollTrigger Animation (Fast, fluid scroll transition without sticky lag)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3,
        }
      });

      tl.to(heroBgRef.current, {
        scale: 0.95,
        borderRadius: '24px',
        opacity: 0.6,
        ease: 'power1.out'
      }, 0);

      tl.to(heroContentRef.current, {
        y: -60,
        opacity: 0.2,
        ease: 'power1.out'
      }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden bg-[#07070a] z-10"
    >
      {/* 1. Cinematic Background with Fast Smooth Zoom */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 z-0 overflow-hidden rounded-none transition-all duration-300"
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-bg.jpg"
          alt="Formula Karting Cinematic Background"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-125 saturate-110"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/50 to-[#07070a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/90 via-[#07070a]/50 to-transparent" />
        <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />
      </div>

      {/* 2. Fast Snappy Content Container */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-start my-auto pt-4 space-y-6 text-left"
      >
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-[#FF4500]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.25)]"
        >
          <Flag className="w-3.5 h-3.5 text-[#FF4500]" />
          <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
            RACE &bull; COMPETE &bull; BREAK RECORDS
          </span>
        </motion.div>

        {/* Giant Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1 max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[0.92] drop-shadow-2xl">
            KARTOMANIA
          </h1>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.92]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3A00] via-[#FF5500] to-[#FF7700]">
              SPEED THAT
            </span>
          </h2>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.92]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFAA00] text-glow">
              THRILLS
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 max-w-2xl"
        >
          <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
            Northern India's First Indoor Go-Karting Track
          </h3>
          <p className="text-sm font-sans text-gray-300 font-normal leading-relaxed text-left">
            Experience the ultimate adrenaline rush on one of India's most exciting indoor racing circuits. Whether you're a beginner or a professional racer, Kartomania offers an unforgettable high-speed karting experience with world-class facilities.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <MagneticButton onClick={onOpenBooking} className="py-4 px-8 text-sm">
            BOOK YOUR RACE
          </MagneticButton>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-8 py-4 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 hover:border-[#FF4500] text-xs font-mono tracking-widest uppercase text-white font-bold transition-all backdrop-blur-md"
          >
            VIEW PRICING
          </button>
        </motion.div>
      </div>

      {/* 3. Fast Animated Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-2">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">SCROLL</span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-[#FF4500]/40 text-[#FF4500] hover:text-white hover:border-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.3)] transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
