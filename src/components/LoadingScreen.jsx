import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 600; // Fast 0.6s load simulation
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          if (typeof onComplete === 'function') {
            try {
              onComplete();
            } catch (err) {
              console.error(err);
            }
          }
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#07070a] flex flex-col items-center justify-between p-8 sm:p-12 overflow-hidden selection:bg-[#FF4500]"
        >
          {/* Carbon Grid Overlay */}
          <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />

          {/* Top Telemetry Tag */}
          <div className="w-full max-w-6xl flex items-center justify-between font-mono text-xs text-gray-500 z-10">
            <span className="text-[#FF4500] font-bold tracking-widest">// FORMULA KARTING ARENA</span>
            <span>SYSTEM INITIALIZATION</span>
          </div>

          {/* Center Logo & Animated Telemetry Racing Line */}
          <div className="relative z-10 flex flex-col items-center space-y-6 my-auto">
            {/* SVG Racing Line Path Animation */}
            <svg className="w-64 h-12 text-[#FF4500]" viewBox="0 0 300 40">
              <motion.path
                d="M 10 20 Q 75 5, 150 20 T 290 20"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ ease: 'linear' }}
              />
            </svg>

            {/* Logo Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/logo.png"
              alt="Kartomania Logo"
              className="h-20 sm:h-28 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,69,0,0.5)]"
            />

            <span className="font-mono text-xs text-gray-400 tracking-widest uppercase font-semibold">
              PREMIUM MOTORSPORTS EXPERIENCE
            </span>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-xl z-10 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-gray-400">
              <span className="uppercase text-[#FF4500] font-bold">TELEMETRY SYNC</span>
              <span className="text-xl font-display font-bold text-white">{Math.round(progress)}%</span>
            </div>

            {/* Outer Progress Track */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF4500] to-[#FF8C00] rounded-full shadow-[0_0_15px_#FF4500]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
