import React from 'react';
import GameCanvas from '../components/GameCanvas';

const GamePage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// 16-BIT RETRO RACER</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          PRO ARCADE <span className="text-[#FF4500]">SIMULATOR</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Test your apex timing on our SNES-inspired 2D kart racing game before taking the real track!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <GameCanvas />
      </div>
    </div>
  );
};

export default GamePage;
