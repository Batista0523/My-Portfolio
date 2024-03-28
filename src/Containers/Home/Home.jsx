import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="content">
          <header>
            <h1>Software developer</h1>
            <p>I am a Web Developer Ready to make your dream come true</p>
          </header>
        </div>
      </div>
      <div id="about-section">
        <h1>About Us Section</h1>
      </div>
      <div id="contact-section">
        <h1>Contact Section</h1>
      </div>
      <div id="projects-section">
        <h1>Projects Section</h1>
      </div>
    </div>
  );
}

export default Home;
