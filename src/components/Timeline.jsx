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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border border-white/10 relative z-20 bg-[#0B0D0F] text-[#F4F1EA] rounded-3xl my-8 sm:my-14 shadow-2xl overflow-hidden"
    >
      {/* Background Track Atmosphere & Subtle Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0F] via-[#111418] to-[#0B0D0F] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EE3124]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> MOTORSPORT LEGEND & FOUNDER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
            KNOW OUR FOUNDER — <span className="text-[#C9A45C]">MR. ROHIT KHANNA</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#B8B1A5] max-w-2xl mx-auto">
            The only go-karting circuit in India owned, designed, and maintained by an active championship racing driver.
          </p>
        </div>

        {/* 1. High-End Founder Spotlight Showcase Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#15181C] border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left: Authentic On-Track Formula Grid Photo */}
            <div
              onClick={() => setPhotoOpen(true)}
              className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] bg-black overflow-hidden group cursor-pointer"
            >
              <img
                src="/founder-rohit-khanna.jpg"
                alt="Mr. Rohit Khanna - National Racing Driver & Founder of Kartomania"
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-105 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Cinematic Vignette & Edge Blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15181C] via-black/25 to-transparent lg:hidden" />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#15181C]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

              {/* Floating Track Credential Badges */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C9A45C] text-[#0B0D0F] font-mono text-[9px] font-bold uppercase tracking-wider shadow-md">
                    FORMULA RACING GRID
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[#C9A45C] font-mono text-[9px] font-bold uppercase border border-[#C9A45C]/30">
                    2+ DECADES ON TRACK
                  </span>
                </div>
                <div className="text-white font-display font-bold text-lg sm:text-xl uppercase drop-shadow-md">
                  MR. ROHIT KHANNA
                </div>
                <p className="text-gray-300 font-mono text-xs drop-shadow-sm">
                  Active National Racing Driver & Certified F1-Grade Driving Instructor
                </p>
              </div>
            </div>

            {/* Right: Driver Bio, Philosophy & Credentials */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#C9A45C] font-mono text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#C9A45C]" />
                  <span>NATIONAL CHAMPIONSHIP PEDIGREE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F4F1EA] uppercase leading-snug">
                  "REAL RACERS RACE CLEAN — BUILT FROM DECADES ON THE NATIONAL GRID."
                </h3>

                <p className="text-[#B8B1A5] text-xs sm:text-sm font-sans leading-relaxed">
                  Mr. Rohit Khanna has been a core pillar of the Indian Motorsport fraternity for over <strong>20 years</strong>. Having competed in the JK Tyre National Racing Championship, MRF National Championship, and Rotax Max Karting Championship, he founded Kartomania to give racers of all ages an authentic, championship-grade motorsport platform in Gurugram.
                </p>

                <p className="text-[#837D73] text-xs font-sans leading-relaxed">
                  Every kart chassis, tire compound, barrier safety system, and apex kerb at Kartomania is personally calibrated to professional racing standards.
                </p>
              </div>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono">
                <div className="p-3.5 rounded-xl bg-[#0B0D0F] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-display font-bold text-[#C9A45C]">20+ YRS</div>
                  <div className="text-[9px] text-[#B8B1A5] uppercase font-semibold mt-0.5">MOTORSPORT EXP</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B0D0F] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-display font-bold text-[#F4F1EA]">50,000 KM</div>
                  <div className="text-[9px] text-[#B8B1A5] uppercase font-semibold mt-0.5">WORLD RECORD</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B0D0F] border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-display font-bold text-[#0066CC]">PORSCHE</div>
                  <div className="text-[9px] text-[#B8B1A5] uppercase font-semibold mt-0.5">LEAD INSTRUCTOR</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Key Motorsport Milestones & Career Achievements */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
              // CAREER MILESTONES & PODIUM HIGHLIGHTS
            </span>
            <span className="text-[10px] font-mono text-[#837D73] uppercase">
              FMSCI & INTERNATIONAL ACCREDITATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {achievements.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#15181C] hover:bg-[#1C2128] border border-white/10 hover:border-[#C9A45C]/50 rounded-2xl p-5 space-y-3 transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B0D0F] text-[#C9A45C] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#C9A45C]/30">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[11px] text-[#837D73] font-semibold">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1">
                    <div className="p-2 rounded-lg bg-[#C9A45C]/15 text-[#C9A45C] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-display font-bold text-[#F4F1EA] uppercase group-hover:text-[#C9A45C] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-[#B8B1A5] leading-relaxed">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        >
          <div className="relative max-w-4xl w-full bg-[#0B0D0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPhotoOpen(false)}
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#C9A45C] border border-white/20 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img
              src="/founder-rohit-khanna.jpg"
              alt="Mr. Rohit Khanna Formula Grid"
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-5 bg-[#15181C] border-t border-white/10 flex items-center justify-between text-[#F4F1EA] text-left">
              <div>
                <span className="text-[10px] font-mono text-[#C9A45C] uppercase font-bold">NATIONAL RACING GRID</span>
                <h4 className="text-lg font-display font-bold text-white uppercase">Mr. Rohit Khanna</h4>
                <p className="text-xs font-mono text-[#B8B1A5]">Founder & Pro Racer, Kartomania & Leap Frog Racing</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
