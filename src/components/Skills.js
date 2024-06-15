
import React, { useEffect, useState } from "react";
import './styles/skills.css';

const Skills = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (!animationCompleted) {
      const buttons = document.querySelectorAll('.skill-box button');
      let delay = 0;
      buttons.forEach((button, index) => {
        button.style.animationDelay = `${delay + index * 0.2}s`; // Add stagger delay
        delay += 0.1; // Increment delay for next button
      });
      setAnimationCompleted(true); // Set animation status
    }
  }, [animationCompleted]); // Ensure useEffect runs only once on component mount

  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-grid">
          <div className="skill-box">
            <button style={{backgroundColor: '#FFFFE0'}}>HTML5</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#FFFFE0', width: '98%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#33FF57'}}>CSS3</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#33FF57', width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: 'yellow'}}>CSS FLEXBOX & MEDIA QUERIES</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: 'yellow', width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#B0C4DE'}}>BOOTSTRAP</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#B0C4DE', width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: 'orange'}}>JAVASCRIPT</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: 'orange', width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#FFA07A'}}>JAVASCRIPT ESSENTIALS</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#FFA07A', width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#FFB6C1'}}>REACT JS</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#FFB6C1', width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#90EE90'}}>NODE JS</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#90EE90', width: '75%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#FAFAD2'}}>EXPRESS JS</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#FAFAD2', width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: 'gold'}}>SQL & MONGO DB</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: 'gold', width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-box">
            <button style={{backgroundColor: '#87CEFA'}}>REDUX</button>
            <div className="progress-container">
              <div className="progress-bar" style={{backgroundColor: '#87CEFA', width: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;