import React from 'react';
import { Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-4 text-center sm:text-left relative z-20 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Kartomania Logo" 
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)]" 
          />
        </div>

        <div className="font-mono text-xs text-gray-600">
          © 2026 KARTOMANIA INDIA. ENTERTAINLAND MALL, SECTOR 83, MANESAR, GURGAON.
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://www.instagram.com/kartomaniacsggn/?r=nametag" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-700 hover:text-[#EE3124] border border-gray-200 transition-colors shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a 
            href="tel:+919717548897" 
            className="p-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-700 hover:text-[#EE3124] border border-gray-200 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
