import React from 'react';
import Timeline from '../components/Timeline';

const FounderPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
        <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// FOUNDER PROFILE</span>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
          MR. ROHIT <span className="text-[#FF4500]">KHANNA</span>
        </h1>
        <p className="text-sm font-mono text-gray-400 max-w-2xl mx-auto">
          2+ Decades of Indian Motorsport excellence, Porsche Lead Instructor credentials, and national wins.
        </p>
      </div>

      <Timeline />
    </div>
  );
};

export default FounderPage;
