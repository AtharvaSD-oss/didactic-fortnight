import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flag, ChevronDown, Gauge } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const [speed, setSpeed] = useState(87);

  // Live telemetry speed oscillation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(84 + Math.random() * 6);
      setSpeed(newSpeed);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // GSAP ScrollTrigger Pinned Zoom & Overlap Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin hero & scale background from 1 -> 0.92 while fading text upward
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=80%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });

      tl.to(heroBgRef.current, {
        scale: 0.92,
        borderRadius: '32px',
        ease: 'none'
      }, 0);

      tl.to(heroContentRef.current, {
        y: -100,
        opacity: 0.15,
        filter: 'blur(10px)',
        ease: 'none'
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
      {/* 1. Cinematic Background with Zoom-out & Vignette */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 z-0 overflow-hidden rounded-none transition-all duration-300"
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-bg.jpg"
          alt="Formula Karting Cinematic Background"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-125 saturate-110"
        />
        {/* Dark Vignette & Gradient Overlays matching #07070a theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/50 to-[#07070a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/90 via-[#07070a]/50 to-transparent" />
        <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />
      </div>

      {/* 2. Main Content Grid */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-4"
      >
        {/* Left Column - Main Headlines & CTA */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-[#FF4500]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.25)]"
          >
            <Flag className="w-3.5 h-3.5 text-[#FF4500]" />
            <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
              RACE &bull; COMPETE &bull; BREAK RECORDS
            </span>
          </motion.div>

          {/* Giant Headline (Title Blur 20px -> 0, Upward reveal) */}
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1"
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

          {/* Subtitle (Appears after title) */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 max-w-2xl"
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              Northern India's First Indoor Go-Karting Track
            </h3>
            <p className="text-sm font-sans text-gray-300 font-normal leading-relaxed text-left">
              Experience the ultimate adrenaline rush on one of India's most exciting indoor racing circuits. Whether you're a beginner or a professional racer, Kartomania offers an unforgettable high-speed karting experience with world-class facilities.
            </p>
          </motion.div>

          {/* Action Buttons (Slide upward with slight bounce) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 180, delay: 1.1 }}
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

        {/* Right Column - Live Speedometer Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div
            data-cursor="PLAY"
            className="relative w-72 sm:w-80 bg-[#0c0c16]/85 border border-white/10 rounded-3xl p-7 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.8)] hover:border-[#FF4500]/60 transition-all group"
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gauge className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs text-gray-300 uppercase tracking-widest font-bold">
                LIVE SPEED
              </span>
            </div>

            {/* Circular Telemetry Gauge */}
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-white/10"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#speedGradientHero)"
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="speedGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-display font-black text-white tracking-tight drop-shadow-md">
                  {speed}
                </span>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-1">
                  KM/H
                </span>
                <div className="w-0.5 h-6 bg-[#FF4500] mt-2 rounded-full shadow-[0_0_12px_#FF4500]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Glowing Animated Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-2">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">SCROLL</span>
        <motion.button
          onClick={() => onNavigate('whats-new')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-[#FF4500]/40 text-[#FF4500] hover:text-white hover:border-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.3)] transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
