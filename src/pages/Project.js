// pages/ProjectsPage.js
import React from "react";
import Project_Card from "../components/card";
import Contact from "../components/contact";

const Projects_Page = () => {
  return (
    <>
      <div className="content pt-5" id="project">
        <Project_Card />
        <Contact />
      </div>
    </>
  );
};

export default Projects_Page;
