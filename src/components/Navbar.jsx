import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Phone, Menu } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'HERO', id: 'home' },
  { name: 'EXPERIENCE', id: 'who-we-are' },
  { name: 'TRACK & FLEET', id: 'track' },
  { name: 'PRICING & COMBOS', id: 'pricing' },
  { name: 'GALLERY & LOCATION', id: 'contact' },
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
          fixed top-0 left-0 right-0 z-40 h-[72px] sm:h-[76px] transition-all duration-300 flex items-center
          ${isScrolled ? 'header-minimal-scrolled' : 'header-minimal-top'}
        `}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* 1. LEFT: Official Kartomania Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-none p-0 focus:outline-none shrink-0"
            aria-label="Kartomania Home"
          >
            <img 
              src="/logo.png" 
              alt="Kartomania" 
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </button>

          {/* 2. CENTER: Navigation Links with Full-Width Orange Active States */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink">
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
                    relative px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap
                    ${isActive ? 'text-[#F47C20]' : 'text-[#0A0A0A] hover:text-[#F47C20]'}
                  `}
                >
                  <span className="font-bold">{link.name}</span>

                  {/* Orange Active/Hover Indicator Line Covering Full Width */}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F47C20] transition-all duration-200
                      ${isActive ? 'w-full opacity-100' : isHovered ? 'w-full opacity-60' : 'w-0 opacity-0'}
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Search, Social & Minimal Action Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 pr-2 border-r border-[#E5E5E5]">
              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+919717548897"
                aria-label="Call"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Minimal Luxury CTA Button */}
            <div className="hidden md:block shrink-0">
              <MagneticButton onClick={onOpenBooking} className="py-2.5 px-5 text-xs whitespace-nowrap">
                BOOK YOUR RACE
              </MagneticButton>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors cursor-pointer"
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
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};

export default Navbar;
