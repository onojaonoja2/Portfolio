import React from 'react';
//import './App.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hi,</h2>
        
        <p>I am a dynamic and ambitious Fullstack Software Engineer with 
          expertise in languages such as C, Python, and JavaScript. 
          Proficient in the MERN stack and frameworks like Flask and Django, 
          I am well-equipped to develop end-to-end solutions. 
          My commitment to personal growth, passion for creating impactful experiences, 
          and collaborative nature make me a suitable candidate for anyone seeking an 
          Engineer who can contribute to innovative projects and thrive in a team environment. 
        </p>
      </div>
      <div className="hero-image">
        <img src={require('../assets/profile-pic.jpg')} alt="Samuel Onoja" />
      </div>
    </section>
  );
};

export default Hero;
