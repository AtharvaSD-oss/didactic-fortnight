import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flag, ChevronDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onNavigate }) => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);

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
        scale: 0.97,
        borderRadius: '32px',
        opacity: 0.85,
        ease: 'power1.out'
      }, 0);

      tl.to(heroContentRef.current, {
        y: -40,
        opacity: 0.4,
        ease: 'power1.out'
      }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#07070a] text-white z-10"
    >
      {/* 1. Cinematic Background Video & High-Res Image - Optimized for Mobile, Tablet & Desktop */}
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
          className="w-full h-full object-cover object-[55%_center] sm:object-[60%_center] md:object-center filter brightness-[0.82] md:brightness-[0.75] contrast-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/vidssave-go-karting.mp4" type="video/mp4" />
          <source src="/The Art of Go Karting.mp4" type="video/mp4" />
          <motion.img
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src="/hero-bg.jpg"
            alt="Kartomania Indoor Racing Circuit"
            className="w-full h-full object-cover object-[55%_center] sm:object-[60%_center] md:object-center filter brightness-[0.82] md:brightness-[0.75] contrast-105"
          />
        </video>

        {/* Responsive light gradients: Gentle on mobile so the kart is crystal clear, structured on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-black/45 to-black/25 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-transparent to-black/40" />
      </div>

      {/* 2. Responsive Content Layout */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-start my-auto pt-2 sm:pt-4 space-y-3 sm:space-y-5 md:space-y-6 text-left"
      >
        {/* Official Brand Logo Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block"
        >
          <img
            src="/logo.png"
            alt="Kartomania Official Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_4px_25px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Track Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/65 border border-white/20 shadow-md backdrop-blur-md"
        >
          <Flag className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FFD700]" />
          <span className="font-mono text-[10px] sm:text-xs text-white uppercase tracking-wider font-bold">
            720M OUTDOOR ARENA &bull; ENTERTAINLAND MALL &bull; SECTOR 83 MANESAR
          </span>
        </motion.div>

        {/* Slogan Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE3124]/20 border border-[#EE3124]/40 backdrop-blur-md"
        >
          <span className="font-mono text-[9px] sm:text-[11px] text-[#FFD700] uppercase tracking-widest font-black">
            // PRECISION &bull; PASSION &bull; PERFORMANCE
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-1 max-w-4xl"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-2xl">
            WHERE REAL RACING
          </h1>
          <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC]">
              BEGINS.
            </span>
          </h2>
          <div className="pt-1 flex flex-wrap gap-2 text-xs sm:text-sm font-mono text-gray-300 font-bold uppercase tracking-wider">
            <span className="text-[#FFD700]">FEEL THE SPEED</span> &bull; 
            <span className="text-white">BORN TO RACE</span> &bull; 
            <span className="text-[#EE3124]">DRIVE THE THRILL</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="space-y-2 sm:space-y-3 max-w-2xl"
        >
          <h3 className="text-base sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight drop-shadow-md flex items-center gap-2">
            <span>Speed Meets Control</span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-[#EE3124] text-white font-mono uppercase tracking-wider">PRO RACER OWNED</span>
          </h3>
          <p className="text-xs sm:text-base font-sans text-gray-200 font-normal leading-relaxed text-left drop-shadow-md line-clamp-3 sm:line-clamp-none">
            The only racing track owned, run, and maintained by a professional national racing driver. Experience authentic 720-meter outdoor asphalt racing with 4 kart fleet categories and championship telemetry.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
        >
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3.5 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm text-center">
            BOOK YOUR RACE
          </MagneticButton>

          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 hover:border-[#FFD700] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer group text-center"
          >
            <MapPin className="w-4 h-4 text-[#FFD700] group-hover:scale-110 transition-transform" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 hover:border-[#EE3124] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer text-center"
          >
            VIEW PRICING
          </button>
        </motion.div>
      </div>

      {/* 3. Human Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-4 sm:pt-6">
        <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">SCROLL TO EXPLORE</span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="p-2 sm:p-2.5 rounded-full bg-black/60 border border-white/20 text-[#EE3124] hover:border-[#EE3124] shadow-md transition-colors cursor-pointer"
        >
          <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
