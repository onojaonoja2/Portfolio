import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('Initial dark mode:', savedMode, prefersDark); // Debugging
    return savedMode === 'true' || (savedMode === null && prefersDark);
  });

  useEffect(() => {
    console.log('Dark mode state updated:', darkMode); // Debugging
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? 
        <Sun className="w-5 h-5" /> : 
        <Moon className="w-5 h-5" />
      }
    </motion.button>
  );
};

export default DarkModeToggle;