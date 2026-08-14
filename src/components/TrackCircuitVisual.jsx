import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TURN_DATA = [
  { id: 1, name: "Turn 1 - Pit Exit Arc", x: 740, y: 880, speed: "70 km/h", gear: "Flat Out", desc: "High-speed acceleration straight out of the Start/Finish line into the lower right curve." },
  { id: 2, name: "Turn 2 - North Straight Entry", x: 830, y: 760, speed: "65 km/h", gear: "Modulated", desc: "Long sweeping right arc carrying momentum directly into the North vertical straight." },
  { id: 3, name: "Turn 3 - Infield Technical Chicane", x: 360, y: 700, speed: "38 km/h", gear: "Trail Brake", desc: "Tight technical right-hand loop demanding precision weight transfer and throttle control." },
  { id: 4, name: "Turn 4 - Pit Straight Launch", x: 440, y: 920, speed: "48 km/h", gear: "Full Throttle", desc: "Critical exit corner onto the Start/Finish timing straight." },
  { id: 5, name: "Turn 5 - Southwest Sweeper", x: 260, y: 810, speed: "52 km/h", gear: "Medium", desc: "Fast sweeping curve connecting the western sector to the infield loop." },
  { id: 6, name: "Turn 6 - West Hairpin", x: 65, y: 560, speed: "35 km/h", gear: "Hard Braking", desc: "Tight western apex hairpin. Heavy late braking before rapid corner exit." },
  { id: 7, name: "Turn 7 - Mid-Section Chicane", x: 300, y: 535, speed: "50 km/h", gear: "Modulated", desc: "Technical S-curve requiring smooth steering inputs through the apex curb." },
  { id: 8, name: "Turn 8 - North-West Transition", x: 480, y: 660, speed: "58 km/h", gear: "Acceleration", desc: "Downhill transition straight feeding momentum towards the western sector." },
  { id: 10, name: "Turn 10 - North Straight Exit", x: 745, y: 680, speed: "62 km/h", gear: "Fast Entry", desc: "High-speed exit sweeping right from the vertical straight into the mid technical loop." },
  { id: 11, name: "Turn 11 - North Loop Hairpin", x: 755, y: 55, speed: "32 km/h", gear: "Heavy Braking", desc: "Topmost 180° hairpin loop with safety run-off zone. Shaves split seconds on clean exit lines." }
];

// Clockwise contour matching the 11-turn official track layout
const TRACK_PATH_D = "M 580 910 C 680 870, 770 820, 830 720 C 860 620, 840 420, 835 240 C 830 140, 810 50, 755 50 C 700 50, 680 140, 685 240 C 690 420, 700 620, 740 680 C 760 720, 740 760, 660 760 C 560 760, 480 660, 420 600 C 350 540, 240 540, 160 510 C 100 490, 60 520, 65 580 C 75 640, 160 730, 260 810 C 340 860, 390 840, 420 780 C 440 730, 410 690, 360 700 C 320 710, 310 770, 330 830 C 350 890, 440 940, 580 910 Z";

