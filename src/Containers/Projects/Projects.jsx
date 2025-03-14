import React, { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = import.meta.env.VITE_BASE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/Projects`);
        const data = await response.json();
        if (data.success) {
          setProjects(data.payload);
        } else {
          console.error("Error fetching data", data);
        }
      } catch (err) {
        console.error("Error fetching internal projects", err);
      }
    };
    fetchData();
  }, [url]);

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-body">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-search">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card animate__animated animate__fadeInUp" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.production_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Demo
              </a>
              <a
                href={project.github_repo_back}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Back end Repo
              </a>
              <a
                href={project.github_repo_front}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Front end Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
