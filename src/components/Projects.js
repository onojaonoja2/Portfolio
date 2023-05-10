import React from 'react';
//import './styles.css';

const Projects = () => {
  return (
    
    <section className="project">
      {/*<div><h2 className="projects-heading">Projects</h2>
      </div>*/}
      <div className="projects">
        <h3>Developers Tales</h3>
        <p>
          Developers Tales is a deployed project built in React.js, utilizing the Hacker News API. 
          It allows users to browse and search for developer-related news, articles, and stories. 
          The project helped me enhance my React.js skills, API integration, and state management. 
          Visit the project: <a href="https://developerstales-6693c.web.app/" target="_blank" rel="noopener noreferrer">Developers Tales</a>
        </p>
      </div>
      <div className="projects">
        <h3>confByte Academy</h3>
        <p>
          confByte Academy is a website built for an academy and hosted on GitHub Pages. 
          It provides information about courses, instructors, and enrollment details. 
          Building this website allowed me to improve my HTML and CSS skills and understand the 
          process of deploying a website on GitHub Pages. 
          Explore the project: <a href="https://onojaonoja2.github.io" target="_blank" rel="noopener noreferrer">ConfByte Academy</a>
        </p>
      </div>
      <div className="projects">
        <h3>AirBnB Clone</h3>
        <p>
          The AirBnB Clone is a website clone of the popular accommodation marketplace. 
          It was developed as part of my software engineering course. 
          The backend of this project was built using Flask, providing functionalities 
          like user authentication, property listings, and booking management. 
          Building the AirBnB Clone helped me grasp the concepts of web development, 
          REST APIs, and backend frameworks. 
          Check out the project: <a href="https://github.com/onojaonoja2/AirBnB_clone_v4" target="_blank" rel="noopener noreferrer">AirBnB Clone</a>
        </p>
      </div>
      <div className="projects">
        <h3>Simple Shell</h3>
        <p>
          Simple Shell is a collaborative project I developed together with my partner as part of my software engineering course using the C 
          programming language and Bash scripting. It is a basic implementation of a 
          command-line shell with functionalities like executing commands, 
          handling input/output, and managing processes. 
          Developing the Simple Shell project allowed me to deepen my 
          understanding of low-level programming, system calls, and process management. 
          View the project: <a href="https://github.com/Kerryjossy/simple_shell" target="_blank" rel="noopener noreferrer">Simple Shell</a>
        </p>
        
      </div>
    </section>
  );
};

export default Projects;

