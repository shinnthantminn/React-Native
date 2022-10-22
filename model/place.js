import { v4 as uid } from "uuid";

class Place {
  constructor(title, imageUrl, location, address) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.location = location;
    this.address = address;
    this.id = uid();
  }
}
