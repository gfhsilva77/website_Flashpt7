import {
  Link,
} from "react-router-dom";

import heroImage from "../assets/hero.png";

import {
  galleryCategories,
} from "../data/gallery";

function GalleryPage() {
  return (
    <div className="route-page">
      <header className="route-header">
        <Link
          to="/"
          className="route-brand"
        >
          <strong>
            flashpt7
          </strong>

          <span>
            PHOTOGRAPHY
          </span>
        </Link>

        <Link
          to="/"
          className="route-back"
        >
          ← Home
        </Link>
      </header>

      <main>
        <section className="route-hero">
          <p className="route-eyebrow">
            FLASHPT7 PHOTOGRAPHY
          </p>

          <h1>
            Gallery
          </h1>

          <p className="route-description">
            Different perspectives.
            <br />
            Same passion.
          </p>
        </section>

        <section className="route-gallery-grid">
          {galleryCategories.map(
            (
              category,
              index,
            ) => (
              <Link
                key={category.slug}
                to={`/gallery/${category.slug}`}
                className="route-gallery-card"
              >
                <div className="route-gallery-image">
                  <img
                    src={heroImage}
                    alt={category.title}
                  />
                </div>

                <div className="route-gallery-content">
                  <span>
                    0{index + 1}
                  </span>

                  <h2>
                    {category.title}
                  </h2>

                  <p>
                    {category.description}
                  </p>

                  <strong>
                    Explore →
                  </strong>
                </div>
              </Link>
            ),
          )}
        </section>
      </main>
    </div>
  );
}

export default GalleryPage;