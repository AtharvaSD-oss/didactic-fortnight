import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Flag, CheckCircle, Flame, ExternalLink } from 'lucide-react';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";

const BookingModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    session: 'pro-sprint',
    drivers: '1',
    date: '2026-08-01',
    time: '18:00'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-lg bg-[#0c0c14] border border-[#FF4500]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(255,69,0,0.3)] text-white overflow-hidden"
        >
          {/* Top F1 Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4500] via-[#FF1E00] to-[#FF8C00]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF4500]/20 text-[#FF4500] mb-2 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
                GRID POSITION CONFIRMED!
              </h3>
              <p className="text-sm font-mono text-gray-300 max-w-xs mx-auto">
                Your reservation at Kartomania India has been locked in. Redirecting to official RaceFacer portal...
              </p>
              <a
                href={RACEFACER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4500] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#FF1E00] transition-colors"
              >
                OPEN RACEFACER KIOSK DIRECTLY <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-[#FF4500] font-mono text-xs tracking-widest uppercase mb-1">
                <Flame className="w-4 h-4" /> // RACE RESERVATION TERMINAL
              </div>
              <h2 className="text-2xl font-display font-bold tracking-wider uppercase text-white mb-4">
                BOOK YOUR RACE SESSION
              </h2>

              {/* Direct Official RaceFacer Kiosk Banner */}
              <a
                href={RACEFACER_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 mb-6 rounded-xl bg-gradient-to-r from-[#FF4500]/20 via-[#FF1E00]/10 to-transparent border border-[#FF4500]/50 hover:border-[#FF4500] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FF4500] text-white group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-display font-bold text-white uppercase tracking-wider">
                      DIRECT RACEFACER KIOSK PORTAL
                    </div>
                    <div className="text-[10px] font-mono text-gray-400">
                      Instant live slot selection & telemetry registration
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#FF4500] group-hover:translate-x-1 transition-transform">
                  GO &rarr;
                </span>
              </a>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                    Driver Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Max Verstappen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#141420] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-mono text-white focus:border-[#FF4500] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                      Session Type
                    </label>
                    <select
                      value={formData.session}
                      onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                      className="w-full bg-[#141420] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-mono text-white focus:border-[#FF4500] focus:outline-none"
                    >
                      <option value="pro-sprint">Pro Sprint (10 Laps)</option>
                      <option value="endurance">Endurance Grand Prix (25 Laps)</option>
                      <option value="vip-track">VIP Private Track Rental</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                      Drivers Count
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={formData.drivers}
                      onChange={(e) => setFormData({ ...formData, drivers: e.target.value })}
                      className="w-full bg-[#141420] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-mono text-white focus:border-[#FF4500] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#141420] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-mono text-white focus:border-[#FF4500] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                      Time Slot
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#141420] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-mono text-white focus:border-[#FF4500] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-[#FF4500] to-[#FF1E00] text-white hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Flag className="w-4 h-4" />
                  CONFIRM GRID RESERVATION
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
