import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MessageCircle, Phone, Clock, MapPin, Mail, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";
const WHATSAPP_PRIMARY = "919717548897";

const BookingModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A0A0A', '#F47C20', '#FF9A4D', '#FFFFFF']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-white border-2 border-[#F47C20] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#111111] text-left overflow-hidden my-auto max-h-[90vh] flex flex-col justify-between"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors z-10 cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 pb-4 border-b border-[#EAEAEA]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#FFF0E5] border border-[#F47C20]/30 text-[#F47C20] font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <Zap className="w-3 h-3 text-[#F47C20]" /> OFFICIAL TRACK BOOKING
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A] uppercase tracking-tight">
              RESERVE YOUR <span className="text-[#F47C20]">RACING SESSION</span>
            </h3>
            <p className="text-xs text-[#666666] font-sans">
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
              className="group flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A] hover:bg-[#F47C20] text-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/15 text-white">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>RaceFacer Kiosk Booking</span>
                    <span className="px-1.5 py-0.5 rounded-sm bg-white text-[#0A0A0A] font-mono text-[9px] font-bold">INSTANT</span>
                  </div>
                  <div className="text-[11px] font-sans text-gray-200">
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
              className="group flex items-center justify-between p-4 rounded-xl bg-[#F9F9F9] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#25D366] transition-all text-[#111111]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#25D366] text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>WhatsApp Direct Booking</span>
                    <span className="px-1.5 py-0.5 rounded-sm bg-[#25D366]/20 text-[#128C7E] font-mono text-[9px] font-bold">FASTEST</span>
                  </div>
                  <div className="text-[11px] font-sans text-[#666666]">
                    Chat with our track team: +91 97175 48897 / +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#0A0A0A] group-hover:text-[#25D366] group-hover:translate-x-1 transition-transform">
                CHAT &rarr;
              </span>
            </a>

            {/* 3. Phone Call Booking */}
            <a
              href="tel:+919717548897"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#F9F9F9] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] transition-all text-[#111111]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0A0A0A] text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold uppercase tracking-wider">
                    Call Track Hotline
                  </div>
                  <div className="text-[11px] font-sans text-[#666666]">
                    +91 97175 48897 &bull; +91 95604 92876
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#0A0A0A] group-hover:text-[#F47C20] group-hover:translate-x-1 transition-transform">
                CALL &rarr;
              </span>
            </a>

            {/* 4. Corporate & Group Inquiries */}
            <a
              href="mailto:kartomania.ggn@gmail.com?subject=Corporate%20/%20Group%20Booking%20Inquiry%20-%20Kartomania"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#F9F9F9] hover:bg-[#FFF0E5] border border-[#E5E5E5] hover:border-[#F47C20] transition-all text-[#111111]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#E5E5E5] text-[#111111]">
                  <Mail className="w-3.5 h-3.5 text-[#F47C20]" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold uppercase">
                    Corporate Events & Bulk Sessions
                  </div>
                  <div className="text-[10px] font-sans text-[#888888]">
                    kartomania.ggn@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#888888] group-hover:text-[#F47C20] group-hover:translate-x-1 transition-transform">
                EMAIL &rarr;
              </span>
            </a>
          </div>

          {/* Footer Info: Hours & Location */}
          <div className="pt-4 border-t border-[#EAEAEA] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono text-[#888888]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F47C20] shrink-0" />
              <span>Open all 7 days: 2 PM – 11 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F47C20] shrink-0" />
              <span>Entertainland Mall, Sec 83</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
