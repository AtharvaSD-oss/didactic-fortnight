import React from 'react';
import WhoWeAreSection from '../components/WhoWeAreSection';

const AboutPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// ABOUT KARTOMANIA</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          NORTHERN INDIA'S PREMIER <span className="text-[#FF4500]">PRO CIRCUIT</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Learn about our world-class indoor go-karting circuit, Sodi race fleet, and motorsport legacy.
        </p>
      </div>

      <WhoWeAreSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default AboutPage;
