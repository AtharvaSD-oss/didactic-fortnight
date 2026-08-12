import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Trophy, Shield, MapPin, Gauge, Camera } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "Pro Kart Specs & Telemetry", icon: Gauge, path: "who-we-are" },
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
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl text-gray-900"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <Search className="w-5 h-5 text-[#EE3124]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-gray-900 placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-100 text-gray-600 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="py-4 space-y-2 max-h-80 overflow-y-auto">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2 font-bold">
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
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#EE3124]/10 border border-gray-200 hover:border-[#EE3124]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-[#EE3124]" />
                    <span className="text-xs font-mono text-gray-800 group-hover:text-black font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EE3124] font-bold">GO &rarr;</span>
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
