import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Trophy, Shield, MapPin, Gauge } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "Pro Kart Specs & Telemetry", icon: Gauge, path: "/about" },
  { title: "Weekday & Weekend Rates", icon: Trophy, path: "/pricing" },
  { title: "Entertainland Mall Venue Address", icon: MapPin, path: "/contact" },
  { title: "16-Bit 2D Arcade Simulator", icon: Shield, path: "/game" },
  { title: "What's New Special Offers", icon: Trophy, path: "/whats-new" },
  { title: "Know Our Founder - Rohit Khanna", icon: Shield, path: "/founder" },
];

const SearchModal = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = QUICK_SEARCHES.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl bg-[#0c0c14] border border-[#FF4500]/50 rounded-2xl p-6 shadow-[0_0_60px_rgba(255,69,0,0.3)] text-white"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Search className="w-5 h-5 text-[#FF4500]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="py-4 space-y-2 max-h-80 overflow-y-auto">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
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
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-[#FF4500]/20 border border-white/5 hover:border-[#FF4500]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-[#FF4500]" />
                    <span className="text-xs font-mono text-gray-200 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FF4500]">GO &rarr;</span>
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
