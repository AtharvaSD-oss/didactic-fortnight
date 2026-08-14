import React from 'react';

const TrackCircuitVisual = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto rounded-2xl bg-white border-2 border-[#E5E5E5] hover:border-[#F47C20] p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden text-left">
      {/* Track Image Frame */}
      <div className="relative w-full aspect-[1024/819] max-h-[380px] sm:max-h-[420px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
        <img
          src="/track-map-official.jpg"
          alt="Kartomania Official 600m Track Map - 11 Turns Clockwise"
          className="w-full h-full object-contain filter contrast-102"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TrackCircuitVisual;
