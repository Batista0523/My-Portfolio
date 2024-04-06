import React, { useRef, useEffect } from "react";
import "./About.css";
import "animate.css";
import { takeEffect } from "../../helpers/animatedFunction";
import { images } from "../../constants";
// import { videos } from "../../constants";

function About() {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);

  takeEffect(aboutRef1, aboutRef2);

  return (
    <div className="about-body">
      <div className="about-container">
        <div ref={aboutRef1} className="aboutContent animate__slower">
          <h1 className="title-about">About Me</h1>
          <p className="p-about-description">
            Welcome! I'm a dynamic Full Stack Developer rooted in the heart of
            New York City, where innovation meets opportunity. Fluent in both
            Spanish and English, I bring a unique blend of creativity and
            technical prowess to every project I undertake. My journey in web
            development is marked by a relentless pursuit of excellence. From
            crafting captivating user interfaces to optimizing backend
            operations, I thrive on pushing boundaries and delivering results
            that exceed expectations. Proficient in a suite of technologies
            including HTML, CSS, JavaScript, and Express.js, I've spearheaded
            initiatives that have not only improved performance metrics but have
            also elevated the overall user experience. Leveraging{" "}
            <strong>React</strong>, I've orchestrated seamless front-end
            solutions, driving engagement and retention metrics to new heights.
            But it's not just about the technology – it's about the impact. I'm
            driven by the opportunity to make a difference, to create solutions
            that inspire and transform. With an insatiable thirst for knowledge,
            I'm always on the lookout for the latest trends and innovations,
            ensuring that my skill set remains at the forefront of the industry.
            Ready to embark on a journey of innovation and growth? Let's connect
            and explore how we can shape the future together.
          </p>
        </div>

        <div ref={aboutRef2} className="aboutContent2 animate__slower">
          <div className="skill-container">
            <h1 className="section-title">Technical Skills</h1>
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
