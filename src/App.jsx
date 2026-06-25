import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "GitHub",
    "Java"
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
    },
    {
      title: "Restaurant Management System",
      desc: "Manages restaurant data.",
    },
    
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <h2>AK</h2>

        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Hi, I'm <span>Anjana Krishna</span>
        </h1>

        <p>
          Web Developer  • Computer Science Student
        </p>

        
      </section>

      <section id="about">
        <h2>About Me</h2>

        <div className="card">
          <p>
            I am a Computer Science student passionate about web
            development and building modern user-friendly websites.
            I enjoy learning new technologies and creating projects
            that solve real-world problems.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>

        <div className="card">
          <p>Email: anj@gmail.com</p>
          
        </div>
      </section>
    </div>
  );
}

export default App;