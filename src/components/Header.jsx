// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling

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
      className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-dark-surface p-5 z-50 transition-colors"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          Samuel Onoja
        </motion.h1>

        {isMobile ? (
          // Mobile View with Menu Icon and Breadcrumbs
          <div className="flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-gray-800 dark:bg-dark-secondary rounded-md shadow-md overflow-hidden"
              >
                <ul className="py-2">
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-dark-primary cursor-pointer"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-dark-primary cursor-pointer"
                      onClick={closeMenu}
                    >
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-dark-primary cursor-pointer"
                      onClick={closeMenu}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-dark-primary cursor-pointer"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        ) : (
          // Desktop View with Regular Links
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-5">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="skills" smooth={true} duration={500} className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                  Tools
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                  Projects
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                  Contact
                </Link>
              </motion.li>
            </ul>
            <DarkModeToggle />
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;