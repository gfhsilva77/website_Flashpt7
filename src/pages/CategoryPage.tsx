import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import heroImage from "../assets/hero.png";

import PhotoGallery, {
  type PhotoItem,
} from "../components/PhotoGallery";

import {
  galleryCategories,
} from "../data/gallery";

function CategoryPage() {
  const {
    category: categorySlug,
  } = useParams();

  const category =
    galleryCategories.find(
      (item) =>
        item.slug === categorySlug,
    );

  if (!category) {
    return (
      <Navigate
        to="/gallery"
        replace
      />
    );
  }

  const photos: PhotoItem[] =
    Array.from({
      length: 8,
    }).map(
      (
        _,
        index,
      ) => ({
        id: index + 1,

        src: heroImage,

        title: `${category.title} ${
          index + 1
        }`,

        description:
          category.description,
      }),
    );

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
          to="/gallery"
          className="route-back"
        >
          ← Gallery
        </Link>
      </header>

      <main>
        <section className="category-page-hero">
          <p className="route-eyebrow">
            FLASHPT7 / GALLERY
          </p>

          <h1>
            {category.title}
          </h1>

          <p>
            {category.intro}
          </p>
        </section>

        <PhotoGallery
          photos={photos}
        />

        <div className="category-page-footer">
          <Link to="/gallery">
            ← Explore other categories
          </Link>
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;