import React, { useRef, useEffect } from "react";
import "./About.css";
import "animate.css";

import { images } from "../../constants";
import Time from "../../time/Time";

function About() {
  const resumeUrl = "/src/resume/Elisaul-Batista-Full Stack Developer.pdf";

  return (
    <div className="about-body">
      <div className="about-container">
        <div className="aboutContent">
          <h1 className="title-about">Who am I</h1>
          <p className="p-about-description">
            👋 Hello! I'm a versatile Full Stack Developer based in vibrant New
            York City. Fluent in Spanish and English, I blend creativity with
            technical prowess to craft exceptional digital experiences. 🚀
            Specializing in web development, I create captivating user
            interfaces and optimize backend operations to drive performance and
            elevate user satisfaction. 💡 Let's collaborate to create innovative
            solutions that inspire and transform. Together, we'll navigate the
            ever-evolving landscape of technology to shape the future.
          </p>
          <a target="_blank" className="resumeDownload" href={resumeUrl}>
            {" "}
            Resume
          </a>
        </div>
        <Time />
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
About.js;
