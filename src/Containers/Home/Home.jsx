import "./Home.css";
import About from "../About/About";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import React from "react";
function Home() {
  return (
    <div className="app-main">
      <div className="home-container">
        <div className="animate__animated animate__zoomIn animate__slower">
          <div className="infoMe">
            <h1 className="infoMeName">Elisaul Batista</h1>
            <p className="p-description">
              I&apos;m a passionate <strong>Web Developer</strong> dedicated to
              crafting engaging digital experiences that bring ideas to life.
            </p>
            <h1 className="infoMeTitle">Software Engineer</h1>
          
          </div>
        </div>
      </div>
      <div
        className="about-part-home"
        id="about-section"
        data-testid="about-section"
      >
        <About />
      </div>
      <div
        className="projects-section-home"
        id="projects-section"
        data-testid="projects-section"
      >
        <Projects />
      </div>
      <div
        className="contact-section-home"
        id="contact-section"
        data-testid="contact-section"
      >
        <Contact />
      </div>
    </div>
  );
}

export default Home;
