import "./About.css";
import "animate.css";
import { images } from "../../constants";
const skills = [
  {
    src: images.htmlSkill,
    name: "HTML",
    description:
      "The foundational markup language that structures web content and defines its semantics.",
  },
  {
    src: images.cssSkill,
    name: "CSS",
    description:
      "The styling language that transforms plain HTML into visually appealing, responsive designs.",
  },
  {
    src: images.javaScriptSkill,
    name: "JavaScript",
    description:
      "A dynamic programming language essential for interactive and feature-rich web applications.",
  },
  {
    src: images.reactSkill,
    name: "React",
    description:
      "A leading JavaScript library for building responsive, component-based user interfaces.",
  },
  {
    src: images.postgreSqlSkill,
    name: "PostgreSQL",
    description:
      "A robust, open-source relational database system known for its reliability and scalability.",
  },
  {
    src: images.nodeSkill,
    name: "Node.js",
    description:
      "A powerful JavaScript runtime that enables scalable server-side applications.",
  },
  {
    src: images.githubSkill,
    name: "GitHub",
    description:
      "A collaborative platform for version control and code management using Git.",
  },
];

function About() {
  return (
    <div className="about-body">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero animate__animated animate__fadeIn">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hello, I&apos;m Elisaul Batista—a dedicated Web Developer committed
            to designing high-performance digital solutions. With a passion for
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
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img className="skill-pic" src={skill.src} alt={skill.name} />
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
