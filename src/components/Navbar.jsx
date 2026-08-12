import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, Phone, Menu, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'who-we-are' },
  { name: 'Experience', id: 'why-kartomania' },
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
          fixed top-0 left-0 right-0 z-40 h-[96px] sm:h-[104px] transition-all duration-300 flex items-center
          ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b-2 border-[#F47C20] shadow-sm' : 'bg-white border-b border-[#EAEAEA]'}
        `}
      >
        <div className="w-full px-6 lg:px-[54px] flex items-center justify-between gap-6">
          {/* 1. LEFT: Official Kartomania Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-none p-0 focus:outline-none shrink-0"
            aria-label="Kartomania Home"
          >
            <img 
              src="/logo.png" 
              alt="Kartomania" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </button>

          {/* 2. CENTER: Navigation Links with Orange Active States */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 shrink">
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
                    relative px-2.5 py-1.5 font-display font-bold text-sm xl:text-[15px] uppercase tracking-wider transition-colors duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap
                    ${isActive ? 'text-[#0A0A0A]' : 'text-[#111111] hover:text-[#F47C20]'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Orange Active/Hover Indicator Line */}
                  <span
                    className={`
                      absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#F47C20] transition-all duration-200
                      ${isActive ? 'w-[calc(100%-20px)] opacity-100' : isHovered ? 'w-[calc(100%-20px)] opacity-60' : 'w-0 opacity-0'}
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Search, Social & Booking CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-2 pr-3 border-r border-[#E5E5E5]">
              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="tel:+919717548897"
                aria-label="Call"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F47C20] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Header Booking CTA Button */}
            <button
              onClick={onOpenBooking}
              className="hidden md:inline-flex items-center justify-center gap-2 w-[190px] sm:w-[200px] h-[48px] sm:h-[50px] rounded-md bg-[#0A0A0A] hover:bg-[#F47C20] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md"
            >
              <span>BOOK YOUR RACE</span>
              <ArrowRight className="w-4 h-4 text-[#F47C20] group-hover:text-white" />
            </button>

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
