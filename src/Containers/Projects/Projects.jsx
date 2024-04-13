import React, { useEffect, useState } from "react";
import "./Projects.css";
import { getAllItems } from "../../helpers/apiCalls";
function Projects() {
  const [items, setItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getAllItems();
        setItems(response);
        
        console.log("---->",items);
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

          <h1>Projects</h1>
          <div className="projects-card">
            {items.map((item, index) => (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.descriptions}</p>
                <a className="link" href={item.deployedlink} target="_blank">Live Demo</a>
                <a className="link" href={item.repolink}>Github</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
