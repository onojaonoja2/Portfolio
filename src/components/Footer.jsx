// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Github, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const NAV_ITEMS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/samuel-onoja', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
  { href: 'https://github.com/onojaonoja2', label: 'GitHub', icon: <Github className="w-5 h-5" /> },
  { href: 'https://twitter.com/samuelonoj', label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
  { href: 'mailto:samuelonoja06@gmail.com', label: 'Email', icon: <Mail className="w-5 h-5" /> },
];

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-center py-12 transition-colors mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-1 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          Back to Top
        </button>

        <p className="font-medium text-sm">&copy; {new Date().getFullYear()} Samuel Onoja. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;