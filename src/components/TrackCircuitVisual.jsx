import React from 'react';

const TrackCircuitVisual = () => {
  // Precision SVG trajectory path calibrated to Kartomania 11-turn clockwise circuit layout
  const trackPath = "M 180,310 C 220,310 320,310 420,310 C 470,310 490,285 480,245 C 470,205 430,205 400,210 C 360,215 340,185 360,150 C 380,115 440,110 460,85 C 475,65 460,40 420,40 C 360,40 280,45 220,50 C 160,55 110,70 90,110 C 70,150 95,190 130,200 C 165,210 200,215 190,245 C 180,275 140,310 180,310 Z";

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl bg-[#0A0A0A] text-white border-2 border-[#222222] hover:border-[#F47C20] p-4 sm:p-6 shadow-xl transition-all duration-500 overflow-hidden text-left group">
      
      {/* Top Telemetry Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#222222] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] animate-orange-pulse" />
          <span className="font-bold text-[#F47C20] tracking-wider uppercase">
            LIVE CIRCUIT TELEMETRY
          </span>
        </div>
        <span className="text-[#888888] uppercase text-[10px] font-bold">
          CLOCKWISE FLOW &bull; 11 APEXES
        </span>
      </div>

      {/* Circuit Map SVG Canvas */}
      <div className="relative w-full aspect-[540/360] flex items-center justify-center my-2">
        <svg
          viewBox="0 0 540 360"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Kart Beacon Glow Filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Track Asphalt Gradient */}
            <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2A" />
              <stop offset="50%" stopColor="#1C1C1C" />
              <stop offset="100%" stopColor="#2A2A2A" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          <g opacity="0.12" stroke="#FFFFFF" strokeWidth="0.5">
            <line x1="0" y1="90" x2="540" y2="90" strokeDasharray="3,3" />
            <line x1="0" y1="180" x2="540" y2="180" strokeDasharray="3,3" />
            <line x1="0" y1="270" x2="540" y2="270" strokeDasharray="3,3" />
            <line x1="135" y1="0" x2="135" y2="360" strokeDasharray="3,3" />
            <line x1="270" y1="0" x2="270" y2="360" strokeDasharray="3,3" />
            <line x1="405" y1="0" x2="405" y2="360" strokeDasharray="3,3" />
          </g>

          {/* 1. Track Outer Kerb Glow */}
          <path
            d={trackPath}
            fill="none"
            stroke="#F47C20"
            strokeWidth="32"
            strokeOpacity="0.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Track Base Asphalt Surface */}
          <path
            d={trackPath}
            fill="none"
            stroke="url(#trackGrad)"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 3. Racing Kerbs (Red/White alternating dash) */}
          <path
            d={trackPath}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth="24"
            strokeDasharray="6,12"
            strokeOpacity="0.25"
            strokeLinecap="butt"
          />

          {/* 4. Track Center Racing Line */}
          <path
            d={trackPath}
            fill="none"
            stroke="#F47C20"
            strokeWidth="2"
            strokeDasharray="4,6"
            strokeOpacity="0.75"
          />

          {/* 5. Start / Finish Gantry Checkered Line */}
          <line
            x1="180"
            y1="298"
            x2="180"
            y2="322"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="2,2"
          />

          {/* Sector Callout Markers */}
          {/* Turn 1 */}
          <circle cx="480" cy="245" r="4" fill="#F47C20" />
          <text x="495" y="249" fill="#888888" fontSize="9" fontFamily="monospace" fontWeight="bold">T1 // APEX</text>

          {/* Turn 4 Hairpin */}
          <circle cx="460" cy="85" r="4" fill="#F47C20" />
          <text x="475" y="89" fill="#888888" fontSize="9" fontFamily="monospace" fontWeight="bold">T4 // HAIRPIN</text>

          {/* High Speed Chicane */}
          <circle cx="90" cy="110" r="4" fill="#F47C20" />
          <text x="35" y="114" fill="#888888" fontSize="9" fontFamily="monospace" fontWeight="bold">CHICANE</text>

          {/* Start/Finish Label */}
          <text x="135" y="340" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">START / FINISH</text>

          {/* 6. CONTINUOUSLY ANIMATED PRO KART */}
          <g filter="url(#glow)">
            {/* Trailing Speed Jet */}
            <circle r="6" fill="#F47C20" opacity="0.4" />
            
            {/* Main Kart Beacon */}
            <circle r="4.5" fill="#FFFFFF" stroke="#F47C20" strokeWidth="2" />
            
            {/* Mini Directional Arrow / Cockpit */}
            <polygon points="5,0 -3,-3 -1,0 -3,3" fill="#0A0A0A" />

            {/* Seamless Infinite GPU Trajectory Movement */}
            <animateMotion
              dur="8.5s"
              repeatCount="indefinite"
              rotate="auto"
              path={trackPath}
            />
          </g>
        </svg>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#222222] text-center font-mono">
        <div>
          <span className="text-[8px] text-[#777777] uppercase block">TOTAL DISTANCE</span>
          <span className="text-xs font-bold text-white">~600 METERS</span>
        </div>
        <div className="border-x border-[#222222]">
          <span className="text-[8px] text-[#777777] uppercase block">TURNS / APEXES</span>
          <span className="text-xs font-bold text-[#F47C20]">11 APEXES</span>
        </div>
        <div>
          <span className="text-[8px] text-[#777777] uppercase block">CHASSIS TRACKING</span>
          <span className="text-xs font-bold text-[#00E5FF]">LIVE RACEFACER</span>
        </div>
      </div>

    </div>
  );
};

export default TrackCircuitVisual;
