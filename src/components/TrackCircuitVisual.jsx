import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TURN_DATA = [
  { id: 1, name: "Turn 1 - Main Straight Arc", x: 500, y: 770, speed: "70 km/h", gear: "Flat Out", desc: "High-speed acceleration past the Start/Finish line into the lower right curve." },
  { id: 2, name: "Turn 2 - North Sweeper Entry", x: 610, y: 710, speed: "65 km/h", gear: "Modulated", desc: "Long sweeping right corner carrying momentum directly into the North vertical straight." },
  { id: 10, name: "Turn 10 - North Straight Exit Sweeper", x: 645, y: 520, speed: "62 km/h", gear: "Fast Entry", desc: "High-speed exit sweeping right from the vertical straight into the mid-circuit loop." },
  { id: 11, name: "Turn 11 - North Loop Hairpin", x: 550, y: 45, speed: "32 km/h", gear: "Heavy Braking", desc: "Topmost 180° hairpin loop with safety run-off zone. Shaves split seconds on clean exit lines." },
  { id: 8, name: "Turn 8 - Mid-Circuit Transition", x: 390, y: 535, speed: "58 km/h", gear: "Acceleration", desc: "Downhill transition straight feeding momentum towards the western sector." },
  { id: 7, name: "Turn 7 - Technical S-Chicane", x: 235, y: 455, speed: "50 km/h", gear: "Modulated", desc: "Technical S-curve requiring smooth steering inputs through the apex curbing." },
  { id: 6, name: "Turn 6 - West Hairpin Apex", x: 55, y: 470, speed: "35 km/h", gear: "Hard Braking", desc: "Tight western apex hairpin. Heavy late braking before rapid corner exit." },
  { id: 5, name: "Turn 5 - Southwest Sweeper", x: 220, y: 685, speed: "52 km/h", gear: "Medium", desc: "Fast sweeping curve connecting the western sector to the infield loop." },
  { id: 3, name: "Turn 3 - Infield Chicane Loop", x: 350, y: 585, speed: "38 km/h", gear: "Trail Brake", desc: "Tight technical right-hand loop demanding precision weight transfer and throttle control." },
  { id: 4, name: "Turn 4 - Pit Straight Launch", x: 330, y: 735, speed: "48 km/h", gear: "Full Throttle", desc: "Critical exit corner launching directly onto the Start/Finish timing straight." }
];

// Precision clockwise contour matching the authentic 11-turn official track layout
const TRACK_PATH_D = "M 430 780 C 475 800, 550 795, 605 735 C 655 675, 680 500, 645 270 C 625 115, 600 35, 550 35 C 500 35, 475 115, 495 270 C 510 420, 505 515, 555 575 C 595 615, 650 575, 650 515 C 650 455, 575 565, 495 625 C 425 675, 385 525, 345 495 C 305 465, 235 445, 175 425 C 115 405, 50 425, 50 475 C 50 525, 115 615, 185 675 C 225 705, 265 685, 275 635 C 285 585, 325 565, 355 595 C 385 625, 355 715, 305 735 C 275 745, 315 780, 430 780 Z";

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
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[540px] bg-white rounded-xl overflow-hidden flex items-center justify-center p-3 border border-[#E5E5E5] shadow-inner">
        
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
          /* MODE 2: Interactive 2.5D Vector Simulation matching the Official Map Shape */
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 760 840"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <defs>
                <linearGradient id="asphaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2e323b" />
                  <stop offset="100%" stopColor="#181a1f" />
                </linearGradient>

                <pattern id="checkeredStart" width="10" height="10" patternUnits="userSpaceOnUse">
                  <rect width="5" height="5" fill="#ffffff" />
                  <rect x="5" width="5" height="5" fill="#111111" />
                  <rect y="5" width="5" height="5" fill="#111111" />
                  <rect x="5" y="5" width="5" height="5" fill="#ffffff" />
                </pattern>
              </defs>

              {/* Turn 11 Top Infield Grass / Run-off Zone */}
              <path
                d="M 505 240 C 515 120, 530 65, 550 65 C 570 65, 585 120, 595 240 Z"
                fill="#FFC4C4"
                opacity="0.8"
              />
              <path
                d="M 515 230 C 525 140, 535 90, 550 90 C 565 90, 575 140, 585 230 Z"
                fill="#94C882"
                opacity="0.85"
              />

              {/* Safety Barrier Underlay (Outer contour) */}
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#d1d5db"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Red-and-White Apex Curbing Effect */}
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#E53E3E"
                strokeWidth="50"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 14"
              />

              {/* White Kerb Outer Border */}
              <path
                d={TRACK_PATH_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="44"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Asphalt Road Surface */}
              <path
                id="liveTrackPath"
                d={TRACK_PATH_D}
                fill="none"
                stroke="url(#asphaltGrad)"
                strokeWidth="36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Racing Line Flow in Energetic Orange */}
              {showRacingLine && (
                <path
                  d={TRACK_PATH_D}
                  fill="none"
                  stroke="#F47C20"
                  strokeWidth="2.5"
                  strokeDasharray="8 14"
                  className="animate-[dash_10s_linear_infinite]"
                />
              )}

              {/* Start/Finish Checkered Gantry Line */}
              <g transform="translate(430, 780) rotate(-15)">
                <rect x="-22" y="-4" width="44" height="8" fill="url(#checkeredStart)" stroke="#ffffff" strokeWidth="1" />
                <rect x="-26" y="-18" width="52" height="12" rx="2" fill="#0A0A0A" />
                <text x="0" y="-9" fill="#ffffff" fontFamily="sans-serif" fontSize="5.5" fontWeight="bold" textAnchor="middle">
                  START / FINISH
                </text>
              </g>

              {/* Interactive Turn Hotspot Circles matching exact 11 turns */}
              {TURN_DATA.map((turn) => (
                <g
                  key={turn.id}
                  onClick={() => setActiveTurn(activeTurn?.id === turn.id ? null : turn)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={turn.x}
                    cy={turn.y}
                    r="12"
                    fill={activeTurn?.id === turn.id ? "#F47C20" : "#ffffff"}
                    stroke={activeTurn?.id === turn.id ? "#F47C20" : "#0A0A0A"}
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                  <text
                    x={turn.x}
                    y={turn.y + 3.5}
                    fill={activeTurn?.id === turn.id ? "#ffffff" : "#0A0A0A"}
                    fontFamily="sans-serif"
                    fontSize="8"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="pointer-events-none"
                  >
                    {turn.id}
                  </text>
                </g>
              ))}

              {/* Live Animated Racing Kart */}
              {isVisible && (
                <g>
                  <g id="liveRacingKart">
                    <circle r="6.5" fill="#F47C20" stroke="#FFFFFF" strokeWidth="1.8" filter="drop-shadow(0 0 5px rgba(244,124,32,0.9))" />
                    <polygon points="0,-2.5 10,0 0,2.5" fill="#F47C20" opacity="0.8" />
                    <animateMotion
                      path={TRACK_PATH_D}
                      dur="12s"
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
