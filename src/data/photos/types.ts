export type GalleryPhoto = {
  id: number | string;
  src: string;

  title: string;
  description?: string;
  alt?: string;

  location?: string;
  date?: string;

  orientation?:
    | "landscape"
    | "portrait"
    | "square";
};