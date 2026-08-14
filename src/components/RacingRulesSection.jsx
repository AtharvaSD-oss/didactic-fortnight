import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const RacingRulesSection = () => {
  return (
    <section id="racing-rules" className="py-12 sm:py-18 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111] relative z-20">
      <div className="space-y-8 sm:space-y-10">

        {/* Section Header: Our Rules, Your Safety, Your Race */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ SAFETY & RULES</span>
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





      </div>
    </section>
  );
};

export default RacingRulesSection;
