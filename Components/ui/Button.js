import { Pressable, Text, StyleSheet } from "react-native";

// color
import { Colors } from "../../constant/color";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style.container, pressed && style.press]}
    >
      <Text style={style.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  press: {
    opacity: 0.5,
  },
  text: {
    color: "white",
  },
});
