import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TURN_DATA = [
  { id: 1, name: "Turn 1 - Apex Sweeper", x: 740, y: 195, speed: "78 km/h", gear: "Flat Out", desc: "High-speed entry into the sweeping right arc. Keep smooth steering." },
  { id: 2, name: "Turn 2 - Banked Curve", x: 1090, y: 340, speed: "64 km/h", gear: "Modulated", desc: "Long radius corner requiring throttle modulation before braking." },
  { id: 3, name: "Turn 3 - North Hairpin", x: 160, y: 510, speed: "38 km/h", gear: "Hard Braking", desc: "Tightest 180° hairpin. Heavy late braking into the apex kerb." },
  { id: 4, name: "Turn 4 - Mid Chicane", x: 680, y: 545, speed: "68 km/h", gear: "Acceleration", desc: "Fast transition chicane carrying maximum exit velocity." },
  { id: 5, name: "Turn 5 - Infield Loop", x: 1120, y: 645, speed: "52 km/h", gear: "Trail Brake", desc: "Technical double-apex right turn feeding into the lower section." },
  { id: 6, name: "Turn 6 - South Hairpin", x: 290, y: 785, speed: "42 km/h", gear: "Hard Braking", desc: "Demands precise switchback steering onto the pit merge straight." },
  { id: 7, name: "Turn 7 - Pit Straight Merge", x: 800, y: 830, speed: "82 km/h", gear: "Full Throttle", desc: "Longest high-speed full-throttle straight before the final loop." },
  { id: 8, name: "Turn 8 - Grand Finale Arc", x: 1140, y: 740, speed: "58 km/h", gear: "Medium", desc: "Final sweeping loop leading directly into the Start/Finish straight." }
];

const TRACK_PATH_D = "M 320 360 C 440 310, 580 250, 740 200 C 920 210, 1060 270, 1120 370 C 1080 460, 940 480, 760 470 C 580 450, 400 430, 250 440 C 160 490, 180 560, 280 580 C 460 570, 680 550, 880 560 C 1050 590, 1140 650, 1110 720 C 960 720, 800 690, 640 670 C 480 670, 340 710, 280 780 C 340 840, 480 850, 640 840 C 800 830, 960 820, 1080 800 C 1160 740, 1140 660, 1020 580 C 860 500, 680 440, 500 390 Z";

