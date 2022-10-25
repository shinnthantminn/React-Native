import { View, Text } from "react-native";
import PlaceForm from "../Components/Place/PlaceForm";

const AddPlace = ({ navigation }) => {
  const handleCreatePlace = (place) => {
    console.log(place);
    navigation.navigate("All Place", { place: place });
  };

  return (
    <View className="flex-1">
      <PlaceForm handleCreate={handleCreatePlace} />
    </View>
  );
};

export default AddPlace;
