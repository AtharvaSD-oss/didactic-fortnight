import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flag, ChevronDown, Gauge } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ onOpenBooking, onNavigate }) => {
  const [speed, setSpeed] = useState(87);

  // Live telemetry speed oscillation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(84 + Math.random() * 6);
      setSpeed(newSpeed);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-4 sm:px-8 overflow-hidden bg-[#07070a]">
      {/* 1. Background Image (Karting Motion Blur) with Dark Vignette Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Karting Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.5] contrast-125 saturate-110 opacity-75"
        />
        {/* Dark Vignette & Gradient Overlays matching #07070a theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/50 to-[#07070a]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/85 via-[#07070a]/40 to-transparent" />
        <div className="absolute inset-0 bg-carbon opacity-25 pointer-events-none" />
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto pt-6">
        
        {/* Left Column - Main Headlines & CTA */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-[#FF4500]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.2)]"
          >
            <Flag className="w-3.5 h-3.5 text-[#FF4500]" />
            <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
              RACE &bull; COMPETE &bull; BREAK RECORDS
            </span>
          </motion.div>

          {/* Giant Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-2xl">
              KARTOMANIA
            </h1>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3A00] via-[#FF5500] to-[#FF7700]">
                SPEED THAT
              </span>
            </h2>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFAA00]">
                THRILLS
              </span>
            </h2>
          </motion.div>

          {/* Subtitle & Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3 max-w-2xl"
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              Northern India's First Indoor Go-Karting Track
            </h3>
            <p className="text-sm font-sans text-gray-300 font-normal leading-relaxed text-left">
              Experience the ultimate adrenaline rush on one of India's most exciting indoor racing circuits. Whether you're a beginner or a professional racer, Kartomania offers an unforgettable high-speed karting experience with world-class facilities.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton onClick={onOpenBooking} className="py-4 px-8 text-sm">
              BOOK YOUR RACE
            </MagneticButton>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-8 py-4 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 hover:border-[#FF4500] text-xs font-mono tracking-widest uppercase text-white font-bold transition-all backdrop-blur-md"
            >
              VIEW PRICING
            </button>
          </motion.div>
        </div>

        {/* Right Column - Live Speedometer Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 sm:w-80 bg-[#0c0c16]/85 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:border-[#FF4500]/50 transition-all group">
            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gauge className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs text-gray-300 uppercase tracking-widest font-bold">
                LIVE SPEED
              </span>
            </div>

            {/* Circular Telemetry Gauge */}
            <div className="relative w-52 h-52 mx-auto flex items-center justify-center">
              {/* SVG Ring Arc */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-white/10"
                  fill="transparent"
                />
                {/* Glowing Orange Active Arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#speedGradient)"
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Digital Readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-display font-black text-white tracking-tight drop-shadow-md">
                  {speed}
                </span>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-1">
                  KM/H
                </span>
                {/* Needle Indicator */}
                <div className="w-0.5 h-6 bg-[#FF4500] mt-2 rounded-full shadow-[0_0_10px_#FF4500]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Telemetry Stats Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-left">
          
          <div className="space-y-0.5">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">680m</div>
            <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
              LONGEST INDOOR TRACK
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">14</div>
            <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
              RACING TURNS
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">5</div>
            <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
              KART CATEGORIES
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">1000+</div>
            <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
              RACES WEEKLY
            </div>
          </div>
        </div>

        {/* Center Scroll Indicator */}
        <div className="pt-6 flex flex-col items-center justify-center space-y-1">
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">SCROLL</span>
          <button
            onClick={() => onNavigate('track')}
            className="text-gray-400 hover:text-[#FF4500] animate-bounce transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
