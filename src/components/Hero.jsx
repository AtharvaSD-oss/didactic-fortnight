import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

/* ─── Animation Sequence Variants ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

const kartVariant = {
  initial: { opacity: 0, x: 60, y: 30 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: {
    duration: 1.0,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.6,
  },
};

/* ─── Hero Component ──────────────────────────────────────────── */
const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const kartRef = useRef(null);

  /* Subtle scroll-based parallax on the race car */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (kartRef.current) {
        gsap.to(kartRef.current, {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#FAFAF9] text-[#111111] overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      {/* ── 1. Minimal Background: Off-white Canvas + Ambient Grid & Glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #EFEFEF 1px, transparent 1px), linear-gradient(to bottom, #EFEFEF 1px, transparent 1px)',
          backgroundSize: '6rem 6rem',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 30% 40%, #000 60%, transparent 100%)',
          opacity: 0.65,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-gradient-to-br from-[#F47C20]/10 via-[#FF9A4D]/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* ── 16. Right-Side Pagination Dots ───────────────────── */}
      <div className="hidden lg:flex fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 items-center">
        <button
          onClick={() => onNavigate('home')}
          aria-label="Go to section 1: Home"
          className="w-2.5 h-2.5 rounded-full bg-[#F47C20] transition-all duration-300 transform scale-125 shadow-sm cursor-pointer"
        />
        <button
          onClick={() => onNavigate('who-we-are')}
          aria-label="Go to section 2: Experience"
          className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] hover:bg-[#F47C20] transition-all duration-300 cursor-pointer"
        />
        <button
          onClick={() => onNavigate('track')}
          aria-label="Go to section 3: Track"
          className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] hover:bg-[#F47C20] transition-all duration-300 cursor-pointer"
        />
        <button
          onClick={() => onNavigate('karts')}
          aria-label="Go to section 4: Karts"
          className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] hover:bg-[#F47C20] transition-all duration-300 cursor-pointer"
        />
      </div>

      {/* ════════════════════════════════════════════════════════
          MAIN COMPOSITION: Typography, Content & Integrated Kart
         ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 flex-1 flex flex-col justify-between">
        
        {/* ── 8. Section Label: 01 / KARTOMANIA ───────────── */}
        <motion.div {...fadeUp(0.1)} className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span className="w-[3px] h-4 bg-[#F47C20] block" aria-hidden="true" />
            <span className="text-[#F47C20]">01</span>
            <span className="text-[#0A0A0A]">/</span>
            <span className="text-[#0A0A0A]">KARTOMANIA</span>
          </div>
        </motion.div>

        {/* ── 9. Giant KARTOMANIA Title ──────────────────────── */}
        <div className="relative z-10 my-2 sm:my-4 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display font-black text-[#0A0A0A] uppercase leading-[0.82] tracking-tighter text-[16.5vw] sm:text-[14.5vw] md:text-[13vw] lg:text-[11vw] xl:text-[10.5vw] 2xl:text-[11rem]"
          >
            KARTOMANIA
          </motion.h1>
        </div>

        {/* ── LOWER COMPOSITION: Text Content + Overlapping Kart ── */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 items-end pb-8 lg:pb-16 gap-6 lg:gap-0">
          
          {/* ── 10. Left Content Block ─────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4 sm:space-y-5 lg:pb-4 relative z-30">
            
            {/* Tagline */}
            <motion.div {...fadeUp(0.35)}>
              <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#0A0A0A]">
                RACE.&nbsp; EXPERIENCE.&nbsp; REMEMBER.
              </p>
            </motion.div>

            {/* Orange Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="w-12 h-[2px] bg-[#F47C20]"
              aria-hidden="true"
            />

            {/* Description */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-sm sm:text-base text-[#444444] font-medium leading-relaxed max-w-sm"
            >
              Where speed meets adrenaline.<br />
              <span className="text-[#0A0A0A] font-semibold">
                Experience Kartomania.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <MagneticButton
                onClick={onOpenBooking}
                variant="primary"
                className="py-3.5 px-7 text-xs font-bold whitespace-nowrap shadow-md"
              >
                BOOK YOUR RACE&nbsp;
                <ArrowRight className="inline w-3.5 h-3.5 ml-1 text-[#F47C20]" />
              </MagneticButton>

              <a
                href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#E5E5E5] hover:border-[#F47C20]
                           text-xs font-mono tracking-widest uppercase text-[#0A0A0A] hover:text-[#F47C20]
                           font-bold transition-all duration-200 cursor-pointer rounded-sm bg-white"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F47C20]" />
                GET DIRECTIONS
              </a>
            </motion.div>
          </div>

          {/* ── 11, 12, 13. Kart Layer (Desktop/Tablet Overlap) ── */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 relative self-end -mb-6 xl:-mb-10 z-20">
            <motion.div
              ref={kartRef}
              variants={kartVariant}
              initial="initial"
              animate="animate"
              className="relative z-20 w-full"
              style={{ willChange: 'transform' }}
            >
              {/* Ground Contact Shadow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-[12%] right-[8%] h-8 sm:h-10 blur-xl rounded-full pointer-events-none z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.18) 0%, transparent 70%)',
                }}
              />

              {/* White Avalanche Kart Image (Independent Layer) */}
              <img
                src="/avalanche-car-isolated.png"
                alt="Kartomania White Avalanche Race Car #10"
                width={1000}
                height={600}
                loading="eager"
                fetchPriority="high"
                draggable={false}
                className="
                  w-[58vw] max-w-[1050px] min-w-[500px]
                  xl:w-[60vw] 2xl:w-[62vw]
                  h-auto
                  object-contain
                  mix-blend-multiply
                  filter contrast-[1.03] brightness-[1.01]
                  select-none pointer-events-none
                  translate-x-2 xl:translate-x-6
                "
                style={{ aspectRatio: '1000/600', mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </div>
        </div>

        {/* ── 18. Mobile Responsive Kart Layer ────────────────── */}
        <div className="block lg:hidden w-full my-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="relative w-full"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-[10%] right-[10%] h-5 blur-lg rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.15) 0%, transparent 70%)',
              }}
            />
            <img
              src="/avalanche-car-isolated.png"
              alt="Kartomania White Avalanche Race Car #10"
              width={900}
              height={540}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              className="w-full h-auto object-contain mix-blend-multiply filter contrast-[1.03] brightness-[1.01] select-none pointer-events-none max-w-[520px] mx-auto"
              style={{ aspectRatio: '900/540', mixBlendMode: 'multiply' }}
            />
          </motion.div>
        </div>

      </div>

      {/* ── Minimal Scroll Indicator ─────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-4 pt-2">
        <span className="font-mono text-[9px] text-[#888888] uppercase tracking-widest font-semibold mb-1">
          SCROLL TO EXPLORE
        </span>
        <motion.button
          onClick={() => onNavigate('who-we-are')}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1 rounded-full text-[#0A0A0A] hover:text-[#F47C20] transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <div className="w-[1px] h-5 bg-gradient-to-b from-[#F47C20] to-transparent mx-auto" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
