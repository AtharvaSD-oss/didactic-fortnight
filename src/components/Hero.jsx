import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin, Flame, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const levitateVehicleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        }
      });

      tl.to(heroBgRef.current, {
        scale: 0.95,
        opacity: 0.75,
        ease: 'power1.out'
      }, 0);

      tl.to(heroContentRef.current, {
        y: -50,
        opacity: 0.3,
        ease: 'power1.out'
      }, 0);

      tl.to(levitateVehicleRef.current, {
        y: -80,
        scale: 1.05,
        ease: 'power1.out'
      }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0a0e27] text-white z-10"
    >
      {/* 1. Deep Space Atmospheric Gradient Background & Video Layer */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 z-0 overflow-hidden transition-all duration-500"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.jpg"
          className="w-full h-full object-cover object-[55%_center] sm:object-[60%_center] md:object-center filter brightness-[0.7] contrast-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/vidssave-go-karting.mp4" type="video/mp4" />
          <source src="/The Art of Go Karting.mp4" type="video/mp4" />
          <motion.img
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src="/hero-bg.jpg"
            alt="Kartomania Grand Prix Circuit"
            className="w-full h-full object-cover object-[55%_center] sm:object-[60%_center] md:object-center filter brightness-[0.7] contrast-110"
          />
        </video>

        {/* Antigravity Deep Space Gradients: Purple Depth, Space Black & Neon Cyan Orbs */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/70 to-[#1a0033]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27] via-[#0a0e27]/80 to-transparent" />
        
        {/* Floating Neon Lighting Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00d9ff]/12 rounded-full blur-[100px] pointer-events-none animate-levitate-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none animate-levitate" />
      </div>

      {/* 2. Responsive Content Layout (Antigravity Floating Layer) */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-auto mb-2 sm:mb-4 text-left"
      >
        <div className="space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl">
          {/* Antigravity Track Badges Row */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#0e1430]/80 border border-[#00d9ff]/30 shadow-[0_0_20px_rgba(0,217,255,0.2)] backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00d9ff]" />
              <span className="font-mono text-[10px] sm:text-xs text-white uppercase tracking-wider font-bold">
                ANTIGRAVITY MOTORSPORT &bull; 720M OUTDOOR ARENA
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 backdrop-blur-md"
            >
              <Flame className="w-3 h-3 text-[#d4af37]" />
              <span className="font-mono text-[9px] sm:text-[11px] text-[#d4af37] uppercase tracking-widest font-black">
                PRO RACER OWNED
              </span>
            </motion.div>
          </div>

          {/* Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.92] drop-shadow-2xl">
              WHERE REAL RACING
            </h1>
            <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.92]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#EE3124]">
                BEGINS.
              </span>
            </h2>
            <div className="pt-1 flex flex-wrap gap-2 text-xs sm:text-sm font-mono text-[#00d9ff] font-bold uppercase tracking-wider">
              <span className="text-[#00d9ff]">ANTIGRAVITY SPEED</span> &bull; 
              <span className="text-white">PRO CHASSIS</span> &bull; 
              <span className="text-[#d4af37]">PURE ADRENALINE</span>
            </div>
          </motion.div>

          {/* Subtitle & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="space-y-1.5"
          >
            <p className="text-xs sm:text-sm md:text-base font-sans text-gray-300 font-normal leading-relaxed text-left drop-shadow-md">
              The only racing arena owned and maintained by national champion Mr. Rohit Khanna. Experience authentic 720-meter asphalt racing with 4 high-performance fleet categories and live telemetry.
            </p>
          </motion.div>

          {/* Action Buttons with Levitating Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto"
          >
            {/* Main Floating CTA Button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#EE3124] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
              <MagneticButton
                onClick={onOpenBooking}
                className="relative py-3.5 sm:py-4 px-8 sm:px-10 text-xs sm:text-sm text-center bg-[#0a0e27] text-white border border-[#00d9ff]/50 hover:border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.4)] cursor-pointer"
              >
                BOOK YOUR RACE ⚡
              </MagneticButton>
            </div>

            <a
              href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0e1430]/70 hover:bg-[#0e1430] border border-white/20 hover:border-[#00d9ff] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer group text-center"
            >
              <MapPin className="w-4 h-4 text-[#00d9ff] group-hover:scale-110 transition-transform" />
              <span>GET DIRECTIONS</span>
            </a>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0e1430]/70 hover:bg-[#0e1430] border border-white/20 hover:border-[#d4af37] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer text-center"
            >
              VIEW RATES
            </button>
          </motion.div>
        </div>

        {/* 3. Levitating Vehicle / Interactive Telemetry HUD Card (Right Side) */}
        <motion.div
          ref={levitateVehicleRef}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-[380px] shrink-0 floating-card rounded-3xl p-5 sm:p-6 space-y-4 animate-levitate"
        >
          <div className="flex items-center justify-between border-b border-gray-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-ping" />
              <span className="font-mono text-xs font-bold text-[#00d9ff] uppercase tracking-wider">LIVE TELEMETRY HUD</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] font-mono text-[9px] font-bold">F1 GRADE</span>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-gray-800 h-36 flex items-center justify-center group">
            <img
              src="/images/karts.webp"
              alt="Levitating Race Kart"
              className="w-full h-full object-cover filter brightness-[0.95] contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#00d9ff]/20 text-[#00d9ff] font-mono text-[8px] font-bold border border-[#00d9ff]/30">
              LEVITATE 1.05X
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-center">
            <div className="p-2.5 rounded-xl bg-black/40 border border-gray-800">
              <div className="text-[9px] text-gray-400 uppercase">TOP SPEED</div>
              <div className="text-base font-display font-bold text-[#00d9ff]">85 KM/H</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-gray-800">
              <div className="text-[9px] text-gray-400 uppercase">LAP TIMING</div>
              <div className="text-base font-display font-bold text-[#d4af37]">0.001s ACC</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-2 pb-1">
        <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-0.5 font-bold">SCROLL TO EXPLORE</span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="p-1.5 sm:p-2 rounded-full bg-[#0e1430]/80 border border-[#00d9ff]/30 text-[#00d9ff] hover:border-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.25)] transition-colors cursor-pointer"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
