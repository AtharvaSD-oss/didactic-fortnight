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
    <section id="why-kartomania" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#080808] text-white relative z-20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Editorial Black Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#888888] uppercase tracking-widest">
              <span className="w-[3px] h-3.5 bg-[#F4A261] rounded-full inline-block" />
              <span className="text-[#F4A261] font-bold">03</span>
              <span>/ WHY KARTOMANIA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight leading-none">
              WHY <span className="text-[#888888]">KARTOMANIA?</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-widest max-w-md">
            // THE ONLY RACING TRACK OWNED, RUN & MAINTAINED BY A PROFESSIONAL RACER
          </p>
        </div>

        {/* USP Cards Grid in Minimal Dark Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#111111] border border-white/10 hover:border-[#F4A261]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-white/5 text-white border border-white/10 group-hover:bg-[#F4A261] group-hover:text-[#080808] transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-black text-[#888888] font-mono text-[9px] font-bold uppercase tracking-widest border border-white/10 group-hover:text-[#F4A261] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2 text-left">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#AAAAAA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Pill */}
        <div className="p-8 rounded-xl bg-[#111111] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wider">
              READY TO FEEL THE THRILL ON OUR 720M OUTDOOR CIRCUIT?
            </div>
            <div className="font-mono text-xs text-[#888888]">
              Open all 7 days from 2 PM onwards at Entertainland Mall, Sector 83, Manesar.
            </div>
          </div>
          <MagneticButton 
            href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" 
            variant="secondary"
            className="py-3 px-8 text-xs whitespace-nowrap bg-white text-[#080808] hover:bg-transparent hover:text-white hover:border-white border-white"
          >
            BOOK TRACK SESSION
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default WhyKartomaniaSection;
