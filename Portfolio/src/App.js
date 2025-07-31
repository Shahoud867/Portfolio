import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;