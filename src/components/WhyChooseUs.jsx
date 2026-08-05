import React from 'react';
import { motion } from 'framer-motion';
import { Flag, ShieldCheck, Heart, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Flag,
    title: 'Professional Racing Track',
    description: '550m Polymer Asphalt Multi-level Track engineered for high speed apexes, elevation changes, and hairpin turns.',
    color: 'bg-[#FFB800]/15 text-[#FFB800]',
  },
  {
    icon: ShieldCheck,
    title: 'Latest Safety Equipment',
    description: 'F1-grade barrier protection systems, emergency remote speed governance, and sanitized certified helmets.',
    color: 'bg-[#FF5A1F]/15 text-[#FF5A1F]',
  },
  {
    icon: Heart,
    title: 'Family Friendly',
    description: 'Kadett & Junior karts for young drivers, twin seater karts, and a comfortable air-conditioned spectator lounge.',
    color: 'bg-[#0066CC]/15 text-[#0066CC]',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent session rates starting at ₹550 with bulk packages, multi-driver passes, and weekday discounts.',
    color: 'bg-emerald-500/15 text-emerald-600',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 bg-[#F8F9FB] border-t border-[#E8E8E8] relative z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">
            THE KARTOMANIA DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#111111] uppercase tracking-tight">
            WHY CHOOSE <span className="text-[#FFB800]">US</span>
          </h2>
          <p className="text-sm font-sans text-[#555555] font-normal leading-relaxed">
            We deliver Northern India's finest motorsport experience with world-class facilities, safety standards, and performance karts.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-[#FFFFFF] border border-[#E8E8E8] hover:border-[#FFB800] rounded-2xl p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`p-4 rounded-2xl w-fit ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#111111] leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-[#555555] font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
