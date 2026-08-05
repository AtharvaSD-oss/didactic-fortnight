import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Gauge, Mouse } from 'lucide-react';

const RACEFACER_URL = "https://web.racefacer.com/kiosk/kartomaniaentertainlandmall";

const Hero = ({ onNavigate }) => {
  const heroRef = useRef(null);

  // Mouse Parallax Position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Animated Speedometer (0 to 80 KM/H loop)
  const [speed, setSpeed] = useState(0);

  // Scroll Progress Animations
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 400], [1.05, 1]);
  const textY = useTransform(scrollY, [0, 300], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  // Mouse Parallax Event Listener
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to +10px shift
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Speedometer 0 to 80 KM/H Loop Animation
  useEffect(() => {
    let currentSpeed = 0;
    let accelerating = true;

    const interval = setInterval(() => {
      if (accelerating) {
        currentSpeed += Math.floor(Math.random() * 4) + 2;
        if (currentSpeed >= 80) {
          currentSpeed = 80;
          accelerating = false;
        }
      } else {
        currentSpeed -= Math.floor(Math.random() * 6) + 3;
        if (currentSpeed <= 12) {
          currentSpeed = 12;
          accelerating = true;
        }
      }
      setSpeed(currentSpeed);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Needle angle for 0 to 80 KM/H (-120deg to +120deg)
  const needleAngle = -120 + (speed / 80) * 240;

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden bg-[#07070a] z-10 select-none"
    >
      {/* 1. Viewport-Filling Sunset Background Image */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale: bgScale }}
      >
        {/* Parallax Image Shift */}
        <motion.img
          src="/hero-sunset.jpg"
          alt="Kartomania Golden Sunset Karting Track"
          animate={{
            x: mousePos.x * 0.6,
            y: mousePos.y * 0.6,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="w-full h-full object-cover object-[bottom_center] filter brightness-90 contrast-110"
        />

        {/* 60-70% Dark Black Gradient Overlay preserving sunset glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/65 to-[#07070a]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/85 via-[#07070a]/50 to-transparent" />

        {/* Edge Vignette & Film Grain Overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(7,7,10,0.9)] pointer-events-none" />
        <div className="absolute inset-0 bg-carbon opacity-20 pointer-events-none" />
      </motion.div>

      {/* 2. Hero Editorial Content Layout */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        animate={{
          x: -mousePos.x * 0.4,
          y: -mousePos.y * 0.4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-center items-start my-auto space-y-6 text-left"
      >
        {/* Top Circuit Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#FFD700]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
          <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
            FORMULA KARTING ARENA &bull; ENTERTAINLAND MALL
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="max-w-[720px] space-y-1"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white uppercase leading-[0.95] tracking-tight drop-shadow-2xl">
            India's Ultimate Indoor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#EE3124] to-[#0066CC]">Karting Experience</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-[500px] space-y-1 font-sans text-sm sm:text-base text-gray-300 font-normal leading-relaxed"
        >
          <p className="font-display font-bold text-white uppercase tracking-wider text-base">
            Feel the speed.
          </p>
          <p className="font-display font-bold text-white uppercase tracking-wider text-base">
            Master every corner.
          </p>
          <p className="font-display font-bold text-[#FFD700] uppercase tracking-wider text-base">
            Race like a champion.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          {/* Primary Yellow CTA Button */}
          <a
            href={RACEFACER_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD700] hover:bg-[#FFE033] text-[#1A1A1A] font-display font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_45px_rgba(255,215,0,0.8)] hover:-translate-y-1 transition-all duration-300"
          >
            <span>Book Your Race</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-[#1A1A1A]" />
          </a>

          {/* Secondary Outline Button */}
          <button
            onClick={() => onNavigate('gallery')}
            className="px-8 py-4 rounded-full bg-transparent border border-white/30 hover:bg-white hover:text-black text-xs font-mono font-bold tracking-widest uppercase text-white transition-all duration-300 cursor-pointer"
          >
            Explore Track
          </button>
        </motion.div>
      </motion.div>

      {/* 3. Bottom Controls Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-end justify-between pt-4">
        {/* Bottom Scroll Indicator (Center/Left) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex items-center gap-3 text-gray-400 font-mono text-xs cursor-pointer"
          onClick={() => onNavigate('who-we-are')}
        >
          <div className="p-2.5 rounded-full bg-black/60 border border-white/15 text-[#FFD700]">
            <Mouse className="w-4 h-4" />
          </div>
          <span className="uppercase tracking-widest font-semibold text-gray-300 hover:text-white transition-colors">
            Scroll to Race
          </span>
        </motion.div>

        {/* Animated Speedometer (Bottom Right) */}
        <div className="hidden sm:flex items-center gap-4 bg-black/70 border border-white/15 rounded-2xl p-3.5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Speedometer Arc Dial */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#FFD700]"
                strokeDasharray={`${(speed / 80) * 75}, 100`}
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            {/* Rotating Gauge Needle */}
            <motion.div
              className="absolute w-0.5 h-6 bg-[#EE3124] origin-bottom rounded-full"
              style={{
                transform: `rotate(${needleAngle}deg)`,
                bottom: '50%',
                left: 'calc(50% - 1px)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <div className="absolute w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
          </div>

          <div className="font-mono text-left space-y-0.5">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-display font-black text-white">{speed}</span>
              <span className="text-[10px] text-[#FFD700] font-bold">KM/H</span>
            </div>
            <div className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-1">
              <Gauge className="w-3 h-3 text-[#EE3124]" /> TELEMETRY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
