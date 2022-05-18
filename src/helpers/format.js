export function formatData(object) {
  return {
    id: object.id,
    isFavourite: true,
    comment: "",
    created_at: object.created_at || "undefined",
    urls: {
      small: object.urls.small || "undefined",
    },
    user: {
      name: object.user.name || "undefined",
    },
    exif: {
      name: object.exif.name || "undefined",
      exposure_time: object.exposure_time || "undefined",
      iso: object.exif.iso || "undefined",
    },
  };
}
