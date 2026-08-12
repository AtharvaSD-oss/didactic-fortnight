import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, ArrowRight } from 'lucide-react';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'HOME', id: 'home' },
  { name: 'EXPERIENCE', id: 'who-we-are' },
  { name: 'TRACK', id: 'track' },
  { name: 'KARTS', id: 'karts' },
  { name: 'GALLERY', id: 'gallery' },
  { name: 'ABOUT', id: 'founder' },
  { name: 'CONTACT', id: 'contact' },
];

const Navbar = ({ activeSection = 'home', onNavigate, onOpenSearch, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 100 && currentScrollY > lastScrollY.current + 5) {
        gsap.to(navRef.current, {
          yPercent: -100,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else if (currentScrollY < lastScrollY.current - 5) {
        gsap.to(navRef.current, {
          yPercent: 0,
          duration: 0.35,
          ease: 'power2.out',
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
          fixed top-0 left-0 right-0 z-40 h-[72px] sm:h-[80px] transition-all duration-300 flex items-center bg-white/95 backdrop-blur-md
          ${isScrolled ? 'border-b border-[#EAEAEA] shadow-sm' : ''}
        `}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          
          {/* 1. LEFT: Official Kartomania Logo with 'LIVE THE RACE' and orange underline */}
          <button
            onClick={() => onNavigate('home')}
            className="flex flex-col items-start cursor-pointer group bg-transparent border-none p-0 focus:outline-none shrink-0"
            aria-label="Kartomania Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black italic tracking-tighter text-xl sm:text-2xl text-[#0A0A0A] uppercase">
                KARTOMANIA
              </span>
            </div>
            <div className="relative flex items-center w-full pl-0.5">
              <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-[#333333] uppercase">
                LIVE THE RACE
              </span>
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F37021]" />
            </div>
          </button>

          {/* 2. CENTER: Navigation Links matching mockup */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink">
            {NAV_LINKS.map((link) => {
              const isActive = (activeSection === 'home' && link.id === 'home') ||
                (activeSection === 'who-we-are' && link.id === 'who-we-are') ||
                (activeSection === 'track' && link.id === 'track') ||
                (activeSection === 'karts' && link.id === 'karts') ||
                (activeSection === 'gallery' && link.id === 'gallery') ||
                (activeSection === 'founder' && link.id === 'founder') ||
                (activeSection === 'contact' && link.id === 'contact');

              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`
                    relative py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap
                    ${isActive ? 'text-[#0A0A0A]' : 'text-[#555555] hover:text-[#0A0A0A]'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Active orange underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F37021]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Action Button matching mockup */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#080808] hover:bg-[#1a1a1a] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer group"
            >
              <span>BOOK YOUR RACE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F37021] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] text-[#080808] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
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
