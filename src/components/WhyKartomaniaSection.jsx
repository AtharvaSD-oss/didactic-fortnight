import React from 'react';
import { Trophy, Shield, Zap, Gauge, Award, Flame, CheckCircle2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const USPs = [
  {
    icon: Trophy,
    title: "OWNED & RUN BY PRO RACER",
    badge: "MOTORSPORT DNA",
    desc: "The ONLY racing track in Northern India owned, operated, and maintained by active national racing champion Rohit Khanna (20+ yrs experience).",
    highlight: "Race-Proven Calibration"
  },
  {
    icon: Flame,
    title: "720M OUTDOOR GP TRACK",
    badge: "FULL ASPHALT CIRCUIT",
    desc: "Authentic 720-meter high-speed outdoor circuit engineered with 14 tactical corners, banked hairpins, and wide overtaking straights.",
    highlight: "Real Track Grip & Flow"
  },
  {
    icon: Zap,
    title: "4 KART FLEET CATEGORIES",
    badge: "PRECISION FLEET",
    desc: "From 270cc Sodi RT10 Pro karts to Super Pro Twin-Engine, Lambo E-Booster electrics, and Cadet Academy karts for young drivers.",
    highlight: "Tuned for Peak Performance"
  },
  {
    icon: Gauge,
    title: "F1-GRADE TELEMETRY",
    badge: "LIVE TIMING",
    desc: "Millisecond-precise transponder sensors with live sector telemetry, top-speed radar traps, and official lap time printouts.",
    highlight: "Pro-Level Data Analysis"
  },
  {
    icon: Shield,
    title: "UNCOMPROMISING SAFETY",
    badge: "FIA STANDARD",
    desc: "Impact-absorbing polymer safety barriers, full-face DOT certified helmets, sanitary balaclavas, and track-certified marshals.",
    highlight: "Safe & Controlled Racing"
  },
  {
    icon: Award,
    title: "LEAP FROG RACING HERITAGE",
    badge: "NATIONAL ACADEMY",
    desc: "Direct lineage to the North's premier professional motorsport team competing in JK Tyre National & Rotax Max Championships.",
    highlight: "Pathway to Pro Racing"
  }
];

const WhyKartomaniaSection = () => {
  return (
    <section id="why-kartomania" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white text-[#0A0A0A] relative z-20 overflow-hidden">
      {/* Subtle background grid — same as other white sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E5E5E5] pb-8 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ EXCELLENCE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT EXCELLENCE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              WHY <span className="text-[#F47C20]">KARTOMANIA?</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#666666] uppercase tracking-widest max-w-md font-semibold">
            THE ONLY RACING TRACK IN NORTHERN INDIA OWNED & MAINTAINED BY A PROFESSIONAL RACER
          </p>
        </div>

        {/* Cards Grid — white background with orange accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white text-[#0A0A0A] border border-[#E5E5E5] hover:border-[#F47C20] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-[#FFF0E5] text-[#F47C20] border border-[#F47C20]/20 group-hover:bg-[#F47C20] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold uppercase tracking-widest">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F0F0] flex items-center gap-2 text-xs font-mono text-[#0A0A0A] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#F47C20]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-xl bg-[#0A0A0A] border border-black/50 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div className="space-y-1">
            <div className="font-display font-bold text-base sm:text-xl text-white uppercase tracking-tight">
              READY TO FEEL THE THRILL ON OUR 720M OUTDOOR CIRCUIT?
            </div>
            <div className="font-mono text-xs text-[#B8B8B8]">
              Open all 7 days from 2 PM onwards at Entertainland Mall, Sector 83, Manesar, Gurgaon.
            </div>
          </div>
          <MagneticButton 
            href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" 
            variant="orange"
            className="py-3.5 px-8 text-xs whitespace-nowrap"
          >
            BOOK TRACK SESSION &rarr;
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default WhyKartomaniaSection;
