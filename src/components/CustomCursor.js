import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [trails, setTrails] = useState([]);

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    const now = Date.now();
    setTrails(prev => {
      const newTrails = [...prev, { x: e.clientX, y: e.clientY, id: now }];
      return newTrails.slice(-5);
    });
  };

  const handleMouseEnter = (e) => {
    if (e.target && e.target.matches && e.target.matches('button, a, .interactive')) {
      setIsHovering(true);
      setCursorText(e.target.dataset.cursorText || 'Click');
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCursorText('');
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor: glowing ring with core */}
      <motion.div
        className={`fixed pointer-events-none z-[9999] flex items-center justify-center ${isHovering ? 'mix-blend-difference' : ''}`}
        style={{ left: 0, top: 0, width: 0, height: 0 }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.04 }}
      >
        {/* Outer ring */}
        <motion.div
          className={`rounded-full border-2 border-lavender-400/80 shadow-[0_0_32px_8px_rgba(167,139,250,0.25)] bg-gradient-to-br from-lavender-400/10 to-transparent animate-glow`}
          animate={{
            scale: isHovering ? 1.7 : 1,
            opacity: isHovering ? 0.7 : 0.5,
            boxShadow: isHovering
              ? '0 0 48px 16px #a78bfa88, 0 0 0 4px #a78bfa44'
              : '0 0 32px 8px #a78bfa44',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: 48, height: 48, position: 'absolute', left: 0, top: 0 }}
        />
        {/* Core dot */}
        <motion.div
          className={`rounded-full bg-lavender-400 shadow-[0_0_16px_4px_rgba(167,139,250,0.5)]`}
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 1 : 0.8,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          style={{ width: 12, height: 12, position: 'absolute', left: 18, top: 18 }}
        />
        {/* Cursor text */}
        {cursorText && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-lavender-400 whitespace-nowrap pointer-events-none select-none drop-shadow-lg">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Enhanced cursor trails: fading, glowing, AI-inspired */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-lavender-400/40 shadow-[0_0_12px_2px_rgba(167,139,250,0.25)]"
          style={{
            left: trail.x - 8,
            top: trail.y - 8,
            width: 16,
            height: 16,
            opacity: (index + 1) / trails.length * 0.25,
            filter: 'blur(2px)',
          }}
          animate={{
            scale: [1, 0.7, 0.4],
            opacity: [0.25, 0.12, 0],
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}

export default CustomCursor;