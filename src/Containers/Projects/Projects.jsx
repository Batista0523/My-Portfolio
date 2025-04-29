import { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
 
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



  return (
    <div className="projects-body">
      <h1 className="projects-title">Projects</h1>
    
      <div className="projects-container">
        {projects.map((project, index) => (
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
                Live
              </a>
           
              <a
                href={project.github_repo_front}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Frontend Repo
              </a>
              <a
                href={project.github_repo_back}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Backend Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
