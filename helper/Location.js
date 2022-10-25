import axios from "axios";

export const getCurrentMap = (lat, lng) => {
  console.log(lat, lng);

  const image = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=800&height=600&center=lonlat:${lng},${lat}&zoom=12.1401&apiKey=d548c5ed24604be6a9dd0d989631f783`;

  return image;
};

export const getLocation = async (lat, lng) => {
  const data = await axios(
    `http://api.positionstack.com/v1/reverse?access_key=0c1baa6643dc16f6d39c3bb85ab4d3d6&query=${lat},${lng}`
  );

  return data.data.data[0].label;
};

//   const image = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C${lat},${lng},-74.015794
// &key=AIzaSyD2rQcy55mrMvQgnmVkLMuwnh0zN65IPm8&signature=${"shinthantmin32@gmail.com"}`;
