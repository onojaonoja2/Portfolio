import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiSap,
  SiAwsamplify,
  SiPostgresql,
  SiZapier,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Full-Stack Web',
    icon: <SiReact className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
    accent: 'from-violet-500/20 to-indigo-500/20',
    skills: [
      'Next.js', 'React.js', 'Vue.js', 'Node.js', 'NestJS', 'Express',
      'TypeScript', 'JavaScript', 'Python (Django, Flask)', 'PHP', 'Laravel', 'Tailwind CSS'
    ]
  },
  {
    title: 'Enterprise & SAP Stack',
    icon: <SiSap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    accent: 'from-cyan-500/20 to-blue-500/20',
    skills: ['SAP ABAP', 'SAP Fiori / UI5', 'SAP HANA', 'SAP Integration Suite']
  },
  {
    title: 'Cloud & DevOps',
    icon: <SiAwsamplify className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
    accent: 'from-orange-500/20 to-amber-500/20',
    skills: ['AWS (EC2, S3, RDS)', 'GCP', 'Docker', 'Kubernetes Basics', 'Linux/Shell Scripting', 'CI/CD']
  },
  {
    title: 'Databases',
    icon: <SiPostgresql className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    accent: 'from-blue-500/20 to-indigo-500/20',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SAP HANA DB']
  },
  {
    title: 'AI & Automation',
    icon: <SiZapier className="w-6 h-6 text-red-500 dark:text-red-400" />,
    accent: 'from-red-500/20 to-pink-500/20',
    skills: ['AI Agentic Workflows', 'RAG Pipelines', 'n8n', 'Zapier', 'OpenRouter / LLM APIs']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mb-4">
          Skills & Tech Stack
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (groupIndex % 3) * 0.1 }}
            className={`bg-gradient-to-br ${group.accent} bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 ${
              groupIndex === skillGroups.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-800 shadow-sm">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;