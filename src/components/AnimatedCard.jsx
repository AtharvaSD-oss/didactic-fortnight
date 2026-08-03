import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', cursorText = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      data-cursor={cursorText}
      className={`
        bg-[#0e0e17]/85 border border-white/10 hover:border-[#FF4500]/60
        rounded-3xl p-6 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_40px_rgba(255,69,0,0.2)] backdrop-blur-xl group ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
