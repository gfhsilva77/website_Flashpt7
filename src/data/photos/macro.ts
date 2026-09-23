import {
  createGalleryPhotos,
} from "./createGalleryPhotos";

const images =
  import.meta.glob(
    "../../assets/gallery/macro/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;

export const macroPhotos =
  createGalleryPhotos(
    images,
    {
      prefix: "macro",
      title: "Macro",
      description:
        "Small details. Big stories.",
    },
  );