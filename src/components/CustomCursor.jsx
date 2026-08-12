import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, text: '', type: 'default' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor on desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check hovered element safely
      const target = (e.target && typeof e.target.closest === 'function')
        ? e.target.closest('[data-cursor], button, a, input, [role="button"]')
        : null;

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
        className="fixed top-0 left-0 w-2 h-2 bg-[#080808] rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorState.active ? 0.5 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Telemetry Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center font-mono text-[9px] font-bold tracking-widest uppercase transition-colors duration-200 ${
          cursorState.type === 'badge'
            ? 'w-14 h-14 bg-black/80 border-black text-white shadow-md'
            : cursorState.type === 'hover'
            ? 'w-10 h-10 border-black/40 bg-black/5'
            : 'w-7 h-7 border-black/20 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (cursorState.type === 'badge' ? 28 : cursorState.type === 'hover' ? 20 : 14),
          y: mousePosition.y - (cursorState.type === 'badge' ? 28 : cursorState.type === 'hover' ? 20 : 14),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorState.text}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
