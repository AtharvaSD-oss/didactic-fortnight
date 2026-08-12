import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090B] py-12 px-4 text-center sm:text-left relative z-20 text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Kartomania Logo" 
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]" 
          />
        </div>

        <div className="space-y-1 text-center md:text-left">
          <div className="font-mono text-xs text-[#837D73]">
            © 2026 KARTOMANIA INDIA. ENTERTAINLAND MALL, SECTOR 83, MANESAR, GURGAON.
          </div>
          <a 
            href="mailto:kartomania.ggn@gmail.com" 
            className="inline-block font-mono text-xs text-[#C9A45C] hover:text-[#DFBA70] transition-colors"
          >
            kartomania.ggn@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <a 
            href="mailto:kartomania.ggn@gmail.com" 
            aria-label="Email Us"
            className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#C9A45C] border border-white/10 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session." 
            target="_blank" 
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#25D366] border border-white/10 hover:border-[#25D366]/40 transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://www.instagram.com/kartomaniacsggn/?r=nametag" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#C9A45C] border border-white/10 transition-colors shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://www.facebook.com/kartomaniacsggn/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Facebook"
            className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#C9A45C] border border-white/10 transition-colors shadow-sm"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a 
            href="tel:+919717548897" 
            aria-label="Call Phone"
            className="p-2.5 rounded-full bg-[#15181C] hover:bg-[#1E232B] text-[#B8B1A5] hover:text-[#C9A45C] border border-white/10 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
