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

  const categoryIndex =
    galleryCategories.findIndex(
      (item) =>
        item.slug ===
        category.slug,
    ) + 1;

  const hasPhotos =
    photos.length > 0;

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
                categoryIndex,
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
              {photos.length === 1
                ? "PHOTOGRAPH"
                : "PHOTOGRAPHS"}
            </span>
          </div>

          {hasPhotos ? (
            <PhotoGallery
              photos={photos}
            />
          ) : (
            <div className="category-detail-empty">
              <div className="category-detail-empty-number">
                00
              </div>

              <div className="category-detail-empty-content">
                <span>
                  COLLECTION COMING SOON
                </span>

                <h3>
                  New moments
                  <br />

                  <em>
                    are on the way.
                  </em>
                </h3>

                <p>
                  This collection is
                  currently being prepared.
                  New photographs will be
                  added soon.
                </p>

                <Link to="/gallery">
                  Explore other collections

                  <span>
                    →
                  </span>
                </Link>
              </div>

              <div className="category-detail-empty-mark">
                flashpt7
              </div>
            </div>
          )}
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