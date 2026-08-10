import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, Shield, Zap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { fadeUp } from '../animations/motionVariants';

const achievements = [
  {
    year: '2000 – 2003',
    title: 'JK National Karting Championship',
    desc: 'Multiple wins and podium finishes in national karting categories.',
    icon: Flag,
    tag: 'NATIONAL KARTING',
  },
  {
    year: '2003 – PRESENT',
    title: 'JK National Racing Championship',
    desc: 'Finished Runners Up in 2018; multiple race wins and podium finishes.',
    icon: Trophy,
    tag: 'NATIONAL RACING',
  },
  {
    year: '2011',
    title: 'Amaron Karting Endurance Championship',
    desc: 'Lead driver of the winning endurance championship team.',
    icon: Zap,
    tag: 'ENDURANCE WINNER',
  },
  {
    year: '2016',
    title: 'TATA Motors World Record Run',
    desc: 'Lead driver for 50,000 kms non-stop run over 17 days at Ahmednagar for launch of Tiago, Zest & Bolt.',
    icon: Shield,
    tag: 'WORLD RECORD',
  },
  {
    year: 'INSTRUCTOR',
    title: 'Certified Porsche India Lead Instructor',
    desc: 'Lead & follow events at Buddh International Circuit (BIC) & Porsche off-road drives.',
    icon: Trophy,
    tag: 'PORSCHE INDIA',
  },
  {
    year: 'INSTRUCTOR',
    title: 'Mercedes-Benz & Audi Lead Instructor',
    desc: 'Instructor with Mercedes Luxe Drive, Brand Tour, Audi Q Drives North India, and Mahindra Adventure.',
    icon: Flag,
    tag: 'LUXURY BRAND DRIVES',
  },
];

const Timeline = () => {
  return (
    <section id="founder" className="py-28 px-4 max-w-7xl mx-auto border-t border-gray-200/80 relative z-20 bg-white text-gray-900">
      <div className="text-center space-y-3 mb-16">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest font-bold">// MOTORSPORT HERITAGE</span>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
          KNOW OUR <span className="text-[#EE3124]">FOUNDER</span>
        </h2>
        <p className="text-sm font-mono text-gray-600 max-w-2xl mx-auto">
          Mr. Rohit Khanna — 2+ Decades Indian Motorsport Veteran & Certified Porsche/Mercedes Lead Track Instructor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div key={idx} variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <AnimatedCard className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#EE3124]/10 text-[#EE3124] border border-[#EE3124]/20">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#EE3124]/10 text-[#EE3124] font-mono text-[10px] font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">{item.year}</span>
                    <h3 className="text-lg font-display font-bold text-gray-950 uppercase group-hover:text-[#EE3124] transition-colors">
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

export default Timeline;
