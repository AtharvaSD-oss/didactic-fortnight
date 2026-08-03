import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Flame } from 'lucide-react';

import confetti from 'canvas-confetti';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";

const BookingModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF4500', '#FF1E00', '#FFFFFF', '#FFAA00']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-md bg-[#0c0c14] border border-[#FF4500]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(255,69,0,0.3)] text-white text-center overflow-hidden"
        >
          {/* Top F1 Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4500] via-[#FF1E00] to-[#FF8C00]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="py-4 space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#FF1E00] text-white shadow-[0_0_25px_rgba(255,69,0,0.5)]">
              <Flame className="w-7 h-7" />
            </div>

            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#FF4500] to-[#FF1E00] text-white shadow-[0_0_30px_rgba(255,69,0,0.5)] hover:shadow-[0_0_40px_rgba(255,69,0,0.8)] transition-all font-display font-bold text-sm tracking-wider uppercase"
            >
              <span>OPEN RACEFACER KIOSK</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="text-[11px] font-mono text-gray-400 break-all">
              {RACEFACER_URL}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
