// icons
import { Ionicons } from "@expo/vector-icons";

// pressable buttons
import { Pressable } from "react-native";

const IconButton = ({ size, color, name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons size={size} color={color} name={name} />
    </Pressable>
  );
};

export default IconButton;
