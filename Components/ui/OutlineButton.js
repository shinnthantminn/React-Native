import { Pressable, StyleSheet, Text } from "react-native";

// icons
import { Ionicons } from "@expo/vector-icons";

// Colors
import { Colors } from "../../constant/color";

const OutlineButton = ({ icon, children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [Style.Container, pressed && Style.press]}
    >
      <Ionicons name={icon} size={18} color={Colors.primary500} />
      <Text className="ml-2">{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const Style = StyleSheet.create({
  press: {
    opacity: 0.5,
  },
  Container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
});
