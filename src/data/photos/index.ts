import animalsFallback from "../../assets/home/animals.png";
import automotiveFallback from "../../assets/home/automotive.png";
import landscapesFallback from "../../assets/home/landscapes.png";
import macroFallback from "../../assets/home/macro.png";
import natureFallback from "../../assets/home/nature.png";

import {
  animalsPhotos,
} from "./animals";

import {
  automotivePhotos,
} from "./automotive";

import {
  landscapesPhotos,
} from "./landscapes";

import {
  macroPhotos,
} from "./macro";

import {
  naturePhotos,
} from "./nature";

import type {
  GalleryPhoto,
} from "./types";

export const photosByCategory: Record<
  string,
  GalleryPhoto[]
> = {
  macro: macroPhotos,
  animals: animalsPhotos,
  landscapes: landscapesPhotos,
  automotive: automotivePhotos,
  nature: naturePhotos,
};

export const categoryCovers: Record<
  string,
  string
> = {
  macro:
    macroPhotos[0]?.src ??
    macroFallback,

  animals:
    animalsPhotos[0]?.src ??
    animalsFallback,

  landscapes:
    landscapesPhotos[0]?.src ??
    landscapesFallback,

  automotive:
    automotivePhotos[0]?.src ??
    automotiveFallback,

  nature:
    naturePhotos[0]?.src ??
    natureFallback,
};

export type {
  GalleryPhoto,
};