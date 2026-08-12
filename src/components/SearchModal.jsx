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
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -15 }}
          className="relative w-full max-w-xl bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-2xl text-[#111111]"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-4">
            <Search className="w-4 h-4 text-[#080808]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-[#111111] placeholder-[#888888] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111111] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="py-4 space-y-2 max-h-80 overflow-y-auto">
            <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block mb-2 font-bold">
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
                  className="w-full text-left flex items-center justify-between p-3 rounded-lg bg-[#F9F9F9] hover:bg-[#F0F0F0] border border-[#E5E5E5] hover:border-[#080808] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-[#080808]" />
                    <span className="text-xs font-mono text-[#111111] group-hover:text-[#080808] font-semibold transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#080808] font-bold">GO &rarr;</span>
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
