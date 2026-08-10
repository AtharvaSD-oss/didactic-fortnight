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
        colors: ['#EE3124', '#FFD700', '#0066CC', '#D32F2F']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-gray-900 text-center overflow-hidden"
        >
          {/* Top F1 Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EE3124] via-[#FFD700] to-[#0066CC]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="py-4 space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EE3124] to-[#D32F2F] text-white shadow-md">
              <Flame className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-gray-950 uppercase">RACEFACER BOOKING KIOSK</h3>
              <p className="text-xs font-mono text-gray-600">Reserve your track session directly on our official kiosk.</p>
            </div>

            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#EE3124] to-[#D32F2F] text-white shadow-md hover:shadow-lg transition-all font-display font-bold text-sm tracking-wider uppercase"
            >
              <span>OPEN RACEFACER KIOSK</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="text-[11px] font-mono text-gray-500 break-all">
              {RACEFACER_URL}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
