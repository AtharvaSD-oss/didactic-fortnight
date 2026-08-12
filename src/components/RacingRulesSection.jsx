import React from 'react';
import { ShieldCheck, Zap, Flame, Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import MagneticButton from './MagneticButton';

const RacingRulesSection = () => {
  return (
    <section id="racing-rules" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA] relative z-20">
      <div className="space-y-10 sm:space-y-12">

        {/* Section Header: Our Rules, Your Safety, Your Race */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> RACING PHILOSOPHY & SAFETY
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
            OUR RULES &bull; YOUR SAFETY &bull; <span className="text-[#C9A45C]">YOUR RACE</span>
          </h2>
          
          <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] uppercase tracking-widest font-semibold">
            KARTOMANIA... WHERE REAL RACING BEGINS.
          </p>
        </div>

        {/* 3 Pillars of Speed: Skill, Confidence, Safety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <AnimatedCard className="p-6 sm:p-7 rounded-2xl bg-[#15181C] border border-white/10 space-y-4 text-center hover:border-[#C9A45C]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-[#F4F1EA] uppercase">
              SPEED COMES FROM SKILL
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
              True velocity is unlocked through smooth steering inputs, optimal racing lines, and understanding throttle balance.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-6 sm:p-7 rounded-2xl bg-[#15181C] border border-white/10 space-y-4 text-center hover:border-[#C9A45C]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-[#F4F1EA] uppercase">
              CONTROL CREATES CONFIDENCE
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
              When you control the kart with precision, you build the confidence to brake later, carry more corner speed, and apex perfectly.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-6 sm:p-7 rounded-2xl bg-[#15181C] border border-white/10 space-y-4 text-center hover:border-[#C9A45C]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-[#F4F1EA] uppercase">
              SAFETY MAKES EVERY RACE POSSIBLE
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
              Our professional safety crew and barrier systems protect you so you can push your limits safely without hesitation.
            </p>
          </AnimatedCard>
        </div>

        {/* Experience Quote Callout Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#15181C] text-[#F4F1EA] border border-white/10 text-center space-y-1.5 shadow-xl">
          <p className="text-sm sm:text-lg font-display font-bold uppercase tracking-wide text-[#F4F1EA]">
            "Experience the thrill of real racing in a safe, professionally managed environment."
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#C9A45C] uppercase tracking-widest font-bold">
            — KARTOMANIA MOTORSPORT CREW
          </div>
        </div>

        {/* Pro Telemetry Feature: "WANT MORE SPEED?" (Real Racers Race Clean) */}
        <div className="rounded-3xl bg-[#15181C] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Want More Speed? Heading */}
            <div className="lg:col-span-5 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A45C]/15 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" /> PRO RACER CODE
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
                WANT MORE <span className="text-[#C9A45C]">SPEED?</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
                National champions don't win through aggressive collisions or sideways slides. Master the art of clean driving to smash lap records.
              </p>
            </div>

            {/* Right: The 3 Core Pro Truths */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-lg bg-[#C9A45C] text-[#0B0D0F] flex items-center justify-center shrink-0 font-mono font-black text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#F4F1EA] uppercase">
                    DRIFTING DOESN'T MAKE YOU FASTER
                  </h4>
                  <p className="text-xs font-sans text-[#B8B1A5] mt-1 leading-relaxed">
                    Sideways sliding bleeds engine RPM and tire grip. Grip-driving and hitting apexes carries maximum exit velocity down the straight.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-lg bg-[#C9A45C] text-[#0B0D0F] flex items-center justify-center shrink-0 font-mono font-black text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#F4F1EA] uppercase">
                    BUMPING DOESN'T MAKE YOU A BETTER RACER
                  </h4>
                  <p className="text-xs font-sans text-[#B8B1A5] mt-1 leading-relaxed">
                    Kart-to-kart contact scrubs speed and damages momentum. Clean overtakes are earned through late braking and switchbacks.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#0B0D0F] border border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-lg bg-[#C9A45C] text-[#0B0D0F] flex items-center justify-center shrink-0 font-mono font-black text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#F4F1EA] uppercase">
                    THE FASTEST RACERS WIN THROUGH PRECISION, CONTROL & CONSISTENCY
                  </h4>
                  <p className="text-xs font-sans text-[#B8B1A5] mt-1 leading-relaxed">
                    Hitting the exact same braking marker lap after lap is how national championships are won.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Big Bold Clean Racing Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xl sm:text-3xl font-display font-black tracking-tight text-[#F4F1EA] uppercase">
              REAL RACERS <span className="text-[#C9A45C]">RACE CLEAN.</span>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-6 text-xs">
              Test Your Timing Now
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RacingRulesSection;
