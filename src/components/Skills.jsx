import React from 'react';
import { motion } from 'framer-motion';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiNextdotjs, SiNestjs, SiVite, SiReact, SiJavascript, SiTypescript, SiAwsamplify, SiGooglecloud, SiPython,
  SiGit,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiVuedotjs,
} from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-gray-800 dark:text-white" /> },
  { name: 'NestJS', icon: <SiNestjs className="w-12 h-12 text-red-600 dark:text-red-400" /> },
  { name: 'Vite + React', icon: <SiVite className="w-12 h-12 text-purple-600 dark:text-purple-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
  { name: 'AWS', icon: <SiAwsamplify className="w-12 h-12 text-orange-500" /> }, // Updated icon
  { name: 'GCP', icon: <SiGooglecloud className="w-12 h-12 text-blue-400" /> },
  { name: 'Python', icon: <SiPython className="w-12 h-12 text-blue-500 dark:text-yellow-400" /> },
  { name: 'Git', icon: <SiGit className="w-12 h-12 text-orange-600 dark:text-orange-400" /> },
  { name: 'AI', icon: <FontAwesomeIcon icon={faBrain} className="w-12 h-12 text-purple-500 dark:text-purple-300" /> },
  { name: 'Linux', icon: <SiLinux className="w-12 h-12 text-yellow-700 dark:text-yellow-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-700 dark:text-gray-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-blue-700 dark:text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600 dark:text-green-400" /> },
  { name: 'MySQL', icon: <SiMysql className="w-12 h-12 text-blue-600 dark:text-blue-400" /> },
  { name: 'Laravel', icon: <SiLaravel className="w-12 h-12 text-red-500" /> },
  { name: 'Vue.js', icon: <SiVuedotjs className="w-12 h-12 text-green-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mb-4">
          Tech Stack
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto"></div>
      </div>
      
      <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center space-y-4 group"
            >
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                {skill.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;