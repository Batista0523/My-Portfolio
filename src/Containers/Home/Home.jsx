import React from "react";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import { images } from "../../constants";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="homeContent">
          <header className="infoMe">
            <p className="p-description">
              I am a dedicated <strong> Web Developer </strong> committed to
              turning your vision into reality.
            </p>
            <h1 className="infoMeTitle">Software Engineer</h1>
            <h1 className="infoMeName">Elisaul Batista</h1>
            <img className="profilePic" src={images.profilePic} alt="" />
          </header>
        </div>
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