const TrackCircuitVisual = () => {
  const [activeTurn, setActiveTurn] = useState(null);
  const [showRacingLine, setShowRacingLine] = useState(true);
  const [showSectors, setShowSectors] = useState(true);

  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] hover:border-[#F47C20] p-4 sm:p-6 shadow-md transition-colors duration-500 text-[#111111] select-none overflow-hidden">
      
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
            720M GP ARENA SCHEMATIC TELEMETRY
          </span>
        </div>

        {/* View Toggles */}
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <button
            onClick={() => setShowRacingLine(!showRacingLine)}
            className={`px-3 py-1 rounded-sm border transition-colors cursor-pointer font-bold ${
              showRacingLine ? 'bg-[#F47C20] border-[#F47C20] text-white shadow-sm' : 'bg-white border-[#E5E5E5] text-[#666666]'
            }`}
          >
            {showRacingLine ? '● RACING FLOW' : '○ FLOW OFF'}
          </button>
          <button
            onClick={() => setShowSectors(!showSectors)}
            className={`px-3 py-1 rounded-sm border transition-colors cursor-pointer font-bold ${
              showSectors ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white shadow-sm' : 'bg-white border-[#E5E5E5] text-[#666666]'
            }`}
          >
            {showSectors ? '● SECTORS' : '○ SECTORS'}
          </button>
        </div>
      </div>

      {/* Main High-End Vector 2.5D SVG Canvas */}
      <div className="relative w-full aspect-[16/10] max-h-[460px] bg-gradient-to-br from-[#FFFFFF] via-[#FFF9F5] to-[#F5EBE1] rounded-xl overflow-hidden flex items-center justify-center p-2 border border-[#E5E5E5]">
        
        <svg
          viewBox="0 0 1340 980"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        >
          <defs>
            {/* Concrete Arena Gradient */}
            <linearGradient id="concreteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8f9fa" />
              <stop offset="100%" stopColor="#eaecef" />
            </linearGradient>

            {/* Asphalt Shading */}
            <linearGradient id="asphaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22242a" />
              <stop offset="100%" stopColor="#111215" />
            </linearGradient>

            {/* Checkered Pattern */}
            <pattern id="checkered" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#ffffff" />
              <rect x="6" width="6" height="6" fill="#111111" />
              <rect y="6" width="6" height="6" fill="#111111" />
              <rect x="6" y="6" width="6" height="6" fill="#ffffff" />
            </pattern>
          </defs>

          {/* 1. Concrete Arena Platform Slab */}
          <g>
            <rect x="35" y="85" width="1270" height="850" rx="45" fill="rgba(0,0,0,0.06)" />
            <rect x="20" y="70" width="1270" height="850" rx="45" fill="#d1d5db" />
            <rect x="20" y="55" width="1270" height="850" rx="45" fill="url(#concreteGrad)" stroke="#ffffff" strokeWidth="2" />
            
            {/* Concrete Floor Joint Lines */}
            {[180, 340, 500, 660, 820, 980, 1140].map((x) => (
              <line key={x} x1={x} y1="55" x2={x} y2="905" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 6" />
            ))}
            {[200, 360, 520, 680, 840].map((y) => (
              <line key={y} x1="20" y1={y} x2="1290" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 6" />
            ))}
          </g>

          {/* 2. Track Circuit Geometry Paths */}
          <g>
            {/* Safety Barrier Outer Shadow */}
            <path
              d={TRACK_PATH_D}
              fill="none"
              stroke="#0A0A0A"
              strokeWidth="98"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* White Outer Kerb Edge */}
            <path
              d={TRACK_PATH_D}
              fill="none"
              stroke="#ffffff"
              strokeWidth="86"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Main Asphalt Circuit Surface */}
            <path
              id="mainTrackCircuit"
              d={TRACK_PATH_D}
              fill="none"
              stroke="url(#asphaltGrad)"
              strokeWidth="76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated Racing Flow Line in Energetic Orange */}
            {showRacingLine && (
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#F47C20"
                strokeWidth="3.5"
                strokeDasharray="14 26"
                className="animate-[dash_12s_linear_infinite]"
              />
            )}
          </g>

          {/* 3. CONTINUOUS ANIMATED KART MOTION */}
          {isVisible && (
            <g>
              <g id="liveRacingKart">
                {/* Kart Body Dot */}
                <circle r="9" fill="#F47C20" stroke="#FFFFFF" strokeWidth="2.5" filter="drop-shadow(0 0 6px rgba(244,124,32,0.8))" />
                {/* Subtle Speed Trail Cone */}
                <polygon points="0,-4 14,0 0,4" fill="#F47C20" opacity="0.6" />
                
                <animateMotion
                  path={TRACK_PATH_D}
                  dur="16s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>
            </g>
          )}

          {/* 4. Apex Kerbs */}
          <g>
            <path d="M 690 165 Q 740 160 790 168" stroke="#F47C20" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1060 230 Q 1120 270 1150 340" stroke="#0A0A0A" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 120 480 Q 115 540 140 580" stroke="#F47C20" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 230 400 Q 280 400 330 405" stroke="#0A0A0A" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1040 540 Q 1090 570 1120 620" stroke="#F47C20" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 240 760 Q 235 810 265 850" stroke="#0A0A0A" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 360 885 Q 430 890 500 885" stroke="#F47C20" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1120 780 Q 1170 740 1160 670" stroke="#0A0A0A" strokeWidth="8" strokeDasharray="10 8" fill="none" />
          </g>

          {/* 5. START / FINISH Gantry */}
          <g>
            <g transform="translate(320, 360) rotate(-25)">
              <rect x="-38" y="-6" width="76" height="12" fill="url(#checkered)" stroke="#ffffff" strokeWidth="1" />
            </g>

            <line x1="300" y1="210" x2="300" y2="350" stroke="#0A0A0A" strokeWidth="4" />
            <rect x="235" y="175" width="130" height="34" rx="4" fill="#0A0A0A" stroke="#F47C20" strokeWidth="2" />
            <text x="300" y="197" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              START/FINISH
            </text>
          </g>

          {/* 6. Interactive Turn Hotspots */}
          {TURN_DATA.map((turn) => (
            <g
              key={turn.id}
              onClick={() => setActiveTurn(activeTurn?.id === turn.id ? null : turn)}
              className="cursor-pointer group"
            >
              <circle
                cx={turn.x}
                cy={turn.y}
                r="16"
                fill={activeTurn?.id === turn.id ? "#F47C20" : "rgba(255, 255, 255, 0.95)"}
                stroke={activeTurn?.id === turn.id ? "#F47C20" : "#0A0A0A"}
                strokeWidth="2.5"
                className="transition-all duration-300 group-hover:scale-125"
              />
              <text
                x={turn.x}
                y={turn.y + 4}
                fill={activeTurn?.id === turn.id ? "#ffffff" : "#0A0A0A"}
                fontFamily="sans-serif"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                className="pointer-events-none"
              >
                T{turn.id}
              </text>
            </g>
          ))}
        </svg>

        {/* Turn Telemetry Popover Card */}
        <AnimatePresence>
          {activeTurn && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-white/95 border-2 border-[#F47C20] backdrop-blur-md p-4 rounded-xl shadow-2xl z-30 text-left"
            >
              <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-1.5 mb-1.5">
                <span className="font-display font-bold text-xs text-[#0A0A0A] uppercase">
                  {activeTurn.name}
                </span>
                <button
                  onClick={() => setActiveTurn(null)}
                  className="text-[#888888] hover:text-[#0A0A0A] text-xs px-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-1.5">
                <div>
                  <span className="text-[#888888]">APEX SPEED:</span>
                  <div className="text-[#F47C20] font-bold">{activeTurn.speed}</div>
                </div>
                <div>
                  <span className="text-[#888888]">BRAKING ZONE:</span>
                  <div className="text-[#0A0A0A] font-bold">{activeTurn.gear}</div>
                </div>
              </div>
              <p className="text-[11px] font-sans text-[#666666] leading-snug">
                {activeTurn.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry Footer Cards — Verified Track Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-center font-mono">
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TRACK LENGTH</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F47C20]">720 METERS</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TURNS</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#0A0A0A]">14 APEXES</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TOP SPEED</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#0A0A0A]">70 KM/H</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">LAP RECORD</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F47C20]">41.82 SEC</div>
        </div>
      </div>

    </div>
  );
};

export default TrackCircuitVisual;
