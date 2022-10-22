import { View, Text, TextInput, ScrollView } from "react-native";

// native feature
import ImagePicker from "../Native/ImagePicker";

const PlaceForm = () => {
  return (
    <ScrollView className="flex-1" alwaysBounceVertical={false}>
      <View className="p-5">
        <Text className="text-teal-500">Title</Text>
        <TextInput className="bg-teal-200 px-2 py-2 mt-2" />
        <ImagePicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
