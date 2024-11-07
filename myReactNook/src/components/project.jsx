import React from "react";

function Project({ project }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          {/* Main project image */}
          <img
            src={`/assets/${project.name}.jpg`}  // Dynamic image based on project name
            alt={project.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>  {/* Project name */}
            <p className="card-text">{project.description}</p>  {/* Project description */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary ms-2"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;
  