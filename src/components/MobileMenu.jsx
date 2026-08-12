import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, ChevronRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';

const NAV_ITEMS = [
  { name: 'Home', id: 'home', tag: '01' },
  { name: 'About', id: 'who-we-are', tag: '02' },
  { name: 'Experience', id: 'why-kartomania', tag: '03' },
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
      duration: 0.35,
      ease: [0.32, 0, 0.67, 0],
      when: 'afterChildren'
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 }
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
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Slide-out Drawer Panel */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white border-l border-[#E5E5E5] shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto text-[#111111]"
          >
            {/* Top Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Kartomania" className="h-8 w-auto" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] border border-[#E5E5E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] font-semibold text-[#888888] uppercase tracking-widest block mb-2">
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
                          group w-full flex items-center justify-between py-2.5 px-3.5 rounded-sm border transition-all duration-200 cursor-pointer
                          ${isActive 
                            ? 'bg-[#F47C20] border-[#F47C20] text-white font-bold shadow-sm' 
                            : 'bg-white border-[#EAEAEA] hover:border-[#F47C20] text-[#333333] hover:text-[#F47C20] hover:bg-[#FFF8F2]'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-semibold ${isActive ? 'text-white' : 'text-[#888888]'}`}>
                            {item.tag}
                          </span>
                          <span className="font-display text-sm font-bold tracking-wider uppercase">
                            {item.name}
                          </span>
                        </div>

                        <ChevronRight 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isActive ? 'text-white translate-x-0.5' : 'text-[#AAAAAA] group-hover:text-[#F47C20] group-hover:translate-x-0.5'
                          }`} 
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="space-y-4 pt-6 border-t border-[#E5E5E5] mt-6">
              <MagneticButton 
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }} 
                className="w-full py-3.5 text-xs font-bold"
              >
                BOOK YOUR RACE
              </MagneticButton>

              <div className="flex flex-col gap-2 text-xs font-mono text-[#666666]">
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+919717548897"
                    className="flex items-center gap-2 hover:text-[#F47C20] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F47C20]" />
                    <span>+91 97175 48897</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#F47C20] text-[#333333] hover:text-[#F47C20] transition-colors"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://www.facebook.com/kartomaniacsggn/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="p-2 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#F47C20] text-[#333333] hover:text-[#F47C20] transition-colors"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:kartomania.ggn@gmail.com"
                  className="flex items-center gap-2 hover:text-[#F47C20] transition-colors text-[11px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F47C20]" />
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
