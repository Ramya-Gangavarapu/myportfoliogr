import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/CourseCertifications.css';

const CourseCertifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="course-certifications-container">
      <h1>Course Certifications</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433352/Screenshot_2024-06-15_120105_fzimg6.jpg" alt="Certificate 1" />
            <h3>Introduction to Databases</h3>
            <p><b>Outcome: </b>
              Learned about the incredibly prevalent databases today. Through this course, I have developed strong fundamentals and became proficient in concepts related to Databases and DBMS. 
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433352/Screenshot_2024-06-15_120134_v4pbqd.jpg" alt="Certificate 2" />
            <h3>Build your own static website</h3>
            <p><b>Outcome: </b>
              Built a static website that appears beautifully on mobile screens. Developed a Tourism website to browse through the content, videos, and images of popular destinations, websites to host conferences and events, etc. Learned to use tools and technologies such as HTML, CSS and Bootstrap.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433351/Screenshot_2024-06-15_120203_x7v2k0.jpg" alt="Certificate 3" />
            <h3>Build your own response website</h3>
            <p><b>Outcome: </b>
              Built a responsive website that appears beautifully on a screen of any size. Developed a food munch website, an E-commerce product listing website for small business owners using bootstrap fundamental concepts. Used tools and technologies such as HTML, CSS, and Bootstrap.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433347/Screenshot_2024-06-15_120307_vivg5h.jpg" alt="Certificate 4" />
            <h3>Developer Foundations</h3>
            <p><b>Outcome: </b>
              Learnt the essentials of Operating Systems, Networks and used some essential tools like Command-Line and Git to become a better developer.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433347/Screenshot_2024-06-15_120248_yk4lg1.jpg" alt="Certificate 5" />
            <h3>Programming Foundations with Python</h3>
            <p><b>Outcome: </b>
              Learnt the fundamental concepts of programming, to write code in Python and solved the challenging coding questions for practice along the way.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433347/Screenshot_2024-06-15_120333_ccmai9.jpg" alt="Certificate 6" />
            <h3>Build your Own Dynamic Web Application</h3>
            <p><b>Outcome: </b>
              Acquired the fundamental concepts in JavaScript and applied them to build dynamic and interactive web applications like Todos Application, Counter, Bomb defuser, Chatbot Web app, Wikipedia Search Application, etc.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433347/Screenshot_2024-06-15_120427_u611sw.jpg" alt="Certificate 7" />
            <h3>Responsive Web Design using Flexbox</h3>
            <p><b>Outcome: </b>
              Developed responsive layouts using CSS Flexbox and CSS Media Queries.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433347/Screenshot_2024-06-15_120355_fezjc9.jpg" alt="Certificate 8" />
            <h3>JavaScript Essentials</h3>
            <p><b>Outcome: </b>
              Learnt concepts such as Events, Scope, Hoisting, and Asynchronous JavaScript. Also, Learned about ES6 classes, Error Handling, and more about JavaScript objects.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433346/Screenshot_2024-06-15_120509_nq8rxt.jpg" alt="Certificate 9" />
            <h3>React JS</h3>
            <p><b>Outcome: </b>
              Built dynamic web applications with the React JS library. Comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.
            </p>
          </div>
          <div className="certificate-card">
            <img src="https://res.cloudinary.com/diwbgxfu8/image/upload/v1718433346/Screenshot_2024-06-15_120449_ns2vut.jpg" alt="Certificate 10" />
            <h3>Node JS</h3>
            <p><b>Outcome: </b>
              Built a backend web application using one of the most popular and mature Javascript web development frameworks, Express. Covered various aspects of web application development like database, routing, urls etc.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CourseCertifications;
