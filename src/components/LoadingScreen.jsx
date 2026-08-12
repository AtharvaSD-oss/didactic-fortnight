import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 650; // Fast load simulation
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 300);
          }, 100);
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
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-between p-8 sm:p-12 overflow-hidden selection:bg-[#F47C20]"
        >
          {/* Top Telemetry Tag */}
          <div className="w-full max-w-6xl flex items-center justify-between font-mono text-xs text-[#888888] z-10">
            <span className="text-[#0A0A0A] font-bold tracking-widest">// KARTOMANIA ARENA</span>
            <span className="text-[#F47C20] font-bold">INITIALIZING TELEMETRY</span>
          </div>

          {/* Center Logo */}
          <div className="relative z-10 flex flex-col items-center space-y-5 my-auto">
            {/* Logo Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/logo.png"
              alt="Kartomania Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />

            <span className="font-mono text-xs text-[#F47C20] tracking-widest uppercase font-bold">
              PREMIUM MOTORSPORTS EXPERIENCE
            </span>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-md z-10 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#888888]">
              <span className="uppercase text-[#0A0A0A] font-bold">SYSTEM SYNC</span>
              <span className="text-base font-display font-bold text-[#F47C20]">{Math.round(progress)}%</span>
            </div>

            {/* Outer Progress Track */}
            <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#F47C20] rounded-full"
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
