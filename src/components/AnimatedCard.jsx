import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      data-cursor={cursorText}
      className={`
        bg-white border border-gray-200/90 hover:border-[#EE3124]/40
        rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-md
        hover:shadow-xl group ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
