import React, { useEffect, useState } from "react";
import "./Projects.css";
import { getAllItems } from "../../helpers/apiCalls";

function Projects() {
  const [items, setItems] = useState([]);
  const endpoint = "project";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getAllItems(endpoint);
        console.log(response,'---<<')
        setItems(response.data.payload);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
    fetchItem();
  }, []); 

  return (
    <div>
      <div className="project-container">
        <div className="projectContent">
          <h1 className="title">Projects</h1>
          <div className="projects-card">
            {items.map((item,) => (
              <div className="projects-api" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.descriptions}</p>
                <a className="link" href={item.deployedlink} target="_blank">Demo</a>
                <a className="link" href={item.repolink} target="_blank">Github</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
