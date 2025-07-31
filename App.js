import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PerformanceMonitor from './components/PerformanceMonitor';
import Layout from './components/Layout'; // ✅ Now actually used
import './index.css';

function App() {
  return (
    <Layout>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-lavender-500 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <PerformanceMonitor />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
    </Layout>
  );
}

export default App;
