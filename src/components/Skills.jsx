import React from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiNestjs, SiVite, SiReact, SiJavascript, SiTypescript, SiAwsamplify, SiGooglecloud, SiPython } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-gray-800 dark:text-white" /> },
  { name: 'NestJS', icon: <SiNestjs className="w-12 h-12 text-red-600 dark:text-red-400" /> },
  { name: 'Vite + React', icon: <SiVite className="w-12 h-12 text-purple-600 dark:text-purple-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
  { name: 'AWS', icon: <SiAwsamplify className="w-12 h-12 text-orange-500" /> }, // Updated icon
  { name: 'GCP', icon: <SiGooglecloud className="w-12 h-12 text-blue-400" /> },
  { name: 'Python', icon: <SiPython className="w-12 h-12 text-blue-500 dark:text-yellow-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner max-w-6xl mx-auto my-16 p-8 transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2"
          >
            {skill.icon}
            <span className="text-gray-800 dark:text-gray-300 text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;