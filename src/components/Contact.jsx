// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter, MapPin, Download } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactItem = ({ icon, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -2 }}
      className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 transition-colors"
    >
      {icon}
      {children}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mb-4"
        >
          Let's Connect
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto"></div>
      </div>

      <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactItem
            icon={<Mail className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={0}
          >
            <a
              href="mailto:samuelonoja06@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium break-all"
            >
              samuelonoja06@gmail.com
            </a>
          </ContactItem>

          <ContactItem
            icon={<Phone className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={1}
          >
            <div className="dark:text-gray-300 flex flex-col items-start font-medium">
              <span className="text-gray-700 dark:text-gray-300 mb-2">+234 803 529 1021</span>
              <a
                href="https://wa.me/2347080904982"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </ContactItem>

          <ContactItem
            icon={<Linkedin className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={2}
          >
            <a
              href="https://www.linkedin.com/in/samuel-onoja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
            >
              LinkedIn Profile
            </a>
          </ContactItem>

          <ContactItem
            icon={<Github className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={3}
          >
            <a
              href="https://github.com/onojaonoja2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
            >
              GitHub Profile
            </a>
          </ContactItem>

          <ContactItem
            icon={<Twitter className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={4}
          >
            <a
              href="https://twitter.com/samuelonoj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
            >
              Twitter Profile
            </a>
          </ContactItem>

          <ContactItem
            icon={<MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />}
            delay={5}
          >
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Abuja, Nigeria · Available worldwide
            </span>
          </ContactItem>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="https://drive.google.com/file/d/1fPPq-7rM5YqCBcyWWrOKwpv95CmFO2NI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;