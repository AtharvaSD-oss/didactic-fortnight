import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, ChevronRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';

const NAV_ITEMS = [
  { name: 'Home', id: 'home', tag: '01' },
  { name: 'About', id: 'who-we-are', tag: '02' },
  { name: 'Why Kartomania', id: 'why-kartomania', tag: '03' },
  { name: 'Rules & Safety', id: 'racing-rules', tag: '04' },
  { name: '720M Track', id: 'track', tag: '05' },
  { name: 'Kart Fleet', id: 'karts', tag: '06' },
  { name: 'Leap Frog Racing', id: 'leap-frog', tag: '07' },
  { name: "What's New", id: 'whats-new', tag: '08' },
  { name: 'Pricing & Combos', id: 'pricing', tag: '09' },
  { name: '2D Arcade Game', id: 'game', tag: '10' },
  { name: 'Photo Gallery', id: 'gallery', tag: '11' },
  { name: 'Reviews', id: 'testimonials', tag: '12' },
  { name: 'Founder Heritage', id: 'founder', tag: '13' },
  { name: 'Find The Arena', id: 'contact', tag: '14' },
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

          {/* Slide-out Drawer Panel (Dark Theme) */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#0B0D0F] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto text-[#F4F1EA]"
          >
            {/* Top Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Kartomania" className="h-9 w-auto" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] border border-white/10 text-[#F4F1EA] hover:text-[#C9A45C] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#C9A45C]" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] font-semibold text-[#837D73] uppercase tracking-widest block mb-1">
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
                            ? 'bg-[#C9A45C]/15 border-[#C9A45C] text-[#C9A45C] shadow-sm font-bold' 
                            : 'bg-[#15181C] border-white/5 hover:border-[#C9A45C]/40 text-[#B8B1A5] hover:text-[#F4F1EA] hover:bg-[#1C2128]'
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-semibold text-[#C9A45C]">
                            {item.tag}
                          </span>
                          <span className="font-display text-base font-bold tracking-wider uppercase">
                            {item.name}
                          </span>
                        </div>

                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? 'text-[#C9A45C] translate-x-1' : 'text-[#837D73] group-hover:text-[#F4F1EA] group-hover:translate-x-1'
                          }`} 
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="space-y-4 pt-6 border-t border-white/10 mt-6">
              <MagneticButton 
                href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                onClick={onClose} 
                className="w-full py-4 text-xs font-bold"
              >
                BOOK YOUR RACE NOW
              </MagneticButton>

              <div className="flex flex-col gap-2 text-xs font-mono text-[#B8B1A5]">
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+919717548897"
                    className="flex items-center gap-2 hover:text-[#C9A45C] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>+91 97175 48897</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-full bg-[#15181C] border border-white/10 hover:border-[#C9A45C] hover:text-[#C9A45C] text-[#B8B1A5] transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>

                    <a
                      href="https://www.facebook.com/kartomaniacsggn/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="p-2 rounded-full bg-[#15181C] border border-white/10 hover:border-[#C9A45C] hover:text-[#C9A45C] text-[#B8B1A5] transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:kartomania.ggn@gmail.com"
                  className="flex items-center gap-2 hover:text-[#C9A45C] transition-colors text-[11px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>kartomania.ggn@gmail.com</span>
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
