import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppButton from '../components/WhatsAppButton';
import MagneticButton from '../components/MagneticButton';
import TrackCircuitVisual from '../components/TrackCircuitVisual';
import { MapPin } from 'lucide-react';

export const TrackPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  const TRACK_SECTIONS = [
    {
      sector: "SECTOR 01",
      name: "PIT STRAIGHT & NORTH ENTRY",
      turns: "T1 – T2",
      speed: "70 KM/H",
      desc: "Full-throttle launch past the Start/Finish timing gantry into Turn 1 and the sweeping right Turn 2 arc."
    },
    {
      sector: "SECTOR 02",
      name: "NORTH STRAIGHT & LOOP HAIRPIN",
      turns: "T11",
      speed: "35 KM/H",
      desc: "Longest vertical acceleration straight leading into the 180° Turn 11 North Loop Hairpin with dedicated run-off area."
    },
    {
      sector: "SECTOR 03",
      name: "TECHNICAL MID-CIRCUIT CHICANE",
      turns: "T10 – T7",
      speed: "50 KM/H",
      desc: "Rapid weight transfer through the downhill S-curves connecting Turns 10, 8, and 7."
    },
    {
      sector: "SECTOR 04",
      name: "WEST HAIRPIN & INFIELD CHICANE",
      turns: "T6 – T3/T4",
      speed: "42 KM/H",
      desc: "Heavy late-braking into Turn 6 West Hairpin and technical double-apex infield chicane launching onto the main straight."
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
              <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // ~600M GRAND PRIX CIRCUIT &bull; 11 TURNS
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight leading-none">
              KNOW YOUR <br />
              <span className="text-[#F47C20]">TRACK.</span>
            </h1>

            <p className="text-base sm:text-xl font-sans text-[#555555] font-medium leading-relaxed">
              Every corner. Every straight. Every lap.
            </p>
          </div>
        </section>

        {/* ============================================================
            02 — OFFICIAL TRACK MAP SHOWCASE
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAEAEA] pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                  <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ OFFICIAL TRACK MAP</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#0A0A0A] uppercase">
                  CIRCUIT BLUEPRINT & LAYOUT
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#666666] max-w-md text-left sm:text-right">
                11 Apexes &bull; Clockwise Flow &bull; Real-time Telemetry Calibrated
              </p>
            </div>

            {/* Official Track Map Component */}
            <div className="max-w-4xl mx-auto">
              <TrackCircuitVisual />
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — TRACK DATA
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
              <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ VERIFIED TRACK DATA</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2 shadow-sm">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">01 // LENGTH</span>
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">~ 600m</div>
                <p className="text-xs text-[#666666] font-sans">Outdoor asphalt Grand Prix circuit</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2 shadow-sm">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">02 // TOTAL TURNS</span>
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">11</div>
                <p className="text-xs text-[#666666] font-sans">Apexes, chicanes & hairpins</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2 shadow-sm">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">03 // DIRECTION</span>
                <div className="text-xl sm:text-3xl font-display font-bold text-[#0A0A0A]">CLOCKWISE</div>
                <p className="text-xs text-[#666666] font-sans">Official circuit flow direction</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-2 shadow-sm">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">04 // TRACK TYPE</span>
                <div className="text-xl sm:text-3xl font-display font-bold text-[#0A0A0A]">OUTDOOR</div>
                <p className="text-xs text-[#666666] font-sans">Polymer asphalt surface</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — TRACK SECTIONS
        ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto border-b border-[#EAEAEA]">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                <span className="text-[#0A0A0A] text-sm font-bold font-mono">/ TRACK SECTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
                4 CIRCUIT <span className="text-[#F47C20]">SECTORS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRACK_SECTIONS.map((sec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5] hover:border-[#F47C20] transition-colors space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F47C20]">{sec.sector}</span>
                    <span className="px-2 py-0.5 rounded-sm bg-[#0A0A0A] text-white font-mono text-[9px] font-bold">{sec.turns}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0A0A0A] uppercase">{sec.name}</h3>
                  <div className="text-xs font-mono text-[#F47C20] font-bold">MAX SPEED: {sec.speed}</div>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — FINAL CTA
        ============================================================ */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[54px] max-w-[1600px] mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              THINK YOU CAN <span className="text-[#F47C20]">MASTER IT?</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#555555]">
              Test your timing on Northern India’s premier ~600m outdoor circuit.
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

export default TrackPage;
