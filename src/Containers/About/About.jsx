import React, { useRef, useEffect } from "react";
import "./About.css";
import "animate.css";

function About() {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const about1 = aboutRef1.current;
      const about2 = aboutRef2.current;
      
      if (about1 && about2) {
        const rect1 = about1.getBoundingClientRect();
        const rect2 = about2.getBoundingClientRect();
        
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        
        if (rect1.top <= viewHeight && rect1.bottom >= 0) {
          about1.classList.add("animate__animated", "animate__bounceInRight");
        }
        
        if (rect2.top <= viewHeight && rect2.bottom >= 0) {
          about2.classList.add("animate__animated", "animate__bounceInLeft");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            also elevated the overall user experience. Leveraging <strong>React</strong>, I've
            orchestrated seamless front-end solutions, driving engagement and
            retention metrics to new heights. But it's not just about the
            technology – it's about the impact. I'm driven by the opportunity to
            make a difference, to create solutions that inspire and transform.
            With an insatiable thirst for knowledge, I'm always on the lookout
            for the latest trends and innovations, ensuring that my skill set
            remains at the forefront of the industry. Ready to embark on a
            journey of innovation and growth? Let's connect and explore how we
            can shape the future together.
          </p>
        </div>
        <div ref={aboutRef2} className="aboutContent2 animate__slower">
          <h1 className="title-about">Skills</h1>
          <p className="p-skill-description">
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
            also elevated the overall user experience. Leveraging <strong>React</strong>, I've
            orchestrated seamless front-end solutions, driving engagement and
            retention metrics to new heights. But it's not just about the
            technology – it's about the impact. I'm driven by the opportunity to
            make a difference, to create solutions that inspire and transform.
            With an insatiable thirst for knowledge, I'm always on the lookout
            for the latest trends and innovations, ensuring that my skill set
            remains at the forefront of the industry. Ready to embark on a
            journey of innovation and growth? Let's connect and explore how we
            can shape the future together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
