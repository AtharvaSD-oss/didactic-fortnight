import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const Cursor = () => {
  const { mousePosition, cursorState, isVisible } = useCursor();

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Refined Ambient Follower Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center font-mono text-[9px] font-bold tracking-widest uppercase transition-colors duration-300 ${
          cursorState.type === 'badge'
            ? 'w-14 h-14 bg-[#C9A45C]/20 border border-[#C9A45C] text-[#F4F1EA] backdrop-blur-sm shadow-[0_0_20px_rgba(201,164,92,0.5)]'
            : cursorState.type === 'hover'
            ? 'w-10 h-10 border border-[#C9A45C]/60 bg-[#C9A45C]/10 shadow-[0_0_15px_rgba(201,164,92,0.3)]'
            : 'w-7 h-7 border border-white/20 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (cursorState.type === 'badge' ? 28 : cursorState.type === 'hover' ? 20 : 14),
          y: mousePosition.y - (cursorState.type === 'badge' ? 28 : cursorState.type === 'hover' ? 20 : 14),
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.15 }}
      >
        {cursorState.text}
      </motion.div>
    </div>
  );
};

export default Cursor;
