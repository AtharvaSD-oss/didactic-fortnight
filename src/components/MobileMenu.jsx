import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ChevronRight, Zap } from 'lucide-react';
import { InstagramIcon } from './Icons';
import MagneticButton from './MagneticButton';

const NAV_ITEMS = [
  { name: 'Home', path: '/', tag: '01' },
  { name: 'About', path: '/about', tag: '02' },
  { name: 'Leap Frog', path: '/leap-frog', tag: '03' },
  { name: "What's New", path: '/whats-new', tag: '04' },
  { name: 'Pricing', path: '/pricing', tag: '05' },
  { name: 'Arcade Game', path: '/game', tag: '06' },
  { name: 'Gallery', path: '/gallery', tag: '07' },
  { name: 'Founder', path: '/founder', tag: '08' },
  { name: 'Contact', path: '/contact', tag: '09' },
];

const drawerVariants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.45,
      ease: [0.32, 0, 0.67, 0],
      when: 'afterChildren'
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 40 },
  open: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  activeSection, 
  onNavigate, 
  onOpenBooking 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={drawerVariants}
          className="fixed inset-0 z-50 flex flex-col bg-[#08080d] text-white overflow-hidden lg:hidden border-l border-[#FF4500]/30"
        >
          {/* Carbon Fiber Background Pattern */}
          <div className="absolute inset-0 bg-carbon opacity-60 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF4500]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF1E00]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar in Drawer */}
          <div className="relative z-10 flex items-center justify-between px-6 h-[80px] border-b border-white/10">
            <img 
              src="/logo.png" 
              alt="Kartomania Logo" 
              className="h-10 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,69,0,0.4)]" 
            />

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-white transition-all hover:rotate-90 duration-300"
            >
              <X className="w-6 h-6 text-[#FF4500]" />
            </button>
          </div>

          {/* Staggered Navigation Items */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FF4500]" />
                NAVIGATION TELEMETRY
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.path;
                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <button
                      onClick={() => {
                        onNavigate(item.path);
                        onClose();
                      }}
                      className={`
                        group w-full flex items-center justify-between py-3 px-4 rounded-xl border transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r from-[#FF4500]/20 to-transparent border-[#FF4500]/60 text-white shadow-[0_0_20px_rgba(255,69,0,0.2)]' 
                          : 'bg-white/[0.02] border-white/5 hover:border-[#FF4500]/40 text-gray-300 hover:text-white hover:bg-white/[0.05]'
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-semibold text-[#FF4500]/70 group-hover:text-[#FF4500]">
                          {item.tag}
                        </span>
                        <span className="font-display text-lg font-bold tracking-widest uppercase">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#FF4500] shadow-[0_0_8px_#FF4500]" />
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#FF4500] translate-x-1' : 'text-gray-600 group-hover:text-white group-hover:translate-x-1'}`} />
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Icons & CTA Footer */}
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919717548897"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#FF4500]" />
                  </a>

                  <a
                    href="https://instagram.com/kartomania.in"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-gray-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5 text-[#FF4500]" />
                  </a>
                </div>

                <span className="text-[11px] font-mono text-gray-400">IND // PRO CIRCUIT</span>
              </div>

              <MagneticButton
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full justify-center py-4 text-sm"
              >
                Book Your Race
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
