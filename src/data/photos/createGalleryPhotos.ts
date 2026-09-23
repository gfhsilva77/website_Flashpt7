import type {
  GalleryPhoto,
} from "./types";

type CreateGalleryPhotosOptions = {
  prefix: string;
  title: string;
  description: string;
};

export function createGalleryPhotos(
  images: Record<string, string>,
  options: CreateGalleryPhotosOptions,
): GalleryPhoto[] {
  return Object.entries(images)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(
        pathB,
        undefined,
        {
          numeric: true,
        },
      ),
    )
    .map(
      (
        [path, src],
        index,
      ) => {
        const filename =
          path
            .split("/")
            .pop()
            ?.replace(
              /\.[^/.]+$/,
              "",
            ) ??
          `${options.prefix}-${index + 1}`;

        return {
          id: `${options.prefix}-${String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}`,

          src,

          title:
            filename
              .replace(
                /[-_]+/g,
                " ",
              )
              .replace(
                /\b\w/g,
                (letter) =>
                  letter.toUpperCase(),
              ) ||
            `${options.title} ${index + 1}`,

          description:
            options.description,

          alt:
            `${options.title} photography by FlashPT7`,
        };
      },
    );
}