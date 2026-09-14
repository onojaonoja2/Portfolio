// src/components/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Database,
  Code2,
  Cloud,
  GraduationCap,
  Cpu,
  ShieldCheck,
  Landmark,
  Layers,
  BrainCircuit,
  Sparkles,
} from 'lucide-react';

const certifications = [
  {
    title: 'SAP Certified Integration Developer',
    issuer: 'SAP',
    year: '2026',
    icon: <Layers className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    highlighted: true,
  },
  {
    title: 'SAP Certified DB Administrator – SAP HANA',
    issuer: 'SAP',
    year: '2026',
    icon: <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    highlighted: true,
  },
  {
    title: 'GitHub Copilot Certified',
    issuer: 'Microsoft',
    year: '2026',
    icon: <Code2 className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    highlighted: true,
  },
  {
    title: 'Kubernetes & Cloud Native Associate',
    issuer: 'Linux Foundation',
    year: '2026',
    icon: <Cloud className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    highlighted: true,
  },
  {
    title: 'Elements of AI for Business',
    issuer: 'University of Helsinki',
    year: '2026',
    icon: <BrainCircuit className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    highlighted: true,
  },
  {
    title: 'AI for Developers I & II',
    issuer: 'ALX Africa',
    year: '2025',
    icon: <Cpu className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    title: 'Microsoft 365 Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
    icon: <ShieldCheck className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
  },
  {
    title: 'Agile Project Management & IBM Agile/Scrum',
    issuer: 'HP LIFE & IBM',
    year: '2024',
    icon: <Landmark className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    year: '2023',
    icon: <GraduationCap className="w-6 h-6 text-red-500 dark:text-red-400" />,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mb-4">
          Certifications & Credentials
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 flex items-start space-x-4 ${
              cert.highlighted
                ? 'ring-1 ring-violet-400/30 bg-gradient-to-br from-violet-50/80 to-white/80 dark:from-violet-900/20 dark:to-dark-surface/80'
                : ''
            }`}
          >
            {cert.highlighted && (
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300">
                <Sparkles className="w-3 h-3" />
                New
              </span>
            )}
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 shrink-0">
              {cert.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                {cert.title}
              </h3>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                {cert.issuer}
              </span>
              <div className="mt-3 inline-flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">{cert.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;