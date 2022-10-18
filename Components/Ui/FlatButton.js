import { Pressable, Text } from "react-native";

const FlatButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text className="text-center my-2 text-red-400">{children}</Text>
    </Pressable>
  );
};

export default FlatButton;
