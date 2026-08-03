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
    <section id="experience-timeline" className="py-28 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-20">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// THE RACEDAY JOURNEY</span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
          YOUR <span className="text-[#FF4500]">RACING EXPERIENCE</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 max-w-xl mx-auto">
          From paddock arrival to podium victory — here is what happens during your Kartomania track session.
        </p>
      </div>

      {/* Step Grid Layout with Animated Connecting Streaks */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <AnimatedCard className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF1E00] flex items-center justify-center text-white font-mono font-bold text-sm shadow-[0_0_20px_rgba(255,69,0,0.5)]">
                      {item.step}
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#FF4500]/20 text-[#FF4500] font-mono text-[10px] font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <IconComp className="w-5 h-5 text-[#FF4500]" />
                    <h3 className="text-lg font-display font-bold text-white uppercase group-hover:text-[#FF4500] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-gray-300 leading-relaxed">
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
