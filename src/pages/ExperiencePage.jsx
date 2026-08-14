import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppButton from '../components/WhatsAppButton';
import MagneticButton from '../components/MagneticButton';
import { Trophy, ShieldCheck, Gauge, Users, Flag } from 'lucide-react';

export const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  const PRINCIPLES = [
    {
      number: "01",
      title: "SAFETY FIRST",
      icon: ShieldCheck,
      desc: "FIA-grade multi-layer polymer barriers, DOT-certified safety helmets, sanitary balaclavas, and trackside marshals on every sector."
    },
    {
      number: "02",
      title: "PURE RACING",
      icon: Flag,
      desc: "~600m high-speed outdoor asphalt layout with 11 technical apexes, banked hairpins, and wide overtaking straights."
    },
    {
      number: "03",
      title: "PERFORMANCE",
      icon: Gauge,
      desc: "Engineered 270cc Sodi RT10 Pro & Twin 500cc karts with RaceFacer millisecond telemetry tracking."
    },
    {
      number: "04",
      title: "COMMUNITY",
      icon: Users,
      desc: "A thriving motorsport hub uniting beginner drivers, corporate racing leagues, and national championship academy pilots."
    }
  ];

  const HISTORICAL_JOURNEY = [
    {
      year: "2004",
      title: "NATIONAL GRID DEBUT",
      desc: "Mr. Rohit Khanna begins competing in JK Tyre National Racing and Rotax Max Championship series."
    },
    {
      year: "2014",
      title: "LEAP FROG RACING ACADEMY",
      desc: "Establishment of Northern India's premier karting academy training national championship drivers."
    },
    {
      year: "2021",
      title: "KARTOMANIA GRAND OPENING",
      desc: "Inauguration of the ~600m outdoor Grand Prix asphalt circuit at Entertainland Mall, Sector 83, Manesar."
    },
    {
      year: "2024+",
      title: "50,000+ LAPS & NATIONAL CHAMPIONS",
      desc: "Over 50,000+ completed race laps, 50+ national trophies, and continuous telemetry upgrades."
    }
  ];

  const KARTOMANIA_STANDARDS = [
    {
      title: "TRACK",
      badge: "600M OUTDOOR",
      desc: "~600-meter outdoor polymer asphalt Grand Prix circuit with 11 tactical apexes."
    },
    {
      title: "KARTS",
      badge: "PRO FLEET",
      desc: "Calibrated 270cc Sodi RT10 Pro, Twin 500cc, & 160cc Cadet junior karts."
    },
    {
      title: "SAFETY",
      badge: "FIA STANDARD",
      desc: "Impact-absorbing polymer barrier protection & DOT-certified safety helmets."
    },
    {
      title: "TIMING",
      badge: "RACEFACER LIVE",
      desc: "Millisecond RaceFacer telemetry transponders & instant leaderboard app."
    },
    {
      title: "RACING",
      badge: "MOTORSPORT DNA",
      desc: "Authentic race lines tuned by national champion Rohit Khanna for clean passing."
    },
    {
      title: "GROUP EXPERIENCES",
      badge: "EVENTS & LEAGUES",
      desc: "Corporate racing leagues, private circuit rentals, and birthday Grand Prix."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F47C20] selection:text-white relative overflow-x-hidden text-left">
      <ScrollProgress />
      <Cursor />

      {/* Navigation Header */}
      <Navbar
        onNavigate={() => {}}
        onOpenSearch={() => {}}
        onOpenBooking={handleOpenBooking}
      />

      <main className="relative z-10 pt-[85px] sm:pt-[100px] lg:pt-[125px]">
        {/* ============================================================
            01 — HERO
        ============================================================ */}
        <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-4 sm:space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-[#F47C20]" /> // THE KARTOMANIA EXPERIENCE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              MORE THAN <br />
              <span className="text-[#F47C20]">A RACE.</span>
            </h1>

            <p className="text-base sm:text-xl font-sans text-[#555555] font-medium leading-relaxed">
              Discover what makes the Kartomania experience different.
            </p>

            <div className="pt-2">
              <MagneticButton onClick={handleOpenBooking} className="py-3.5 px-8 text-xs font-bold">
                BOOK YOUR RACE &rarr;
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — WHY KARTOMANIA?
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ WHY KARTOMANIA?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-tight">
                OWNED & OPERATED BY A <br />
                <span className="text-[#F47C20]">NATIONAL RACING CHAMPION</span>
              </h2>

              <p className="text-[#333333] text-sm sm:text-base font-sans leading-relaxed">
                Kartomania is Northern India’s premier ~600-meter outdoor asphalt go-karting circuit located at Entertainland Mall, Sector 83, Manesar, Gurugram.
              </p>

              <p className="text-[#666666] text-xs sm:text-sm font-sans leading-relaxed">
                Founded and directed by veteran racer <strong className="text-[#0A0A0A]">Mr. Rohit Khanna</strong> (20+ years of active national racing competition in JK Tyre and Rotax Max Championships), Kartomania is the only track calibrated personally to professional motorsport standards.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] space-y-4 shadow-sm text-left">
                <div className="inline-block px-3 py-1 rounded-sm bg-[#F47C20] text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  AUTHENTIC MOTORSPORT HERITAGE
                </div>
                <div className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A] uppercase">
                  "REAL RACERS RACE CLEAN — BUILT FROM DECADES ON THE NATIONAL GRID."
                </div>
                <p className="text-xs font-mono text-[#666666]">
                  Mr. Rohit Khanna &bull; Founder of Kartomania & Lead Motorsport Instructor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — WHAT DRIVES US
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ WHAT DRIVES US</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                OUR 4 CORE <span className="text-[#F47C20]">PRINCIPLES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRINCIPLES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-4 group shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F47C20]">{item.number}</span>
                      <IconComp className="w-5 h-5 text-[#F47C20] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase">{item.title}</h3>
                    <p className="text-xs font-sans text-[#555555] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — KARTOMANIA JOURNEY
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ KARTOMANIA JOURNEY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                THE HISTORICAL <span className="text-[#F47C20]">MILESTONES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HISTORICAL_JOURNEY.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                  <span className="text-2xl font-display font-bold text-[#F47C20] block">{item.year}</span>
                  <h3 className="text-base font-display font-bold text-[#0A0A0A] uppercase">{item.title}</h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — THE KARTOMANIA STANDARD
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">05</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ THE KARTOMANIA STANDARD</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                CHAMPIONSHIP <span className="text-[#F47C20]">BENCHMARKS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KARTOMANIA_STANDARDS.map((std, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                    {std.badge}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#0A0A0A] uppercase">{std.title}</h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — FINAL CTA
        ============================================================ */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              READY TO GET ON <span className="text-[#F47C20]">THE GRID?</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#555555]">
              Reserve your race slot today and experience real motorsport velocity.
            </p>
            <div className="pt-2 flex justify-center">
              <MagneticButton onClick={handleOpenBooking} className="py-3.5 px-8 text-xs font-bold">
                BOOK YOUR RACE &rarr;
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExperiencePage;
