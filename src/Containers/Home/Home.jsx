import React, { useState } from "react";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import { images } from "../../constants";
import "animate.css";




function Home() {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "/porfolio-front-end/public/Resume/Elisaul_Batista_Resume_8_ID3_02292024.pdf";
  const handleShowResume = () => {
    setShowResume(true);
  };

  return (
    <div>
      <div className="home-container">
        <div className="homeContent animate__animated animate__zoomIn animate__slower">
          <header className="infoMe">
            <img className="profilePic" src={images.profilePic} alt="" />
            <h1 className="infoMeName">Elisaul Batista</h1>
            <h1 className="infoMeTitle">Software Engineer</h1>
            <a className="resumeDownload" href={resumeUrl}>
              {" "}
              Resume
            </a>
            <p className="p-description">
              I'm a passionate <strong>Web Developer</strong> dedicated to
              crafting engaging digital experiences that bring ideas to life.
            </p>
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
