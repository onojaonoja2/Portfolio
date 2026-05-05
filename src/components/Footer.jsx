// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-center py-8 transition-colors mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="font-medium">&copy; {new Date().getFullYear()} Samuel Onoja. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;