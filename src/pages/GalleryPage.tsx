import {
  Link,
} from "react-router-dom";

import {
  galleryCategories,
} from "../data/gallery";

import {
  categoryCovers,
} from "../data/photos";

import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="gallery-page">
      <main className="gallery-shell">
        <header className="gallery-header">
          <Link
            to="/"
            className="gallery-logo"
          >
            <strong>
              flashpt7
            </strong>

            <span>
              PHOTOGRAPHY
            </span>
          </Link>

          <nav className="gallery-nav">
            <Link to="/">
              Home
            </Link>

            <span>
              Gallery
            </span>

            <a href="/#about">
              About
            </a>

            <a href="/#collaborations">
              Collaborations
            </a>

            <a href="/#contact">
              Contact
            </a>
          </nav>

          <Link
            to="/"
            className="gallery-back"
          >
            ← Back Home
          </Link>
        </header>

        <section className="gallery-hero">
          <div
            className="gallery-hero-image"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(3, 5, 6, 0.92) 0%,
                  rgba(3, 5, 6, 0.55) 40%,
                  rgba(3, 5, 6, 0.12) 100%
                ),
                url(${categoryCovers.automotive})
              `,
            }}
          />

          <div className="gallery-hero-content">
            <p className="gallery-eyebrow">
              FLASHPT7 · PHOTOGRAPHY
            </p>

            <h1>
              Selected
              <br />

              <em>
                work.
              </em>
            </h1>

            <p className="gallery-intro">
              A collection of moments,
              details, places and movement.
            </p>
          </div>

          <div className="gallery-hero-note">
            <span>
              Explore
            </span>

            <strong>
              05 categories
            </strong>
          </div>
        </section>

        <section className="gallery-introduction">
          <div>
            <span>
              01
            </span>

            <p>
              GALLERY
            </p>
          </div>

          <h2>
            Different perspectives.
            <br />

            <em>
              Same passion.
            </em>
          </h2>

          <p className="gallery-introduction-copy">
            From the smallest details
            in macro photography to
            landscapes, animals,
            nature and motorsport.
            Every photograph has its
            own story.
          </p>
        </section>

        <section className="gallery-categories">
          {galleryCategories.map(
            (
              category,
              index,
            ) => (
              <Link
                key={category.slug}
                to={`/gallery/${category.slug}`}
                className="gallery-category"
              >
                <div className="gallery-category-number">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </div>

                <div className="gallery-category-image">
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

                  <div className="gallery-category-overlay" />
                </div>

                <div className="gallery-category-content">
                  <div>
                    <p>
                      CATEGORY
                    </p>

                    <h3>
                      {
                        category.title
                      }
                    </h3>
                  </div>

                  <div className="gallery-category-description">
                    <p>
                      {
                        category.intro
                      }
                    </p>

                    <span>
                      Explore collection
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ),
          )}
        </section>

        <section className="gallery-bottom">
          <p>
            No rush.
            No goals.
            Just moments.
          </p>

          <Link to="/">
            Back to homepage

            <span>
              →
            </span>
          </Link>
        </section>

        <footer className="gallery-footer">
          <div>
            <strong>
              flashpt7
            </strong>

            <span>
              PHOTOGRAPHY
            </span>
          </div>

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
        </footer>
      </main>
    </div>
  );
}

export default GalleryPage;