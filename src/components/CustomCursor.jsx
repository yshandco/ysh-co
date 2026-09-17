import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Precision springs for smooth, responsive movement without sluggish delay
  const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on devices that support hover (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('a, button, [role="button"]');

      if (target) {
        const type = target.getAttribute('data-cursor');
        const label = target.getAttribute('data-cursor-text') || '';
        setCursorVariant(type);
        setCursorText(label);
      } else if (clickable) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        {cursorVariant === 'default' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-2.5 h-2.5 rounded-full bg-white transition-all duration-150"
          />
        )}

        {cursorVariant === 'hover' && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-10 h-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-[1px] transition-all duration-200"
          />
        )}

        {cursorVariant === 'view' && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="px-3.5 py-1.5 rounded-full bg-white text-black font-sans text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-2xl"
          >
            <span>{cursorText || 'VIEW'}</span>
            <span className="text-[12px]">→</span>
          </motion.div>
        )}

        {cursorVariant === 'explore' && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="px-4 py-1.5 rounded-full bg-white text-black font-sans text-[9px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-2xl"
          >
            <span>{cursorText || 'EXPLORE'}</span>
            <span>+</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
