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
    <section id="experience-timeline" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 text-gray-900 bg-white">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-wider font-bold">// THE RACEDAY JOURNEY</span>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          YOUR <span className="text-[#EE3124]">RACING EXPERIENCE</span>
        </h2>
        <p className="text-xs sm:text-sm font-sans text-gray-600 max-w-2xl mx-auto">
          From paddock arrival to podium victory — here is what happens during your Kartomania track session.
        </p>
      </div>

      {/* Step Grid Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
              <AnimatedCard className="h-full flex flex-col justify-between space-y-3 p-5 rounded-2xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EE3124] to-[#DC2626] flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                      {item.step}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#EE3124]/20">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <IconComp className="w-4 h-4 text-[#EE3124]" />
                    <h3 className="text-base font-display font-bold text-[#0B0F19] uppercase group-hover:text-[#EE3124] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-gray-600 leading-relaxed">
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
