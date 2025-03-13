import React, { useRef, useEffect } from "react";
import "./About.css";
import "animate.css";

import { images } from "../../constants";
import Time from "../../time/Time";

function About() {
  const resumeUrl = "/porfolio-front-end/src/resume/Resume 2025.pdf.svg";

  return (
    <div className="about-body">
      <div className="about-container">
   
        <div className="aboutContent2 ">
          <div className="skill-container">
            <h1 className="section-title">Technical Skills and Tools</h1>
            <p className="skill-description">
              "I thrive on exploring diverse technologies, always eager to learn
              and adapt. Let's innovate together!"
            </p>
            <img className="skill-pic" src={images.htmlSkill} alt="HTML" />{" "}
            {/* HTML */}
            <img className="skill-pic" src={images.cssSkill} alt="CSS" />
            {/* CSS */}
            <img
              className="skill-pic"
              src={images.javaScriptSkill}
              alt="JavaScript"
            />
            {/* JavaScript */}
            <img className="skill-pic" src={images.reactSkill} alt="React" />
            {/* React */}
            <img
              className="skill-pic"
              src={images.postgreSqlSkill}
              alt="PostgreSQL"
            />
            {/* PostgreSQL */}
            <img className="skill-pic" src={images.nodeSkill} alt="Node.js" />
            {/* Node.js */}
            <img className="skill-pic" src={images.sassSkill} alt="Sass" />
            {/* Sass */}
            <img
              className="skill-pic"
              src={images.expressSkill}
              alt="Express.js"
            />
            {/* Express.js */}
            <img
              className="skill-pic"
              src={images.bootstratSkill}
              alt="Bootstrap"
            />
            {/* Bootstrap */}
            <img className="skill-pic" src={images.githubSkill} alt="GitHub" />
            {/* GitHub */}
            <img className="skill-pic" src={images.canvaSkill} alt="Canva" />
            {/* Canva */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

