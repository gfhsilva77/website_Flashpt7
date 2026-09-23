import "./App.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <div className="site">
      <header className="header">
        <a href="#home" className="brand">
          FLASH<span>PT7</span>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#photography">Photography</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="language" type="button">
          EN
          <span>/</span>
          PT
        </button>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(5, 5, 5, 0.96) 0%,
              rgba(5, 5, 5, 0.84) 40%,
              rgba(5, 5, 5, 0.42) 75%,
              rgba(5, 5, 5, 0.64) 100%
            ), url(${heroImage})`,
          }}
        >
          <div className="hero-content">
            <p className="eyebrow">
              DEVELOPER · PHOTOGRAPHER · FREELANCER
            </p>

            <h1>
              I build.
              <br />
              I create.
              <br />
              <span>I capture.</span>
            </h1>

            <p className="hero-description">
              Digital experiences, real projects and visual stories created
              with purpose.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View my work
              </a>

              <a className="button secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>GUILHERME SILVA</span>

            <a href="#projects" className="scroll-link">
              Scroll to explore
              <span className="arrow">↓</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;