const TrackCircuitVisual = () => {
  const [activeTurn, setActiveTurn] = useState(null);
  const [viewMode, setViewMode] = useState('official'); // 'official' | 'vector'
  const [showRacingLine, setShowRacingLine] = useState(true);

  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-[#F9F9F9] border-2 border-[#E5E5E5] hover:border-[#F47C20] p-4 sm:p-6 shadow-md transition-colors duration-500 text-[#111111] select-none overflow-hidden text-left">
      
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E5E5E5]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
              KARTOMANIA OFFICIAL TRACK MAP & TELEMETRY
            </span>
          </div>
          <div className="text-[11px] font-mono text-[#666666]">
            ~600M OUTDOOR CIRCUIT &bull; 11 TURNS &bull; CLOCKWISE DIRECTION
          </div>
        </div>

        {/* View Mode Toggle Switcher */}
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <button
            onClick={() => setViewMode('official')}
            className={`px-3.5 py-1.5 rounded-sm font-bold uppercase transition-all cursor-pointer ${
              viewMode === 'official'
                ? 'bg-[#F47C20] text-white shadow-sm border border-[#F47C20]'
                : 'bg-white text-[#555555] hover:text-[#0A0A0A] border border-[#E5E5E5]'
            }`}
          >
            ★ OFFICIAL MAP
          </button>
          <button
            onClick={() => setViewMode('vector')}
            className={`px-3.5 py-1.5 rounded-sm font-bold uppercase transition-all cursor-pointer ${
              viewMode === 'vector'
                ? 'bg-[#0A0A0A] text-white shadow-sm border border-[#0A0A0A]'
                : 'bg-white text-[#555555] hover:text-[#0A0A0A] border border-[#E5E5E5]'
            }`}
          >
            2.5D VECTOR FLOW
          </button>
          {viewMode === 'vector' && (
            <button
              onClick={() => setShowRacingLine(!showRacingLine)}
              className={`px-3 py-1.5 rounded-sm font-bold uppercase transition-all cursor-pointer ${
                showRacingLine
                  ? 'bg-[#FFF0E5] text-[#F47C20] border border-[#F47C20]/40'
                  : 'bg-white text-[#888888] border border-[#E5E5E5]'
              }`}
            >
              {showRacingLine ? '● FLOW ON' : '○ FLOW OFF'}
            </button>
          )}
        </div>
      </div>

      {/* Main Track Display Area */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[520px] bg-white rounded-xl overflow-hidden flex items-center justify-center p-3 border border-[#E5E5E5] shadow-inner">
        
        {/* MODE 1: High-Res Official Track Map Image */}
        {viewMode === 'official' ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/track-map-official.jpg"
              alt="Kartomania Official 600m Track Map - 11 Turns Clockwise"
              className="w-full h-full object-contain filter contrast-105"
            />
          </div>
        ) : (
          /* MODE 2: Interactive 2.5D Vector Simulation with Live Animated Kart */
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 950 980"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <defs>
                <linearGradient id="asphaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a2d34" />
                  <stop offset="100%" stopColor="#15171c" />
                </linearGradient>

                <pattern id="checkeredStart" width="12" height="12" patternUnits="userSpaceOnUse">
                  <rect width="6" height="6" fill="#ffffff" />
                  <rect x="6" width="6" height="6" fill="#111111" />
                  <rect y="6" width="6" height="6" fill="#111111" />
                  <rect x="6" y="6" width="6" height="6" fill="#ffffff" />
                </pattern>
              </defs>

              {/* Safety Barrier Underlay */}
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#d1d5db"
                strokeWidth="74"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* White Kerb Outer Border */}
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="66"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Asphalt Road Surface */}
              <path
                id="liveTrackPath"
                d={TRACK_PATH_D}
                fill="none"
                stroke="url(#asphaltGrad)"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Racing Line Flow */}
              {showRacingLine && (
                <path
                  d={TRACK_PATH_D}
                  fill="none"
                  stroke="#F47C20"
                  strokeWidth="3"
                  strokeDasharray="10 18"
                />
              )}

              {/* Start/Finish Checkered Gantry Line */}
              <g transform="translate(580, 910) rotate(-15)">
                <rect x="-30" y="-5" width="60" height="10" fill="url(#checkeredStart)" stroke="#ffffff" strokeWidth="1" />
                <rect x="-35" y="-22" width="70" height="15" rx="3" fill="#0A0A0A" />
                <text x="0" y="-11" fill="#ffffff" fontFamily="sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">
                  START / FINISH
                </text>
              </g>

              {/* Interactive Turn Hotspot Circles */}
              {TURN_DATA.map((turn) => (
                <g
                  key={turn.id}
                  onClick={() => setActiveTurn(activeTurn?.id === turn.id ? null : turn)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={turn.x}
                    cy={turn.y}
                    r="14"
                    fill={activeTurn?.id === turn.id ? "#F47C20" : "#ffffff"}
                    stroke={activeTurn?.id === turn.id ? "#F47C20" : "#0A0A0A"}
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                  <text
                    x={turn.x}
                    y={turn.y + 4}
                    fill={activeTurn?.id === turn.id ? "#ffffff" : "#0A0A0A"}
                    fontFamily="sans-serif"
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="pointer-events-none"
                  >
                    T{turn.id}
                  </text>
                </g>
              ))}

              {/* Live Animated Kart */}
              {isVisible && (
                <g>
                  <g id="liveRacingKart">
                    <circle r="8" fill="#F47C20" stroke="#FFFFFF" strokeWidth="2" filter="drop-shadow(0 0 6px rgba(244,124,32,0.9))" />
                    <polygon points="0,-3 12,0 0,3" fill="#F47C20" opacity="0.8" />
                    <animateMotion
                      path={TRACK_PATH_D}
                      dur="14s"
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </g>
                </g>
              )}
            </svg>
          </div>
        )}

        {/* Turn Telemetry Popover */}
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
                  <span className="text-[#888888]">BRAKING:</span>
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

      {/* 4 Verified Track Statistics Grid from Official Track Map */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 text-center font-mono">
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TRACK LENGTH</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F47C20]">~ 600 M</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TOTAL TURNS</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#0A0A0A]">11 TURNS</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">DIRECTION</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#0A0A0A]">CLOCKWISE</div>
        </div>
        <div className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
          <div className="text-[9px] text-[#888888] uppercase font-semibold">TRACK TYPE</div>
          <div className="text-sm sm:text-base font-display font-bold text-[#F47C20]">OUTDOOR</div>
        </div>
      </div>

    </div>
  );
};

export default TrackCircuitVisual;
