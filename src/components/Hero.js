  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';

import ProfilePicture from './ProfilePicture';

  const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "I build Intelligent Systems. I find Signals in Noise.";

    useEffect(() => {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, fullText]);

    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
        {/* Futuristic animated mesh background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <motion.path
              d="M0,400 Q360,200 720,400 T1440,400"
              stroke="#a78bfa44"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0.7 }}
              animate={{ pathLength: [0.7, 1, 0.7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="720"
              cy="400"
              r="180"
              stroke="#a78bfa33"
              strokeWidth="2"
              fill="none"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Glassmorphism card for content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
          <ProfilePicture />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-lg">
              Data Scientist
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl mb-8 text-lavender-400 drop-shadow">
              & AI Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl font-mono text-white/90">
              {displayText}
              <span className="animate-pulse text-lavender-400">|</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive px-8 py-4 bg-lavender-500 hover:bg-lavender-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-glow"
              data-cursor-text="Explore"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive px-8 py-4 border-2 border-lavender-500 text-lavender-400 hover:bg-lavender-500 hover:text-white rounded-lg font-semibold transition-all duration-300"
              data-cursor-text="Connect"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Floating particles for extra depth */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-lavender-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-lavender-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lavender-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>
    );
  };

  export default Hero;