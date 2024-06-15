import React from "react";
import './styles/Homepage.css';

const Homepage = () => {
  const handleResumeDownload = () => {
    window.open("https://docs.google.com/document/d/1OYWnkHHXu_aEubWzzigLVo36b3Dqp2H5iNiAllWNCtk/edit", "_blank"); // Replace with your actual Google Docs link
  };

  return (
    <div className="homepage">
      <div className="content">
        <div className="text-content">
          <h1>Welcome to My Portfolio</h1>
          <p>👋 Hello! It's Me,</p>
          <h2>Gangavarapu Ramya</h2>
          <p>I'm a MERN Full Stack Developer</p>
          <p>Here you will find information about my projects, skills, experience, and a lot more.</p>
          <p>Connect with me on...</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/gangavarapu-ramya/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Ramya-Gangavarapu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <button onClick={handleResumeDownload}>
              Resume
            </button>
          </div>
        </div>
        <div className="Hii">
          <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718093217/Screenshot_2024-06-11_133640_qrhesr.jpg" alt="Example" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
