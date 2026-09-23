import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import heroImage from "../assets/hero.png";

import {
  galleryCategories,
} from "../data/gallery";

const features = [
  {
    icon: "◉",
    title: "Full View",
    description:
      "View photographs in large format.",
  },
  {
    icon: "◐",
    title: "Before / After",
    description:
      "Compare photography edits.",
  },
  {
    icon: "▦",
    title: "Collections",
    description:
      "Explore complete photography series.",
  },
  {
    icon: "▣",
    title: "Private Galleries",
    description:
      "Exclusive galleries for clients.",
  },
  {
    icon: "⌖",
    title: "Photo Map",
    description:
      "Explore photographs by location.",
  },
  {
    icon: "♡",
    title: "Favorites",
    description:
      "Save and revisit your favorites.",
  },
  {
    icon: "⌕",
    title: "Search",
    description:
      "Find photographs quickly.",
  },
  {
    icon: "▷",
    title: "Slideshow",
    description:
      "Explore photography fullscreen.",
  },
];

function AdSlot({
  position,
}: {
  position: string;
}) {
  return (
    <section
      className="ad-wrapper"
      aria-label="Advertisement"
    >
      <div className="ad-slot">
        <span className="ad-tag">
          ADVERTISEMENT
        </span>

        <div className="ad-placeholder">
          <strong>
            AD SPACE
          </strong>

          <span>
            {position}
          </span>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <strong>
            flashpt7
          </strong>

          <span>
            PHOTOGRAPHY
          </span>
        </a>

        <nav className="nav">
          <a href="#home">
            Home
          </a>

          <Link to="/gallery">
            Gallery
          </Link>

          <a href="#about">
            About
          </a>

          <a href="#collaborations">
            Collaborations
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        <div className="header-right">
          <a
            className="instagram"
            href="https://instagram.com/flashpt7"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="connect"
            href="#contact"
          >
            Let's Connect
          </a>
        </div>

        <button
          className={`mobile-menu-button ${
            menuOpen
              ? "is-open"
              : ""
          }`}
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (current) =>
                !current,
            )
          }
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen
            ? "is-open"
            : ""
        }`}
      >
        <div className="mobile-menu-inner">
          <p className="mobile-menu-label">
            NAVIGATION
          </p>

          <nav className="mobile-navigation">
            <a
              href="#home"
              onClick={closeMenu}
            >
              <span>01</span>
              Home
            </a>

            <Link
              to="/gallery"
              onClick={closeMenu}
            >
              <span>02</span>
              Gallery
            </Link>

            <a
              href="#about"
              onClick={closeMenu}
            >
              <span>03</span>
              About
            </a>

            <a
              href="#collaborations"
              onClick={closeMenu}
            >
              <span>04</span>
              Collaborations
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              <span>05</span>
              Contact
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <div>
              <p>
                FOLLOW
              </p>

              <a
                href="https://instagram.com/flashpt7"
                target="_blank"
                rel="noreferrer"
              >
                @flashpt7 ↗
              </a>
            </div>

            <div className="mobile-menu-quote">
              <span>
                No rush.
              </span>

              <span>
                No goals.
              </span>

              <strong>
                Just moments.
              </strong>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section
          className="hero"
          id="home"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(3, 5, 6, 0.94) 0%,
                rgba(3, 5, 6, 0.76) 33%,
                rgba(3, 5, 6, 0.25) 68%,
                rgba(3, 5, 6, 0.60) 100%
              ),
              url(${heroImage})
            `,
          }}
        >
          <div className="hero-inner">
            <p className="hero-kicker">
              NATURE · ANIMALS · AUTOMOTIVE · MACRO · LANDSCAPES
            </p>

            <h1>
              FLASHPT7

              <span>
                PHOTOGRAPHY
              </span>
            </h1>

            <p className="hero-copy">
              More than pictures.
              <br />
              Just moments.
            </p>

            <Link
              to="/gallery"
              className="outline-button"
            >
              Explore Gallery

              <span>
                →
              </span>
            </Link>
          </div>

          <div className="hero-index">
            01 / 04
          </div>

          <div className="hero-quote">
            <span>
              No rush.
            </span>

            <span>
              No goals.
            </span>

            <strong>
              Just moments.
            </strong>
          </div>
        </section>

        <section
          className="gallery-section"
          id="gallery"
        >
          <div className="section-heading">
            <div className="heading-line" />

            <div className="heading-content">
              <h2>
                EXPLORE MY WORK
              </h2>

              <p>
                DIFFERENT PERSPECTIVES. SAME PASSION.
              </p>
            </div>

            <div className="heading-line" />
          </div>

          <div className="category-grid">
            {galleryCategories.map(
              (category) => (
                <Link
                  to={`/gallery/${category.slug}`}
                  className="category-card"
                  key={category.slug}
                >
                  <div className="category-photo">
                    <img
                      src={heroImage}
                      alt={category.title}
                    />

                    <div className="category-overlay" />
                  </div>

                  <div className="category-content">
                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.description}
                    </p>

                    <span className="category-link">
                      See more

                      <span>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        </section>

        <AdSlot position="Main homepage placement" />

        <section className="split-section">
          <article
            className="about-block"
            id="about"
          >
            <span className="block-number">
              01
            </span>

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Capturing what
              <br />

              <em>
                makes me feel alive.
              </em>
            </h2>

            <p className="body-copy">
              I'm Guilherme Silva, the mind behind flashpt7.
              Photography is my way of seeing the world —
              finding beauty in the smallest details and
              capturing moments worth remembering.
            </p>

            <a
              href="#contact"
              className="outline-button small"
            >
              Learn More

              <span>
                →
              </span>
            </a>
          </article>

          <article
            className="work-block"
            id="collaborations"
          >
            <span className="block-number">
              02
            </span>

            <p className="eyebrow">
              WORK WITH ME
            </p>

            <h2>
              Let's create
              <br />

              <em>
                something together.
              </em>
            </h2>

            <div className="work-options">
              <span>
                Photography
              </span>

              <span>
                Collaborations
              </span>

              <span>
                Brand Partnerships
              </span>
            </div>

            <a
              href="#contact"
              className="outline-button small"
            >
              Get In Touch

              <span>
                →
              </span>
            </a>
          </article>
        </section>

        <section className="features">
          <div className="features-title">
            <p>
              FUNCTIONALITIES
            </p>

            <h2>
              More than a photography portfolio.
            </h2>
          </div>

          <div className="features-grid">
            {features.map(
              (feature) => (
                <article
                  className="feature-card"
                  key={feature.title}
                >
                  <span className="feature-icon">
                    {feature.icon}
                  </span>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </section>

        <AdSlot position="Secondary homepage placement" />

        <section
          className="contact"
          id="contact"
        >
          <div>
            <p className="eyebrow">
              CONTACT
            </p>

            <h2>
              Have something
              <br />

              <em>
                in mind?
              </em>
            </h2>
          </div>

          <div className="contact-side">
            <p>
              Photography, collaborations, partnerships
              or simply a conversation.
            </p>

            <a href="mailto:contact@flashpt7.com">
              contact@flashpt7.com

              <span>
                ↗
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <strong>
            flashpt7
          </strong>

          <span>
            PHOTOGRAPHY
          </span>
        </div>

        <p>
          No rush. No goals. Just moments.
        </p>

        <div className="footer-meta">
          <a
            href="https://instagram.com/flashpt7"
            target="_blank"
            rel="noreferrer"
          >
            @flashpt7
          </a>

          <span>
            © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;