import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ChevronRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';

const NAV_ITEMS = [
  { name: 'HOME', path: '/', tag: '01' },
  { name: 'EXPERIENCE', path: '/experience', tag: '02' },
  { name: 'TRACK', path: '/track', tag: '03' },
  { name: 'RACE', path: '/race', tag: '04' },
  { name: 'CONTACT', path: '/contact', tag: '05' },
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
  onOpenBooking 
}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0A0A0A] border-l border-white/10 text-white flex flex-col justify-between shadow-2xl p-6 sm:p-8"
          >
            {/* Header: Logo & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link to="/" onClick={onClose} className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Kartomania Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-full bg-[#1A1A1A] hover:bg-[#F47C20] text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="py-6 space-y-2 flex-1 overflow-y-auto">
              <div className="text-[10px] font-mono font-bold text-[#F47C20] uppercase tracking-widest mb-4">
                // NAVIGATION
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`
                        flex items-center justify-between p-3.5 rounded-lg transition-all duration-200 group text-decoration-none
                        ${isActive 
                          ? 'bg-[#181818] border border-[#F47C20]/40 text-[#F47C20]' 
                          : 'hover:bg-[#151515] border border-transparent text-gray-200 hover:text-white'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#F47C20]' : 'text-gray-500'}`}>
                          {item.tag}
                        </span>
                        <span className="font-display font-bold text-base uppercase tracking-wider">
                          {item.name}
                        </span>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? 'text-[#F47C20]' : 'text-gray-600'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer Action Strip */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <MagneticButton
                href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                className="w-full py-3 px-4 text-xs font-bold justify-center shadow-lg"
              >
                BOOK NOW
              </MagneticButton>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#151515] text-gray-300 hover:text-[#F47C20] hover:bg-[#202020] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/kartomaniacsggn/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#151515] text-gray-300 hover:text-[#F47C20] hover:bg-[#202020] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Phone className="w-3.5 h-3.5 text-[#F47C20]" />
                  <a href="tel:+919717548897" className="hover:text-white transition-colors">
                    +91 97175 48897
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
