import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [style.container, pressed && style.presser]}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const style = StyleSheet.create({
  container: {
    margin: 5,
  },
  presser: {
    opacity: 0.5,
  },
});
