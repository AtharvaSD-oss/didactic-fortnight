import React from 'react';
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
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-8 lg:px-12 bg-[#FFFFFF] overflow-hidden select-none"
    >
      {/* Background Decorator Gradients & Subtle Racing Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Orange & Yellow Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FFB800]/15 via-[#FF5A1F]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFB800]/10 to-transparent rounded-full blur-2xl" />

        {/* Minimal Racing Line Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Editorial Copy & CTAs (5 Cols / 45%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col items-start space-y-7 text-left"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F9FB] border border-[#E8E8E8] shadow-sm">
            <span className="text-sm">🏁</span>
            <span className="font-sans text-xs font-semibold text-[#111111] tracking-wide uppercase">
              India's Premier Indoor Karting
            </span>
          </div>

          {/* Large Headline */}
          <div className="space-y-2 max-w-[550px]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-[#111111] leading-[1.02] tracking-tight">
              Race Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FFB800] to-[#EE3124]">Limits</span>
            </h1>
          </div>

          {/* Subtitle Body Text */}
          <p className="text-sm sm:text-base font-sans text-[#555555] font-normal leading-relaxed max-w-[500px]">
            Experience adrenaline, speed, and precision on professionally designed indoor karting tracks. Perfect for families, friends, and racing enthusiasts.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Filled Racing Yellow Button */}
            <a
              href={RACEFACER_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB800] hover:bg-[#FFA800] text-[#111111] font-display font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(255,184,0,0.4)] hover:shadow-[0_15px_40px_rgba(255,184,0,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Race</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-[#111111]" />
            </a>

            {/* Secondary White Button */}
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F4F5F7] border border-[#E8E8E8] text-[#111111] font-sans font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
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
          className="lg:col-span-7 relative w-full flex justify-center"
        >
          {/* Main Sunset Track Card */}
          <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-[32px] overflow-hidden bg-white border border-[#E8E8E8] shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
            {/* Image */}
            <img
              src="/hero-sunset.jpg"
              alt="Kartomania Sunset Karting Track"
              className="w-full h-full object-cover object-[bottom_center] group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
            />

            {/* Very Light White Gradient Overlay keeping sunset vibrant */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-80" />

            {/* Subtle Glass Reflection Line */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>

          {/* FLOATING GLASS STAT CARDS */}
          {/* Card 1: Rating (Top Left) */}
          <motion.div
            custom={1}
            variants={floatingVariants}
            animate="animate"
            className="absolute -top-6 -left-4 sm:left-4 z-20 bg-white/90 backdrop-blur-md border border-[#E8E8E8] rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#FFB800]/15 text-[#FFB800]">
              <Star className="w-5 h-5 fill-[#FFB800]" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFB800] text-xs font-bold">
                ★★★★★
              </div>
              <div className="text-sm font-display font-extrabold text-[#111111]">4.9 Rating</div>
            </div>
          </motion.div>

          {/* Card 2: Happy Racers (Bottom Right) */}
          <motion.div
            custom={2}
            variants={floatingVariants}
            animate="animate"
            className="absolute -bottom-6 -right-4 sm:right-4 z-20 bg-white/90 backdrop-blur-md border border-[#E8E8E8] rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#FF5A1F]/15 text-[#FF5A1F]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-display font-extrabold text-[#111111]">5,000+</div>
              <div className="text-xs font-sans text-[#555555] font-medium">Happy Racers</div>
            </div>
          </motion.div>

          {/* Card 3: Safety Certified (Top Right) */}
          <motion.div
            custom={3}
            variants={floatingVariants}
            animate="animate"
            className="hidden sm:flex absolute top-8 -right-6 z-20 bg-white/90 backdrop-blur-md border border-[#E8E8E8] rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] items-center gap-2.5"
          >
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs font-sans font-bold text-[#111111]">100% Safety Certified</div>
          </motion.div>

          {/* Card 4: Pro Karts (Bottom Left) */}
          <motion.div
            custom={4}
            variants={floatingVariants}
            animate="animate"
            className="hidden sm:flex absolute bottom-8 -left-6 z-20 bg-white/90 backdrop-blur-md border border-[#E8E8E8] rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] items-center gap-2.5"
          >
            <div className="p-2 rounded-lg bg-blue-500/15 text-blue-600">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="text-xs font-sans font-bold text-[#111111]">12+ Pro Series Karts</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
