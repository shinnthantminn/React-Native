import { Pressable, View, Text, Image, StyleSheet } from "react-native";

const PlaceItem = ({ data, onSelect }) => {
  return (
    <Pressable style={({ pressed }) => pressed && style.preass}>
      <View
        className="flex-row h-[100px] m-[10px] pr-2 rounded-lg space-x-2 bg-[#1aacf0]"
        onPress={onSelect}
      >
        <Image
          className="w-[30%] rounded-l-lg"
          source={{ uri: data.imageUrl }}
        />
        <View className="w-[70%] justify-center ">
          <Text className="font-bold">{data.title}</Text>
          <Text>{data.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const style = StyleSheet.create({
  preass: {
    opacity: 0.5,
  },
});
