import React from 'react';
//import './App.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:samuelonoja06@gmail.com">samuelonoja06@gmail.com</a></p>
      <p>Phone: +2348035291021</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/samuel-onoja" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      <p>GitHub: <a href="https://github.com/onojaonoja2" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      <p>GitHub: <a href="https://twitter.com/samuelonoj" target="_blank" rel="noopener noreferrer">twitter Profile</a></p>
      <p>Resume: <a href="https://drive.google.com/file/d/1Cecny-Ssn2H4S_lIHXr_sueXv8Hkb8RA/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a></p>
      {/* Add more contact information if needed */}
    </section>
  );
};

export default Contact;
