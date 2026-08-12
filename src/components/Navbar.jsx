import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Phone, Menu } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'who-we-are' },
  { name: 'Why Us', id: 'why-kartomania' },
  { name: 'Track', id: 'track' },
  { name: 'Fleet', id: 'karts' },
  { name: 'Leap Frog', id: 'leap-frog' },
  { name: "What's New", id: 'whats-new' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Reviews', id: 'testimonials' },
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
          fixed top-0 left-0 right-0 z-40 h-[72px] sm:h-[76px] transition-all duration-500 flex items-center
          ${isScrolled ? 'glass-nav-scrolled' : 'glass-nav-top'}
        `}
      >
        {/* Subtle Racing Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent opacity-80" />

        <div className="w-full px-3 sm:px-5 lg:px-7 flex items-center justify-between gap-2">
          {/* 1. LEFT: Official Kartomania Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-none p-0 focus:outline-none shrink-0"
            aria-label="Kartomania Home"
          >
            <img 
              src="/logo.png" 
              alt="Kartomania - Where Real Racing Begins" 
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300" 
            />
          </button>

          {/* 2. CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink">
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
                    relative px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-300 cursor-pointer bg-transparent border-none whitespace-nowrap
                    ${isActive ? 'text-[#C9A45C]' : 'text-[#B8B1A5] hover:text-[#F4F1EA]'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#C9A45C] shadow-[0_0_8px_#C9A45C]" />
                  )}

                  {/* Animated glowing streak underline on hover or active */}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A45C] via-[#EE3124] to-[#C9A45C]
                      rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(201,164,92,0.4)]
                      ${isActive ? 'w-full opacity-100' : isHovered ? 'w-full opacity-80' : 'w-0 opacity-0'}
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Quick Icons & Magnetic CTA */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Utility Icons */}
            <div className="hidden sm:flex items-center gap-1.5 pr-2 border-r border-white/10">
              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-full bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C]/50 text-[#B8B1A5] hover:text-[#F4F1EA] transition-all hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="p-2 rounded-full bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C]/50 text-[#B8B1A5] hover:text-[#F4F1EA] transition-all hover:scale-105"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenSearch}
                aria-label="Search telemetry"
                className="p-2 rounded-full bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C]/50 text-[#B8B1A5] hover:text-[#F4F1EA] transition-all hover:scale-105 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+919717548897"
                aria-label="Call Hotline"
                className="p-2 rounded-full bg-[#15181C] hover:bg-[#1E232B] border border-white/10 hover:border-[#C9A45C]/50 text-[#B8B1A5] hover:text-[#F4F1EA] transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CTA Button: Magnetic "Book Your Race" */}
            <div className="hidden md:block shrink-0">
              <MagneticButton onClick={onOpenBooking} className="py-2.5 px-4 xl:px-5 text-[11px] xl:text-xs whitespace-nowrap shadow-md">
                BOOK YOUR RACE 🏁
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="lg:hidden p-2.5 sm:p-3 rounded-full bg-[#15181C] border border-white/10 hover:border-[#C9A45C] text-[#F4F1EA] hover:text-[#C9A45C] transition-all active:scale-95 cursor-pointer"
            >
              <Menu className="w-5 h-5 text-[#C9A45C]" />
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
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};

export default Navbar;
