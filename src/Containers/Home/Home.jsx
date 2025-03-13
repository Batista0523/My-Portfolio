import React, { useState } from "react";
import "./Home.css";
import About from "../About/About";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import { images } from "../../constants";
// import "animate.css";
import Weather from "../weather/Weather";
import Yankees from "../../Components/Baseball/Yankees";

function Home() {
  return (
    <div className="app-main">
      <div className="home-container">
       
        <div> {/*  animate__animated animate__zoomIn animate__slower*/}
          {/* <Weather /> */}

          {/* <img className="profilePic" src={images.profilePic} alt="" /> */}
          <div className="infoMe">
            <h1 className="infoMeName">Elisaul Batista</h1>
            <p className="p-description">
              I'm a passionate <strong>Web Developer</strong> dedicated to
              crafting engaging digital experiences that bring ideas to life.
            </p>
            <h1 className="infoMeTitle">Software Engineer</h1>
          </div>
        {/* <Yankees /> */}
        
        </div>
      </div>
      <div className="about-part-home" id="about-section">
        <About />
      </div>
      <div className="projects-section-home" id="projects-section">
        <Projects />
      </div>
      <div className="contact-section-home" id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
