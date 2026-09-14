// src/components/HeroBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-10%] w-[45%] h-[55%] rounded-full bg-violet-400/25 dark:bg-violet-900/25 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-15%] left-[-8%] w-[40%] h-[50%] rounded-full bg-indigo-400/25 dark:bg-indigo-900/25 blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30%] left-[30%] w-[30%] h-[35%] rounded-full bg-blue-400/15 dark:bg-blue-900/15 blur-[90px]"
      />
    </div>
  );
};

export default HeroBackground;