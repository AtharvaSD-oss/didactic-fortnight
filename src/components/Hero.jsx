import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
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
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#07070a] text-white z-10"
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

        {/* Responsive light gradients: Clear visibility of karting arena on mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-black/45 to-black/25 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-transparent to-black/40" />
      </div>

      {/* 2. Responsive Content Layout (Balanced lower-third positioning) */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-end items-start mt-auto mb-2 sm:mb-4 space-y-3 sm:space-y-4 md:space-y-5 text-left"
      >


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
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto"
        >
          {/* Main Book Your Race Button */}
          <MagneticButton
            onClick={onOpenBooking}
            className="py-3.5 sm:py-4 px-7 sm:px-9 text-xs sm:text-sm text-center shadow-[0_0_25px_rgba(238,49,36,0.5)] cursor-pointer"
          >
            BOOK YOUR RACE 🏁
          </MagneticButton>

          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 hover:border-[#FFD700] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer group text-center"
          >
            <MapPin className="w-4 h-4 text-[#FFD700] group-hover:scale-110 transition-transform" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 hover:border-[#EE3124] text-xs font-mono tracking-wider uppercase text-white font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer text-center"
          >
            VIEW PRICING
          </button>
        </motion.div>

        {/* Bottom Quick Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="pt-1.5 flex flex-wrap items-center gap-3 sm:gap-5 text-[10px] sm:text-xs font-mono text-gray-300"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE3124]" />
            <span>720M OUTDOOR CIRCUIT</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
            <span>4 FLEET TIERS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" />
            <span>STARTING ₹550 (INCL. TAX)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>OPEN ALL 7 DAYS</span>
          </div>
        </motion.div>
      </div>

      {/* 3. Human Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-2 pb-1">
        <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-0.5 font-bold">SCROLL TO EXPLORE</span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="p-1.5 sm:p-2 rounded-full bg-black/60 border border-white/20 text-[#EE3124] hover:border-[#EE3124] shadow-md transition-colors cursor-pointer"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
