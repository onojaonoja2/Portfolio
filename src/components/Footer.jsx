// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white text-center py-6 transition-colors">
      <p>&copy; {new Date().getFullYear()} Samuel Onoja</p>
    </footer>
  );
};

export default Footer;