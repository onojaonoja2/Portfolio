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
      title: "Customer Location Pinning App",
      description: "Developed a real-time customer location pinning application leveraging the Google Location API to pinpoint user coordinates. Built with React and Vite for a fast frontend, and Nest.js for enhanced features. Deployed the backend on Render and the frontend on Vercel, gaining experience in end-to-end deployment workflows.",
      link: "https://yip-omega.vercel.app/",
      linkText: "Location Pinning App"
    },
    {
      title: "PlanAssist",
      description: "Engineered PlanAssist, a task management application, utilizing Next.js for a robust full-stack framework and Prisma as an ORM to interact with a PostgreSQL database hosted on Railway. Implemented features for task creation, assignment, and tracking, sharpening skills in database management and server-side development.",
      link: "https://github.com/onojaonoja2/PlanAssist",
      linkText: "PlanAssist"
    },
    {
      title: "Developers Tales",
      description: "Developed a dynamic news browsing application, Developers Tales, using React.js to consume and display data from the Hacker News API. Implemented features for browsing and searching developer-related content, enhancing skills in API integration and React state management.",
      link: "https://developerstales-6693c.web.app/",
      linkText: "Developers Tales"
    },
    {
      title: "ConfByte Academy",
      description: "Constructed the ConfByte Academy website, providing information on courses, instructors, and enrollment. Built with HTML and CSS and deployed on GitHub Pages, refining foundational web development skills and understanding the deployment process on static hosting platforms.",
      link: "https://onojaonoja2.github.io",
      linkText: "ConfByte Academy"
    },
    {
      title: "AirBnB Clone",
      description: "Contributed to building an AirBnB Clone, focusing on backend development with Flask to enable user authentication, property listings, and booking management. This project deepened understanding of server-side logic and database interactions.",
      link: "https://github.com/onojaonoja2/AirBnB_clone_v4",
      linkText: "AirBnB Clone"
    },
    {
      title: "Simple Shell",
      description: "Collaboratively developed Simple Shell, a command-line interpreter, using C and Bash scripting. Implemented core shell functionalities such as command execution, I/O handling, and process management, gaining practical experience in system-level programming.",
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