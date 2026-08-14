import React, { useState } from 'react';
import { Maximize2, X, Download } from 'lucide-react';

const TrackCircuitVisual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full rounded-2xl bg-white border-2 border-[#E5E5E5] hover:border-[#F47C20] p-2 sm:p-4 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group text-left">
        {/* Track Image Frame */}
        <div className="relative w-full aspect-[1024/819] rounded-xl overflow-hidden bg-white flex items-center justify-center cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <img
            src="/track-map-official.jpg"
            alt="Kartomania Official 600m Track Map - 11 Turns Clockwise"
            className="w-full h-full object-contain filter contrast-102 group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
          />

          {/* Quick Expand Button Hover Tag */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-[#F47C20] text-white font-mono text-[10px] sm:text-xs font-bold uppercase backdrop-blur-md transition-all shadow-md cursor-pointer"
              aria-label="Expand Track Map Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>EXPAND MAP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F47C20] flex flex-col animate-in zoom-in-95 duration-300"
          >
            {/* Modal Header */}
            <div className="p-4 px-6 border-b border-[#EAEAEA] flex items-center justify-between bg-[#FDFDFD]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F47C20] animate-pulse" />
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0A0A0A] uppercase tracking-wider">
                  KARTOMANIA OFFICIAL TRACK MAP &bull; ~600M OUTDOOR CIRCUIT
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="/track-map-official.jpg"
                  download="Kartomania-Track-Map.jpg"
                  className="p-2 rounded-full hover:bg-gray-100 text-[#555555] hover:text-[#F47C20] transition-colors"
                  title="Download Official Track Map"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-[#555555] hover:text-[#0A0A0A] transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="p-4 sm:p-8 bg-white flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src="/track-map-official.jpg"
                alt="Kartomania Official 600m Track Map"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackCircuitVisual;
