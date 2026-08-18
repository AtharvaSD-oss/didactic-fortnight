import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-[#EAEAEA] bg-white py-10 sm:py-12 px-4 sm:px-8 lg:px-[54px] text-center sm:text-left relative z-20 text-[#111111]">
      <div className="max-w-[1600px] mx-auto space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAEAEA]">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="text-decoration-none">
              <img 
                src="/logo.png" 
                alt="Kartomania Logo" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Quick Page Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-display text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#555555]">
            <Link to="/" className="hover:text-[#F47C20] transition-colors text-decoration-none">HOME</Link>
            <Link to="/experience" className="hover:text-[#F47C20] transition-colors text-decoration-none">EXPERIENCE</Link>
            <Link to="/track" className="hover:text-[#F47C20] transition-colors text-decoration-none">TRACK</Link>
            <Link to="/race" className="hover:text-[#F47C20] transition-colors text-decoration-none">RACE</Link>
            <Link to="/contact" className="hover:text-[#F47C20] transition-colors text-decoration-none">CONTACT</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a 
              href="mailto:kartomania.ggn@gmail.com" 
              aria-label="Email Us"
              className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#F47C20] text-[#555555] hover:text-white border border-[#E5E5E5] transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session." 
              target="_blank" 
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#25D366] text-[#555555] hover:text-white border border-[#E5E5E5] transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.instagram.com/kartomaniacsggn/?r=nametag" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#F47C20] text-[#555555] hover:text-white border border-[#E5E5E5] transition-colors shadow-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.facebook.com/kartomaniacsggn/" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#F47C20] text-[#555555] hover:text-white border border-[#E5E5E5] transition-colors shadow-xs"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="tel:+919717548897" 
              aria-label="Call Phone"
              className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#F47C20] text-[#555555] hover:text-white border border-[#E5E5E5] transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact & Circuit Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px] text-[#777777] border-b border-[#EAEAEA] pb-6">
          <div>
            <span className="text-[#F47C20] font-bold uppercase block mb-0.5">// VENUE LOCATION</span>
            <span>Entertainland Mall, Sector 83, Manesar, Gurugram</span>
          </div>
          <div>
            <span className="text-[#F47C20] font-bold uppercase block mb-0.5">// RACE TELEMETRY</span>
            <span>RaceFacer Live Timing & DOT Gear Included</span>
          </div>
          <div className="sm:text-right">
            <span className="text-[#F47C20] font-bold uppercase block mb-0.5">// DIRECT LINE</span>
            <a href="tel:+919717548897" className="text-[#111111] font-bold hover:text-[#F47C20] transition-colors text-decoration-none">
              +91 97175 48897
            </a>
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#888888]">
          <div>
            © 2026 KARTOMANIA INDIA. ALL RIGHTS RESERVED.
          </div>
          <a 
            href="mailto:kartomania.ggn@gmail.com" 
            className="text-[#555555] hover:text-[#F47C20] transition-colors text-decoration-none"
          >
            kartomania.ggn@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
