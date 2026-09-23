import {
  createGalleryPhotos,
} from "./createGalleryPhotos";

const images =
  import.meta.glob(
    "../../assets/gallery/animals/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;

export const animalsPhotos =
  createGalleryPhotos(
    images,
    {
      prefix: "animals",
      title: "Animals",
      description:
        "Pure moments.",
    },
  );