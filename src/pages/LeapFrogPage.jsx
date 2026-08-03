import React from 'react';
import { LeapFrogSection } from '../components/Sections';

const LeapFrogPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// MOTORSPORT DIVISION</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          LEAP FROG <span className="text-[#FF4500]">RACING</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Our official professional karting academy and championship racing team.
        </p>
      </div>

      <LeapFrogSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default LeapFrogPage;
