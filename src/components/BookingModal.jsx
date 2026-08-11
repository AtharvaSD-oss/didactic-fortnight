import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MessageCircle, Phone, Clock, MapPin, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";
const WHATSAPP_PRIMARY = "919717548897";

const BookingModal = ({ isOpen, onClose }) => {

  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00d9ff', '#d4af37', '#EE3124', '#00f2fe']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-[#0e1430] border border-[#00d9ff]/30 rounded-3xl p-5 sm:p-7 shadow-[0_25px_80px_rgba(0,217,255,0.2)] text-white text-left overflow-hidden my-auto max-h-[92vh] flex flex-col justify-between"
        >
          {/* Top Racing Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#EE3124]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-[#EE3124] text-gray-300 hover:text-white border border-white/20 transition-colors z-10 cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 pb-3 border-b border-gray-800">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#00d9ff]/15 text-[#00d9ff] border border-[#00d9ff]/30 font-mono text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> OFFICIAL ANTIGRAVITY BOOKING PORTAL
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
              RESERVE YOUR <span className="text-[#00d9ff]">TRACK SESSION</span>
            </h3>
            <p className="text-xs text-gray-300 font-sans">
              Instant race slot confirmation on India's premier 720m outdoor asphalt Grand Prix circuit.
            </p>
          </div>

          {/* Booking Options List */}
          <div className="py-4 space-y-3 overflow-y-auto pr-1">
            {/* 1. Official RaceFacer Slot Kiosk */}
            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#00d9ff]/20 via-[#0e1430] to-[#00d9ff]/10 border border-[#00d9ff]/50 hover:border-[#00d9ff] text-white shadow-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/40">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>RaceFacer Kiosk Booking</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#00d9ff] text-black font-mono text-[9px] font-black">INSTANT HUD</span>
                  </div>
                  <div className="text-[11px] font-sans text-gray-300">
                    Live slot selection, telemetry profile & leaderboard timing
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold uppercase text-[#00d9ff] group-hover:translate-x-1 transition-transform">
                BOOK &rarr;
              </span>
            </a>

            {/* 2. Direct WhatsApp Booking */}
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Kartomania! I would like to book a karting session at Entertainland Mall.")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-black/40 hover:bg-green-950/40 border border-gray-800 hover:border-green-500/60 transition-all text-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-green-500/20 text-green-400 border border-green-500/40">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>WhatsApp Direct Booking</span>
                    <span className="px-1.5 py-0.5 rounded bg-green-900/60 text-green-400 border border-green-500/30 font-mono text-[9px] font-bold">FASTEST</span>
                  </div>
                  <div className="text-[11px] font-sans text-gray-400">
                    Chat with track marshalls: +91 97175 48897 / +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-green-400 group-hover:translate-x-1 transition-transform">
                CHAT &rarr;
              </span>
            </a>

            {/* 3. Phone Call Booking */}
            <a
              href="tel:+919717548897"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-black/40 hover:bg-blue-950/40 border border-gray-800 hover:border-[#00d9ff]/50 transition-all text-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider">
                    Call Track Hotline
                  </div>
                  <div className="text-[11px] font-sans text-gray-400">
                    +91 97175 48897 &bull; +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#00d9ff] group-hover:translate-x-1 transition-transform">
                CALL &rarr;
              </span>
            </a>

            {/* 4. Corporate & Group Inquiries */}
            <a
              href="mailto:kartomania.ggn@gmail.com?subject=Corporate%20/%20Group%20Booking%20Inquiry%20-%20Kartomania"
              className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-black/40 hover:bg-gray-850 border border-gray-800 hover:border-[#d4af37]/50 transition-all text-white"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold uppercase">
                    Corporate Events & Bulk Sessions
                  </div>
                  <div className="text-[10px] font-sans text-gray-400">
                    kartomania.ggn@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                EMAIL &rarr;
              </span>
            </a>
          </div>

          {/* Footer Info: Hours & Location */}
          <div className="pt-3 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00d9ff] shrink-0" />
              <span>Open 7 days: 2 PM – 11 PM (Sat–Sun 1 PM)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>Entertainland Mall, Sec 83, Gurugram</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
