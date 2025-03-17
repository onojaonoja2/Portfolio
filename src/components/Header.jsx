// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-dark-surface p-5 z-50 transition-colors"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-white text-2xl font-bold"
        >
          Samuel Onoja Onoja
        </motion.h1>
        
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-5">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </motion.li>
          </ul>
          
          <DarkModeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;