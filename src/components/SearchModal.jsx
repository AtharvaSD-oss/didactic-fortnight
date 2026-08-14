import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Trophy, MapPin, Gauge, Flag, Sparkles } from 'lucide-react';

const QUICK_SEARCHES = [
  { title: "270cc Sodi RT10 Pro Kart Specs", icon: Gauge, path: "/track" },
  { title: "Official Karting Session Rates", icon: Trophy, path: "/race" },
  { title: "600m Outdoor Grand Prix Track", icon: Flag, path: "/track" },
  { title: "Entertainland Mall Location & Directions", icon: MapPin, path: "/contact" },
  { title: "The Kartomania Experience", icon: Sparkles, path: "/experience" },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filtered = QUICK_SEARCHES.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -15 }}
          className="relative w-full max-w-xl bg-white border-2 border-[#F47C20] rounded-2xl p-6 shadow-2xl text-[#111111] text-left"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-4">
            <Search className="w-4 h-4 text-[#F47C20]" />
            <input
              type="text"
              autoFocus
              placeholder="Search Kartomania telemetry, rates, track specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-mono text-[#0A0A0A] placeholder-[#888888] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Suggestions List */}
          <div className="mt-4 space-y-2">
            <span className="text-[10px] font-mono text-[#F47C20] uppercase font-bold tracking-widest block mb-2">
              // SEARCH NAVIGATION
            </span>
            {filtered.length > 0 ? (
              filtered.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item.path)}
                    className="w-full p-3 rounded-lg bg-[#F9F9F9] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] flex items-center justify-between transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white border border-[#E5E5E5] text-[#F47C20] group-hover:bg-[#F47C20] group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0A0A0A] group-hover:text-[#F47C20] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">
                      GO &rarr;
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center font-mono text-xs text-[#888888]">
                No matching telemetry found.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
