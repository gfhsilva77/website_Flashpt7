import {
  createGalleryPhotos,
} from "./createGalleryPhotos";

const images =
  import.meta.glob(
    "../../assets/gallery/automotive/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;

export const automotivePhotos =
  createGalleryPhotos(
    images,
    {
      prefix: "automotive",
      title: "Automotive",
      description:
        "Speed. Passion. Stories.",
    },
  );