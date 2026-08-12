import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -30,
        scale: 1.02,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
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
      {/* 1. Subtle Minimal Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F0F0F0_1px,transparent_1px),linear-gradient(to_bottom,#F0F0F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* 2. Main Hero Typography & Composition */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
        
        {/* Editorial Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-[#555555] font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
        >
          <span>WHERE REAL RACING BEGINS</span>
        </motion.div>

        {/* Enormous Centered Headline: KARTOMANIA */}
        <div ref={titleRef} className="w-full select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[14vw] sm:text-[13vw] lg:text-[11.5rem] font-display font-bold tracking-tight uppercase leading-[0.85] text-[#080808]"
          >
            KARTOMANIA
          </motion.h1>
        </div>

        {/* Editorial Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#666666] font-medium uppercase tracking-widest pt-1"
        >
          <span className="text-[#111111] font-bold">FEEL THE SPEED</span>
          <span>&bull;</span>
          <span>BORN TO RACE</span>
          <span>&bull;</span>
          <span className="text-[#111111] font-bold">DRIVE THE THRILL</span>
        </motion.div>

        {/* 3. Hero Product Showcase Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative w-full max-w-4xl mx-auto my-2 sm:my-4 group"
        >
          {/* Subtle Grounding Shadow under Kart */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/15 blur-2xl rounded-full pointer-events-none" />

          {/* Hero Kart Display */}
          <div className="relative rounded-2xl overflow-hidden border border-[#EBEBEB] bg-[#F8F8F8] shadow-lg group-hover:shadow-xl transition-shadow duration-500">
            <img
              src="/gallery/rotax-max-kart-71.jpg"
              alt="Kartomania Championship Racing Kart #71"
              className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover object-center filter contrast-[1.04] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px] sm:text-xs">
              <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-sm uppercase tracking-wider font-semibold border border-white/10">
                PRO ROTAX MAX FLEET
              </span>
              <span className="hidden sm:inline-block bg-black/75 backdrop-blur-md px-3 py-1 rounded-sm uppercase tracking-wider text-[#B8B8B8] border border-white/10">
                720M OUTDOOR CIRCUIT
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
        >
          {/* Primary Black CTA */}
          <MagneticButton
            onClick={onOpenBooking}
            className="py-3.5 px-8 text-xs whitespace-nowrap shadow-sm"
          >
            BOOK YOUR RACE 🏁
          </MagneticButton>

          {/* Secondary Directions CTA */}
          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#080808] text-xs font-mono tracking-widest uppercase text-[#111111] font-bold transition-all shadow-sm cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#080808]" />
            <span>GET DIRECTIONS</span>
          </a>

          {/* Pricing Link */}
          <button
            onClick={() => onNavigate('pricing')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#080808] text-xs font-mono tracking-widest uppercase text-[#111111] font-bold transition-all shadow-sm cursor-pointer"
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
          className="p-1.5 rounded-full text-[#111111] hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4 text-[#666666]" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
