
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">Ayushi<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Ayushi Shukla</span></h1>
          <h2>Aspiring Software Developer</h2>
          <p className="intro">
            I build practical web applications and explore technologies
            to turn ideas into useful digital experiences.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#projects">View My Projects ↗</a>
            <a className="secondary-btn" href="#contact">Contact Me</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Ayushishukla340" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/ayushi-shukla-a4b196280" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="code-card">
            <div className="code-top">
              <span></span><span></span><span></span>
              <small>developer.js</small>
            </div>
            <div className="code-body">
              <p><span className="pink">const</span> developer = {'{'}</p>
              <p className="indent">name: <span className="green">'Ayushi'</span>,</p>
              <p className="indent">degree: <span className="green">'CSE (AI)'</span>,</p>
              <p className="indent">focus: <span className="green">'Full Stack'</span>,</p>
              <p className="indent">learning: <span className="green">'Every day'</span></p>
              <p>{'}'}</p>
              <p className="code-comment">// Turning ideas into reality ✨</p>
            </div>
          </div>
          <div className="floating-tag tag-one">⚛️ React.js</div>
          <div className="floating-tag tag-two">🐍 Python</div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-text">
          I'm pursuing B.Tech in Computer Science and Engineering
          (Artificial Intelligence) at Babu Banarasi Das University,
          Lucknow. I enjoy learning through hands-on development and
          building projects that solve practical problems.
        </p>
        <div className="info-grid">
          <div className="info-card"><span>🎓</span><h3>Education</h3><p>B.Tech CSE (AI)</p><small>2023 – 2027</small></div>
          <div className="info-card"><span>💻</span><h3>Development</h3><p>Web & Backend</p><small>Building practical projects</small></div>
          <div className="info-card"><span>🚀</span><h3>Career Goal</h3><p>Software Developer</p><small>Open to internships</small></div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          <div className="skill-card"><span>🌐</span><h3>Frontend</h3><p>HTML · CSS · JavaScript · React</p></div>
          <div className="skill-card"><span>⚙️</span><h3>Backend</h3><p>Node.js · Express.js · ASP.NET Core</p></div>
          <div className="skill-card"><span>🗄️</span><h3>Databases</h3><p>MongoDB · MySQL · SQL Server</p></div>
          <div className="skill-card"><span>🐍</span><h3>Programming & AI</h3><p>Python · C · C# · NumPy · Pandas</p></div>
          <div className="skill-card"><span>🔧</span><h3>Tools</h3><p>Git · GitHub · VS Code · Postman</p></div>
          <div className="skill-card"><span>🔌</span><h3>Technologies</h3><p>REST APIs · Mongoose · Axios</p></div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-visual lifelink-visual">🩸<span>LifeLink</span></div>
            <div className="project-content">
              <p className="project-type">FULL STACK WEB APPLICATION</p>
              <h3>LifeLink</h3>
              <p>A blood donation platform designed to connect donors and patients and simplify blood requests.</p>
              <div className="tags"><span>React</span><span>Node.js</span><span>MongoDB</span></div>
              <a href="https://github.com/Ayushishukla340/LIFELINK-Blood-Donation-Platform" target="_blank" rel="noreferrer">Explore on GitHub ↗</a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual placement-visual">🎓<span>Placement Management</span></div>
            <div className="project-content">
              <p className="project-type">BACKEND & WEB API</p>
              <h3>Placement Management System</h3>
              <p>A web API project designed to organize placement-related information and workflows.</p>
              <div className="tags"><span>C#</span><span>ASP.NET Core</span><span>SQL Server</span></div>
              <a href="https://github.com/Ayushishukla340/placement-management-system" target="_blank" rel="noreferrer">Explore on GitHub ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Have an opportunity in mind?</h2>
        <p>I'm open to connecting about software development and internship opportunities.</p>
        <a className="primary-btn" href="mailto:ayushishukla19082004@gmail.com">Say Hello ✉</a>
        <div className="contact-links">
          <a href="mailto:ayushishukla19082004@gmail.com">Email</a>
          <a href="https://linkedin.com/in/ayushi-shukla-a4b196280" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Ayushishukla340" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer>© 2026 Ayushi Shukla · Built with React</footer>
    </div>
  )
}

export default App
