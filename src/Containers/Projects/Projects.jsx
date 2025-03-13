import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const url = import.meta.env.VITE_BASE;

  useEffect(() => {
    const fetchaData = async () => {
      try {
        const response = await fetch(`${url}/Projects`);
        const data = await response.json();
        if (data.success) {
          setProjects(data.payload);
        } else {
          console.error("Error fetchin data", data);
        }
      } catch (err) {
        console.error("Error fetching internal projects", err);
      }
    };
    fetchaData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <br />
          <p>{project.description}</p>
          <br />
          <a href={project.production_link} target="_blank">
            Demo
          </a>
          <br />
          <a href={project.github_repo_back} target="_blank">
            Back end Repo
          </a>
          <br />
          <a href={project.github_repo_front} target="_blank">
            Front end Repo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
