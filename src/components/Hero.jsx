import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageContainerRef.current, {
        y: -25,
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
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 px-4 sm:px-6 lg:px-12 bg-white text-[#111111] overflow-hidden"
    >
      {/* 1. Minimal Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F3_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* 2. Main Hero Typography & Composition */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
        
        {/* Editorial Subtitle Tag with subtle light-orange accent dot */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F5F3] border border-[#E5E5E5] text-[#555555] font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4A261]" />
          <span>WHERE REAL RACING BEGINS</span>
        </motion.div>

        {/* Large Editorial Headline: KARTOMANIA */}
        <div className="w-full select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] xl:text-[10.5rem] font-display font-bold tracking-tight uppercase leading-[0.85] text-[#0A0A0A]"
          >
            KARTOMANIA
          </motion.h1>
        </div>

        {/* Supporting Editorial Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#666666] font-medium uppercase tracking-widest pt-0.5"
        >
          <span className="text-[#0A0A0A] font-bold">FEEL THE SPEED</span>
          <span className="text-[#F4A261]">&bull;</span>
          <span>BORN TO RACE</span>
          <span className="text-[#F4A261]">&bull;</span>
          <span className="text-[#0A0A0A] font-bold">DRIVE THE THRILL</span>
        </motion.div>

        {/* 3. Hero Product Showcase Image: Avalanche Racing White Formula Car */}
        <motion.div
          ref={imageContainerRef}
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative w-full max-w-6xl mx-auto my-3 sm:my-5 group"
        >
          {/* Grounding Shadow */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/10 blur-2xl rounded-full pointer-events-none" />

          {/* Race Car Presentation Container (85-95% width, complete vehicle in full view) */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#F5F5F3] shadow-md group-hover:shadow-xl transition-all duration-500">
            <img
              src="/avalanche-formula-hero.jpg"
              alt="Avalanche Racing Formula Car #10 - Kartomania National Motorsport"
              className="w-full h-[250px] xs:h-[300px] sm:h-[420px] md:h-[500px] lg:h-[560px] object-contain sm:object-cover object-center filter contrast-[1.02] brightness-[0.99] group-hover:contrast-[1.05] group-hover:scale-[1.02] transition-all duration-700 ease-out"
              loading="eager"
            />

            {/* Subtle Gradient Overlays for High-Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Top-Left Telemetry Identifier */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="px-3 py-1 rounded-sm bg-white/90 backdrop-blur-md text-[#0A0A0A] font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#EAEAEA] flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A261]" />
                01 / KARTOMANIA FORMULA GRID
              </span>
            </div>

            {/* Bottom-Left & Bottom-Right Clean UI Details */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[9px] sm:text-xs">
              <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm uppercase tracking-wider font-semibold border border-white/10 flex items-center gap-2">
                <span className="text-[#F4A261] font-bold">#10</span>
                <span>AVALANCHE RACING &bull; 720M OUTDOOR ARENA</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm uppercase tracking-wider text-[#CCCCCC] border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A261] animate-pulse" />
                CHAMPIONSHIP GRID READY
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 w-full sm:w-auto"
        >
          {/* Primary Black CTA */}
          <MagneticButton
            onClick={onOpenBooking}
            className="py-3.5 px-8 text-xs whitespace-nowrap shadow-sm bg-[#0A0A0A] border-[#0A0A0A]"
          >
            BOOK YOUR RACE 🏁
          </MagneticButton>

          {/* Secondary Directions CTA */}
          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-white hover:bg-[#F5F5F3] border border-[#E5E5E5] hover:border-[#0A0A0A] text-xs font-mono tracking-widest uppercase text-[#111111] font-bold transition-all shadow-sm cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span>GET DIRECTIONS</span>
          </a>

          {/* Pricing Link */}
          <button
            onClick={() => onNavigate('pricing')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-white hover:bg-[#F5F5F3] border border-[#E5E5E5] hover:border-[#0A0A0A] text-xs font-mono tracking-widest uppercase text-[#111111] font-bold transition-all shadow-sm cursor-pointer"
          >
            VIEW PRICING
          </button>
        </motion.div>
      </div>

      {/* 5. Minimal Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-1">
        <span className="font-mono text-[9px] text-[#888888] uppercase tracking-widest mb-1 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1.5 rounded-full text-[#111111] hover:bg-[#F5F5F3] transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4 text-[#666666]" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
