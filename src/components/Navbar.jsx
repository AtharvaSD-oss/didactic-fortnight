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

          {/* 2. CENTER: Minimal Navigation Links */}
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
                    relative px-2.5 py-1 text-xs font-mono font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap
                    ${isActive ? 'text-[#080808] font-bold' : 'text-[#666666] hover:text-[#080808]'}
                  `}
                >
                  <span>{link.name}</span>

                  {/* Underline on active or hover */}
                  <span
                    className={`
                      absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-[#080808] transition-all duration-200
                      ${isActive ? 'w-[calc(100%-20px)] opacity-100' : isHovered ? 'w-[calc(100%-20px)] opacity-60' : 'w-0 opacity-0'}
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
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] hover:text-[#080808] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] hover:text-[#080808] transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] hover:text-[#080808] transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+919717548897"
                aria-label="Call"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] hover:text-[#080808] transition-colors"
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
              className="lg:hidden p-2.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-[#080808] transition-colors cursor-pointer"
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
