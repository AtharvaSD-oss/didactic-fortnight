import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
});

const titleAnimation = {
  initial: { opacity: 0, y: 35, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }
};

const kartAnimation = {
  initial: { opacity: 0, x: 80, y: 40, scale: 0.96 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  transition: { duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }
};

const Hero = ({ onOpenBooking }) => {
  const heroRef = useRef(null);
  const kartRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!kartRef.current || !heroRef.current) return;
      gsap.to(kartRef.current, {
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative w-full min-h-0 lg:min-h-[100svh] bg-white text-[#0A0A0A] overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-[54px] pt-[85px] sm:pt-[100px] lg:pt-[125px]">
        {/* Eyebrow Kicker */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-2 mb-2 sm:mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#F47C20] animate-orange-pulse" />
          <span className="font-mono text-[11px] sm:text-xs font-bold text-[#F47C20] uppercase tracking-widest">
            01 // KARTOMANIA
          </span>
        </motion.div>

        {/* Giant Dominant Title */}
        <div className="relative z-10 w-full overflow-visible">
          <motion.h1
            {...titleAnimation}
            className="font-anton uppercase italic leading-[0.88] tracking-[0.02em] whitespace-nowrap text-[12.5vw] sm:text-[10.8vw] md:text-[10vw] lg:text-[13.5vw] xl:text-[13.2vw] 2xl:text-[13.5rem] select-none inline-block"
            style={{ 
              fontFamily: "'Anton', 'Barlow Condensed', sans-serif",
              fontStyle: "italic",
              transform: "skewX(-7deg)",
              transformOrigin: "left center"
            }}
          >
            <span className="text-[#F47C20]">KART</span>
            <span className="text-[#FFC700] drop-shadow-[0_4px_12px_rgba(255,199,0,0.25)]">OMANIA</span>
          </motion.h1>
        </div>

        {/* Mobile & Tablet Kart Image */}
        <div className="lg:hidden relative w-full my-4 sm:my-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div
              className="absolute left-[8%] right-[6%] bottom-[20%] h-6 rounded-full blur-md pointer-events-none z-0"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.40) 50%, transparent 80%)" }}
            />
            <img
              src="/avalanche-car-isolated.png"
              alt="Kartomania White Avalanche Race Car"
              width={950}
              height={570}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              className="relative z-10 block w-full max-w-[820px] mx-auto h-auto object-contain mix-blend-multiply select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Lower Hero Area: Narrative & Dual CTAs */}
        <div className="relative z-20 min-h-0 lg:min-h-[460px]">
          <div className="relative lg:absolute left-0 top-0 lg:top-[48px] z-30 w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] pt-2 lg:pt-0 text-left">
            {/* Primary Headline */}
            <motion.h2
              {...fadeUp(0.3)}
              className="text-[#0A0A0A] font-display font-extrabold text-[24px] sm:text-[28px] lg:text-[34px] uppercase tracking-tight leading-tight"
            >
              RACE WITHOUT <span className="text-[#F47C20]">LIMITS.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="w-[72px] h-[2px] bg-[#F47C20] mt-3 mb-4"
            />

            {/* Supporting Text (1-2 clean lines) */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-[#444444] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-sans"
            >
              High-speed ~600m outdoor Grand Prix asphalt circuit with live telemetry and championship karts.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-3.5 mt-6 lg:mt-8">
              {/* Primary CTA */}
              <MagneticButton
                onClick={onOpenBooking}
                variant="primary"
                className="h-[50px] px-6 sm:px-7 bg-[#0A0A0A] text-white text-[12px] sm:text-[13px] font-bold rounded-[4px] shadow-sm transition-all duration-300 hover:bg-[#F47C20]"
              >
                <span>BOOK YOUR RACE</span>
                <ArrowRight className="inline-block w-4 h-4 ml-2 text-[#F47C20] group-hover:text-white transition-colors duration-300" />
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href="/track"
                className="inline-flex items-center justify-center h-[50px] px-6 border-2 border-[#E5E5E5] bg-white text-[#0A0A0A] text-[12px] sm:text-[13px] font-mono font-bold tracking-wider uppercase rounded-[4px] transition-all duration-300 hover:border-[#0A0A0A] hover:bg-[#F9F9F9] text-decoration-none"
              >
                EXPLORE THE TRACK
              </a>
            </motion.div>
          </div>

          {/* Desktop Kart Image (Parallax) */}
          <div
            ref={kartRef}
            className="hidden lg:block absolute right-[10px] xl:right-[45px] 2xl:right-[85px] bottom-[-8px] xl:bottom-[-20px] z-20 w-[890px] xl:w-[1080px] 2xl:w-[1240px]"
          >
            <motion.div {...kartAnimation} className="relative w-full" style={{ willChange: "transform" }}>
              <div
                aria-hidden="true"
                className="absolute left-[7%] bottom-[25%] w-[18%] h-[22px] rounded-full blur-[5px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.48) 50%, transparent 80%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute left-[36%] bottom-[20%] w-[20%] h-[26px] rounded-full blur-[7px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 50%, transparent 80%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute right-[4%] bottom-[26%] w-[18%] h-[26px] rounded-full blur-[6px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.50) 50%, transparent 80%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute left-[15%] right-[10%] bottom-[22%] h-[28px] rounded-[100%] blur-[10px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, transparent 85%)" }}
              />

              <img
                src="/avalanche-car-isolated.png"
                alt="Kartomania White Avalanche Race Car"
                width={1000}
                height={600}
                loading="eager"
                fetchPriority="high"
                draggable={false}
                className="relative z-10 block w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply contrast-[1.04]"
                style={{
                  aspectRatio: "1000 / 600",
                  filter: "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.45)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.35))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-[15px] sm:h-[20px]" />
    </section>
  );
};

export default Hero;
