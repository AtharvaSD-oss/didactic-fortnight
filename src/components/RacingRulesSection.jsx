import React from 'react';
import { ShieldCheck, Zap, Flame, Award, Sparkles } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import MagneticButton from './MagneticButton';

const RacingRulesSection = () => {
  return (
    <section id="racing-rules" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="space-y-8 sm:space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> RACING PHILOSOPHY & SAFETY
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
            OUR RULES &bull; YOUR SAFETY &bull; <span className="text-[#00d9ff]">YOUR RACE</span>
          </h2>
          
          <p className="text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-widest font-semibold">
            KARTOMANIA... WHERE REAL RACING BEGINS.
          </p>
        </div>

        {/* 3 Pillars of Speed: Skill, Confidence, Safety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatedCard className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-white uppercase">
              SPEED COMES FROM SKILL
            </h3>
            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              True velocity is unlocked through smooth steering inputs, optimal racing lines, and understanding throttle balance.
            </p>
          </AnimatedCard>

          <AnimatedCard className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-white uppercase">
              CONTROL CREATES CONFIDENCE
            </h3>
            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              When you control the kart with precision, you build the confidence to brake later, carry more corner speed, and apex perfectly.
            </p>
          </AnimatedCard>

          <AnimatedCard className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-black text-white uppercase">
              SAFETY MAKES EVERY RACE POSSIBLE
            </h3>
            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              Our professional safety crew and barrier systems protect you so you can push your limits safely without hesitation.
            </p>
          </AnimatedCard>
        </div>

        {/* Experience Quote Callout Banner */}
        <div className="p-6 sm:p-7 rounded-3xl floating-card text-center space-y-1 shadow-2xl">
          <p className="text-sm sm:text-lg font-display font-bold uppercase tracking-wide text-white">
            "Experience the thrill of real racing in a safe, professionally managed environment."
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#00d9ff] uppercase tracking-widest font-bold">
            — KARTOMANIA MOTORSPORT CREW
          </div>
        </div>

        {/* Pro Telemetry Feature: "WANT MORE SPEED?" (Real Racers Race Clean) */}
        <div className="rounded-3xl floating-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Want More Speed? Heading */}
            <div className="lg:col-span-5 space-y-3 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" /> PRO RACER CODE
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
                WANT MORE <span className="text-[#00d9ff]">SPEED?</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
                National champions don't win through aggressive collisions or sideways slides. Master the art of clean driving to smash lap records.
              </p>
            </div>

            {/* Right: The 3 Core Pro Truths */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#00d9ff]/40 shadow-sm flex items-start gap-3.5 transition-colors">
                <div className="p-2 rounded-xl bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 shrink-0 font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase">
                    DRIFTING DOESN'T MAKE YOU FASTER
                  </h4>
                  <p className="text-xs font-sans text-gray-300 mt-0.5">
                    Sideways sliding bleeds engine RPM and tire grip. Grip-driving and hitting apexes carries maximum exit velocity down the straight.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#00d9ff]/40 shadow-sm flex items-start gap-3.5 transition-colors">
                <div className="p-2 rounded-xl bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 shrink-0 font-mono font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase">
                    BUMPING DOESN'T MAKE YOU A BETTER RACER
                  </h4>
                  <p className="text-xs font-sans text-gray-300 mt-0.5">
                    Kart-to-kart contact scrubs speed and damages momentum. Clean overtakes are earned through late braking and switchbacks.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#00d9ff]/40 shadow-sm flex items-start gap-3.5 transition-colors">
                <div className="p-2 rounded-xl bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 shrink-0 font-mono font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase">
                    THE FASTEST RACERS WIN THROUGH PRECISION, CONTROL & CONSISTENCY
                  </h4>
                  <p className="text-xs font-sans text-gray-300 mt-0.5">
                    Hitting the exact same braking marker lap after lap is how national championships are won.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Big Bold Clean Racing Banner */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xl sm:text-3xl font-display font-black tracking-tight text-white uppercase">
              REAL RACERS <span className="text-[#00d9ff]">RACE CLEAN.</span>
            </div>

            <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-2.5 px-7 text-xs shadow-[0_0_20px_rgba(0,217,255,0.3)]">
              Test Your Timing Now ⚡
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RacingRulesSection;
