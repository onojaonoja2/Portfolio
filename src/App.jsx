// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import HeroBackground from './components/HeroBackground';
import SectionDivider from './components/SectionDivider';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-24">
    <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
  </div>
);

const Section = ({ children }) => (
  <>
    <Suspense fallback={<SectionLoader />}>{children}</Suspense>
    <SectionDivider />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16 px-4"
      >
        <div className="relative">
          <HeroBackground />
          <Hero />
        </div>
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Section>
          <Certifications />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Contact />
        </Section>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;