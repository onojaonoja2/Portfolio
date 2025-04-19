// src/components/Contact.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter, FileText } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ContactItem = ({ icon, children, delay }) => {
  const itemRef = useRef(null);
  
  useEffect(() => {
    const item = itemRef.current;
    
    gsap.fromTo(item,
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5,
        delay: delay * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [delay]);
  
  return (
    <motion.div 
      ref={itemRef}
      whileHover={{ scale: 1.05 }} 
      className="flex items-center space-x-3"
    >
      {icon}
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    
    gsap.fromTo(heading,
      { opacity: 0, y: -20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner max-w-6xl mx-auto my-16 p-8 transition-colors"
    >
      <h2 
        ref={headingRef}
        className="text-3xl font-bold text-center mb-8 dark:text-white"
      >
        Contact
      </h2>
      
      <div className="flex flex-col space-y-6 items-center">
        <ContactItem 
          icon={<Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={0}
        >
          <a 
            href="mailto:samuelonoja06@gmail.com" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            samuelonoja06@gmail.com
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={1}
        >
           <div className="dark:text-gray-300 flex items-center">
           <span>+2348035291021</span>
           <span className="text-gray-400 dark:text-gray-500 mx-2">|</span> {/* Reduced margin */}
            <a
              href="https://wa.me/2347080904982" // WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-500" // Optional: Style hover
            >
              <FaWhatsapp className="w-6 h-6 text-green-500" /> {/* WhatsApp icon */}
              <span>+2347080904982</span>
            </a>
            
          </div>
        </ContactItem>
        
        <ContactItem 
          icon={<Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={2}
        >
          <a 
            href="https://www.linkedin.com/in/samuel-onoja" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            LinkedIn Profile
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={3}
        >
          <a 
            href="https://github.com/onojaonoja2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            GitHub Profile
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<Twitter className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={4}
        >
          <a 
            href="https://twitter.com/samuelonoj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Twitter Profile
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          delay={5}
        >
          <a 
            href="https://drive.google.com/file/d/15xF2_7K_5fCEmd-w_XnWoLeaIh_ZamrW/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Resume
          </a>
        </ContactItem>
      </div>
    </section>
  );
};

export default Contact;