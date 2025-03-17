// src/components/Projects.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, link, linkText, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.fromTo(card,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-dark-surface p-6 rounded-lg shadow-lg transition-all hover:shadow-xl dark:shadow-gray-800"
    >
      <motion.div whileHover={{ y: -5 }}>
        <h3 className="text-2xl font-bold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
        >
          {linkText}
        </a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    
    gsap.fromTo(heading,
      { opacity: 0, y: -30 },
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

  const projects = [
    {
      title: "Developers Tales",
      description: "Developers Tales is a deployed project built in React.js, utilizing the Hacker News API. It allows users to browse and search for developer-related news, articles, and stories. The project helped me enhance my React.js skills, API integration, and state management.",
      link: "https://developerstales-6693c.web.app/",
      linkText: "Developers Tales"
    },
    {
      title: "Developers Tales",
      description: "Developers Tales is a deployed project built in React.js, utilizing the Hacker News API. It allows users to browse and search for developer-related news, articles, and stories. The project helped me enhance my React.js skills, API integration, and state management.",
      link: "https://developerstales-6693c.web.app/",
      linkText: "Developers Tales"
    },
    {
      title: "Developers Tales",
      description: "Developers Tales is a deployed project built in React.js, utilizing the Hacker News API. It allows users to browse and search for developer-related news, articles, and stories. The project helped me enhance my React.js skills, API integration, and state management.",
      link: "https://developerstales-6693c.web.app/",
      linkText: "Developers Tales"
    },
    {
      title: "confByte Academy",
      description: "confByte Academy is a website built for an academy and hosted on GitHub Pages. It provides information about courses, instructors, and enrollment details. Building this website allowed me to improve my HTML and CSS skills and understand the process of deploying a website on GitHub Pages.",
      link: "https://onojaonoja2.github.io",
      linkText: "ConfByte Academy"
    },
    {
      title: "AirBnB Clone",
      description: "The AirBnB Clone is a website clone of the popular accommodation marketplace. It was developed as part of my software engineering course. The backend of this project was built using Flask, providing functionalities like user authentication, property listings, and booking management.",
      link: "https://github.com/onojaonoja2/AirBnB_clone_v4",
      linkText: "AirBnB Clone"
    },
    {
      title: "Simple Shell",
      description: "Simple Shell is a collaborative project I developed together with my partner as part of my software engineering course using the C programming language and Bash scripting. It is a basic implementation of a command-line shell with functionalities like executing commands, handling input/output, and managing processes.",
      link: "https://github.com/Kerryjossy/simple_shell",
      linkText: "Simple Shell"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 max-w-6xl mx-auto"
    >
      <h2 
        ref={headingRef}
        className="text-3xl font-bold text-center mb-10 bg-gray-100 dark:bg-gray-800 py-5 rounded-lg shadow-sm transition-colors"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;