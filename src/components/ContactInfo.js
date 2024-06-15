import React from "react";
import "./styles/ContactInfo.css"
const ContactInfo = () => {
  return (
    <div>
      <h1>Contact Information</h1>
      <p>Feel free to reach out to me for any questions.</p>
      <div className="contact-card">
        <img src="https://img.icons8.com/fluency/48/000000/email.png" alt="Email Icon" />
        <a href="mailto:gangavarapuramya15@gmail.com">gangavarapuramya15@gmail.com</a>
      </div>
      <div className="contact-card">
        <img src="https://img.icons8.com/fluency/48/000000/phone.png" alt="Phone Icon" />
        <a href="tel:6305003443">6305003443</a>
      </div>
      <div className="contact-card">
        <a href="https://www.linkedin.com/in/gangavarapu-ramya/">
          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="LinkedIn Icon" />https://www.linkedin.com/in/gangavarapu-ramya/
        </a>
      </div>
      <div className="contact-card">
        <a href="https://github.com/Ramya-Gangavarapu">
          <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="GitHub Icon" />https://github.com/Ramya-Gangavarapu
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;