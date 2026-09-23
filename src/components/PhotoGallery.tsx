import {
  useEffect,
  useState,
} from "react";

import "./PhotoGallery.css";

export type PhotoItem = {
  id: number | string;
  src: string;
  title?: string;
  description?: string;
  alt?: string;
};

type PhotoGalleryProps = {
  photos: PhotoItem[];
};

const layoutClasses = [
  "featured",
  "portrait",
  "standard",
  "wide",
  "tall",
  "standard",
  "wide",
  "portrait",
];

function PhotoGallery({
  photos,
}: PhotoGalleryProps) {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState<number | null>(
    null,
  );

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previousPhoto = () => {
    if (
      selectedIndex === null
    ) {
      return;
    }

    setSelectedIndex(
      selectedIndex === 0
        ? photos.length - 1
        : selectedIndex - 1,
    );
  };

  const nextPhoto = () => {
    if (
      selectedIndex === null
    ) {
      return;
    }

    setSelectedIndex(
      (
        selectedIndex + 1
      ) %
        photos.length,
    );
  };

  useEffect(() => {
    if (
      selectedIndex === null
    ) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        closeLightbox();
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        setSelectedIndex(
          (current) => {
            if (
              current === null
            ) {
              return null;
            }

            return current === 0
              ? photos.length - 1
              : current - 1;
          },
        );
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        setSelectedIndex(
          (current) => {
            if (
              current === null
            ) {
              return null;
            }

            return (
              current + 1
            ) %
              photos.length;
          },
        );
      }
    };

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    selectedIndex,
    photos.length,
  ]);

  const selectedPhoto =
    selectedIndex !== null
      ? photos[selectedIndex]
      : null;

  return (
    <>
      <div className="photo-gallery-grid">
        {photos.map(
          (
            photo,
            index,
          ) => {
            const layout =
              layoutClasses[
                index %
                  layoutClasses.length
              ];

            return (
              <button
                key={photo.id}
                type="button"
                className={`photo-gallery-item photo-gallery-item--${layout}`}
                onClick={() =>
                  setSelectedIndex(
                    index,
                  )
                }
                aria-label={`Open ${
                  photo.title ??
                  `photograph ${
                    index + 1
                  }`
                }`}
              >
                <img
                  src={photo.src}
                  alt={
                    photo.alt ??
                    photo.title ??
                    "FlashPT7 photography"
                  }
                  loading={
                    index > 2
                      ? "lazy"
                      : "eager"
                  }
                />

                <div className="photo-gallery-shade" />

                <div className="photo-gallery-number">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </div>

                <div className="photo-gallery-overlay">
                  <div>
                    <p>
                      FLASHPT7
                    </p>

                    <h3>
                      {photo.title ??
                        "Photography"}
                    </h3>
                  </div>

                  <span>
                    View photograph
                    ↗
                  </span>
                </div>
              </button>
            );
          },
        )}
      </div>

      {selectedPhoto &&
        selectedIndex !==
          null && (
          <div
            className="photo-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedPhoto.title ??
              "Photograph"
            }
            onMouseDown={
              closeLightbox
            }
          >
            <div className="photo-lightbox-header">
              <div>
                <span>
                  FLASHPT7
                </span>

                <strong>
                  {selectedPhoto.title ??
                    "Photography"}
                </strong>
              </div>

              <div className="photo-lightbox-counter">
                {String(
                  selectedIndex + 1,
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
              </div>

              <button
                type="button"
                className="photo-lightbox-close"
                onClick={
                  closeLightbox
                }
                aria-label="Close photograph"
              >
                ×
              </button>
            </div>

            <div
              className="photo-lightbox-content"
              onMouseDown={(
                event,
              ) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="photo-lightbox-arrow photo-lightbox-arrow--left"
                onClick={
                  previousPhoto
                }
                aria-label="Previous photograph"
              >
                ←
              </button>

              <figure>
                <img
                  src={
                    selectedPhoto.src
                  }
                  alt={
                    selectedPhoto.alt ??
                    selectedPhoto.title ??
                    "FlashPT7 photography"
                  }
                />

                {(selectedPhoto.title ||
                  selectedPhoto.description) && (
                  <figcaption>
                    <div>
                      <span>
                        {
                          selectedPhoto.title
                        }
                      </span>

                      {selectedPhoto.description && (
                        <p>
                          {
                            selectedPhoto.description
                          }
                        </p>
                      )}
                    </div>

                    <span>
                      @flashpt7
                    </span>
                  </figcaption>
                )}
              </figure>

              <button
                type="button"
                className="photo-lightbox-arrow photo-lightbox-arrow--right"
                onClick={
                  nextPhoto
                }
                aria-label="Next photograph"
              >
                →
              </button>
            </div>
          </div>
        )}
    </>
  );
}

export default PhotoGallery;