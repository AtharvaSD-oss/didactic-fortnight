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
        colors: ['#C9A45C', '#EE3124', '#F4F1EA', '#DFBA70']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#0B0D0F] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl text-[#F4F1EA] text-left overflow-hidden my-auto max-h-[90vh] flex flex-col justify-between"
        >
          {/* Top Racing Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A45C] via-[#EE3124] to-[#C9A45C]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#F4F1EA] transition-colors z-10 cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-mono text-[10px] font-bold uppercase tracking-wider">
              <Flame className="w-3 h-3" /> OFFICIAL TRACK BOOKING PORTAL
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-[#F4F1EA] uppercase tracking-tight">
              RESERVE YOUR <span className="text-[#C9A45C]">RACING SESSION</span>
            </h3>
            <p className="text-xs text-[#B8B1A5] font-sans">
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
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#EE3124] via-[#EA281B] to-[#D32F2F] text-white shadow-xl hover:shadow-2xl transition-all"
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
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#25D366]/50 transition-all text-[#F4F1EA] shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#25D366] text-black">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>WhatsApp Direct Booking</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] font-mono text-[9px] font-bold">FASTEST</span>
                  </div>
                  <div className="text-[11px] font-sans text-[#B8B1A5]">
                    Chat with our track marshalls: +91 97175 48897 / +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#25D366] group-hover:translate-x-1 transition-transform">
                CHAT &rarr;
              </span>
            </a>

            {/* 3. Phone Call Booking */}
            <a
              href="tel:+919717548897"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C]/50 transition-all text-[#F4F1EA] shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C9A45C] text-[#0B0D0F]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider">
                    Call Track Hotline
                  </div>
                  <div className="text-[11px] font-sans text-[#B8B1A5]">
                    +91 97175 48897 &bull; +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#C9A45C] group-hover:translate-x-1 transition-transform">
                CALL &rarr;
              </span>
            </a>

            {/* 4. Corporate & Group Inquiries */}
            <a
              href="mailto:kartomania.ggn@gmail.com?subject=Corporate%20/%20Group%20Booking%20Inquiry%20-%20Kartomania"
              className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-white/20 transition-all text-[#F4F1EA]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0B0D0F] text-[#B8B1A5] border border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold uppercase">
                    Corporate Events & Bulk Sessions
                  </div>
                  <div className="text-[10px] font-sans text-[#837D73]">
                    kartomania.ggn@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#B8B1A5] group-hover:translate-x-1 transition-transform">
                EMAIL &rarr;
              </span>
            </a>
          </div>

          {/* Footer Info: Hours & Location */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono text-[#837D73]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
              <span>Open all 7 days: 2 PM – 11 PM (Sat–Sun 1 PM)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EE3124] shrink-0" />
              <span>Entertainland Mall, Sec 83, Gurugram</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
