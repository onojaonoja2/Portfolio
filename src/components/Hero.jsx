// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const profilePic = '/Professional_head_shot.png';

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-16 max-w-7xl mx-auto rounded-3xl relative overflow-hidden min-h-[80vh]"
    >
      <div className="mt-10 md:mt-0 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-4 py-2 rounded-full mb-6 font-medium text-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
          </span>
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight"
        >
          Samuel Onoja
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mt-2">
            Full-Stack Software Engineer & Certified SAP Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          Full-Stack Software Engineer and Certified SAP Specialist based in{' '}
          <strong>Abuja, Nigeria</strong>. I bridge modern web applications with enterprise systems
          architecture — specializing in <strong>Node.js</strong>, <strong>React</strong>,{' '}
          <strong>Next.js</strong>, <strong>Python</strong>, and{' '}
          <strong>SAP ABAP/Fiori/HANA integrations</strong>, AI workflow automation, and resilient
          cloud infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-[2rem] transform rotate-6 opacity-30 dark:opacity-50 blur-lg"></div>
        <div className="relative p-2 bg-white dark:bg-dark-surface rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          <img
            src={profilePic}
            alt="Samuel Onoja"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[1.5rem] object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;