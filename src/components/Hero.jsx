import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Zap, Gauge, ChevronDown, Play } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ onOpenBooking, onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-carbon">
      {/* Background Lighting & Gradient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4500]/25 via-[#FF1E00]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF8C00]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center space-y-8">
        {/* Top F1 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-[#FF4500]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500] animate-ping" />
          <span className="font-mono text-xs tracking-widest text-[#FF4500] uppercase font-bold">
            INDIA'S PREMIER INDOOR PRO KARTING ARENA
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-none">
            UNLEASH THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF2A00] to-[#FF8C00]">APEX PREDATOR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-sans text-gray-400 font-light tracking-wide">
            Inspired by Formula 1, Porsche Motorsport, and Lamborghini design. Experience 270cc high-torque race karts, multi-level flyovers, and millisecond telemetry precision.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <MagneticButton onClick={onOpenBooking} className="py-4 px-8 text-sm">
            Book Your Race
          </MagneticButton>

          <button
            onClick={() => onNavigate('track')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF4500] text-xs font-mono tracking-widest uppercase text-white transition-all group"
          >
            <Play className="w-4 h-4 text-[#FF4500] group-hover:scale-125 transition-transform" />
            <span>EXPLORE TRACK LAYOUT</span>
          </button>
        </motion.div>

        {/* Telemetry Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10"
        >
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#FF4500]/50 transition-colors text-center">
            <Gauge className="w-5 h-5 text-[#FF4500] mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-white">75 KM/H</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">MAX STRAIGHTAWAY</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#FF4500]/50 transition-colors text-center">
            <Trophy className="w-5 h-5 text-[#FF4500] mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-white">27.42S</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">TRACK RECORD</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#FF4500]/50 transition-colors text-center">
            <Flame className="w-5 h-5 text-[#FF4500] mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-white">14 TURNS</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">TECHNICAL APEXES</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#FF4500]/50 transition-colors text-center">
            <Zap className="w-5 h-5 text-[#FF4500] mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-white">0.001S</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">TIMING SENSORS</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => onNavigate('track')}
            className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-[#FF4500] hover:border-[#FF4500] animate-bounce transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
