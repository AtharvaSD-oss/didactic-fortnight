import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Phone, Menu, X, Flame } from 'lucide-react';
import { InstagramIcon } from './Icons';
import MagneticButton from './MagneticButton';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Leap Frog', id: 'leap-frog' },
  { name: "What's New", id: 'whats-new' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Leaderboard', id: 'leaderboard' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Founder', id: 'founder' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ 
  activeSection, 
  onNavigate, 
  onOpenSearch, 
  onOpenBooking 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // GSAP Hide on Scroll Down / Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 100 && currentScrollY > lastScrollY.current + 5) {
        gsap.to(navRef.current, {
          yPercent: -100,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      } else if (currentScrollY < lastScrollY.current - 5) {
        gsap.to(navRef.current, {
          yPercent: 0,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`
          fixed top-0 left-0 right-0 z-40 h-[80px] transition-colors duration-500 flex items-center
          ${isScrolled ? 'glass-nav-scrolled' : 'glass-nav-top'}
        `}
      >
        {/* Subtle F1 Racing Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-80" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 1. LEFT: Kartomania Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4500] to-[#FF1E00] flex items-center justify-center shadow-[0_0_20px_rgba(255,69,0,0.5)] transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <Flame className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-widest text-white uppercase leading-none">
                KARTOMANIA
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#FF4500] uppercase">
                INDIA // PRO F1 CIRCUIT
              </span>
            </div>
          </div>

          {/* 2. CENTER: Navigation Links (Desktop: Full, Tablet: Priority) */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredIndex === idx;

              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    relative px-3 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300
                    ${isActive ? 'text-[#FF4500] text-glow' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Active glowing indicator dot */}
                  {isActive && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF4500] shadow-[0_0_8px_#FF4500]" />
                  )}

                  {/* Animated glowing streak underline on hover or active */}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF4500] via-[#FF2A00] to-[#FF8C00]
                      rounded-full transition-all duration-300 shadow-[0_0_10px_#FF4500]
                      ${isActive ? 'w-full opacity-100' : isHovered ? 'w-full opacity-80' : 'w-0 opacity-0'}
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Quick Icons & Magnetic CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Utility Icons */}
            <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-white/10">
              <button
                onClick={onOpenSearch}
                aria-label="Search telemetry"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] hover:bg-[#FF4500]/10 text-gray-300 hover:text-[#FF4500] transition-all hover:scale-105"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="tel:+919876543210"
                aria-label="Call Hotline"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] hover:bg-[#FF4500]/10 text-gray-300 hover:text-[#FF4500] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/kartomania.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] hover:bg-[#FF4500]/10 text-gray-300 hover:text-[#FF4500] transition-all hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button: Magnetic "Book Your Race" */}
            <div className="hidden lg:block">
              <MagneticButton onClick={onOpenBooking}>
                Book Your Race
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle (F1 Styled) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="lg:hidden p-3 rounded-full bg-white/5 border border-[#FF4500]/40 hover:border-[#FF4500] text-white hover:bg-[#FF4500]/20 transition-all active:scale-95"
            >
              <Menu className="w-5 h-5 text-[#FF4500]" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onOpenSearch={onOpenSearch}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};

export default Navbar;
