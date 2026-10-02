import {
  createGalleryPhotos,
} from "./createGalleryPhotos";

const images =
  import.meta.glob(
    "../../assets/gallery/landscapes/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;

export const landscapesPhotos =
  createGalleryPhotos(
    images,
    {
      prefix: "landscapes",
      title: "Landscapes",
      description:
        "Places that inspire.",
    },
  );