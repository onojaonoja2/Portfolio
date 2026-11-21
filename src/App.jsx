// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
      </main>

      <div className="closing-band border-t border-line bg-paper text-ink">
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
