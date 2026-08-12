import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const TrackCircuitVisual = () => {
  const [activeTurn, setActiveTurn] = useState(null);
  const [showRacingLine, setShowRacingLine] = useState(true);
  const [showSectors, setShowSectors] = useState(true);

  return (
    <div className="relative w-full rounded-2xl bg-[#15181C] border border-white/10 p-3 sm:p-5 shadow-2xl overflow-hidden text-[#F4F1EA] select-none">
      
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[#F4F1EA] uppercase tracking-wider">
            720M GP ARENA SCHEMATIC TELEMETRY
          </span>
        </div>

        {/* View Toggles */}
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <button
            onClick={() => setShowRacingLine(!showRacingLine)}
            className={`px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
              showRacingLine ? 'bg-[#C9A45C]/20 border-[#C9A45C] text-[#C9A45C]' : 'bg-[#0B0D0F] border-white/10 text-[#837D73]'
            }`}
          >
            {showRacingLine ? '● RACING FLOW' : '○ FLOW OFF'}
          </button>
          <button
            onClick={() => setShowSectors(!showSectors)}
            className={`px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
              showSectors ? 'bg-[#EE3124]/20 border-[#EE3124] text-[#EE3124]' : 'bg-[#0B0D0F] border-white/10 text-[#837D73]'
            }`}
          >
            {showSectors ? '● SECTORS' : '○ SECTORS'}
          </button>
        </div>
      </div>

      {/* Main High-End Vector 2.5D SVG Canvas */}
      <div className="relative w-full aspect-[16/10] max-h-[460px] bg-gradient-to-br from-[#0e1017] via-[#090a0f] to-[#06070a] rounded-xl overflow-hidden flex items-center justify-center p-2 border border-white/10">
        
        <svg
          viewBox="0 0 1340 980"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          <defs>
            {/* Concrete Arena Gradient */}
            <linearGradient id="concreteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="50%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#cfd3dc" />
            </linearGradient>

            {/* Asphalt Shading */}
            <linearGradient id="asphaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e313b" />
              <stop offset="100%" stopColor="#1f2026" />
            </linearGradient>

            {/* Glowing Pulse Shader */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Checkered Pattern */}
            <pattern id="checkered" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#ffffff" />
              <rect x="6" width="6" height="6" fill="#111111" />
              <rect y="6" width="6" height="6" fill="#111111" />
              <rect x="6" y="6" width="6" height="6" fill="#ffffff" />
            </pattern>
          </defs>

          {/* 1. Concrete Arena Platform Slab (3D Bevel & Shadow) */}
          <g>
            {/* Ground Shadow */}
            <rect x="35" y="85" width="1270" height="850" rx="55" fill="rgba(0,0,0,0.6)" />
            {/* Bevel Base */}
            <rect x="20" y="70" width="1270" height="850" rx="55" fill="#9ca3af" />
            {/* Top Concrete Slab */}
            <rect x="20" y="55" width="1270" height="850" rx="55" fill="url(#concreteGrad)" stroke="#ffffff" strokeWidth="2" />
            
            {/* Concrete Floor Joint Lines */}
            {[180, 340, 500, 660, 820, 980, 1140].map((x) => (
              <line key={x} x1={x} y1="55" x2={x} y2="905" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 6" />
            ))}
            {[200, 360, 520, 680, 840].map((y) => (
              <line key={y} x1="20" y1={y} x2="1290" y2={y} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 6" />
            ))}
          </g>

          {/* 2. Track Circuit Geometry Paths */}
          <g>
            {/* Safety Barrier Outer Shadow */}
            <path
              d="M 320 360 C 440 310, 580 250, 740 200 C 920 210, 1060 270, 1120 370 C 1080 460, 940 480, 760 470 C 580 450, 400 430, 250 440 C 160 490, 180 560, 280 580 C 460 570, 680 550, 880 560 C 1050 590, 1140 650, 1110 720 C 960 720, 800 690, 640 670 C 480 670, 340 710, 280 780 C 340 840, 480 850, 640 840 C 800 830, 960 820, 1080 800 C 1160 740, 1140 660, 1020 580 C 860 500, 680 440, 500 390 Z"
              fill="none"
              stroke="#111217"
              strokeWidth="98"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* White Outer Kerb Edge */}
            <path
              d="M 320 360 C 440 310, 580 250, 740 200 C 920 210, 1060 270, 1120 370 C 1080 460, 940 480, 760 470 C 580 450, 400 430, 250 440 C 160 490, 180 560, 280 580 C 460 570, 680 550, 880 560 C 1050 590, 1140 650, 1110 720 C 960 720, 800 690, 640 670 C 480 670, 340 710, 280 780 C 340 840, 480 850, 640 840 C 800 830, 960 820, 1080 800 C 1160 740, 1140 660, 1020 580 C 860 500, 680 440, 500 390 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="86"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dedicated Pit Lane Branch Underlay */}
            <path
              d="M 640 875 C 800 875, 960 870, 1080 850 C 1140 810, 1120 760, 1080 800"
              fill="none"
              stroke="#1e2029"
              strokeWidth="56"
              strokeLinecap="round"
            />
            <path
              d="M 640 875 C 800 875, 960 870, 1080 850 C 1140 810, 1120 760, 1080 800"
              fill="none"
              stroke="#2c2e37"
              strokeWidth="48"
              strokeLinecap="round"
            />

            {/* Main Asphalt Circuit Surface */}
            <path
              id="mainTrackCircuit"
              d="M 320 360 C 440 310, 580 250, 740 200 C 920 210, 1060 270, 1120 370 C 1080 460, 940 480, 760 470 C 580 450, 400 430, 250 440 C 160 490, 180 560, 280 580 C 460 570, 680 550, 880 560 C 1050 590, 1140 650, 1110 720 C 960 720, 800 690, 640 670 C 480 670, 340 710, 280 780 C 340 840, 480 850, 640 840 C 800 830, 960 820, 1080 800 C 1160 740, 1140 660, 1020 580 C 860 500, 680 440, 500 390 Z"
              fill="none"
              stroke="url(#asphaltGrad)"
              strokeWidth="76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated Racing Flow Particle Line */}
            {showRacingLine && (
              <path
                d="M 320 360 C 440 310, 580 250, 740 200 C 920 210, 1060 270, 1120 370 C 1080 460, 940 480, 760 470 C 580 450, 400 430, 250 440 C 160 490, 180 560, 280 580 C 460 570, 680 550, 880 560 C 1050 590, 1140 650, 1110 720 C 960 720, 800 690, 640 670 C 480 670, 340 710, 280 780 C 340 840, 480 850, 640 840 C 800 830, 960 820, 1080 800 C 1160 740, 1140 660, 1020 580 C 860 500, 680 440, 500 390 Z"
                fill="none"
                stroke="#C9A45C"
                strokeWidth="3"
                strokeDasharray="14 26"
                className="animate-[dash_12s_linear_infinite]"
              />
            )}
          </g>

          {/* 3. Red & Green Racing Kerbs at Apexes */}
          <g>
            <path d="M 690 165 Q 740 160 790 168" stroke="#d32f2f" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1060 230 Q 1120 270 1150 340" stroke="#2e7d32" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 120 480 Q 115 540 140 580" stroke="#d32f2f" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 230 400 Q 280 400 330 405" stroke="#2e7d32" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1040 540 Q 1090 570 1120 620" stroke="#d32f2f" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 240 760 Q 235 810 265 850" stroke="#2e7d32" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 360 885 Q 430 890 500 885" stroke="#d32f2f" strokeWidth="8" strokeDasharray="10 8" fill="none" />
            <path d="M 1120 780 Q 1170 740 1160 670" stroke="#2e7d32" strokeWidth="8" strokeDasharray="10 8" fill="none" />
          </g>

          {/* 4. Directional White Racing Arrows */}
          <g fill="rgba(255,255,255,0.75)">
            <polygon points="460,300 480,290 460,280 466,288 440,288 440,292 466,292" />
            <polygon points="860,205 880,205 865,195 869,203 845,203 845,207 869,207" />
            <polygon points="1070,440 1060,460 1080,455 1070,450 1085,435 1082,432 1068,447" />
            <polygon points="760,470 740,470 755,460 751,468 775,468 775,472 751,472" />
            <polygon points="175,540 190,560 170,555 180,550 165,535 168,532 182,547" />
            <polygon points="560,565 580,560 560,550 566,558 540,558 540,562 566,562" />
            <polygon points="980,580 1000,590 980,600 986,592 960,592 960,588 986,588" />
            <polygon points="540,670 520,670 535,660 531,668 555,668 555,672 531,672" />
            <polygon points="740,835 760,835 745,825 749,833 725,833 725,837 749,837" />
          </g>

          {/* 5. Pit Lane Painted Text */}
          <text x="820" y="880" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="14" fontWeight="bold" letterSpacing="2">
            PIT LANE
          </text>

          {/* 6. Marshall Stations */}
          <g>
            <circle cx="740" cy="155" r="15" fill="#ff8f00" stroke="#ffffff" strokeWidth="2" />
            <text x="740" y="160" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">M</text>

            <circle cx="1110" cy="510" r="15" fill="#ff8f00" stroke="#ffffff" strokeWidth="2" />
            <text x="1110" y="515" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">M</text>

            <circle cx="880" cy="915" r="15" fill="#ff8f00" stroke="#ffffff" strokeWidth="2" />
            <text x="880" y="920" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">M</text>
          </g>

          {/* 7. Sector Markers & Exit Gates */}
          <g>
            <circle cx="115" cy="535" r="16" fill="#0288d1" stroke="#ffffff" strokeWidth="2" />
            <text x="115" y="540" fill="#ffffff" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">12</text>

            <rect x="35" y="490" width="46" height="24" rx="5" fill="#2e7d32" stroke="#ffffff" strokeWidth="1.5" />
            <text x="58" y="506" fill="#ffffff" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">EXIT ➜</text>

            <rect x="630" y="925" width="46" height="24" rx="5" fill="#2e7d32" stroke="#ffffff" strokeWidth="1.5" />
            <text x="653" y="941" fill="#ffffff" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">EXIT ➜</text>

            <rect x="1230" y="650" width="46" height="24" rx="5" fill="#2e7d32" stroke="#ffffff" strokeWidth="1.5" />
            <text x="1253" y="666" fill="#ffffff" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">EXIT ➜</text>
          </g>

          {/* 8. START / FINISH Gantry & Checkered Line */}
          <g>
            <g transform="translate(320, 360) rotate(-25)">
              <rect x="-38" y="-6" width="76" height="12" fill="url(#checkered)" stroke="#ffffff" strokeWidth="1" />
            </g>

            <line x1="300" y1="210" x2="300" y2="350" stroke="#ff8f00" strokeWidth="4" />
            <rect x="235" y="175" width="130" height="34" rx="4" fill="#ff8f00" stroke="#ffffff" strokeWidth="2" filter="url(#glow)" />
            <text x="300" y="197" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="1">
              START/FINISH
            </text>
          </g>

          {/* 9. Interactive Turn Hotspots */}
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
                fill={activeTurn?.id === turn.id ? "#C9A45C" : "rgba(17, 18, 23, 0.9)"}
                stroke={activeTurn?.id === turn.id ? "#ffffff" : "#C9A45C"}
                strokeWidth="2.5"
                className="transition-all duration-300 group-hover:scale-125"
              />
              <text
                x={turn.x}
                y={turn.y + 4}
                fill={activeTurn?.id === turn.id ? "#0B0D0F" : "#ffffff"}
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
              className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-[#0B0D0F]/95 border border-[#C9A45C]/60 backdrop-blur-xl p-4 rounded-xl shadow-2xl z-30 text-left"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
                <span className="font-display font-bold text-xs text-[#C9A45C] uppercase">
                  {activeTurn.name}
                </span>
                <button
                  onClick={() => setActiveTurn(null)}
                  className="text-[#837D73] hover:text-[#F4F1EA] text-xs px-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-1.5">
                <div>
                  <span className="text-[#837D73]">APEX SPEED:</span>
                  <div className="text-[#F4F1EA] font-bold">{activeTurn.speed}</div>
                </div>
                <div>
                  <span className="text-[#837D73]">BRAKING ZONE:</span>
                  <div className="text-[#C9A45C] font-bold">{activeTurn.gear}</div>
                </div>
              </div>
              <p className="text-[11px] font-sans text-[#B8B1A5] leading-snug">
                {activeTurn.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry Footer Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-center font-mono">
        <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-white/10">
          <div className="text-[9px] text-[#837D73] uppercase font-semibold">CIRCUIT LENGTH</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#C9A45C]">720 METERS</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-white/10">
          <div className="text-[9px] text-[#837D73] uppercase font-semibold">TECHNICAL TURNS</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F4F1EA]">14 APEXES</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-white/10">
          <div className="text-[9px] text-[#837D73] uppercase font-semibold">SURFACE TYPE</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#C9A45C]">POLYMER ASPHALT</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-white/10">
          <div className="text-[9px] text-[#837D73] uppercase font-semibold">SAFETY SYSTEM</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F4F1EA]">F1 PRO BARRIER</div>
        </div>
      </div>

    </div>
  );
};

export default TrackCircuitVisual;
