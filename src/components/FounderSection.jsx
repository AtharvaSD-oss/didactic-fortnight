import React, { useState } from 'react';
import { Trophy, Shield, Gauge, Zap, Flag, Flame, Award, ChevronRight } from 'lucide-react';

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

export const FounderSection = () => {
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <section
      id="founder"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] text-white relative z-20 overflow-hidden"
    >
      {/* Background speed grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/15 pb-8 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">06</span>
              <span className="text-white text-sm font-bold font-mono">/ FOUNDER HERITAGE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md">
              <Award className="w-3.5 h-3.5 text-white" /> // MOTORSPORT HERITAGE & FOUNDER
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-none">
              MR. <span className="text-[#F47C20]">ROHIT KHANNA</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-widest max-w-md">
            The only go-karting circuit in India owned & operated by a professional championship driver.
          </p>
        </div>

        {/* Founder Showcase Grid: Image + Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative group">
            <div
              onClick={() => setPhotoOpen(true)}
              className="relative rounded-2xl overflow-hidden cursor-pointer border-2 border-white/20 hover:border-[#F47C20] transition-all duration-300 shadow-2xl bg-black"
            >
              <img
                src="/founder-rohit-khanna.jpg"
                alt="Mr. Rohit Khanna - Founder & National Racing Driver"
                className="w-full h-auto max-h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold tracking-widest block">
                    FORMULA RACING GRID
                  </span>
                  <h3 className="text-xl font-display font-bold text-white uppercase">
                    2+ DECADES ON TRACK
                  </h3>
                </div>
                <span className="p-2 rounded-full bg-[#F47C20] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Achievements */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-[#FFC700] font-mono text-xs font-bold uppercase tracking-wider">
              ★ ACTIVE NATIONAL RACING DRIVER & CERTIFIED INSTRUCTOR
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white tracking-tight leading-tight">
              "REAL RACERS RACE CLEAN &mdash; <span className="text-[#F47C20]">BUILT FROM DECADES</span> ON THE NATIONAL GRID."
            </h3>

            <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
              Mr. Rohit Khanna has been a core pillar of the Indian Motorsport fraternity for over 20 years. Having competed in the JK Tyre National Racing Championship, MRF National Championship, and Rotax Max Karting Championship, he founded Kartomania to give racers of all ages an authentic, championship-grade motorsport platform in Gurugram.
            </p>

            <p className="text-xs sm:text-sm font-sans text-gray-300 leading-relaxed">
              Every kart chassis, tire compound, barrier safety system, and apex kerb at Kartomania is personally calibrated by Rohit to professional racing standards.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 font-mono">
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="text-xl font-display font-bold text-[#F47C20]">20+ YRS</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">MOTORSPORT EXP</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="text-xl font-display font-bold text-[#FFC700]">50,000 KM</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">WORLD RECORD</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="text-xl font-display font-bold text-white">PORSCHE</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">LEAD INSTRUCTOR</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <div className="text-xl font-display font-bold text-[#F47C20]">FMSCI</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">NATIONAL PILOT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="space-y-4 pt-6 text-left">
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
              // CAREER MILESTONES & PODIUM HIGHLIGHTS
            </span>
            <span className="text-[10px] font-mono text-gray-400 uppercase">
              FMSCI & INTERNATIONAL ACCREDITATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/15 hover:border-[#F47C20] transition-all duration-300 space-y-3 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-[#FFC700] font-bold">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1">
                    <IconComponent className="w-4 h-4 text-[#F47C20] shrink-0" />
                    <h4 className="text-base font-display font-bold text-white uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs font-sans text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox Modal for Founder Photo */}
        {photoOpen && (
          <div
            onClick={() => setPhotoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="relative max-w-2xl w-full bg-black rounded-2xl overflow-hidden border-2 border-[#F47C20] shadow-2xl">
              <button
                onClick={() => setPhotoOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/75 text-white hover:text-[#F47C20]"
              >
                ✕
              </button>
              <img
                src="/founder-rohit-khanna.jpg"
                alt="Mr. Rohit Khanna Full Portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FounderSection;
