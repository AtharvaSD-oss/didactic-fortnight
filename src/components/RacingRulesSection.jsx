import React from 'react';
import { ShieldCheck, Zap, Flame, Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import MagneticButton from './MagneticButton';

const RacingRulesSection = () => {
  return (
    <section id="racing-rules" className="py-12 sm:py-18 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111] relative z-20">
      <div className="space-y-8 sm:space-y-10">

        {/* Section Header: Our Rules, Your Safety, Your Race */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ SAFETY</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F47C20]" /> // RACING PHILOSOPHY & SAFETY
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              OUR RULES &bull; YOUR SAFETY &bull; <span className="text-[#F47C20]">YOUR RACE</span>
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm font-mono text-[#666666] uppercase tracking-widest font-semibold">
            KARTOMANIA... WHERE REAL RACING BEGINS.
          </p>
        </div>

        {/* 3 Pillars of Speed: Skill, Confidence, Safety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard className="p-8 space-y-4 text-left border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] border border-[#F47C20]/20 text-[#F47C20] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide">
              SPEED COMES FROM SKILL
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
              True velocity is unlocked through smooth steering inputs, optimal racing lines, and understanding throttle balance.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-8 space-y-4 text-left border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] border border-[#F47C20]/20 text-[#F47C20] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide">
              CONTROL CREATES CONFIDENCE
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
              When you control the kart with precision, you build the confidence to brake later, carry more corner speed, and apex perfectly.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-8 space-y-4 text-left border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] border border-[#F47C20]/20 text-[#F47C20] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase tracking-wide">
              SAFETY MAKES EVERY RACE POSSIBLE
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
              Our professional safety crew and barrier systems protect you so you can push your limits safely without hesitation.
            </p>
          </AnimatedCard>
        </div>

        {/* Experience Quote Callout Banner */}
        <div className="p-8 rounded-xl bg-[#0A0A0A] text-white text-center space-y-2 border-l-4 border-[#F47C20] shadow-lg">
          <p className="text-base sm:text-xl font-display font-bold uppercase tracking-wider text-white">
            "Experience the thrill of real racing in a safe, professionally managed environment."
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#F47C20] uppercase tracking-widest font-bold">
            — KARTOMANIA MOTORSPORT CREW
          </div>
        </div>

        {/* Pro Telemetry Feature: "WANT MORE SPEED?" (Real Racers Race Clean) */}
        <div className="rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] p-8 sm:p-12 relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Want More Speed? Heading */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#F47C20]" /> PRO RACER CODE
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
                WANT MORE <span className="text-[#F47C20]">SPEED?</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
                National champions don't win through aggressive collisions or sideways slides. Master the art of clean driving to smash lap records.
              </p>
            </div>

            {/* Right: The 3 Core Pro Truths */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-sm bg-[#F47C20] text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs shadow-sm">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] uppercase">
                    DRIFTING DOESN'T MAKE YOU FASTER
                  </h4>
                  <p className="text-xs font-sans text-[#666666] mt-1 leading-relaxed">
                    Sideways sliding bleeds engine RPM and tire grip. Grip-driving and hitting apexes carries maximum exit velocity down the straight.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-sm bg-[#F47C20] text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs shadow-sm">
                  02
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] uppercase">
                    BUMPING DOESN'T MAKE YOU A BETTER RACER
                  </h4>
                  <p className="text-xs font-sans text-[#666666] mt-1 leading-relaxed">
                    Kart-to-kart contact scrubs speed and damages momentum. Clean overtakes are earned through late braking and switchbacks.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-sm flex items-start gap-4">
                <div className="p-2 w-8 h-8 rounded-sm bg-[#F47C20] text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs shadow-sm">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] uppercase">
                    THE FASTEST RACERS WIN THROUGH PRECISION, CONTROL & CONSISTENCY
                  </h4>
                  <p className="text-xs font-sans text-[#666666] mt-1 leading-relaxed">
                    Hitting the exact same braking marker lap after lap is how national championships are won.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Big Bold Clean Racing Banner */}
          <div className="mt-10 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-[#0A0A0A] uppercase">
              REAL RACERS <span className="text-[#F47C20]">RACE CLEAN.</span>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-8 text-xs">
              TEST YOUR TIMING NOW
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RacingRulesSection;
