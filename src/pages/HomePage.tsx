import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import ContactForm from "../components/ContactForm";

import hero01 from "../assets/home/hero-01.png";
import hero02 from "../assets/home/hero-02.png";
import hero03 from "../assets/home/hero-03.png";
import hero04 from "../assets/home/hero-04.png";

import {
  galleryCategories,
} from "../data/gallery";

import {
  categoryCovers,
} from "../data/photos";

const heroSlides = [
  {
    image: hero01,
    label:
      "NATURE · ANIMALS · AUTOMOTIVE · MACRO · LANDSCAPES",
  },
  {
    image: hero02,
    label:
      "AUTOMOTIVE · MOTION · SPEED · STORIES",
  },
  {
    image: hero03,
    label:
      "LANDSCAPES · LIGHT · PLACES · MOMENTS",
  },
  {
    image: hero04,
    label:
      "NATURE · DETAILS · LIFE · PERSPECTIVES",
  },
];

const features = [
  {
    icon: "◉",
    title: "Large View",
    description:
      "Photography in fullscreen.",
  },
  {
    icon: "◐",
    title: "Before / After",
    description:
      "Compare original and edited.",
  },
  {
    icon: "▦",
    title: "Collections",
    description:
      "Photography series and projects.",
  },
  {
    icon: "▣",
    title: "Private Galleries",
    description:
      "Exclusive client galleries.",
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
      "Save photographs you love.",
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
      "Immersive fullscreen presentation.",
  },
];

