import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Phone, Menu } from 'lucide-react';
import MagneticButton from './MagneticButton';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'who-we-are' },
  { name: 'Leap Frog', id: 'leap-frog' },
  { name: "What's New", id: 'whats-new' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Arcade Game', id: 'game' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Reviews', id: 'testimonials' },
  { name: 'Founder', id: 'founder' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ activeSection = 'home', onNavigate, onOpenSearch, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

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
        {/* Subtle Racing Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC] opacity-90" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 1. LEFT: Kartomania Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0"
          >
            <img 
              src="/logo.png" 
              alt="Kartomania Logo" 
              className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] group-hover:scale-105 transition-transform duration-300" 
            />
          </button>

          {/* 2. CENTER: Navigation Links */}
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
                    relative px-3 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer bg-transparent border-none
                    ${isActive ? 'text-[#FFD700] text-glow-yellow' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Active glowing indicator dot */}
                  {isActive && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
                  )}

                  {/* Animated glowing streak underline on hover or active */}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC]
                      rounded-full transition-all duration-300 shadow-[0_0_10px_#FFD700]
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
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-gray-300 hover:text-[#FFD700] transition-all hover:scale-105 cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="tel:+919717548897"
                aria-label="Call Hotline"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#EE3124] hover:bg-[#EE3124]/10 text-gray-300 hover:text-[#EE3124] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button: Magnetic "Book Your Race" */}
            <div className="hidden lg:block">
              <MagneticButton href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall">
                Book Your Race
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="lg:hidden p-3 rounded-full bg-white/5 border border-[#EE3124]/40 hover:border-[#EE3124] text-white hover:bg-[#EE3124]/20 transition-all active:scale-95 cursor-pointer"
            >
              <Menu className="w-5 h-5 text-[#EE3124]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
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
