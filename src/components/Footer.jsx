import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-14 px-4 sm:px-6 lg:px-12 text-center sm:text-left relative z-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Kartomania Logo" 
            className="h-10 sm:h-11 w-auto object-contain" 
          />
        </div>

        <div className="space-y-1 text-center md:text-left">
          <div className="font-mono text-xs text-[#888888]">
            © 2026 KARTOMANIA INDIA. ENTERTAINLAND MALL, SECTOR 83, MANESAR, GURGAON.
          </div>
          <a 
            href="mailto:kartomania.ggn@gmail.com" 
            className="inline-block font-mono text-xs text-white hover:text-[#F4A261] transition-colors"
          >
            kartomania.ggn@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <a 
            href="mailto:kartomania.ggn@gmail.com" 
            aria-label="Email Us"
            className="p-2.5 rounded-full bg-[#151515] hover:bg-white text-[#AAAAAA] hover:text-[#080808] border border-white/10 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/919717548897?text=Hi%20Kartomania!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20racing%20session." 
            target="_blank" 
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full bg-[#151515] hover:bg-[#25D366] text-[#AAAAAA] hover:text-white border border-white/10 transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://www.instagram.com/kartomaniacsggn/?r=nametag" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full bg-[#151515] hover:bg-white text-[#AAAAAA] hover:text-[#080808] border border-white/10 transition-colors shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://www.facebook.com/kartomaniacsggn/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Facebook"
            className="p-2.5 rounded-full bg-[#151515] hover:bg-white text-[#AAAAAA] hover:text-[#080808] border border-white/10 transition-colors shadow-sm"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a 
            href="tel:+919717548897" 
            aria-label="Call Phone"
            className="p-2.5 rounded-full bg-[#151515] hover:bg-white text-[#AAAAAA] hover:text-[#080808] border border-white/10 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
