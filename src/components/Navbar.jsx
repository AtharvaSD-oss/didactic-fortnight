import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Search, Menu } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import MagneticButton from './MagneticButton';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'TRACK', path: '/track' },
  { name: 'RACE', path: '/race' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = ({ onOpenSearch, onOpenBooking }) => {
  const location = useLocation();
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
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled ? 'header-minimal-scrolled py-3' : 'header-minimal-top py-4.5'}
        `}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-[54px] flex items-center justify-between gap-4">
          
          {/* 1. LEFT: Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0 text-decoration-none py-1">
            <img
              src="/logo.png"
              alt="Kartomania Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* 2. CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink">
            {NAV_LINKS.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredIndex === idx;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    relative px-4 py-2 text-[13px] xl:text-[14px] font-display font-bold tracking-widest uppercase transition-colors duration-250 cursor-pointer bg-transparent border-none whitespace-nowrap text-decoration-none
                    ${isActive ? 'text-[#F47C20]' : 'text-[#0A0A0A] hover:text-[#F47C20]'}
                  `}
                >
                  <span>{link.name}</span>

                  <span
                    className={`
                      absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#F47C20] rounded-full transition-all duration-250
                      ${isActive ? 'opacity-100 scale-x-100' : isHovered ? 'opacity-70 scale-x-100' : 'opacity-0 scale-x-0'}
                    `}
                    style={{ transformOrigin: 'center' }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* 3. RIGHT: Search, Social & Primary CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 pr-2.5 border-r border-[#E5E5E5]">
              <a
                href="https://www.instagram.com/kartomaniacsggn/?r=nametag"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#444444] hover:text-[#F47C20] transition-colors duration-200"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.facebook.com/kartomaniacsggn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#444444] hover:text-[#F47C20] transition-colors duration-200"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#444444] hover:text-[#F47C20] transition-colors duration-200 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Primary CTA Button */}
            <div className="hidden md:block">
              <MagneticButton
                href="https://web.racefacer.com/kiosk/kartomaniaentertainlandmall"
                className="py-2.5 px-5 text-xs font-bold tracking-widest shadow-sm"
              >
                BOOK NOW
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2.5 rounded-lg bg-[#F5F5F5] hover:bg-[#FFF0E5] text-[#0A0A0A] hover:text-[#F47C20] transition-colors duration-200 cursor-pointer border border-[#EAEAEA]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Slide-over Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={location.pathname}
        onNavigate={() => {}}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};

export default Navbar;
