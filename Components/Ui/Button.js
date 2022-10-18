import { View, Text, Pressable } from "react-native";

const Button = ({ children, onPress, style }) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => {
          console.log(pressed);
          return pressed && { opacity: 0.5 };
        }}
        className="bg-red-500 items-center py-2 rounded hover:bg-white"
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Text className="text-white">{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
