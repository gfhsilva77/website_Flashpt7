import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import PhotoGallery from "../components/PhotoGallery";

import {
  galleryCategories,
} from "../data/gallery";

import {
  categoryCovers,
  photosByCategory,
} from "../data/photos";

import "./CategoryPage.css";

function CategoryPage() {
  const {
    category: categorySlug,
  } = useParams();

  const category =
    galleryCategories.find(
      (item) =>
        item.slug ===
        categorySlug,
    );

  if (!category) {
    return (
      <Navigate
        to="/gallery"
        replace
      />
    );
  }

  const categoryImage =
    categoryCovers[
      category.slug
    ];

  const photos =
    photosByCategory[
      category.slug
    ] ?? [];

  return (
    <div className="category-detail-page">
      <main className="category-detail-shell">
        <header className="category-detail-header">
          <Link
            to="/"
            className="category-detail-logo"
          >
            <strong>
              flashpt7
            </strong>

            <span>
              PHOTOGRAPHY
            </span>
          </Link>

          <nav className="category-detail-nav">
            <Link to="/">
              Home
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <span>
              {category.title}
            </span>
          </nav>

          <Link
            to="/gallery"
            className="category-detail-back"
          >
            ← All Collections
          </Link>
        </header>

        <section className="category-detail-hero">
          <div
            className="category-detail-hero-image"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(3, 5, 6, 0.93) 0%,
                  rgba(3, 5, 6, 0.58) 38%,
                  rgba(3, 5, 6, 0.15) 100%
                ),
                url(${categoryImage})
              `,
            }}
          />

          <div className="category-detail-hero-content">
            <p>
              FLASHPT7 · COLLECTION
            </p>

            <h1>
              {category.title}
            </h1>

            <span>
              {category.intro}
            </span>
          </div>

          <div className="category-detail-hero-index">
            <span>
              COLLECTION
            </span>

            <strong>
              {String(
                galleryCategories.findIndex(
                  (item) =>
                    item.slug ===
                    category.slug,
                ) + 1,
              ).padStart(
                2,
                "0",
              )}

              {" / "}

              {String(
                galleryCategories.length,
              ).padStart(
                2,
                "0",
              )}
            </strong>
          </div>
        </section>

        <section className="category-detail-intro">
          <div>
            <span>
              SELECTED WORK
            </span>

            <h2>
              Moments worth
              <br />

              <em>
                looking closer.
              </em>
            </h2>
          </div>

          <p>
            {category.description}
            {" "}
            Explore the collection
            and open any photograph
            for a larger view.
          </p>
        </section>

        <section className="category-detail-gallery">
          <div className="category-detail-gallery-heading">
            <div>
              <span>
                01
              </span>

              <p>
                COLLECTION
              </p>
            </div>

            <h2>
              {category.title}
            </h2>

            <span>
              {photos.length}
              {" "}
              PHOTOGRAPHS
            </span>
          </div>

          <PhotoGallery
            photos={photos}
          />
        </section>

        <section className="category-detail-next">
          <div>
            <p>
              Explore more
            </p>

            <h2>
              Different
              <br />

              <em>
                perspectives.
              </em>
            </h2>
          </div>

          <Link to="/gallery">
            View all collections

            <span>
              →
            </span>
          </Link>
        </section>

        <footer className="category-detail-footer">
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

          <span>
            © 2026
          </span>
        </footer>
      </main>
    </div>
  );
}

export default CategoryPage;