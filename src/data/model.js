export class Photo {
  id;

  urls;

  user;

  likes;

  created_at;

  views;

  downloads;

  comment;

  constructor(
    id = "",
    urls = {},
    user = {},
    likes = 0,
    date = "",
    views = 0,
    downloads = 0,
    comment = ""
  ) {
    this.id = id;
    this.urls = urls.small;
    this.likes = likes;
    this.created_at = date;
    this.views = views;
    this.downloads = downloads;
    this.comment = comment;
    this.user = user;
  }
}
