import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, text: '', type: 'default' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor on desktop
    if (window.innerWidth < 1024) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target.closest('[data-cursor], button, a, input, [role="button"]');
      if (target) {
        const cursorAttr = target.getAttribute('data-cursor');
        if (cursorAttr) {
          setCursorState({ active: true, text: cursorAttr, type: 'badge' });
        } else {
          setCursorState({ active: true, text: '', type: 'hover' });
        }
      } else {
        setCursorState({ active: false, text: '', type: 'default' });
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: cursorState.active ? 0.5 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Telemetry Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center font-mono text-[9px] font-bold tracking-widest uppercase transition-colors duration-300 ${
          cursorState.type === 'badge'
            ? 'w-16 h-16 bg-[#FF4500]/25 border-[#FF4500] text-white backdrop-blur-sm shadow-[0_0_25px_rgba(255,69,0,0.6)]'
            : cursorState.type === 'hover'
            ? 'w-12 h-12 border-[#FF4500] bg-[#FF4500]/10 shadow-[0_0_20px_rgba(255,69,0,0.4)]'
            : 'w-9 h-9 border-white/40 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (cursorState.type === 'badge' ? 32 : cursorState.type === 'hover' ? 24 : 18),
          y: mousePosition.y - (cursorState.type === 'badge' ? 32 : cursorState.type === 'hover' ? 24 : 18),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorState.text}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
