import React from 'react';
import { Trophy, Shield, Zap, Gauge, Award, Flame, CheckCircle2, Sparkles } from 'lucide-react';
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
    <section id="why-kartomania" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800 text-white relative z-20">
      <div className="space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d9ff]/15 border border-[#00d9ff]/30 text-[#00d9ff] font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> MOTORSPORT EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
            WHY <span className="text-[#00d9ff]">KARTOMANIA?</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#d4af37] uppercase font-bold tracking-wider">
            // THE ONLY RACING TRACK OWNED, RUN & MAINTAINED BY A PROFESSIONAL RACER
          </p>
          <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed pt-1">
            Where authentic motorsport heritage meets grassroots racing. Experience how professional drivers tune circuits for real grip, precision cornering, and heart-pounding speed.
          </p>
        </div>

        {/* USP Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {USPs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <AnimatedCard key={idx} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e27] text-[#00d9ff] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#00d9ff]/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1 text-left">
                    <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase group-hover:text-[#00d9ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center gap-2 text-xs font-mono text-[#d4af37] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Bottom Banner Pill */}
        <div className="p-6 sm:p-7 rounded-3xl floating-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div className="space-y-1">
            <div className="font-display font-bold text-base sm:text-lg text-white uppercase">
              READY TO FEEL THE THRILL ON OUR 720M OUTDOOR CIRCUIT?
            </div>
            <div className="font-mono text-xs text-gray-400">
              Open all 7 days from 2 PM onwards at Entertainland Mall, Sector 83, Gurugram.
            </div>
          </div>
          <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall" className="py-3 px-8 text-xs font-bold whitespace-nowrap shadow-[0_0_20px_rgba(0,217,255,0.3)]">
            Book Track Session ⚡
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default WhyKartomaniaSection;
