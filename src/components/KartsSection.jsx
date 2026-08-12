import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Award } from 'lucide-react';

const KARTS_DATA = [
  {
    tierNumber: '01',
    category: 'PRO SERIES',
    name: 'SODI RT10 PRO',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-[#EE3124] text-white',
    tagline: 'The gold standard of world-class rental karting.',
    engine: '270cc Honda GX 4-Stroke',
    hp: '13.0 HP',
    speed: '75 KM/H',
    powerPercent: 70,
    handling: 'Pro-Calibrated Steering',
    recommended: 'Intermediate & Adult Racers',
    features: [
      'Adjustable 2D pedals & sport seat',
      'Hydraulic ventilated disc braking',
      'F1-style integral floor covering',
    ],
  },
  {
    tierNumber: '02',
    category: 'CHAMPIONSHIP',
    name: 'SUPER PRO TWIN',
    badge: 'MAX POWER',
    badgeColor: 'bg-[#0B0F19] text-[#FFD700] border border-[#FFD700]/30',
    tagline: 'Raw twin-engine acceleration for apex hunters.',
    engine: 'Twin-Engine 390cc Dual Block',
    hp: '22.0 HP',
    speed: '88 KM/H',
    powerPercent: 95,
    handling: 'Direct High-G Grip',
    recommended: 'Experienced Track Drivers',
    features: [
      'Twin synchronized carburettors',
      'High-speed straight slipstream tuning',
      'Reinforced competition chassis',
    ],
  },
  {
    tierNumber: '03',
    category: 'HYPER E-SERIES',
    name: 'LAMBO E-BOOSTER',
    badge: 'INSTANT TORQUE',
    badgeColor: 'bg-[#0066CC] text-white',
    tagline: 'Silent lightning with instantaneous throttle surge.',
    engine: 'Dual Brushless High-Torque Electric',
    hp: '18.5 HP',
    speed: '85 KM/H',
    powerPercent: 88,
    handling: 'Low Center of Gravity',
    recommended: 'Tech & Speed Enthusiasts',
    features: [
      '100% torque from 0 RPM',
      'Push-to-pass electric boost mode',
      'Zero emissions & rapid deceleration',
    ],
  },
  {
    tierNumber: '04',
    category: 'CADET ACADEMY',
    name: 'SODI LR5 JUNIOR',
    badge: 'ROOKIE & YOUTH',
    badgeColor: 'bg-emerald-600 text-white',
    tagline: 'Precision safety engineered for the next generation.',
    engine: '160cc Honda GX Overhead Valve',
    hp: '6.5 HP',
    speed: '45 KM/H',
    powerPercent: 45,
    handling: 'Adaptive Progressive Steering',
    recommended: 'Ages 7–12 & Beginners',
    features: [
      'Full surround high-impact shock ring',
      'Adjustable seat & steering column',
      'Remote trackside speed governor',
    ],
  },
];

const KartsSection = ({ onOpenBooking }) => {
  return (
    <section
      id="karts"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/80 bg-white text-gray-900 relative z-20"
    >
      {/* 1. Header Section */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE3124]/10 border border-[#EE3124]/30 text-[#EE3124] font-mono text-xs font-bold uppercase tracking-widest">
          <Award className="w-3.5 h-3.5" /> MOTORSPORT FLEET SPECIFICATIONS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0B0F19] uppercase tracking-tight">
          PRECISION-ENGINEERED <span className="text-[#EE3124]">RACE FLEET</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base font-sans text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Every machine is balanced and calibrated daily by active championship motorsport engineers to deliver authentic track grip, razor-sharp steering, and blistering lap times.
        </p>
      </div>

      {/* 2. Hero Staging Grid Showcase Banner */}
      <div className="mb-10 sm:mb-14 rounded-3xl overflow-hidden bg-[#0B0F19] border border-gray-200 relative group shadow-xl">
        <div className="relative h-64 sm:h-80 md:h-[380px] w-full overflow-hidden">
          <img
            src="/gallery/kartomania-fleet-canopy.jpg"
            alt="Kartomania Fleet Lined Up on Staging Grid"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Staging Overlay Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EE3124] text-white font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
              PITLANE READY
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFD700] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
              DAILY MOTORSPORT BALANCING
            </span>
          </div>

          {/* Bottom Banner Content */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
            <div className="space-y-1 sm:space-y-1.5 max-w-xl text-left">
              <span className="text-[#FFD700] font-mono text-xs font-bold uppercase tracking-widest block">
                OFFICIAL KARTOMANIA FLEET
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                BUILT FOR COMPETITION. TUNED FOR GRIP.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-200 leading-relaxed drop-shadow-md">
                Equipped with real-time RaceFacer telemetry transponders for millisecond sector tracking.
              </p>
            </div>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-white text-[#0B0F19] hover:bg-[#EE3124] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
              >
                SELECT YOUR KART &rarr;
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Refined 4-Tier Specifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {KARTS_DATA.map((kart, idx) => {
          const isHighlighted = idx === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`
                relative rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-300
                hover:-translate-y-1.5 shadow-sm hover:shadow-xl group
                ${isHighlighted 
                  ? 'border-[#EE3124]/60 shadow-md ring-1 ring-[#EE3124]/20' 
                  : 'border-gray-200/90 hover:border-[#EE3124]/40'
                }
              `}
            >
              {/* Top Meta Line */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-black text-gray-400 group-hover:text-[#EE3124] transition-colors">
                    {kart.tierNumber} // {kart.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider ${kart.badgeColor}`}>
                    {kart.badge}
                  </span>
                </div>

                {/* Model Name & Tagline */}
                <h3 className="text-xl font-display font-black text-[#0B0F19] uppercase tracking-tight group-hover:text-[#EE3124] transition-colors">
                  {kart.name}
                </h3>
                <p className="text-xs font-sans text-gray-600 mt-1 mb-5 leading-relaxed min-h-[36px]">
                  {kart.tagline}
                </p>

                {/* Telemetry Metrics Panel */}
                <div className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/80 space-y-2.5 mb-5 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-semibold text-[11px]">POWER OUTPUT</span>
                    <span className="text-[#EE3124] font-black text-sm">{kart.hp}</span>
                  </div>

                  {/* Power Gauge Bar */}
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FFD700] to-[#EE3124] rounded-full transition-all duration-700"
                      style={{ width: `${kart.powerPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-gray-200/60">
                    <span className="text-gray-500 font-semibold text-[11px]">TOP SPEED</span>
                    <span className="text-[#0B0F19] font-black text-xs">{kart.speed}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200/60 pt-1">
                    <span className="text-gray-500 font-semibold text-[11px]">POWERTRAIN</span>
                    <span className="text-gray-800 font-bold text-[10px] text-right truncate max-w-[140px]">
                      {kart.engine}
                    </span>
                  </div>
                </div>

                {/* Key Engineering Features */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    CHASSIS & SPECS
                  </span>
                  {kart.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EE3124] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Driver Category */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500 font-medium">DRIVER:</span>
                <span className="text-gray-900 font-bold uppercase truncate max-w-[160px]">
                  {kart.recommended}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Engineering Guarantee Strip */}
      <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#EE3124]/10 text-[#EE3124] shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="font-display font-bold text-xs sm:text-sm text-gray-950 uppercase">
              FIA & SODIKART CERTIFIED SAFETY ECOSYSTEM
            </div>
            <div className="font-mono text-[11px] text-gray-600">
              High-impact polymer perimeter bumper wrap, remote pitlane emergency kill-switch, and DOT-certified safety gear.
            </div>
          </div>
        </div>

        <a
          href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#0B0F19] text-white hover:bg-[#EE3124] font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
        >
          BOOK FLEET RACE &rarr;
        </a>
      </div>
    </section>
  );
};

export default KartsSection;
