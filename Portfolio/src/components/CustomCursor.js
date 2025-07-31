import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrails(prev => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, .interactive')) {
        setIsHovering(true);
        setCursorText(e.target.dataset.cursorText || 'Click');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', updateMousePosition);
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

      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="cursor-trail"
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;