// src/components/Projects.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, link, linkText, image, index }) => {
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
      className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col h-full overflow-hidden group"
    >
      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img 
            src={image || `https://image.thum.io/get/width/600/crop/400/${link}`} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-cover object-top"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/600x400?text=Project+Preview';
            }}
          />
        </motion.div>
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors font-semibold group/link"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
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
      title: "ByteOps Digital",
      description: "A premier provider of tech training, IT consultancy, and digital solutions. Offering expert web development, AI automation, and business innovation services to transform businesses.",
      link: "https://www.byteops.digital/",
      linkText: "Visit ByteOps",
      image: "/new byteops ui.png"
    },
    {
      title: "Ekonex",
      description: "A digital education platform empowering the next generation of learners with AI-driven insights, seamless content delivery, and a variety of online courses.",
      link: "https://ekonex.vercel.app/",
      linkText: "Visit Ekonex",
      image: "/Ekonex Screen.png"
    },
    {
      title: "TestWise",
      description: "A secure and intelligent online examination platform designed for smart exam management.",
      link: "https://testwise.byteops.digital/",
      linkText: "Visit TestWise",
      image: "/TestWise System.png"
    },
    {
      title: "Elkris Bio Foods",
      description: "A sugar control tracking and CRM tool built with Laravel for Elkris Bio Foods. Manages customer relationships, tracks sugar intake data, and provides insights for healthier living.",
      link: "https://dfas.elkrisfoods.com/",
      linkText: "Visit Elkris Bio Foods",
      image: "/dfas_ui.png"
    },
    {
      title: "AI Interview Questions Generator",
      description: "An AI-powered interview question generation app built with Next.js and integrated with AI APIs. Generates tailored interview questions and answers to help candidates prepare effectively.",
      link: "https://sammy-ai-interview.vercel.app/",
      linkText: "Try Interview Generator",
      image: "/question_generator.png"
    },
    {
      title: "Developers Tales",
      description: "Developed a dynamic news browsing application, Developers Tales, using React.js to consume and display data from the Hacker News API. Implemented features for browsing and searching developer-related content.",
      link: "https://developerstales-6693c.web.app/",
      linkText: "Developers Tales",
      image: "/developer_tales_screenshots.png"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 max-w-7xl mx-auto px-4"
    >
      <div className="text-center mb-16">
        <h2 
          ref={headingRef}
          className="inline-block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mb-4"
        >
          Featured Projects
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
