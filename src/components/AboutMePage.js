import React, { useEffect, useRef } from "react";
import './styles/AboutMePage.css';

const AboutMePage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("grow-shrink");
      }, index * 100); // Adding a delay for staggered animation
    });
  }, []);

  const description = "I'm an enthusiastic and adaptable individual, constantly seeking out fresh opportunities to grow. Fueled by a genuine love for learning, I'm committed to delivering excellence in everything I do. Armed with a positive outlook and an unwavering belief in continuous improvement, making a significant impact to reach remarkable heights.";

  const createAnimatedText = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="animated-word" style={{ animationDelay: `${index * 0.1}s` }}>
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div className="about-me-wrapper">
      <div className="about-me-container">
        <h1>About Me</h1>
        <div className="animated-text-container">
          {createAnimatedText(description)}
        </div>
        <div className="cards-container">
          {["Professional Experience", "Technical Skills", "Freelance Development", "Background and Expertise"].map((title, index) => (
            <div 
              key={index} 
              className="card" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="card-front">
                <b>{title}</b>
              </div>
              <div className="card-back">
                {index === 0 && (
                  "I am a skilled Pega Associate at Intellativ, bringing a strong foundation in business process automation and workflow management."
                )}
                {index === 1 && (
                  "I am currently expanding my expertise as a MERN Full Stack Developer trainee at Nxtwave, where I am learning to create dynamic, responsive web applications using JavaScript-based technologies."
                )}
                {index === 2 && (
                  "Alongside my training, I am actively engaged in freelance full-stack development, delivering innovative solutions for diverse client projects."
                )}
                {index === 3 && (
                  "My background in Pega integration and development, combined with my immersion in modern web technologies, enables me to deliver high-quality software solutions with a focus on user experience and efficiency."
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
