import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_URL = "https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session.";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip Label on Hover */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-gray-900/90 text-white font-sans text-xs font-semibold shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none backdrop-blur-md">
        Chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Kartomania on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-[0_6px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing radar wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
