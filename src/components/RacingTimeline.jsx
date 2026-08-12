import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ClipboardList, ShieldAlert, Zap, Flag, Trophy, Sparkles } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { fadeUp } from '../animations/motionVariants';

const steps = [
  {
    step: '01',
    title: 'Arrival',
    desc: 'Welcome to Kartomania at Entertainland Mall, Sector 83, Manesar.',
    icon: MapPin,
    tag: 'WELCOME',
  },
  {
    step: '02',
    title: 'Registration',
    desc: 'Quick driver registration & session ticket collection at the race desk.',
    icon: ClipboardList,
    tag: 'RACE DESK',
  },
  {
    step: '03',
    title: 'Safety Briefing',
    desc: 'F1 safety video briefing, track flag rules, and cornering techniques.',
    icon: ShieldAlert,
    tag: 'SAFETY FIRST',
  },
  {
    step: '04',
    title: 'Gear Up',
    desc: 'Collect DOT-certified full-face race helmet, neck brace, and racing suit.',
    icon: Zap,
    tag: 'PADDOCK',
  },
  {
    step: '05',
    title: 'Race',
    desc: 'Grid launch in 270cc Sodi RT10 karts on the 680m multi-level asphalt track.',
    icon: Flag,
    tag: 'HIGH SPEED',
  },
  {
    step: '06',
    title: 'Leaderboard',
    desc: 'Check millisecond-accurate telemetry lap times and race position.',
    icon: Trophy,
    tag: 'TELEMETRY',
  },
  {
    step: '07',
    title: 'Celebration',
    desc: 'Podium photo ops, champion trophy ceremony, and paddock lounge.',
    icon: Sparkles,
    tag: 'PODIUM',
  },
];

const RacingTimeline = () => {
  return (
    <section id="experience-timeline" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10 relative z-20 text-[#F4F1EA] bg-[#0B0D0F]">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <span className="font-mono text-xs text-[#C9A45C] uppercase tracking-wider font-bold">// THE RACEDAY JOURNEY</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          YOUR <span className="text-[#C9A45C]">RACING EXPERIENCE</span>
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] max-w-2xl mx-auto">
          From paddock arrival to podium victory — here is what happens during your Kartomania track session.
        </p>
      </div>

      {/* Step Grid Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AnimatedCard className="h-full flex flex-col justify-between space-y-4 p-6 rounded-2xl bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A45C] text-[#0B0D0F] flex items-center justify-center font-mono font-black text-sm shadow-md">
                      {item.step}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B0D0F] text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#C9A45C]/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1">
                    <IconComp className="w-4 h-4 text-[#C9A45C]" />
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#F4F1EA] uppercase group-hover:text-[#C9A45C] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RacingTimeline;
