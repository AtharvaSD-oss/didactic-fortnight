import React, { useState } from 'react';
import { Trophy, Shield, Gauge, Zap, Flag, Flame, Award } from 'lucide-react';

const achievements = [
  {
    year: '2003 – Present',
    title: 'JK Tyre FMSCI National Racing',
    desc: 'Competing at the highest national tier since 2003 with numerous victories & podium finishes. Finished 1st Runners-Up in 2018 championship.',
    tag: 'NATIONAL PODIUMS',
    icon: Trophy,
  },
  {
    year: 'Porsche Certified',
    title: 'Porsche India Lead Instructor',
    desc: 'Certified lead instructor for high-speed track events at Buddh International Circuit (BIC) and official Porsche off-road driver training.',
    tag: 'PORSCHE BIC',
    icon: Shield,
  },
  {
    year: 'World Record 2016',
    title: 'TATA 50,000 KM World Record',
    desc: 'Lead racing driver for the historic 50,000 km non-stop high-speed endurance run over 17 continuous days at Ahmednagar.',
    tag: 'WORLD RECORD HOLDER',
    icon: Gauge,
  },
  {
    year: 'Mercedes-Benz',
    title: 'Mercedes Luxe Drive Lead Coach',
    desc: 'Official Lead Instructor for Mercedes-Benz Luxe Drive & national brand track performance tour across premier Indian circuits.',
    tag: 'LUXE DRIVE COACH',
    icon: Zap,
  },
  {
    year: 'Audi & Mahindra',
    title: 'Audi Q & Mahindra Adventure',
    desc: 'Specialist instructor for Audi Q-Drives in North India, Mahindra Adventure expeditions & Purple Club off-road dynamics.',
    tag: 'PRECISION DRIVING',
    icon: Flag,
  },
  {
    year: '2000 – 2011',
    title: 'National Karting & Endurance Champion',
    desc: 'Podium finisher at JK National Karting Championship (2000-2003) and lead driver of the winning team at the Amaron Karting Endurance Championship (2011).',
    tag: 'ENDURANCE CHAMPION',
    icon: Flame,
  },
];

const Timeline = () => {
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <section
      id="founder"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] text-white relative z-20 overflow-hidden"
    >
      {/* Background speed grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/15 pb-8 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
              <span className="text-white text-sm font-bold font-mono">/ HERITAGE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md">
              <Trophy className="w-3.5 h-3.5" /> // MOTORSPORT HERITAGE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight leading-none">
              MR. ROHIT <span className="text-[#F47C20]">KHANNA</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#AAAAAA] uppercase tracking-widest max-w-sm">
            THE ONLY GO-KARTING CIRCUIT IN INDIA OWNED & RUN BY A PROFESSIONAL RACER
          </p>
        </div>

        {/* 1. High-End Founder Spotlight Showcase Card */}
        <div className="rounded-2xl bg-[#141414] border-2 border-white/15 hover:border-[#F47C20] shadow-2xl overflow-hidden text-left transition-colors duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left: Authentic On-Track Formula Grid Photo */}
            <div
              onClick={() => setPhotoOpen(true)}
              className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] bg-black overflow-hidden group cursor-pointer"
            >
              <img
                src="/founder-rohit-khanna.jpg"
                alt="Mr. Rohit Khanna - National Racing Driver & Founder of Kartomania"
                className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-105 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30" />

              {/* Floating Track Credential Badges */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-widest shadow-md">
                    FORMULA RACING GRID
                  </span>
                  <span className="px-2.5 py-0.5 rounded-sm bg-black/80 backdrop-blur-md text-white font-mono text-[9px] font-bold uppercase border border-white/20">
                    2+ DECADES ON TRACK
                  </span>
                </div>
                <div className="text-white font-display font-bold text-xl uppercase">
                  MR. ROHIT KHANNA
                </div>
                <p className="text-[#CCCCCC] font-mono text-xs">
                  Active National Racing Driver & Certified F1-Grade Driving Instructor
                </p>
              </div>
            </div>

            {/* Right: Driver Bio, Philosophy & Credentials */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#F47C20] font-mono text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#F47C20]" />
                  <span>NATIONAL CHAMPIONSHIP PEDIGREE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase leading-snug">
                  "REAL RACERS RACE CLEAN — BUILT FROM DECADES ON THE NATIONAL GRID."
                </h3>

                <p className="text-[#CCCCCC] text-sm sm:text-base font-sans leading-relaxed">
                  Mr. Rohit Khanna has been a core pillar of the Indian Motorsport fraternity for over <strong className="text-white font-bold">20 years</strong>. Having competed in the JK Tyre National Racing Championship, MRF National Championship, and Rotax Max Karting Championship, he founded Kartomania to give racers of all ages an authentic, championship-grade motorsport platform in Gurugram.
                </p>

                <p className="text-[#888888] text-xs font-sans leading-relaxed">
                  Every kart chassis, tire compound, barrier safety system, and apex kerb at Kartomania is personally calibrated to professional racing standards.
                </p>
              </div>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono">
                <div className="p-4 rounded-lg bg-black border border-white/10 text-center">
                  <div className="text-xl font-display font-bold text-[#F47C20]">20+ YRS</div>
                  <div className="text-[9px] text-[#AAAAAA] uppercase font-semibold mt-1">MOTORSPORT EXP</div>
                </div>
                <div className="p-4 rounded-lg bg-black border border-white/10 text-center">
                  <div className="text-xl font-display font-bold text-[#F47C20]">50,000 KM</div>
                  <div className="text-[9px] text-[#AAAAAA] uppercase font-semibold mt-1">WORLD RECORD</div>
                </div>
                <div className="p-4 rounded-lg bg-black border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="text-xl font-display font-bold text-white">PORSCHE</div>
                  <div className="text-[9px] text-[#AAAAAA] uppercase font-semibold mt-1">LEAD INSTRUCTOR</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Key Motorsport Milestones & Career Achievements */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
              // CAREER MILESTONES & PODIUM HIGHLIGHTS
            </span>
            <span className="text-[10px] font-mono text-[#888888] uppercase">
              FMSCI & INTERNATIONAL ACCREDITATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#F47C20] rounded-xl p-6 space-y-4 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-sm bg-black text-[#F47C20] font-mono text-[9px] font-bold uppercase tracking-wider border border-white/10">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[11px] text-[#AAAAAA] font-semibold">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1 border-t border-white/5">
                    <div className="p-2 rounded-md bg-white/5 text-[#F47C20] group-hover:bg-[#F47C20] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-[#AAAAAA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {photoOpen && (
        <div
          onClick={() => setPhotoOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        >
          <div className="relative max-w-4xl w-full bg-[#141414] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPhotoOpen(false)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:text-[#F47C20] border border-white/20 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img
              src="/founder-rohit-khanna.jpg"
              alt="Mr. Rohit Khanna Formula Grid"
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-[#141414] border-t border-white/10 flex items-center justify-between text-white text-left">
              <div>
                <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold">NATIONAL RACING GRID</span>
                <h4 className="text-lg font-display font-bold text-white uppercase">Mr. Rohit Khanna</h4>
                <p className="text-xs font-mono text-[#AAAAAA]">Founder & Pro Racer, Kartomania & Leap Frog Racing</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
