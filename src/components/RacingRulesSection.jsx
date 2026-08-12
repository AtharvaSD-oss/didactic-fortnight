import React from 'react';
import { ShieldCheck, Zap, Flame, Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import MagneticButton from './MagneticButton';

const RacingRulesSection = () => {
  return (
    <section id="racing-rules" className="py-14 sm:py-18 px-4 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900 relative z-20">
      <div className="space-y-8 sm:space-y-10">

        {/* Section Header: Our Rules, Your Safety, Your Race */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> RACING PHILOSOPHY & SAFETY
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
            OUR RULES &bull; YOUR SAFETY &bull; <span className="text-[#EE3124]">YOUR RACE</span>
          </h2>
          
          <p className="text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-widest font-semibold">
            KARTOMANIA... WHERE REAL RACING BEGINS.
          </p>
        </div>

        {/* 3 Pillars of Speed: Skill, Confidence, Safety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatedCard className="p-6 rounded-2xl bg-gray-50 border-gray-200 space-y-3 text-center hover:border-[#EE3124]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#EE3124]/10 text-[#EE3124] flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-gray-950 uppercase">
              SPEED COMES FROM SKILL
            </h3>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              True velocity is unlocked through smooth steering inputs, optimal racing lines, and understanding throttle balance.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-6 rounded-2xl bg-gray-50 border-gray-200 space-y-3 text-center hover:border-[#EE3124]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/15 text-amber-700 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-gray-950 uppercase">
              CONTROL CREATES CONFIDENCE
            </h3>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              When you control the kart with precision, you build the confidence to brake later, carry more corner speed, and apex perfectly.
            </p>
          </AnimatedCard>

          <AnimatedCard className="p-6 rounded-2xl bg-gray-50 border-gray-200 space-y-3 text-center hover:border-[#EE3124]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-gray-950 uppercase">
              SAFETY MAKES EVERY RACE POSSIBLE
            </h3>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              Our professional safety crew and barrier systems protect you so you can push your limits safely without hesitation.
            </p>
          </AnimatedCard>
        </div>

        {/* Experience Quote Callout Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0B0F19] text-white border border-gray-800 text-center space-y-1 shadow-lg">
          <p className="text-sm sm:text-lg font-display font-bold uppercase tracking-wide text-gray-100">
            "Experience the thrill of real racing in a safe, professionally managed environment."
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#FFD700] uppercase tracking-widest font-bold">
            — KARTOMANIA MOTORSPORT CREW
          </div>
        </div>

        {/* Pro Telemetry Feature: "WANT MORE SPEED?" (Real Racers Race Clean) */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#EE3124]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Want More Speed? Heading */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" /> PRO RACER CODE
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
                WANT MORE <span className="text-[#EE3124]">SPEED?</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                National champions don't win through aggressive collisions or sideways slides. Master the art of clean driving to smash lap records.
              </p>
            </div>

            {/* Right: The 3 Core Pro Truths */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-100 text-[#EE3124] shrink-0 font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-gray-950 uppercase">
                    DRIFTING DOESN'T MAKE YOU FASTER
                  </h4>
                  <p className="text-xs font-sans text-gray-600 mt-0.5">
                    Sideways sliding bleeds engine RPM and tire grip. Grip-driving and hitting apexes carries maximum exit velocity down the straight.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-100 text-[#EE3124] shrink-0 font-mono font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-gray-950 uppercase">
                    BUMPING DOESN'T MAKE YOU A BETTER RACER
                  </h4>
                  <p className="text-xs font-sans text-gray-600 mt-0.5">
                    Kart-to-kart contact scrubs speed and damages momentum. Clean overtakes are earned through late braking and switchbacks.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-100 text-[#EE3124] shrink-0 font-mono font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-gray-950 uppercase">
                    THE FASTEST RACERS WIN THROUGH PRECISION, CONTROL & CONSISTENCY
                  </h4>
                  <p className="text-xs font-sans text-gray-600 mt-0.5">
                    Hitting the exact same braking marker lap after lap is how national championships are won.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Big Bold Clean Racing Banner */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xl sm:text-3xl font-display font-black tracking-tight text-gray-950 uppercase">
              REAL RACERS <span className="text-[#EE3124]">RACE CLEAN.</span>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-2.5 px-6 text-xs">
              Test Your Timing Now
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RacingRulesSection;
