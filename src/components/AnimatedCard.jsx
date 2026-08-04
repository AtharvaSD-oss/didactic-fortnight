import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      data-cursor={cursorText}
      className={`
        bg-[#0b0b12] border border-white/10 hover:border-[#FF4500]/40
        rounded-2xl p-6 sm:p-7 transition-colors duration-300 shadow-xl
        hover:shadow-2xl hover:shadow-[#FF4500]/10 backdrop-blur-md group ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
