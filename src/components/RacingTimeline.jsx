import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ClipboardList, ShieldAlert, Zap, Flag, Trophy, Sparkles } from 'lucide-react';
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
    <section id="experience-timeline" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9] border-t border-[#EAEAEA] relative z-20 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E5E5] pb-6 text-left">
          <div>
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold block mb-2">
              // THE RACEDAY JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#080808] uppercase tracking-tight">
              YOUR <span className="text-[#666666]">RACING EXPERIENCE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-wider max-w-sm">
            From paddock arrival to podium victory — here is what happens during your Kartomania track session.
          </p>
        </div>

        {/* Step Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
                <div className="h-full flex flex-col justify-between space-y-5 p-7 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#080808] transition-all duration-300 shadow-sm text-left group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-[#080808] group-hover:translate-x-1 transition-transform">
                        {item.step}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#F5F5F5] text-[#555555] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#E5E5E5]">
                        {item.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-[#F0F0F0]">
                      <IconComp className="w-4 h-4 text-[#080808]" />
                      <h3 className="text-base font-display font-bold text-[#111111] uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RacingTimeline;
