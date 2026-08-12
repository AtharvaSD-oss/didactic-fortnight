import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Award } from 'lucide-react';

const KARTS_DATA = [
  {
    tierNumber: '01',
    category: 'PRO SERIES',
    name: 'SODI RT10 PRO',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-[#C9A45C] text-[#0B0D0F]',
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
    badgeColor: 'bg-[#0B0D0F] text-[#C9A45C] border border-[#C9A45C]/30',
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA] relative z-20"
    >
      {/* 1. Header Section */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
          <Award className="w-3.5 h-3.5" /> MOTORSPORT FLEET SPECIFICATIONS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
          PRECISION-ENGINEERED <span className="text-[#C9A45C]">RACE FLEET</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base font-sans text-[#B8B1A5] leading-relaxed max-w-2xl mx-auto">
          Every machine is balanced and calibrated daily by active championship motorsport engineers to deliver authentic track grip, razor-sharp steering, and blistering lap times.
        </p>
      </div>

      {/* 2. Hero Staging Grid Showcase Banner */}
      <div className="mb-10 sm:mb-14 rounded-3xl overflow-hidden bg-[#15181C] border border-white/10 relative group shadow-2xl">
        <div className="relative h-64 sm:h-80 md:h-[380px] w-full overflow-hidden">
          <img
            src="/gallery/kartomania-fleet-canopy.jpg"
            alt="Kartomania Fleet Lined Up on Staging Grid"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          {/* Staging Overlay Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#C9A45C] text-[#0B0D0F] font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
              PITLANE READY
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#C9A45C] font-mono text-[10px] sm:text-xs font-bold uppercase border border-white/10">
              DAILY MOTORSPORT BALANCING
            </span>
          </div>

          {/* Bottom Banner Content */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
            <div className="space-y-1 sm:space-y-1.5 max-w-xl text-left">
              <span className="text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest block">
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
                className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-[#C9A45C] text-[#0B0D0F] hover:bg-[#DFBA70] font-mono text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
              >
                SELECT YOUR KART &rarr;
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Refined 4-Tier Specifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
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
                relative rounded-2xl bg-[#15181C] border p-6 flex flex-col justify-between transition-all duration-300
                hover:-translate-y-1.5 shadow-md hover:shadow-2xl group
                ${isHighlighted 
                  ? 'border-[#C9A45C]/40 shadow-lg ring-1 ring-[#C9A45C]/20' 
                  : 'border-white/10 hover:border-[#C9A45C]/50'
                }
              `}
            >
              {/* Top Meta Line */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-black text-[#837D73] group-hover:text-[#C9A45C] transition-colors">
                    {kart.tierNumber} // {kart.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider ${kart.badgeColor}`}>
                    {kart.badge}
                  </span>
                </div>

                {/* Model Name & Tagline */}
                <h3 className="text-xl font-display font-black text-[#F4F1EA] uppercase tracking-tight group-hover:text-[#C9A45C] transition-colors">
                  {kart.name}
                </h3>
                <p className="text-xs font-sans text-[#B8B1A5] mt-1 mb-5 leading-relaxed min-h-[36px]">
                  {kart.tagline}
                </p>

                {/* Telemetry Metrics Panel */}
                <div className="p-4 rounded-xl bg-[#0B0D0F] border border-white/10 space-y-2.5 mb-5 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#837D73] font-semibold text-[11px]">POWER OUTPUT</span>
                    <span className="text-[#C9A45C] font-black text-sm">{kart.hp}</span>
                  </div>

                  {/* Power Gauge Bar */}
                  <div className="w-full h-1.5 bg-[#1F242D] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#C9A45C] to-[#EE3124] rounded-full transition-all duration-700"
                      style={{ width: `${kart.powerPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-white/10">
                    <span className="text-[#837D73] font-semibold text-[11px]">TOP SPEED</span>
                    <span className="text-[#F4F1EA] font-black text-xs">{kart.speed}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-1">
                    <span className="text-[#837D73] font-semibold text-[11px]">POWERTRAIN</span>
                    <span className="text-[#B8B1A5] font-bold text-[10px] text-right truncate max-w-[140px]">
                      {kart.engine}
                    </span>
                  </div>
                </div>

                {/* Key Engineering Features */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] font-bold text-[#837D73] uppercase tracking-widest block">
                    CHASSIS & SPECS
                  </span>
                  {kart.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-[#B8B1A5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Driver Category */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#837D73] font-medium">DRIVER:</span>
                <span className="text-[#F4F1EA] font-bold uppercase truncate max-w-[160px]">
                  {kart.recommended}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Engineering Guarantee Strip */}
      <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#15181C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-lg">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#C9A45C]/15 text-[#C9A45C] shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="font-display font-bold text-xs sm:text-sm text-[#F4F1EA] uppercase">
              FIA & SODIKART CERTIFIED SAFETY ECOSYSTEM
            </div>
            <div className="font-mono text-[11px] text-[#B8B1A5]">
              High-impact polymer perimeter bumper wrap, remote pitlane emergency kill-switch, and DOT-certified safety gear.
            </div>
          </div>
        </div>

        <a
          href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#C9A45C] text-[#0B0D0F] hover:bg-[#DFBA70] font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md font-bold"
        >
          BOOK FLEET RACE &rarr;
        </a>
      </div>
    </section>
  );
};

export default KartsSection;
