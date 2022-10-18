import { View, Text, ActivityIndicator } from "react-native";

const LoadingOverlay = ({ message }) => {
  return (
    <View className="flex-1 bg-red-500 justify-center items-center">
      <Text className="text-2xl text-white font-bold">{message}</Text>
      <ActivityIndicator size={26} color="white" />
    </View>
  );
};

export default LoadingOverlay;
