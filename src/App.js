import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectHeading from './components/Project-heading';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectHeading/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
