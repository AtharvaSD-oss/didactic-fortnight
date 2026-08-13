import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Award } from 'lucide-react';
import MagneticButton from './MagneticButton';

const KARTS_DATA = [
  {
    tierNumber: '01',
    category: 'PRO SERIES',
    name: 'SODI RT10 PRO',
    badge: 'MOST POPULAR',
    badgeStyle: 'bg-[#F47C20] text-white',
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
    badgeStyle: 'bg-[#0A0A0A] text-white',
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
    badgeStyle: 'bg-[#F47C20] text-white',
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
    badgeStyle: 'bg-white text-[#0A0A0A] border border-[#E5E5E5]',
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
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#EAEAEA] bg-white text-[#111111] relative z-20"
    >
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-6 mb-8 sm:mb-10 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-[2px] h-5 bg-[#F47C20]" />
            <span className="text-[#F47C20] text-sm font-bold font-mono">07</span>
            <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ KART FLEET</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT FLEET
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
            PRECISION <span className="text-[#F47C20]">RACE FLEET</span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#666666] uppercase tracking-wider max-w-md">
          Every machine is balanced and calibrated daily by active championship motorsport engineers.
        </p>
      </div>

      {/* 2. Hero Staging Grid Showcase Banner */}
      <div className="mb-14 sm:mb-20 rounded-2xl overflow-hidden bg-[#0A0A0A] border-2 border-[#E5E5E5] hover:border-[#F47C20] relative group shadow-md transition-colors duration-500">
        <div className="relative h-72 sm:h-96 md:h-[440px] w-full overflow-hidden">
          <img
            src="/gallery/kartomania-fleet-canopy.jpg"
            alt="Kartomania Fleet Lined Up on Staging Grid"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Staging Overlay Badges */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
              PITLANE READY
            </span>
            <span className="hidden sm:inline-block px-3.5 py-1 rounded-sm bg-black/80 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs font-semibold uppercase border border-white/20">
              DAILY MOTORSPORT BALANCING
            </span>
          </div>

          {/* Bottom Banner Content */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[#F47C20] font-mono text-xs font-bold uppercase tracking-widest block">
                OFFICIAL KARTOMANIA FLEET
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight">
                BUILT FOR COMPETITION. TUNED FOR GRIP.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
                Equipped with real-time RaceFacer telemetry transponders for millisecond sector tracking.
              </p>
            </div>

            {onOpenBooking && (
              <MagneticButton
                onClick={onOpenBooking}
                className="py-3 px-6 text-xs whitespace-nowrap"
              >
                SELECT YOUR KART &rarr;
              </MagneticButton>
            )}
          </div>
        </div>
      </div>

      {/* 3. Automotive Product Model Presentation (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {KARTS_DATA.map((kart, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              {/* Top Meta Line */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-[#F47C20]">
                    {kart.tierNumber} // {kart.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-sm font-mono text-[9px] font-bold uppercase tracking-wider ${kart.badgeStyle}`}>
                    {kart.badge}
                  </span>
                </div>

                {/* Model Name & Tagline */}
                <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                  {kart.name}
                </h3>
                <p className="text-xs font-sans text-[#666666] mt-1 mb-6 leading-relaxed min-h-[36px]">
                  {kart.tagline}
                </p>

                {/* Telemetry Metrics Panel */}
                <div className="p-4 rounded-lg bg-white border border-[#EAEAEA] space-y-2.5 mb-6 font-mono text-xs shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#666666] font-medium text-[11px]">POWER OUTPUT</span>
                    <span className="text-[#0A0A0A] font-bold text-sm">{kart.hp}</span>
                  </div>

                  {/* Power Gauge Bar in Orange */}
                  <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F47C20] rounded-full transition-all duration-700"
                      style={{ width: `${kart.powerPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#F0F0F0]">
                    <span className="text-[#666666] font-medium text-[11px]">TOP SPEED</span>
                    <span className="text-[#F47C20] font-bold text-xs">{kart.speed}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#F0F0F0] pt-1">
                    <span className="text-[#666666] font-medium text-[11px]">POWERTRAIN</span>
                    <span className="text-[#0A0A0A] font-bold text-[10px] text-right truncate max-w-[130px]">
                      {kart.engine}
                    </span>
                  </div>
                </div>

                {/* Key Engineering Features */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] font-bold text-[#888888] uppercase tracking-widest block">
                    CHASSIS & SPECS
                  </span>
                  {kart.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-[#555555]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F47C20] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Driver Category */}
              <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#888888]">DRIVER:</span>
                <span className="text-[#0A0A0A] font-bold uppercase truncate max-w-[150px]">
                  {kart.recommended}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Engineering Guarantee Strip */}
      <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] text-[#F47C20] shrink-0 shadow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-0.5 text-left">
            <div className="font-display font-bold text-sm text-[#0A0A0A] uppercase">
              FIA & SODIKART CERTIFIED SAFETY ECOSYSTEM
            </div>
            <div className="font-mono text-xs text-[#666666]">
              High-impact polymer perimeter bumper wrap, remote pitlane emergency kill-switch, and DOT-certified safety gear.
            </div>
          </div>
        </div>

        <MagneticButton
          href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
          className="py-3 px-8 text-xs whitespace-nowrap"
        >
          BOOK FLEET RACE &rarr;
        </MagneticButton>
      </div>
    </section>
  );
};

export default KartsSection;
