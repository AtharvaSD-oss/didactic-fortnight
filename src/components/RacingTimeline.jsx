import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ClipboardList, ShieldAlert, Zap, Flag, Trophy, Sparkles } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { fadeUp } from '../animations/motionVariants';

const steps = [
  {
    step: '01',
    title: 'Arrival',
    desc: 'Welcome to Kartomania at Entertainland Mall, Sector 83, Gurugram.',
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
    desc: 'Collect DOT-certified full-face race helmet, neck brace, and racing gear.',
    icon: Zap,
    tag: 'PADDOCK',
  },
  {
    step: '05',
    title: 'Race',
    desc: 'Grid launch in calibrated Sodi RT10 Pro karts on the 720m asphalt circuit.',
    icon: Flag,
    tag: 'HIGH SPEED',
  },
  {
    step: '06',
    title: 'Leaderboard',
    desc: 'Check millisecond-accurate telemetry lap times and live race position.',
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
    <section id="experience-timeline" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-gray-800 relative z-20 text-white">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> THE RACEDAY JOURNEY
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          YOUR <span className="text-[#00d9ff]">RACING EXPERIENCE</span>
        </h2>
        <p className="text-xs sm:text-sm font-sans text-gray-300 max-w-2xl mx-auto">
          From paddock arrival to podium victory — here is what happens during your Kartomania track session.
        </p>
      </div>

      {/* Step Grid Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <AnimatedCard className="h-full flex flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00d9ff] to-[#0066CC] flex items-center justify-center text-black font-mono font-black text-sm shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                      {item.step}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e27] text-[#00d9ff] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#00d9ff]/25">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-left">
                    <IconComp className="w-4 h-4 text-[#00d9ff]" />
                    <h3 className="text-base font-display font-bold text-white uppercase group-hover:text-[#00d9ff] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-gray-300 leading-relaxed text-left">
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
