import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Trophy, Shield, MapPin, Gauge, Sparkles } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "Pro Kart Specs & Telemetry", icon: Gauge, path: "who-we-are" },
  { title: "Weekday & Weekend Rates", icon: Trophy, path: "pricing" },
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
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl bg-[#0e1430] border border-[#00d9ff]/30 rounded-3xl p-6 shadow-[0_25px_80px_rgba(0,217,255,0.2)] text-white"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <Search className="w-5 h-5 text-[#00d9ff]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/60 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="py-4 space-y-2 max-h-80 overflow-y-auto">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00d9ff] uppercase tracking-widest mb-2 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>QUICK TELEMETRY HUD LINKS</span>
            </div>

            {filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.path);
                    onClose();
                  }}
                  className="w-full text-left flex items-center justify-between p-3.5 rounded-2xl bg-black/40 hover:bg-[#00d9ff]/10 border border-gray-800 hover:border-[#00d9ff]/50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-[#00d9ff]" />
                    <span className="text-xs font-mono text-gray-200 group-hover:text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d9ff] font-bold group-hover:translate-x-1 transition-transform">GO &rarr;</span>
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
