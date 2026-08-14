import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Trophy, Clock, Gauge, Compass } from 'lucide-react';

const TURN_DATA = [
  { id: 1, name: "Turn 1 - Pit Exit Straight", x: 48.9, y: 91.5, speed: "70 km/h", gear: "Flat Out", desc: "Full-throttle launch straight out of the Start/Finish timing line into the lower right curve." },
  { id: 2, name: "Turn 2 - North Sweeper Entry", x: 59.3, y: 84.0, speed: "65 km/h", gear: "Modulated", desc: "Long sweeping right arc carrying maximum momentum directly into the vertical straight." },
  { id: 10, name: "Turn 10 - North Straight Exit Sweeper", x: 67.5, y: 67.0, speed: "62 km/h", gear: "Fast Entry", desc: "High-speed exit sweeping right from the vertical straight into the mid-circuit transition." },
  { id: 11, name: "Turn 11 - North Loop Hairpin", x: 57.6, y: 13.5, speed: "32 km/h", gear: "Heavy Braking", desc: "Topmost 180° hairpin loop with safety run-off zone. Shaves split seconds on clean exit lines." },
  { id: 8, name: "Turn 8 - Mid-Circuit Transition", x: 42.0, y: 51.0, speed: "58 km/h", gear: "Acceleration", desc: "Downhill transition straight feeding momentum towards the western sector." },
  { id: 7, name: "Turn 7 - Technical S-Chicane", x: 24.0, y: 43.0, speed: "50 km/h", gear: "Modulated", desc: "Technical S-curve requiring smooth steering inputs through the apex curbing." },
  { id: 6, name: "Turn 6 - West Hairpin Apex", x: 5.2, y: 55.0, speed: "35 km/h", gear: "Hard Braking", desc: "Tight western apex hairpin. Heavy late braking before rapid corner exit." },
  { id: 5, name: "Turn 5 - Southwest Sweeper", x: 23.0, y: 77.0, speed: "52 km/h", gear: "Medium", desc: "Fast sweeping curve connecting the western sector to the infield loop." },
  { id: 3, name: "Turn 3 - Infield Chicane Loop", x: 37.1, y: 70.5, speed: "38 km/h", gear: "Trail Brake", desc: "Tight technical right-hand loop demanding precision weight transfer and throttle control." },
  { id: 4, name: "Turn 4 - Pit Straight Launch", x: 34.8, y: 84.0, speed: "48 km/h", gear: "Full Throttle", desc: "Critical exit corner launching directly onto the Start/Finish timing straight." }
];

// Exact pixel-perfect SVG path matching 1024x819 official track geometry
const TRACK_CENTER_PATH = "M 436 726 C 470 715, 525 695, 590 645 C 635 600, 642 530, 630 380 C 620 250, 595 150, 576 95 C 565 65, 545 48, 532 58 C 518 70, 510 120, 510 220 C 510 340, 512 450, 518 510 C 522 545, 550 565, 580 565 C 608 565, 620 535, 608 495 C 595 460, 540 520, 485 555 C 430 590, 360 495, 305 440 C 265 400, 205 385, 140 385 C 95 385, 65 410, 65 445 C 65 480, 105 530, 165 590 C 210 635, 250 630, 275 585 C 295 550, 335 535, 365 550 C 388 565, 385 610, 365 645 C 340 685, 320 705, 355 720 C 385 730, 410 730, 436 726 Z";

