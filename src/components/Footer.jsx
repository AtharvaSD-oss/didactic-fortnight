import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050508] py-12 px-4 text-center sm:text-left relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Kartomania Logo" 
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,69,0,0.4)]" 
          />
        </div>

        <div className="font-mono text-xs text-gray-400">
          © 2026 KARTOMANIA INDIA. ENTERTAINLAND MALL, MANESAR, GURGAON.
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com/kartomania.in" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#FF4500]/20 text-gray-300 hover:text-[#FF4500] border border-white/10 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a 
            href="tel:+919717548897" 
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#FF4500]/20 text-gray-300 hover:text-[#FF4500] border border-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
