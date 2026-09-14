// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling

const NAV_ITEMS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/70 dark:bg-dark-bg/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 p-5 z-50 transition-colors"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
          className="text-gray-900 dark:text-white text-2xl font-bold cursor-pointer tracking-tight"
        >
          Samuel Onoja
        </motion.h1>

        {isMobile ? (
          // Mobile View with Menu Icon and Breadcrumbs
          <div className="flex items-center">
            <DarkModeToggle /> {/* Place DarkModeToggle here in mobile view */}
            <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none ml-4" aria-label="Toggle navigation menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-56 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <ul className="py-2">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        activeClass="text-violet-600 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/20"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ) : (
          // Desktop View with Regular Links
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <motion.li key={item.to} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="text-violet-600 dark:text-violet-400"
                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <DarkModeToggle />
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;