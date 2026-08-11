import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      data-cursor={cursorText}
      className={`
        floating-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-400 group
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
