import React from "react";
import "./styles/Trainings.css";

const Trainings = () => {
  return (
    <div className="trainings-container">
      <h1 className="trainings-heading">Training Program</h1>

      <div className="trainings-grid">
        <div className="trainings-details">
          <h2 className="role-title">MERN Full Stack Developer</h2>
          <h3 className="institute-title">Nxtwave Disruptive Technologies Private Limited</h3>
          <p className="location"><b>Location:</b> India</p>
          <p className="duration"><b>Duration:</b> 8 Months</p>
          <p className="description">
          <b>Description:</b> Engaged in a rigorous apprenticeship program centered on 4.0 Technologies, specializing in Full Stack Development.
            Developing expertise in Front-End and Back-End Web Development, Python Programming, and MySQL, with a focus on creating robust and scalable web applications.
          </p>
          <p className="skills">
            <b>Skills:</b> HTML5, CSS3, React JS, CSS Flexbox, Bootstrap, JavaScript, Node JS, Express JS, Python, SQL, Redux, MongoDB, MySQL.
          </p>
        </div>
        
      </div>
      <p className="personal-experience">
        This training helped me to improve my skills in React and JavaScript, and I
        was able to apply them in my projects.
      </p>
      <div className="trainings-buttons">
        <div>
          <p>Are you interested in participating in the training program?</p>
          <a href="https://ccbp.page.link/BL99bwzCmjKtKr2Q6" target="_blank" rel="noopener noreferrer">
            <button className="action-button">Apply for Scholarship</button>
          </a>
          <a href="https://media.licdn.com/dms/document/media/C562DAQHOWzAMmg3kJw/profile-treasury-document-pdf-analyzed/0/1672382490363?e=1719446400&v=beta&t=kuK6uYXOj_Arj1t2kf3PSjP01xZv1tq-NGmnmceArSE" target="_blank" rel="noopener noreferrer">
            <button className="action-button">View Course Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
