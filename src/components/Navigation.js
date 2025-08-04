import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];


const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      // Scrollspy
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
      // Shadow & background
      setScrolled(window.scrollY > 10);
      // Hide on scroll down, show on scroll up
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setShowNav(false);
          } else {
            setShowNav(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 transition-all duration-300
        ${scrolled ? 'bg-black/70 shadow-lg backdrop-blur-md' : 'bg-black/20 backdrop-blur-md shadow-none'}
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`interactive text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm px-2 py-1 ${
                  activeSection === section.id 
                    ? 'text-lavender-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
                data-cursor-text="Navigate"
              >
                {section.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10"
          >
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-lavender-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;