import { View } from "react-native";
import PlaceList from "../Components/Place/PlaceList";

const AllPlace = () => {
  return (
    <View className="flex-1">
      <PlaceList place={[]} />
    </View>
  );
};

export default AllPlace;
