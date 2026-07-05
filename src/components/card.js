// components/Project_Card.js
import React from "react";
import projectsData from "./projectdata";

const Project_Card = () => {
  return (
    <>
      <div className="d-flex">
        <div className="title-line"></div>
        <h1 className="px-3">PROJECTS</h1>
      </div>
      {projectsData.map((project, index) => (
        <div className="container" key={index}>
          <div className="row">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 mt-3 center-without-h ">
                  <h2 className="text-color">{project.name}</h2>
                  <h6>{project.title}</h6>
                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    {project.techStack.map((tech, index) => (
                      <button key={index} className="techstack-btn">
                        {tech}
                      </button>
                    ))}
                  </div>
                  <h6>Responsibilities:</h6>
                  <p className="project_description">
                    {project.responsibilities}
                  </p>
                  {
                    project.preview === "#" ? "" : <h6 className="text-color" >
                    <a className="nav-link" href={project.preview} target="_blank">
                      Live Preview &rarr;
                    </a>
                  </h6>
                  }
                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                  <a href={project.preview}>
                    <div className="image-container">
                      <img
                        src={project.img}
                        alt={project.name}
                        width="100%"
                        className="project_image"
                      />
                    </div>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                  <a href={project.preview}>
                    <div className="image-container">
                      <img
                        src={project.img}
                        alt={project.name}
                        width="100%"
                        className="project_image"
                      />
                    </div>
                  </a>
                </div>
                <div className="col-md-6 mt-5 center-without-h ">
                  <h2 className="text-color">{project.name}</h2>
                  <h6>{project.title}</h6>
                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    {project.techStack.map((tech, index) => (
                      <button key={index} className="techstack-btn">
                        {tech}
                      </button>
                    ))}
                  </div>
                  <h6>Responsibilities:</h6>
                  <p className="project_description">
                    {project.responsibilities}
                  </p>
                  <h6 className="text-color">
                    <a className="nav-link" href={project.preview}>
                      Live Preview &rarr;
                    </a>
                  </h6>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Project_Card;
