import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [trails, setTrails] = useState([]);
  const lastUpdate = useRef(0);

  const updateMousePosition = (e) => {
    const now = Date.now();
    if (now - lastUpdate.current < 16) return; // Throttle to ~60fps
    lastUpdate.current = now;
    
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Simplified trail effect
    setTrails(prev => {
      const newTrails = [...prev, { x: e.clientX, y: e.clientY, id: now }];
      return newTrails.slice(-5); // Limit to 5 trails
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
      {/* Main cursor */}
      <motion.div
        className={`magnetic-cursor ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorText && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-lavender-400 whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Simplified cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;