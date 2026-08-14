import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppButton from '../components/WhatsAppButton';
import MagneticButton from '../components/MagneticButton';
import TrackCircuitVisual from '../components/TrackCircuitVisual';
import { MapPin, Play, Pause, RotateCcw } from 'lucide-react';

export const TrackPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    window.open("https://web.racefacer.com/kiosk/kartomaniaentertainlandmall", "_blank", "noopener,noreferrer");
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleReset = () => {
    setIsPlaying(false);
    setResetKey(prev => prev + 1);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const TRACK_SECTIONS = [
    {
      sector: "SECTOR 01",
      name: "MAIN STRAIGHT & SWEEPER",
      turns: "T1 – T2",
      speed: "70 KM/H",
      desc: "Full-throttle launch past the Start/Finish gantry into the high-speed sweeping right arc."
    },
    {
      sector: "SECTOR 02",
      name: "NORTH HAIRPIN & CHICANE",
      turns: "T3 – T4",
      speed: "38 KM/H",
      desc: "Heavy late-braking zone into Turn 3 180° hairpin. Rapid weight transfer through the mid chicane."
    },
    {
      sector: "SECTOR 03",
      name: "INFIELD TECHNICAL LOOP",
      turns: "T5 – T6",
      speed: "42 KM/H",
      desc: "Technical double-apex right loop demanding precise throttle modulation and trail braking."
    },
    {
      sector: "SECTOR 04",
      name: "PIT MERGE & FINALE ARC",
      turns: "T7 – T8",
      speed: "82 KM/H",
      desc: "Longest high-speed full-throttle acceleration straight carrying exit velocity into the final turn."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F47C20] selection:text-white relative overflow-x-hidden text-left">
      <ScrollProgress />
      <Cursor />

      {/* Navigation Header */}
      <Navbar
        activeSection="karts"
        onNavigate={() => {}}
        onOpenSearch={() => {}}
        onOpenBooking={handleOpenBooking}
      />

      <main className="relative z-10 pt-24 sm:pt-32">
        {/* ============================================================
            01 — HERO
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFF0E5]/10 border border-[#F47C20]/30 font-mono text-xs font-bold text-[#F47C20] uppercase tracking-widest shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#F47C20]" /> // 720M GRAND PRIX CIRCUIT
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-white uppercase tracking-tight leading-none">
              KNOW YOUR <br />
              <span className="text-[#F47C20]">TRACK.</span>
            </h1>

            <p className="text-lg sm:text-2xl font-sans text-gray-300 font-medium leading-relaxed">
              Every corner. Every straight. Every lap.
            </p>
          </div>
        </section>

        {/* ============================================================
            02 — INTERACTIVE TRACK
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-[2px] h-5 bg-[#F47C20]" />
                  <span className="text-[#F47C20] text-sm font-bold font-mono">02</span>
                  <span className="text-white text-sm font-bold font-mono">/ INTERACTIVE TRACK MAP</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase">
                  2.5D VECTOR CIRCUIT SCHEMATIC
                </h2>
              </div>

              {/* Telemetry Animation Controls: PLAY, PAUSE, RESET */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={handlePlay}
                  className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isPlaying ? 'bg-[#F47C20] text-white shadow-md' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" /> PLAY
                </button>
                <button
                  onClick={handlePause}
                  className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                    !isPlaying ? 'bg-[#F47C20] text-white shadow-md' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Pause className="w-3.5 h-3.5" /> PAUSE
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-sm bg-white/10 hover:bg-white/20 text-gray-300 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> RESET
                </button>
              </div>
            </div>

            {/* Interactive Circuit Component */}
            <div key={resetKey} className={`transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-90'}`}>
              <TrackCircuitVisual />
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — TRACK DATA
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[2px] h-5 bg-[#F47C20]" />
              <span className="text-[#F47C20] text-sm font-bold font-mono">03</span>
              <span className="text-white text-sm font-bold font-mono">/ VERIFIED TRACK DATA</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
              <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-2">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">01 // LENGTH</span>
                <div className="text-3xl sm:text-5xl font-display font-bold text-white">720m</div>
                <p className="text-xs text-gray-400 font-sans">Full outdoor polymer asphalt circuit</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-2">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">02 // TURNS</span>
                <div className="text-3xl sm:text-5xl font-display font-bold text-white">14</div>
                <p className="text-xs text-gray-400 font-sans">High-G apexes & technical chicanes</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-2">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">03 // TOP SPEED</span>
                <div className="text-3xl sm:text-5xl font-display font-bold text-white">70 km/h</div>
                <p className="text-xs text-gray-400 font-sans">Sodi RT10 Pro 270cc race fleet</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-2">
                <span className="text-xs font-bold text-[#F47C20] tracking-widest block">04 // LAP RECORD</span>
                <div className="text-3xl sm:text-5xl font-display font-bold text-white">41.82s</div>
                <p className="text-xs text-gray-400 font-sans">Official track record lap time</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — TRACK SECTIONS
        ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-[2px] h-5 bg-[#F47C20]" />
                <span className="text-[#F47C20] text-sm font-bold font-mono">04</span>
                <span className="text-white text-sm font-bold font-mono">/ TRACK SECTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
                4 CIRCUIT <span className="text-[#F47C20]">SECTORS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRACK_SECTIONS.map((sec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#F47C20] transition-colors space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F47C20]">{sec.sector}</span>
                    <span className="px-2 py-0.5 rounded-sm bg-white/10 text-white font-mono text-[9px] font-bold">{sec.turns}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white uppercase">{sec.name}</h3>
                  <div className="text-xs font-mono text-[#F47C20] font-bold">MAX SPEED: {sec.speed}</div>
                  <p className="text-xs font-sans text-gray-300 leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — FINAL CTA
        ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-tight">
              THINK YOU CAN <span className="text-[#F47C20]">MASTER IT?</span>
            </h2>
            <p className="text-base sm:text-xl font-sans text-gray-300">
              Test your timing on Northern India’s premier 720m outdoor circuit.
            </p>
            <div className="pt-4 flex justify-center">
              <MagneticButton onClick={handleOpenBooking} className="py-4 px-10 text-xs font-bold">
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
