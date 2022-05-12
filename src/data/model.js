export class Photo {
  id;

  urls;

  likes;

  created_at;

  views;

  downloads;

  constructor(
    id = "",
    urls = {},
    likes = 0,
    date = "",
    views = 0,
    downloads = 0
  ) {
    this.id = id;
    this.urls = urls.small;
    this.likes = likes;
    this.created_at = date;
    this.views = views;
    this.downloads = downloads;
  }
}
