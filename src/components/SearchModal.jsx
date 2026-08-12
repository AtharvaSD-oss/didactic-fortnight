import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Trophy, Shield, MapPin, Gauge, Camera } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "Pro Kart Specs & Telemetry", icon: Gauge, path: "karts" },
  { title: "Weekday & Weekend Rates", icon: Trophy, path: "pricing" },
  { title: "Real Track & Racing Photo Gallery", icon: Camera, path: "gallery" },
  { title: "Entertainland Mall Venue Address", icon: MapPin, path: "contact" },
  { title: "16-Bit 2D Arcade Simulator", icon: Shield, path: "game" },
  { title: "What's New Special Offers", icon: Trophy, path: "whats-new" },
  { title: "Know Our Founder - Rohit Khanna", icon: Shield, path: "founder" },
];

const SearchModal = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = QUICK_SEARCHES.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl bg-[#0B0D0F] border border-white/10 rounded-2xl p-6 shadow-2xl text-[#F4F1EA]"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Search className="w-5 h-5 text-[#C9A45C]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-[#F4F1EA] placeholder-[#837D73] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#15181C] text-[#B8B1A5] hover:text-[#F4F1EA] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="py-4 space-y-2 max-h-80 overflow-y-auto">
            <span className="text-[10px] font-mono text-[#837D73] uppercase tracking-widest block mb-2 font-bold">
              QUICK TELEMETRY LINKS
            </span>

            {filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.path);
                    onClose();
                  }}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl bg-[#15181C] hover:bg-[#1C2128] border border-white/5 hover:border-[#C9A45C]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-[#C9A45C]" />
                    <span className="text-xs font-mono text-[#F4F1EA] group-hover:text-[#C9A45C] font-semibold transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C9A45C] font-bold">GO &rarr;</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
