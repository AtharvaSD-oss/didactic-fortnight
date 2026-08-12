import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin, Zap, Flame } from 'lucide-react';
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Decorative Orange Speed Accent Line */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F47C20]/10 via-[#FF9A4D]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Hero Typography & Composition */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
        
        {/* Editorial Subtitle Tag with Orange Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#FFF2E8] border border-[#F47C20]/40 text-[#F47C20] font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-sm"
        >
          <Zap className="w-3.5 h-3.5 text-[#F47C20]" />
          <span>WHERE REAL RACING BEGINS &bull; 720M OUTDOOR ARENA</span>
        </motion.div>

        {/* Enormous Centered Headline: KARTOMANIA */}
        <div ref={titleRef} className="w-full select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[14vw] sm:text-[13vw] lg:text-[11.5rem] font-display font-bold tracking-tight uppercase leading-[0.85] text-[#0A0A0A]"
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
          <span className="text-[#0A0A0A] font-bold">FEEL THE SPEED</span>
          <span className="text-[#F47C20]">&bull;</span>
          <span className="text-[#F47C20] font-bold">BORN TO RACE</span>
          <span className="text-[#F47C20]">&bull;</span>
          <span className="text-[#0A0A0A] font-bold">DRIVE THE THRILL</span>
        </motion.div>

        {/* 3. Hero Product Showcase Image with Orange Frame Detail */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative w-full max-w-4xl mx-auto my-2 sm:my-4 group"
        >
          {/* Subtle Orange Glow & Grounding Shadow under Kart */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-14 bg-[#F47C20]/15 blur-2xl rounded-full pointer-events-none" />

          {/* Hero Kart Display Frame */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#EAEAEA] hover:border-[#F47C20] bg-[#0A0A0A] shadow-xl group-hover:shadow-2xl transition-all duration-500">
            <img
              src="/gallery/rotax-max-kart-71.jpg"
              alt="Kartomania Championship Racing Kart #71"
              className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover object-center filter contrast-[1.04] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px] sm:text-xs">
              <span className="bg-[#F47C20] text-white px-3 py-1 rounded-sm uppercase tracking-wider font-bold shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> PRO ROTAX MAX FLEET
              </span>
              <span className="hidden sm:inline-block bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm uppercase tracking-wider text-white border border-white/20">
                720M OUTDOOR ASPHALT CIRCUIT
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Action Buttons (60/30/10 visual balance) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
        >
          {/* Primary Black CTA */}
          <MagneticButton
            onClick={onOpenBooking}
            variant="primary"
            className="py-3.5 px-8 text-xs whitespace-nowrap shadow-sm"
          >
            BOOK YOUR RACE 🏁
          </MagneticButton>

          {/* Secondary Orange CTA: View Pricing */}
          <MagneticButton
            onClick={() => onNavigate('pricing')}
            variant="orange"
            className="py-3.5 px-7 text-xs whitespace-nowrap shadow-sm"
          >
            VIEW PRICING & COMBOS
          </MagneticButton>

          {/* Directions Link */}
          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] text-xs font-mono tracking-widest uppercase text-[#0A0A0A] hover:text-[#F47C20] font-bold transition-all shadow-sm cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#F47C20]" />
            <span>GET DIRECTIONS</span>
          </a>
        </motion.div>
      </div>

      {/* 5. Minimal Scroll Indicator with Orange Accent */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-1">
        <span className="font-mono text-[9px] text-[#888888] uppercase tracking-widest mb-1 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1.5 rounded-full text-[#0A0A0A] hover:text-[#F47C20] hover:bg-[#FFF0E5] transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4 text-[#F47C20]" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
