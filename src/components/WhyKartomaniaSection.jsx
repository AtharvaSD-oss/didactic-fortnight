import React from 'react';
import { Trophy, Shield, Zap, Gauge, Award, Flame, CheckCircle2 } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
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
    <section id="why-kartomania" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-white/10 bg-[#0B0D0F] text-[#F4F1EA] relative z-20">
      <div className="space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> MOTORSPORT EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
            WHY <span className="text-[#C9A45C]">KARTOMANIA?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-mono text-[#C9A45C] uppercase font-bold tracking-wider">
            // THE ONLY RACING TRACK OWNED, RUN & MAINTAINED BY A PROFESSIONAL RACER
          </p>
          <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed pt-1">
            Where authentic motorsport heritage meets grassroots racing. Experience how professional drivers tune circuits for real grip, precision cornering, and heart-pounding speed.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {USPs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <AnimatedCard key={idx} className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#C9A45C]/15 text-[#C9A45C] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B0D0F] text-[#B8B1A5] font-mono text-[9px] font-bold uppercase tracking-wider border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#F4F1EA] uppercase group-hover:text-[#C9A45C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#B8B1A5] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#C9A45C] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Bottom Banner Pill */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#15181C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <div className="font-display font-bold text-sm sm:text-base text-[#F4F1EA] uppercase tracking-wide">
              READY TO FEEL THE THRILL ON OUR 720M OUTDOOR CIRCUIT?
            </div>
            <div className="font-mono text-xs text-[#B8B1A5]">
              Open all 7 days from 2 PM onwards at Entertainland Mall, Sector 83, Manesar.
            </div>
          </div>
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-6 text-xs whitespace-nowrap">
            Book Track Session
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default WhyKartomaniaSection;
