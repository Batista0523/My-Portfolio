import React, { useRef, useEffect } from "react";
import "./About.css";
import "animate.css";

import { images } from "../../constants";
import Time from "../../time/Time";

function About() {

  const resumeUrl = "/src/resume/batistaresume.pdf";


  return (
    <div className="about-body">
      <div className="about-container">
        <div className="aboutContent">
          <h1 className="title-about">Who am I</h1>
          <p className="p-about-description">
            Welcome! I'm a dynamic Full Stack Developer based in New York City,
            where innovation thrives. Fluent in both Spanish and English, I
            bring a blend of creativity and technical expertise to every
            project. My journey in web development is marked by a relentless
            pursuit of excellence, from crafting captivating user interfaces to
            optimizing backend operations. Proficient in HTML, CSS, JavaScript,
            and Express.js, I've spearheaded initiatives that improve
            performance metrics and elevate user experience. Leveraging ,
            <strong>React</strong>, I orchestrate seamless front-end solutions,
            driving engagement and retention metrics upward. Driven by the
            opportunity to make a difference, I create solutions that inspire
            and transform. With a thirst for knowledge, I stay updated on the
            latest trends and innovations, ensuring my skills are at the
            forefront of the industry. Ready to embark on a journey of
            innovation and growth? Let's connect and explore how we can shape
            the future together.
          </p>
          <a target="_blank" className="resumeDownload" href={resumeUrl}>
            {" "}
            Resume
          </a>
        </div>
            <Time/>
        <div  className="aboutContent2 ">
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
