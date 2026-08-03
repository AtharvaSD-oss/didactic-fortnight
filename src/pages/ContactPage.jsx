import React from 'react';
import { ContactSection } from '../components/Sections';

const ContactPage = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// ARENA LOCATION & HOURS</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          CONTACT <span className="text-[#FF4500]">KARTOMANIA</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          Visit us at Entertainland Mall, Manesar, Gurgaon or reach out via our direct hotlines.
        </p>
      </div>

      <ContactSection onOpenBooking={onOpenBooking} />
    </div>
  );
};

export default ContactPage;
