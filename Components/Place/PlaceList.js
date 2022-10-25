import { View, Text, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ place }) => {
  if (!place || place.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white">
          No Place for show just add new place for show bro just add!
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FlatList
        alwaysBounceVertical={false}
        data={place}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem data={item} />}
      />
    </View>
  );
};

export default PlaceList;
