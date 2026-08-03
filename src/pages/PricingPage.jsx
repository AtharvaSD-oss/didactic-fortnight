import React from 'react';
import { PricingSection } from '../components/Sections';

const PricingPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// OFFICIAL RATES & PACKAGES</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          SESSION <span className="text-[#FF4500]">PRICING</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Transparent rates for Mon–Thu Weekday sessions and Fri–Sun Weekend racing.
        </p>
      </div>

      <PricingSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default PricingPage;
