import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      data-cursor={cursorText}
      className={`
        bg-[#15181C] border border-white/10 hover:border-[#C9A45C]/50
        rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-md
        hover:shadow-2xl group ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
