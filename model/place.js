import uuid from "react-native-uuid";

export class Place {
  constructor(title, imageUrl, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.location = { lag: location.lat, lng: location.lng };
    this.address = location.address;
    this.id = uuid.v4();
  }
}
