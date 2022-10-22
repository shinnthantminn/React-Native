import { Pressable, View, Text, Image } from "react-native";

const PlaceItem = ({ data, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: data.imageUrl }} />
      <View>
        <Text>{data.title}</Text>
        <Text>{data.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