const TrackCircuitVisual = () => {
  const [activeTurn, setActiveTurn] = useState(null);
  const [showTelemetryLine, setShowTelemetryLine] = useState(true);
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-white border-2 border-[#E5E5E5] hover:border-[#F47C20] shadow-lg transition-all duration-500 text-[#111111] select-none overflow-hidden text-left">
      
      {/* ── Top Header Strip ── */}
      <div className="p-4 sm:p-6 border-b border-[#EAEAEA] bg-[#FDFDFD] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#F47C20] uppercase tracking-wider">
              OFFICIAL CIRCUIT BLUEPRINT & TELEMETRY
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
            KARTOMANIA TRACK MAP
          </h3>
        </div>

        {/* Action & Toggle Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setShowTelemetryLine(!showTelemetryLine)}
            className={`px-4 py-2 rounded-sm font-bold uppercase transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
              showTelemetryLine
                ? 'bg-[#F47C20] text-white border border-[#F47C20]'
                : 'bg-white text-[#555555] hover:text-[#0A0A0A] border border-[#E5E5E5]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${showTelemetryLine ? 'bg-white' : 'bg-gray-400'}`} />
            {showTelemetryLine ? 'LIVE TELEMETRY FLOW' : 'PAUSE TELEMETRY'}
          </button>
        </div>
      </div>

      {/* ── Main Track Arena Canvas ── */}
      <div className="relative w-full bg-white p-2 sm:p-4 flex items-center justify-center">
        <div className="relative w-full max-w-5xl aspect-[1024/819] rounded-xl overflow-hidden shadow-inner border border-[#EAEAEA]">
          
          {/* Base Official Map Image */}
          <img
            src="/track-map-official.jpg"
            alt="Kartomania Track Map - ~600m Outdoor 11 Turns Clockwise"
            className="w-full h-full object-contain filter contrast-102"
          />

          {/* SVG Overlay Layer for Live Racing Line & Animated Kart */}
          {showTelemetryLine && (
            <svg
              viewBox="0 0 1024 819"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              {/* Dynamic Orange Telemetry Line along center of asphalt */}
              <path
                d={TRACK_CENTER_PATH}
                fill="none"
                stroke="#F47C20"
                strokeWidth="3.5"
                strokeDasharray="10 16"
                className="opacity-80"
              />

              {/* Start/Finish Timing Ping */}
              <g transform="translate(436, 726)">
                <circle r="12" fill="none" stroke="#F47C20" strokeWidth="2" className="animate-ping opacity-40" />
                <circle r="4" fill="#F47C20" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>

              {/* Live Animated Racing Kart */}
              {isVisible && (
                <g>
                  <g id="kartomaniaLiveKart">
                    {/* Kart Glowing Pulse */}
                    <circle r="9" fill="#F47C20" stroke="#FFFFFF" strokeWidth="2" filter="drop-shadow(0 0 8px rgba(244,124,32,1))" />
                    {/* Speed Arrow Head */}
                    <polygon points="0,-3 12,0 0,3" fill="#FFFFFF" />
                    <animateMotion
                      path={TRACK_CENTER_PATH}
                      dur="11s"
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </g>
                </g>
              )}
            </svg>
          )}

          {/* Interactive Turn Hotspot Pins */}
          {TURN_DATA.map((turn) => {
            const isSelected = activeTurn?.id === turn.id;
            return (
              <button
                key={turn.id}
                onClick={() => setActiveTurn(isSelected ? null : turn)}
                style={{ left: `${turn.x}%`, top: `${turn.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 cursor-pointer group focus:outline-none`}
                aria-label={`View details for Turn ${turn.id}`}
              >
                <div
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 font-mono font-bold text-[10px] sm:text-xs shadow-md ${
                    isSelected
                      ? 'w-7 h-7 sm:w-8 sm:h-8 bg-[#F47C20] text-white ring-4 ring-[#F47C20]/30 scale-110'
                      : 'w-6 h-6 sm:w-7 sm:h-7 bg-black/80 hover:bg-[#F47C20] text-white hover:scale-110'
                  }`}
                >
                  {turn.id}
                </div>
              </button>
            );
          })}

          {/* Turn Telemetry Popover Modal */}
          <AnimatePresence>
            {activeTurn && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 border-2 border-[#F47C20] backdrop-blur-md p-5 rounded-2xl shadow-2xl z-30 text-left"
              >
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-sm bg-[#F47C20] text-white font-mono text-[10px] font-bold">
                      TURN {activeTurn.id}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-[#0A0A0A] uppercase truncate max-w-[180px]">
                      {activeTurn.name}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTurn(null)}
                    className="text-[#888888] hover:text-[#0A0A0A] text-sm px-1.5 py-0.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-2">
                  <div className="p-2 rounded-lg bg-[#F9F9F9] border border-[#EAEAEA]">
                    <span className="text-[#888888] block">APEX SPEED</span>
                    <div className="text-[#F47C20] font-bold text-xs sm:text-sm">{activeTurn.speed}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F9F9F9] border border-[#EAEAEA]">
                    <span className="text-[#888888] block">BRAKING / GEAR</span>
                    <div className="text-[#0A0A0A] font-bold text-xs sm:text-sm">{activeTurn.gear}</div>
                  </div>
                </div>

                <p className="text-xs font-sans text-[#555555] leading-relaxed">
                  {activeTurn.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* ── 4 Verified Track Statistics Grid ── */}
      <div className="p-4 sm:p-6 bg-[#FDFDFD] border-t border-[#EAEAEA]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left font-mono">
          <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
            <div className="flex items-center gap-2 text-[#F47C20] mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">TRACK LENGTH</span>
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A]">~ 600 m</div>
            <span className="text-[10px] text-[#666666]">Outdoor asphalt circuit</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
            <div className="flex items-center gap-2 text-[#F47C20] mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">TOTAL TURNS</span>
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A]">11 TURNS</div>
            <span className="text-[10px] text-[#666666]">Apexes, hairpins & chicanes</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
            <div className="flex items-center gap-2 text-[#F47C20] mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">DIRECTION</span>
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A]">CLOCKWISE</div>
            <span className="text-[10px] text-[#666666]">Official racing flow</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#F47C20] transition-colors shadow-xs">
            <div className="flex items-center gap-2 text-[#F47C20] mb-1">
              <Gauge className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">TRACK TYPE</span>
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#F47C20]">OUTDOOR</div>
            <span className="text-[10px] text-[#666666]">Polymer asphalt track</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TrackCircuitVisual;
