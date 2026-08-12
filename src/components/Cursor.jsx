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
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center font-mono text-[9px] font-bold tracking-widest uppercase transition-colors duration-200 ${
          cursorState.type === 'badge'
            ? 'w-12 h-12 bg-[#0A0A0A] border-2 border-[#F47C20] text-white shadow-xl'
            : cursorState.type === 'hover'
            ? 'w-8 h-8 border border-[#F47C20] bg-[#F47C20]/10'
            : 'w-6 h-6 border border-black/20 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (cursorState.type === 'badge' ? 24 : cursorState.type === 'hover' ? 16 : 12),
          y: mousePosition.y - (cursorState.type === 'badge' ? 24 : cursorState.type === 'hover' ? 16 : 12),
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.15 }}
      >
        {cursorState.text}
      </motion.div>
    </div>
  );
};

export default Cursor;
