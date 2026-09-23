export type GalleryCategory = {
  slug: string;
  title: string;
  description: string;
  intro: string;
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "macro",
    title: "Macro",
    description: "Small details. Big stories.",
    intro: "A closer look at details that usually go unnoticed.",
  },
  {
    slug: "animals",
    title: "Animals",
    description: "Pure moments.",
    intro: "Natural expressions, movement and quiet moments.",
  },
  {
    slug: "landscapes",
    title: "Landscapes",
    description: "Places that inspire.",
    intro: "Land, light and atmosphere captured along the way.",
  },
  {
    slug: "automotive",
    title: "Automotive",
    description: "Speed. Passion. Stories.",
    intro: "Motorsport, movement and machines captured in action.",
  },
  {
    slug: "nature",
    title: "Nature",
    description: "The world as it is.",
    intro: "Nature, textures, light and moments found outside.",
  },
];
