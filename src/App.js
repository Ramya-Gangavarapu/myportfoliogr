import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutMePage from "./components/AboutMePage";
import MyProjectsCard from "./components/MyProjectsCard";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import CourseCertifications from "./components/CourseCertifications";
import Trainings from "./components/Trainings";
import ContactInfo from "./components/ContactInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<MyProjectsCard />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/certifications" element={<CourseCertifications />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
    </Router>
  );
};

export default App;