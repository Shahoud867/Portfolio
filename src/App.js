import React from 'react';
import { Helmet } from 'react-helmet';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import PerformanceMonitor from './components/PerformanceMonitor';
import Layout from './components/Layout';
import './index.css';

function App() {
  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Data Scientist & AI Engineer</title>
        <meta name="description" content="Portfolio of a Data Scientist & AI Engineer. Explore projects, certificates, and contact information." />
      </Helmet>
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
        {/* Example: <img src="..." alt="Descriptive text about the image content" /> */}
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="certificates"><Certificates /></div>
        <div id="contact"><Contact /></div>
      </main>
    </Layout>
  );
}

export default App;
