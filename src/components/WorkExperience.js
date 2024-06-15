import React from "react";
import './styles/WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h1>Work Experience</h1>

      <div className="work-experience-grid">
        
        <div className="work-experience-details">
          <h2>Full Stack Developer (Freelance)</h2>
          <p><b>Date:</b> May 2024 - Present</p>
          <p><b>Location:</b> India</p>
          <p>
            <b>Role Description:</b> Frontend Development & UI/UX Design: Led the development of a responsive and intuitive user interface using React.js, accounting for 60% of the overall project efforts. Collaborated with the design team to implement a modern and engaging user experience.
            AWS Deployment & Backend Integration: Managed deployment on AWS, ensuring cloud scalability and seamless operation, representing 20% of the project efforts. Assisted in backend integration to facilitate smooth communication between front-end and cloud deployment, accounting for 5% of the project efforts.

          </p>
          <p><b>Skills:</b>

            <p>Frontend: HTML5, CSS3, React JS, CSS Flexbox, Bootstrap, JavaScript.</p>
            <p>Backend: Node JS, Express JS, Python, SQL, Redux.</p>
            <p>Database: MongoDB, MySQL.</p>
          </p>
        </div>
      </div>
      <br></br>
      <div className="work-experience-grid">
        <div className="work-experience-image">
          <img src="https://tse4.mm.bing.net/th?id=OIP.uZOT4qkL1-XeO4BPV5_RDQHaHa&pid=Api&P=0&h=180" alt="Your Image" />
        </div>
        <div className="work-experience-details">
          <h2>Pega Associate</h2>
          <h3>Intellativ India Private Limited</h3>
          <p><b>Date:</b> April 2024 - Present</p>
          <p><b>Location:</b> India</p>
          <p>
            <b>Role Description:</b> Engaged in hands-on real time project work, focusing on implementing PEGA solutions for business process management (BPM).
            Contributing to the design and creation of user-facing applications with a strong emphasis on usability and an excellent user experience.
            Developing reusable components to enhance application efficiency and usability across the enterprise.
            Utilizing CPM 6.x, Pega PRPC Insurance solutions, and repository tools like Subversion and GIT for efficient project workflow management.
          </p>
          <p><b>Skills:</b>
            <p>BPM Solutions: Expertise in PEGA Business Process Management (BPM) tools.</p>
            <p>Application Design: Strong background in designing user-friendly and efficient applications.</p>
          </p>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
