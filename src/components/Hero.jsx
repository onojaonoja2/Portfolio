// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const profilePic = '/Professional_head_shot.png';
import './Hero.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    
    gsap.fromTo(text, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.fromTo(image,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="hero-section flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-16 max-w-7xl mx-auto rounded-3xl relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-violet-400/20 dark:bg-violet-900/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="hero-content mt-10 md:mt-0 max-w-2xl" ref={textRef}>
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
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Samuel</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
        >
          A Fullstack Software Engineer based in <strong>Abuja, Nigeria</strong>, who thrives on tackling complex challenges with expertise 
          in cloud infrastructure (<strong>AWS, GCP</strong>), <strong>AI agentic coding</strong>, and creative problem-solving. I combine 
          a design-centric mindset with a collaborative spirit to develop elegant, end-to-end solutions 
          for clients locally and globally.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          My commitment to personal growth and passion for creating impactful experiences 
          make me ready to contribute to innovative projects, whether remote or on-site, 
          and thrive in any team environment.
        </motion.p>
      </div>
      
      <motion.div 
        ref={imageRef}
        className="hero-image-container relative z-10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-[2rem] transform rotate-6 opacity-30 dark:opacity-50 blur-lg"></div>
        <div className="relative p-2 bg-white dark:bg-dark-surface rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          <img 
            src={profilePic} 
            alt="Samuel Onoja" 
            className="profile-image w-64 h-64 md:w-80 md:h-80 rounded-[1.5rem] object-cover" 
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;