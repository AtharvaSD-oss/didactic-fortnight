import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Zap, Trophy, Shield, MapPin, Gauge } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "Pro Kart Specs & Telemetry", icon: Gauge, section: "karts" },
  { title: "Track Layout & Lap Records", icon: MapPin, section: "track" },
  { title: "Live Leaderboard Rankings", icon: Trophy, section: "leaderboard" },
  { title: "Pitstop Cafe Menu", icon: Zap, section: "cafe" },
];

const SearchModal = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0d0d14] border border-[#FF4500]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(255,69,0,0.25)] text-white overflow-hidden"
        >
          {/* Header & Input */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <Search className="w-5 h-5 text-[#FF4500]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH KARTS, TRACKS, LAP RECORDS, CAFE..."
              className="w-full bg-transparent text-sm font-mono tracking-wider text-white placeholder-gray-500 focus:outline-none uppercase"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Shortcuts */}
          <div className="mt-6">
            <p className="text-[10px] font-mono tracking-widest text-[#FF4500] uppercase mb-3">
              // TELEMETRY QUICK SEARCH
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {QUICK_SEARCHES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigate(item.section);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#141420] hover:bg-[#FF4500]/15 border border-white/5 hover:border-[#FF4500]/50 transition-all text-left group"
                  >
                    <div className="p-2 rounded-lg bg-[#FF4500]/20 text-[#FF4500] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-gray-200 group-hover:text-white">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">ESC</kbd> to exit</span>
            <span className="text-[#FF4500]">KARTOMANIA F1 OS v2.6</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
