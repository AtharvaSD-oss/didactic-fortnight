import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import MagneticButton from './MagneticButton';

const NAV_ITEMS = [
  { name: 'Home', id: 'home', tag: '01' },
  { name: 'About', id: 'who-we-are', tag: '02' },
  { name: 'Leap Frog', id: 'leap-frog', tag: '03' },
  { name: "What's New", id: 'whats-new', tag: '04' },
  { name: 'Pricing', id: 'pricing', tag: '05' },
  { name: 'Arcade Game', id: 'game', tag: '06' },
  { name: 'Gallery', id: 'gallery', tag: '07' },
  { name: 'Reviews', id: 'testimonials', tag: '08' },
  { name: 'Founder', id: 'founder', tag: '09' },
  { name: 'Contact', id: 'contact', tag: '10' },
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
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 25 },
  open: { opacity: 1, x: 0 }
};

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  activeSection, 
  onNavigate 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Slide-out Drawer Panel (White Theme) */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto text-gray-900"
          >
            {/* Top Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Kartomania" className="h-9 w-auto" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 hover:text-[#EE3124] transition-colors"
                >
                  <X className="w-5 h-5 text-[#EE3124]" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                  NAVIGATION SECTIONS
                </span>

                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.div key={item.id} variants={itemVariants}>
                      <button
                        onClick={() => {
                          onNavigate(item.id);
                          onClose();
                        }}
                        className={`
                          group w-full flex items-center justify-between py-3 px-4 rounded-xl border transition-all duration-300 cursor-pointer
                          ${isActive 
                            ? 'bg-[#EE3124]/10 border-[#EE3124] text-[#EE3124] shadow-sm font-bold' 
                            : 'bg-gray-50 border-gray-200/80 hover:border-[#EE3124]/40 text-gray-800 hover:bg-gray-100'
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-semibold text-[#EE3124]">
                            {item.tag}
                          </span>
                          <span className="font-display text-base font-bold tracking-wider uppercase">
                            {item.name}
                          </span>
                        </div>

                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? 'text-[#EE3124] translate-x-1' : 'text-gray-400 group-hover:text-black group-hover:translate-x-1'
                          }`} 
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="space-y-4 pt-6 border-t border-gray-200 mt-6">
              <MagneticButton 
                href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                onClick={onClose} 
                className="w-full py-4 text-xs font-bold"
              >
                BOOK YOUR RACE NOW
              </MagneticButton>

              <div className="flex items-center justify-between text-xs font-mono text-gray-600">
                <a
                  href="tel:+919717548897"
                  className="flex items-center gap-2 hover:text-[#EE3124] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EE3124]" />
                  <span>+91 97175 48897</span>
                </a>

                <a
                  href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:border-[#EE3124] hover:text-[#EE3124] text-gray-700 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
