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
        borderRadius: '24px',
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
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-white text-gray-900 z-10"
    >
      {/* 1. Cinematic Background Video with Clean Light Gradients */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 z-0 overflow-hidden transition-all duration-300"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-105"
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
            className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-105"
          />
        </video>
        {/* Soft light glass vignettes for crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div className="absolute inset-0 bg-carbon opacity-15 pointer-events-none" />
      </div>

      {/* 2. Editorial Content Layout */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-start my-auto pt-6 space-y-6 text-left"
      >
        {/* Track Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-gray-300/80 shadow-sm backdrop-blur-md"
        >
          <Flag className="w-3.5 h-3.5 text-[#EE3124]" />
          <span className="font-mono text-xs text-gray-800 uppercase tracking-widest font-bold">
            ENTERTAINLAND MALL &bull; SECTOR 83 &bull; MANESAR
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-1 max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight text-gray-950 uppercase leading-[0.92] drop-shadow-sm">
            KARTOMANIA
          </h1>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.92]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3124] via-[#D32F2F] to-[#0066CC]">
              SPEED THAT
            </span>
          </h2>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.92]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3124] to-[#FFC220]">
              THRILLS
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="space-y-3 max-w-2xl"
        >
          <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 tracking-wide">
            Northern India's First Indoor Go-Karting Track
          </h3>
          <p className="text-sm font-sans text-gray-700 font-normal leading-relaxed text-left">
            Experience the ultimate adrenaline rush on one of India's most exciting indoor racing circuits. Whether you're a beginner or a professional racer, Kartomania offers an unforgettable high-speed karting experience with world-class facilities.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-4 px-8 text-sm">
            BOOK YOUR RACE
          </MagneticButton>

          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-widest uppercase text-gray-900 font-bold transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <MapPin className="w-4 h-4 text-[#EE3124] group-hover:scale-110 transition-transform" />
            <span>GET DIRECTIONS ON GOOGLE MAPS</span>
          </a>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-8 py-4 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EE3124] text-xs font-mono tracking-widest uppercase text-gray-900 font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            VIEW PRICING
          </button>
        </motion.div>
      </div>

      {/* 3. Human Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-6">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">SCROLL</span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="p-2.5 rounded-full bg-white border border-gray-300 text-[#EE3124] hover:border-[#EE3124] shadow-sm transition-colors cursor-pointer"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
