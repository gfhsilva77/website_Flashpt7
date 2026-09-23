import {
  useEffect,
  useState,
} from "react";

export type PhotoItem = {
  id: number;
  src: string;
  title: string;
  description?: string;
};

type PhotoGalleryProps = {
  photos: PhotoItem[];
};

function PhotoGallery({
  photos,
}: PhotoGalleryProps) {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState<number | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => {
        if (
          current === null ||
          photos.length === 0
        ) {
          return current;
        }

        return current === 0
          ? photos.length - 1
          : current - 1;
      },
    );
  };

  const showNext = () => {
    setActiveIndex(
      (current) => {
        if (
          current === null ||
          photos.length === 0
        ) {
          return current;
        }

        return current ===
          photos.length - 1
          ? 0
          : current + 1;
      },
    );
  };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    const handleKeyboard = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        showPrevious();
      }

      if (
        event.key === "ArrowRight"
      ) {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard,
      );

      document.body.style.overflow =
        "";
    };
  }, [
    activeIndex,
    photos.length,
  ]);

  const activePhoto =
    activeIndex !== null
      ? photos[activeIndex]
      : null;

  return (
    <>
      <section className="photography-grid">
        {photos.map(
          (
            photo,
            index,
          ) => (
            <button
              type="button"
              className="photography-card"
              key={photo.id}
              onClick={() =>
                setActiveIndex(index)
              }
            >
              <img
                src={photo.src}
                alt={photo.title}
              />

              <div className="photography-card-overlay">
                <span>
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>

                <div>
                  <h3>
                    {photo.title}
                  </h3>

                  <p>
                    View photograph
                  </p>
                </div>
              </div>
            </button>
          ),
        )}
      </section>

      {activePhoto &&
        activeIndex !== null && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
              activePhoto.title
            }
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close photograph"
              onClick={
                closeLightbox
              }
            >
              ×
            </button>

            <button
              type="button"
              className="lightbox-navigation lightbox-previous"
              aria-label="Previous photograph"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
            >
              ←
            </button>

            <div
              className="lightbox-content"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="lightbox-image-wrapper">
                <img
                  src={activePhoto.src}
                  alt={
                    activePhoto.title
                  }
                />
              </div>

              <div className="lightbox-info">
                <div>
                  <span className="lightbox-counter">
                    {String(
                      activeIndex + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                    {" / "}
                    {String(
                      photos.length,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <h2>
                    {
                      activePhoto.title
                    }
                  </h2>

                  {activePhoto.description && (
                    <p>
                      {
                        activePhoto.description
                      }
                    </p>
                  )}
                </div>

                <span className="lightbox-hint">
                  ← → Navigate · ESC Close
                </span>
              </div>
            </div>

            <button
              type="button"
              className="lightbox-navigation lightbox-next"
              aria-label="Next photograph"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
            >
              →
            </button>
          </div>
        )}
    </>
  );
}

export default PhotoGallery;