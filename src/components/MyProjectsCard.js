// MyProjectsCard.js

import React, { useState } from "react";
import "./styles/MyProjectsCard.css"; // Assuming you have a CSS file to style the component.

const MyProjectsCard = () => {
  const [currentCategory, setCurrentCategory] = useState("react"); // To track selected category

  const projects = {
    react: [
      { name: "NxtTrendz", description: "Nxt Trendz is a frontend application for an online shopping platform, akin to Amazon, developed using React. This project was designed to solidify my understanding and application of key web development concepts such as authentication, state management, context, page navigation, responsive design, and clean code principles.", url: "https://github.com/Ramya-Gangavarapu/ENHANCEMENT-NXT-TRENDZ" },
      { name: "IPL Dashboard", description: "A React-based application that allows users to view the status of matches played by different teams in the Indian Premier League (IPL).", url: "https://github.com/Ramya-Gangavarapu/ipldb-app"},
      { name: "Movie Database", description: "This project is a comprehensive React-based application designed to provide users with a robust and user-friendly interface for exploring and discovering movies. This application was developed with a focus on building the frontend of the application, utilizing mock APIs for data fetching and implementing various features to enhance the user exp.", url: "https://github.com/Ramya-Gangavarapu/movieDB-app"},
      { name: "Jobby App", description: "A React-based online job searching application that allows users to browse through a list of job offers, apply filters, search jobs, and view detailed information about each job.", url: "https://github.com/Ramya-Gangavarapu/Jobby-app"},
      { name: "Simple Todo", description: "A basic task management application developed using React in three hours. This application allows users to track their tasks and is a learning project from my second week of learning React.", url: "https://github.com/Ramya-Gangavarapu/enhancement-todo-app"},
      { name: "Restaurant App", description: "A React-based online restaurant application that allows users to explore menu categories, select dishes, and add them to their shopping cart.", url: "https://github.com/Ramya-Gangavarapu/Enhancement-RESTAURANT-APP"},
    ],
    nodejs: [
      { name: "Import and Export an Object using Common JS Module Syntax", description: " ", url: "https://github.com/Ramya-Gangavarapu/Import-and-Export-an-Object" },
      { name: "Import and Export a String using ES6 Module Syntax", description: " ", url: "https://github.com/Ramya-Gangavarapu/Import-and-Export-a-String"},
      { name: "Get Date After x Days", description: " ", url: "https://github.com/Ramya-Gangavarapu/Get-Date-After-x-Days"},
      { name: "Greeting Message", description: " ", url: "https://github.com/Ramya-Gangavarapu/Greeting-Message"},
      { name: "First Names of the People", description: "  ", url: "https://github.com/Ramya-Gangavarapu/FirstNames-Of-People"},
      { name: "Calculate Ratio and Factorial", description: "", url: "https://github.com/Ramya-Gangavarapu/Calculate-Ratio-Factorial"},
    ],
    expressjs: [
      { name: "API Routing", description: " ", url: "https://github.com/Ramya-Gangavarapu/API-Routing" },
      { name: "Date after 100 Days from Today", description: "", url: "https://github.com/Ramya-Gangavarapu/Date-after-100-Days-from-Today"},
      { name: "Cricket Team", description: "", url: "https://github.com/Ramya-Gangavarapu/Cricket-Team"},
      { name: "Movies", description: "", url: "https://github.com/Ramya-Gangavarapu/Movies-expressjs"},
    ],
    self: [
      { name: "Responsive Animated Login Form", description: "Created an eye-catching and user-friendly Responsive Animated Login Form project. This project showcases a modern and dynamic approach to user authentication through an animated login form that adapts seamlessly to various devices.", url: "https://github.com/Ramya-Gangavarapu/AnimatedLoginForm" },
      { name: "Quiz App", description: "Dive into interactive learning with this responsive quiz app. Built with HTML, CSS, and JavaScript, this web application offers a user-friendly quiz-taking experience. Test your knowledge, track your progress, and enhance your learning journey. Perfect for educators and learners alike.", url: "https://github.com/Ramya-Gangavarapu/PythonQuizApp"},
      { name: "Amazon Clone", description: "Welcome to the Amazon Clone Project, a meticulously crafted e-commerce platform that closely emulates the renowned Amazon experience. This project was developed using cutting-edge technologies and frameworks to offer users an authentic shopping encounter.", url: "https://github.com/Ramya-Gangavarapu/AmazonClone"},
      { name: "Food Munch", description: "Explore the delightful world of cuisine with our responsive Food Munch website. This web application offers a visually appealing and user-friendly platform for food enthusiasts to discover mouthwatering recipes, browse restaurant menus, and order delicious dishes from the comfort of their homes. A responsive and visually appealing food website built with HTML, CSS, and Bootstrap.", url: "https://github.com/Ramya-Gangavarapu/FoodMunch"},
      
    ],
  };

  return (
    <div className="my-projects-card">
      <h1>My Projects</h1>
      <p>
        Over the past 1 year, I've embraced a journey of exploration and growth
        through a myriad of projects. These ventures have not only honed my
        skills but also shaped my professional trajectory. Here's a glimpse into
        the projects that have been instrumental in my development during this
        transformative period.
      </p>
      <div className="category-buttons">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={currentCategory === category ? "active" : ""}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Projects
          </button>
        ))}
      </div>
      <div className="project-categories">
        <div className="category">
          <h2>{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Projects</h2>
          <div className="project-grid">
            {projects[currentCategory].map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsCard;
