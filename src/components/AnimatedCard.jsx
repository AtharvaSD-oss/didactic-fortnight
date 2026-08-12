import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      data-cursor={cursorText}
      className={`
        bg-white border border-[#E5E5E5] hover:border-[#F47C20]
        rounded-xl p-6 transition-all duration-300 shadow-sm
        hover:shadow-md group ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
