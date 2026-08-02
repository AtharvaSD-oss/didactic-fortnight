import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Zap, Gauge, ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';
import MagneticButton from './MagneticButton';

const KARTING_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-go-karts-racing-on-a-track-43180-large.mp4";

const Hero = ({ onOpenBooking, onNavigate }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#07070a]">
      {/* 1. High-Octane Karting Background Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/gallery/gallery-2.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110 opacity-40 transition-opacity duration-1000"
        >
          <source src={KARTING_VIDEO_URL} type="video/mp4" />
        </video>

        {/* F1 Seamless Dark Overlays & Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/90 via-[#07070a]/60 to-[#07070a] z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/90 via-transparent to-[#07070a]/90 z-1" />
        <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none z-1" />
      </div>

      {/* 2. Ambient Lighting Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4500]/20 via-[#FF1E00]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-2" />

      {/* 3. Audio Ambient Mute Toggle */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 border border-[#FF4500]/40 text-white hover:border-[#FF4500] hover:bg-[#FF4500]/20 text-xs font-mono transition-all shadow-[0_0_20px_rgba(255,69,0,0.2)]"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-gray-400" />
              <span className="text-[10px] uppercase text-gray-400">AUDIO MUTED</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#FF4500] animate-pulse" />
              <span className="text-[10px] uppercase text-[#FF4500] font-bold">RACE ENGINE AMBIENCE</span>
            </>
          )}
        </button>
      </div>

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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl">
            UNLEASH THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF2A00] to-[#FF8C00]">APEX PREDATOR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-sans text-gray-300 font-light tracking-wide drop-shadow">
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
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-[#FF4500] text-xs font-mono tracking-widest uppercase text-white transition-all backdrop-blur-md group"
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
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/60 transition-all text-center group">
            <Gauge className="w-5 h-5 text-[#FF4500] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display text-2xl font-bold text-white">75 KM/H</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">MAX STRAIGHTAWAY</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/60 transition-all text-center group">
            <Trophy className="w-5 h-5 text-[#FF4500] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display text-2xl font-bold text-white">27.42S</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">TRACK RECORD</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/60 transition-all text-center group">
            <Flame className="w-5 h-5 text-[#FF4500] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display text-2xl font-bold text-white">14 TURNS</div>
            <div className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">TECHNICAL APEXES</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/60 transition-all text-center group">
            <Zap className="w-5 h-5 text-[#FF4500] mx-auto mb-2 group-hover:scale-110 transition-transform" />
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
