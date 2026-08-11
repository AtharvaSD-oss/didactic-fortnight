import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Flame, MessageCircle, Phone, Clock, MapPin, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";
const WHATSAPP_PRIMARY = "919717548897";

const BookingModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#EE3124', '#FFD700', '#0066CC', '#D32F2F']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-2xl text-gray-900 text-left overflow-hidden my-auto max-h-[90vh] flex flex-col justify-between"
        >
          {/* Top Racing Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors z-10"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 pb-3 border-b border-gray-100">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EE3124]/10 text-[#EE3124] font-mono text-[10px] font-bold uppercase tracking-wider">
              <Flame className="w-3 h-3" /> OFFICIAL TRACK BOOKING PORTAL
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-gray-950 uppercase tracking-tight">
              RESERVE YOUR <span className="text-[#EE3124]">RACING SESSION</span>
            </h3>
            <p className="text-xs text-gray-600 font-sans">
              Choose your preferred booking channel below for instant track slot confirmation.
            </p>
          </div>

          {/* Booking Options List */}
          <div className="py-4 space-y-3 overflow-y-auto pr-1">
            {/* 1. Official RaceFacer Slot Kiosk */}
            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#EE3124] to-[#D32F2F] text-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/20 text-white">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>RaceFacer Kiosk Booking</span>
                    <span className="px-1.5 py-0.5 rounded bg-white text-[#EE3124] font-mono text-[9px] font-black">INSTANT</span>
                  </div>
                  <div className="text-[11px] font-sans text-white/90">
                    Live slot selection, telemetry profile & leaderboard timing
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold uppercase group-hover:translate-x-1 transition-transform">
                BOOK &rarr;
              </span>
            </a>

            {/* 2. Direct WhatsApp Booking */}
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Kartomania! I would like to book a karting session at Entertainland Mall.")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gray-50 hover:bg-green-50/70 border border-gray-200 hover:border-green-400 transition-all text-gray-900 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-green-500 text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>WhatsApp Direct Booking</span>
                    <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-800 font-mono text-[9px] font-bold">FASTEST</span>
                  </div>
                  <div className="text-[11px] font-sans text-gray-600">
                    Chat with our track marshalls: +91 97175 48897 / +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-green-600 group-hover:translate-x-1 transition-transform">
                CHAT &rarr;
              </span>
            </a>

            {/* 3. Phone Call Booking */}
            <a
              href="tel:+919717548897"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gray-50 hover:bg-blue-50/70 border border-gray-200 hover:border-blue-400 transition-all text-gray-900 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0066CC] text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider">
                    Call Track Hotline
                  </div>
                  <div className="text-[11px] font-sans text-gray-600">
                    +91 97175 48897 &bull; +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#0066CC] group-hover:translate-x-1 transition-transform">
                CALL &rarr;
              </span>
            </a>

            {/* 4. Corporate & Group Inquiries */}
            <a
              href="mailto:kartomania.ggn@gmail.com?subject=Corporate%20/%20Group%20Booking%20Inquiry%20-%20Kartomania"
              className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all text-gray-900"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gray-800 text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold uppercase">
                    Corporate Events & Bulk Sessions
                  </div>
                  <div className="text-[10px] font-sans text-gray-600">
                    kartomania.ggn@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-700 group-hover:translate-x-1 transition-transform">
                EMAIL &rarr;
              </span>
            </a>
          </div>

          {/* Footer Info: Hours & Location */}
          <div className="pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono text-gray-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#EE3124] shrink-0" />
              <span>Open all 7 days: 2 PM – 11 PM (Sat–Sun 1 PM)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0066CC] shrink-0" />
              <span>Entertainland Mall, Sec 83, Gurugram</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
