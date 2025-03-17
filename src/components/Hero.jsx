// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePic from '../assets/profile-pic.jpg';

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
      className="flex justify-between items-center p-10 bg-white dark:bg-dark-surface mt-20 shadow-md rounded-lg max-w-6xl mx-auto transition-colors"
    >
      <div className="hero-content" ref={textRef}>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-5 dark:text-white"
        >
          Hi,
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        >
          I am a dynamic and ambitious Fullstack Software Engineer with 
          expertise in languages such as C, Python, and JavaScript. 
          Proficient in the MERN stack and frameworks like Flask and Django, 
          I am well-equipped to develop end-to-end solutions. 
          My commitment to personal growth, passion for creating impactful experiences, 
          and collaborative nature make me a suitable candidate for anyone seeking an 
          Engineer who can contribute to innovative projects and thrive in a team environment.
        </motion.p>
      </div>
      <motion.div 
        ref={imageRef}
        className="hero-image"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={profilePic} 
          alt="Samuel Onoja" 
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;