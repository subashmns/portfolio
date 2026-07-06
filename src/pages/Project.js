// pages/ProjectsPage.js
import React from "react";
import ProjectCard from "../components/card";
import Contact from "../components/contact";

const ProjectsPage = () => {
  return (
    <div className="content pt-5" id="project">
      <ProjectCard />
      <Contact />
    </div>
  );
};

export default ProjectsPage;