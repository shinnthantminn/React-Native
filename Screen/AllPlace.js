import { View } from "react-native";

//Components
import PlaceList from "../Components/Place/PlaceList";

// navigate
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const AllPlace = ({ route }) => {
  const [placeData, setPLaceData] = useState([]);
  const focus = useIsFocused();

  useEffect(() => {
    console.log(route.params, focus);

    const finder = placeData.find((i) => i.id === route.params.place.id);

    if (finder) {
      return;
    }

    if (route.params && focus) {
      setPLaceData((pre) => [...pre, route.params.place]);
    }
  }, [focus, route.params]);

  return (
    <View className="flex-1">
      <PlaceList place={placeData} />
    </View>
  );
};

export default AllPlace;
