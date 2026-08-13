import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Zap, Flag, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ number, title, description, icon: Icon }) => (
  <div className="p-4 sm:p-5 rounded-xl bg-[#141414] border border-white/10 text-left space-y-2 group hover:border-[#F47C20] transition-all duration-300 shadow-sm">
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-[#F47C20]">
        {number}
      </span>
      {Icon && <Icon className="w-4 h-4 text-[#F47C20] opacity-80 group-hover:opacity-100 transition-opacity" />}
    </div>
    <div className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight">
      {title}
    </div>
    <p className="text-[11px] font-mono text-[#888888]">
      {description}
    </p>
  </div>
);

const WhoWeAreSection = ({ onOpenBooking }) => {
  const sectionRef = useRef(null);
  const topImgRef = useRef(null);
  const botImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [topImgRef.current, botImgRef.current],
        { y: 30, opacity: 0.8 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative w-full bg-[#080808] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
              <span className="text-white text-sm font-bold font-mono">/ ABOUT KARTOMANIA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // MOTORSPORT EXCELLENCE
            </div>
          </div>
          
          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest font-semibold">
            ENTERTAINLAND MALL ARENA &bull; MANESAR
          </span>
        </div>

        {/* Wireframe Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Wireframe Feature Cards */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-tight">
              MORE THAN A RACE. <br />
              <span className="text-[#F47C20]">IT'S AN EXPERIENCE.</span>
            </h2>

            <p className="text-white text-base sm:text-lg leading-relaxed font-sans font-medium">
              Founded by veteran motorsport champion <strong className="font-bold text-[#F47C20]">Mr. Rohit Khanna</strong> (20+ years of championship racing), Kartomania is India's premier pro karting circuit owned, engineered, and maintained by active motorsport racers.
            </p>

            <p className="text-[#AAAAAA] text-xs sm:text-sm leading-relaxed font-sans">
              From adrenaline-pumping 270cc SODI karts to high-speed 500cc Twin engines, our 720-meter outdoor asphalt circuit delivers millisecond-accurate RaceFacer telemetry and unmatched cornering grip.
            </p>

            {/* 4 Wireframe Feature Cards (01 RACE, 02 COMPETE, 03 EXPERIENCE, 04 REMEMBER) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              <FeatureCard 
                number="01" 
                title="RACE" 
                description="720m Monza-inspired outdoor asphalt circuit." 
                icon={Zap}
              />
              <FeatureCard 
                number="02" 
                title="COMPETE" 
                description="Live telemetry lap timing & leaderboards." 
                icon={Trophy}
              />
              <FeatureCard 
                number="03" 
                title="EXPERIENCE" 
                description="Sodi RT10 Pro 270cc & 500cc Twin Karts." 
                icon={Flag}
              />
              <FeatureCard 
                number="04" 
                title="REMEMBER" 
                description="Complimentary bowling & group combo offers." 
                icon={ShieldCheck}
              />
            </div>

            <div className="pt-4">
              <MagneticButton onClick={onOpenBooking} className="py-3.5 px-8 text-xs font-bold">
                BOOK YOUR RACE NOW &rarr;
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Large Kart Image & Action Photo */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top Large Kart Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#F47C20] bg-[#141414] shadow-xl transition-all duration-500 group">
              <img
                ref={topImgRef}
                src="/about-action.jpg"
                alt="Kartomania #71 Championship Racing Kart"
                className="w-full h-[260px] sm:h-[320px] object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-md bg-[#080808]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs">
                <span className="font-mono font-bold text-[#F47C20] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> SODI RT10 270CC FLEET
                </span>
                <span className="font-mono text-[10px] text-gray-400">OFFICIAL RACE CAR</span>
              </div>
            </div>

            {/* Bottom Action Photo */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#F47C20] bg-[#141414] shadow-xl transition-all duration-500 group">
              <img
                ref={botImgRef}
                src="/hero-car.png"
                alt="Kartomania Race Car Action Photo"
                className="w-full h-[220px] sm:h-[260px] object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-md bg-[#080808]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs">
                <span className="font-mono font-bold text-[#F47C20] flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5" /> ACTION TRACK TELEMETRY
                </span>
                <span className="font-mono text-[10px] text-gray-400">720M ASPHALT CIRCUIT</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
