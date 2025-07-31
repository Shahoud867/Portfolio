  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import NeuralNetwork from './NeuralNetwork';

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
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <NeuralNetwork />
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="matrix-rain"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random()}s`
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Data Scientist
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl mb-8 text-lavender-400">
              & AI Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
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

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-lavender-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
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