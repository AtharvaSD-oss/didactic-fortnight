import React from 'react';
import WhoWeAreSection from '../components/WhoWeAreSection';

const AboutPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#EE3124] uppercase tracking-widest">// ABOUT KARTOMANIA</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-gray-950 uppercase tracking-tight">
          NORTHERN INDIA'S PREMIER <span className="text-[#EE3124]">720M OUTDOOR CIRCUIT</span>
        </h1>
        <p className="text-sm font-mono text-gray-600 max-w-2xl mx-auto">
          The only racing track owned, run, and maintained by active national racing champions.
        </p>
      </div>

      <WhoWeAreSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default AboutPage;
