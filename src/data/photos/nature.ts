import {
  createGalleryPhotos,
} from "./createGalleryPhotos";

const images =
  import.meta.glob(
    "../../assets/gallery/nature/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;

export const naturePhotos =
  createGalleryPhotos(
    images,
    {
      prefix: "nature",
      title: "Nature",
      description:
        "The world as it is.",
    },
  );