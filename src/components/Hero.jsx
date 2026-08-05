import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Trophy, Users } from 'lucide-react';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";

const floatingVariants = {
  animate: (i) => ({
    y: [0, i % 2 === 0 ? -12 : 12, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const Hero = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-8 lg:px-12 bg-[#FFFFFF] dark:bg-[#050505] text-[#111111] dark:text-[#FFFFFF] transition-colors duration-500 overflow-hidden select-none"
    >
      {/* Background Decorator Gradients & Racing Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FFB800]/15 dark:from-[#FFD43B]/20 via-[#FF5A1F]/10 dark:via-[#FF6B35]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFB800]/10 dark:from-[#FFD43B]/10 to-transparent rounded-full blur-2xl" />

        {/* Minimal Racing Grid / Carbon Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15] bg-[radial-gradient(#111111_1px,transparent_1px)] dark:bg-carbon [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Editorial Headline & CTAs (5 Cols / 45%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: `translate3d(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px, 0px)`,
          }}
          className="lg:col-span-5 flex flex-col items-start space-y-7 text-left transition-transform duration-200 ease-out"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F9FB] dark:bg-[#111111] border border-[#E5E7EB] dark:border-white/10 shadow-sm">
            <span className="text-sm">🏁</span>
            <span className="font-sans text-xs font-semibold text-[#111111] dark:text-gray-200 tracking-wide uppercase">
              India's Premier Indoor Karting
            </span>
          </div>

          {/* Large Headline */}
          <div className="space-y-2 max-w-[550px]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-[#111111] dark:text-white leading-[1.02] tracking-tight">
              Race Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FFB800] to-[#EE3124] dark:from-[#FF6B35] dark:via-[#FFD43B] dark:to-[#EE3124]">Limits</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base font-sans text-[#555555] dark:text-[#CFCFCF] font-normal leading-relaxed max-w-[500px]">
            Experience India's most exciting indoor karting destination with professional tracks, thrilling speed, and unforgettable memories.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Yellow Gradient Button */}
            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB800] via-[#FFA800] to-[#FF5A1F] dark:from-[#FFD43B] dark:to-[#FF6B35] text-[#111111] font-display font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(255,184,0,0.4)] dark:shadow-[0_10px_30px_rgba(255,212,59,0.3)] hover:shadow-[0_15px_40px_rgba(255,184,0,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Race</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-[#111111]" />
            </a>

            {/* Secondary Glass Button */}
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-4 rounded-full bg-[#FFFFFF] dark:bg-white/5 hover:bg-[#F4F5F7] dark:hover:bg-white/10 border border-[#E5E7EB] dark:border-white/15 text-[#111111] dark:text-white font-sans font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
            >
              Explore Track
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Floating Sunset Track Image & Glass Cards (7 Cols / 55%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0px)`,
          }}
          className="lg:col-span-7 relative w-full flex justify-center transition-transform duration-200 ease-out"
        >
          {/* Main Floating Hero Card */}
          <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-[32px] overflow-hidden bg-white dark:bg-[#181818] border border-[#E5E7EB] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
            {/* Sunset Track Image */}
            <img
              src="/hero-sunset.jpg"
              alt="Kartomania Sunset Track"
              className="w-full h-full object-cover object-[bottom_center] group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105 dark:brightness-90"
            />

            {/* Light / Dark Mode Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-[#050505]/75 dark:via-transparent dark:to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-white/10 to-transparent pointer-events-none" />
          </div>

          {/* FLOATING GLASS STAT CARDS */}
          {/* Card 1: 4.9 Rating (Top Left) */}
          <motion.div
            custom={1}
            variants={floatingVariants}
            animate="animate"
            className="absolute -top-6 -left-4 sm:left-4 z-20 bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#FFB800]/15 dark:bg-[#FFD43B]/15 text-[#FFB800] dark:text-[#FFD43B]">
              <Star className="w-5 h-5 fill-[#FFB800] dark:fill-[#FFD43B]" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFB800] dark:text-[#FFD43B] text-xs font-bold">
                ★★★★★
              </div>
              <div className="text-sm font-display font-extrabold text-[#111111] dark:text-white">4.9 Rating</div>
            </div>
          </motion.div>

          {/* Card 2: 5000+ Racers (Bottom Right) */}
          <motion.div
            custom={2}
            variants={floatingVariants}
            animate="animate"
            className="absolute -bottom-6 -right-4 sm:right-4 z-20 bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#FF5A1F]/15 dark:bg-[#FF6B35]/15 text-[#FF5A1F] dark:text-[#FF6B35]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-display font-extrabold text-[#111111] dark:text-white">5,000+</div>
              <div className="text-xs font-sans text-[#555555] dark:text-[#CFCFCF] font-medium">Happy Racers</div>
            </div>
          </motion.div>

          {/* Card 3: 12+ Pro Karts (Top Right) */}
          <motion.div
            custom={3}
            variants={floatingVariants}
            animate="animate"
            className="hidden sm:flex absolute top-8 -right-6 z-20 bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-3.5 shadow-xl items-center gap-2.5"
          >
            <div className="p-2 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="text-xs font-sans font-bold text-[#111111] dark:text-white">12+ Pro Series Karts</div>
          </motion.div>

          {/* Card 4: 100% Safety First (Bottom Left) */}
          <motion.div
            custom={4}
            variants={floatingVariants}
            animate="animate"
            className="hidden sm:flex absolute bottom-8 -left-6 z-20 bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-white/10 rounded-2xl p-3.5 shadow-xl items-center gap-2.5"
          >
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs font-sans font-bold text-[#111111] dark:text-white">100% Safety First</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