function AdSlot({
  position,
}: {
  position: string;
}) {
  return (
    <section
      className="home-ad"
      aria-label="Advertisement"
    >
      <div className="home-ad-inner">
        <span className="home-ad-label">
          ADVERTISEMENT
        </span>

        <div>
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

  const [
    currentSlide,
    setCurrentSlide,
  ] = useState(0);

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

  useEffect(() => {
    const interval =
      window.setInterval(
        () => {
          setCurrentSlide(
            (current) =>
              (
                current + 1
              ) %
              heroSlides.length,
          );
        },
        7000,
      );

    return () => {
      window.clearInterval(
        interval,
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) =>
        current === 0
          ? heroSlides.length - 1
          : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      (current) =>
        (
          current + 1
        ) %
        heroSlides.length,
    );
  };

  const slide =
    heroSlides[currentSlide];

  return (
    <div className="home-page">
      <main className="home-layout">
        <section
          className="portfolio-frame"
          id="home"
        >
          <header className="home-header">
            <a
              href="#home"
              className="home-logo"
              onClick={closeMenu}
            >
              <strong>
                flashpt7
              </strong>

              <span>
                PHOTOGRAPHY
              </span>
            </a>

            <nav className="home-nav">
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

            <div className="home-header-actions">
              <a
                href="https://instagram.com/flashpt7"
                target="_blank"
                rel="noreferrer"
                className="home-instagram"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#contact"
                className="home-connect"
              >
                Let's Connect
              </a>
            </div>

            <button
              className={`home-menu-button ${
                menuOpen
                  ? "is-open"
                  : ""
              }`}
              type="button"
              aria-label="Toggle navigation"
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
            className="home-mobile-menu"
            data-open={menuOpen}
          >
            <nav>
              <a
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>

              <Link
                to="/gallery"
                onClick={closeMenu}
              >
                Gallery
              </Link>

              <a
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>

              <a
                href="#collaborations"
                onClick={closeMenu}
              >
                Collaborations
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>

            <div>
              No rush.
              <br />
              No goals.
              <br />

              <strong>
                Just moments.
              </strong>
            </div>
          </div>

          <section className="home-hero">
            <div
              key={currentSlide}
              className="home-hero-background"
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(3, 5, 6, 0.96) 0%,
                    rgba(3, 5, 6, 0.78) 30%,
                    rgba(3, 5, 6, 0.22) 70%,
                    rgba(3, 5, 6, 0.46) 100%
                  ),
                  url(${slide.image})
                `,
              }}
            />

            <div className="home-hero-content">
              <p className="home-hero-categories">
                {slide.label}
              </p>

              <h1>
                FLASHPT7

                <span>
                  PHOTOGRAPHY
                </span>
              </h1>

              <p className="home-hero-copy">
                More than pictures.
                <br />
                Just moments.
              </p>

              <Link
                to="/gallery"
                className="home-outline-button"
              >
                Explore Gallery

                <span>
                  →
                </span>
              </Link>
            </div>

            <div className="home-hero-bottom">
              <span>
                {String(
                  currentSlide + 1,
                ).padStart(
                  2,
                  "0",
                )}

                {" / "}

                {String(
                  heroSlides.length,
                ).padStart(
                  2,
                  "0",
                )}
              </span>

              <div className="home-slider-arrows">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={
                    previousSlide
                  }
                >
                  ←
                </button>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={
                    nextSlide
                  }
                >
                  →
                </button>
              </div>
            </div>

            <div className="home-hero-quote">
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

          <section className="home-category-section">
            <div className="home-category-title">
              <h2>
                EXPLORE MY WORK
              </h2>

              <p>
                DIFFERENT PERSPECTIVES.
                SAME PASSION.
              </p>
            </div>

            <div className="home-category-grid">
              {galleryCategories.map(
                (category) => (
                  <Link
                    key={
                      category.slug
                    }
                    to={`/gallery/${category.slug}`}
                    className="home-category-card"
                  >
                    <div className="home-category-image">
                      <img
                        src={
                          categoryCovers[
                            category.slug
                          ]
                        }
                        alt={
                          category.title
                        }
                      />

                      <div />
                    </div>

                    <div className="home-category-info">
                      <h3>
                        {
                          category.title
                        }
                      </h3>

                      <p>
                        {
                          category.description
                        }
                      </p>

                      <span>
                        See more →
                      </span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </section>
        </section>

        <AdSlot position="Homepage premium placement" />

        <section className="home-about-work">
          <article
            className="home-about"
            id="about"
          >
            <span className="home-section-number">
              01
            </span>

            <p className="home-small-title">
              ABOUT ME
            </p>

            <h2>
              Photography is
              <br />

              <em>
                how I see.
              </em>
            </h2>

            <p className="home-body-text">
              I'm Guilherme Silva,
              the mind behind
              flashpt7. Photography
              is my way of capturing
              the details, places,
              movement and moments
              that make me stop and
              look.
            </p>

            <a
              href="#contact"
              className="home-outline-button home-small-button"
            >
              Learn More

              <span>
                →
              </span>
            </a>

            <div className="home-script">
              Details
              <br />
              matter.
            </div>
          </article>

          <article
            className="home-work"
            id="collaborations"
          >
            <span className="home-section-number">
              02
            </span>

            <p className="home-small-title">
              WORK WITH ME
            </p>

            <h2>
              Let's create
              <br />

              <em>
                something real.
              </em>
            </h2>

            <div className="home-work-options">
              <div>
                <span>
                  ◉
                </span>

                <strong>
                  Photography
                </strong>
              </div>

              <div>
                <span>
                  ♢
                </span>

                <strong>
                  Collaborations
                </strong>
              </div>

              <div>
                <span>
                  ✓
                </span>

                <strong>
                  Brand Partnerships
                </strong>
              </div>
            </div>

            <a
              href="#contact"
              className="home-outline-button home-small-button"
            >
              Get In Touch

              <span>
                →
              </span>
            </a>
          </article>
        </section>

        <section className="home-features">
          <div className="home-features-heading">
            <p>
              FUNCTIONALITIES THAT MAKE A DIFFERENCE
            </p>

            <span>
              Capture · Edit · Share · Inspire
            </span>
          </div>

          <div className="home-features-grid">
            {features.map(
              (feature) => (
                <article
                  key={
                    feature.title
                  }
                  className="home-feature-card"
                >
                  <div className="home-feature-preview">
                    <span>
                      {
                        feature.icon
                      }
                    </span>
                  </div>

                  <h3>
                    {
                      feature.title
                    }
                  </h3>

                  <p>
                    {
                      feature.description
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </section>

        <AdSlot position="Homepage secondary placement" />

        <section
          className="home-contact"
          id="contact"
        >
          <div>
            <p className="home-small-title">
              CONTACT
            </p>

            <h2>
              Let's make
              <br />

              <em>
                something memorable.
              </em>
            </h2>

            <p className="home-body-text">
              Photography,
              collaborations,
              partnerships or simply
              a conversation.
            </p>

            <a
              href="mailto:contact@flashpt7.com"
              className="home-outline-button home-small-button"
            >
              contact@flashpt7.com

              <span>
                ↗
              </span>
            </a>
          </div>

          <div className="home-contact-right">
            <ContactForm />
          </div>
        </section>

        <footer className="home-footer">
          <div>
            <strong>
              flashpt7
            </strong>

            <span>
              PHOTOGRAPHY
            </span>
          </div>

          <p>
            No rush. No goals.
            Just moments.
          </p>

          <div className="home-footer-right">
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
      </main>
    </div>
  );
}

export default HomePage;