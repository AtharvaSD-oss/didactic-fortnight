import React from 'react';
import { WhatsNewSection } from '../components/Sections';

const WhatsNewPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// SPECIAL OFFERS & EVENTS</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          WHAT'S <span className="text-[#FF4500]">NEW</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Explore our latest weekday specials, private track bookings, and happy hour sessions.
        </p>
      </div>

      <WhatsNewSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default WhatsNewPage;
