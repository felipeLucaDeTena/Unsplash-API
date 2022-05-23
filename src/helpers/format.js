export function formatData(object) {
  return {
    id: object.id,
    isFavourite: true,
    comment: "",
    created_at: object.created_at || "undefined",
    likes: object.likes,
    urls: {
      small: object.urls.small || "undefined",
      full: object.urls.full || "undefined",
    },
    user: {
      username: object.user.username,
      name: object.user.name || "undefined",
      portfolio_url: object.user.portfolio_url || "undefined",
      instagram_username: object.user.instagram_username || "undefined",
    },

    location: {
      country: object.user.location || "undefined",
    },
    height: object.height,
    width: object.width,
  };
}
