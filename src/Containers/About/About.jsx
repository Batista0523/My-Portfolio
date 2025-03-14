
import "./About.css";
import "animate.css";

import { images } from "../../constants";


function About() {
  const resumeUrl = "/porfolio-front-end/src/resume/Resume_2025.pdf";

  return (
    <div className="about-body">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero animate__animated animate__fadeIn">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hello, I'm Elisaul Batista—a dedicated Web Developer committed to
            designing high-performance digital solutions. With a passion for
            innovation and a deep understanding of modern technologies, I create
            scalable, user-centric applications that drive success and enhance
            digital experiences.
          </p>
          <div className="about-actions">
            <a
              href="https://docs.google.com/document/d/1UazOLTLVmy54HM3MpewZl7cbA6mziKwnavy2L0lP8hk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section animate__animated animate__zoomIn">
          <h2 className="section-title">Technical Skills &amp; Tools</h2>
          <p className="skill-description">
            My technical proficiency spans modern web technologies and tools. I
            enjoy leveraging a variety of frameworks and tools to deliver
            robust, creative solutions.
          </p>
          <div className="skill-container">
            <img className="skill-pic" src={images.htmlSkill} alt="HTML" />
            <img className="skill-pic" src={images.cssSkill} alt="CSS" />
            <img
              className="skill-pic"
              src={images.javaScriptSkill}
              alt="JavaScript"
            />
            <img className="skill-pic" src={images.reactSkill} alt="React" />
            <img
              className="skill-pic"
              src={images.postgreSqlSkill}
              alt="PostgreSQL"
            />
            <img className="skill-pic" src={images.nodeSkill} alt="Node.js" />
            <img className="skill-pic" src={images.sassSkill} alt="Sass" />
            <img
              className="skill-pic"
              src={images.expressSkill}
              alt="Express.js"
            />
            <img
              className="skill-pic"
              src={images.bootstratSkill}
              alt="Bootstrap"
            />
            <img className="skill-pic" src={images.githubSkill} alt="GitHub" />
            <img className="skill-pic" src={images.canvaSkill} alt="Canva" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
