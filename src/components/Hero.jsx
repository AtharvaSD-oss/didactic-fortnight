import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[92svh] sm:min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 px-2 sm:px-6 lg:px-8 bg-white text-[#111111] overflow-hidden select-none"
    >
      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center my-auto">
        
        {/* Central Graphic Composition */}
        <div className="relative w-full aspect-[1024/520] min-h-[320px] xs:min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-sm border border-[#F5F5F5]">
          
          {/* Main Visual: Exact Mockup Artwork with full resolution */}
          <img
            src="/hero-mockup-full.png"
            alt="Kartomania Race. Experience. Remember. - Avalanche Racing White Formula Car"
            className="w-full h-full object-contain sm:object-cover object-center filter contrast-[1.02] select-none pointer-events-none"
            loading="eager"
          />

          {/* Interactive Live Clickable Button Overlay over 'BOOK YOUR RACE →' */}
          <div className="absolute left-[3.2%] bottom-[12.5%] sm:bottom-[13.5%] md:bottom-[14.5%] z-30">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3.5 md:py-4 rounded-md sm:rounded-lg bg-[#080808] hover:bg-[#1a1a1a] text-white text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-xl cursor-pointer group"
              aria-label="Book your race at Kartomania"
            >
              <span>BOOK YOUR RACE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F37021] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right-Side Interactive Dot Pagination Overlay */}
          <div className="absolute right-[3.2%] top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2.5 sm:gap-3.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F37021] shadow-[0_0_8px_rgba(243,112,33,0.8)] cursor-pointer" title="Home" />
            <span onClick={() => onNavigate('who-we-are')} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8B8B8] hover:bg-[#F37021] transition-colors cursor-pointer" title="Experience" />
            <span onClick={() => onNavigate('track')} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8B8B8] hover:bg-[#F37021] transition-colors cursor-pointer" title="Track" />
            <span onClick={() => onNavigate('karts')} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8B8B8] hover:bg-[#F37021] transition-colors cursor-pointer" title="Karts" />
          </div>

        </div>

        {/* Bottom Minimal Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
          <motion.button
            onClick={() => onNavigate('who-we-are')}
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="p-1 text-[#888888] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Scroll to experience"
          >
            <ChevronDown className="w-5 h-5 text-[#888888]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
