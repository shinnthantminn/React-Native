import { useCallback, useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import { Place } from "../../model/place";

// native feature
import ImagePicker from "../Native/ImagePicker";
import LocationPicker from "../Native/LocationPicker";

// Button
import Button from "../ui/Button";

const PlaceForm = ({ handleCreate }) => {
  const [data, setData] = useState({
    title: "",
    image: "",
    location: null,
  });

  const handleTextChange = (e) => {
    setData((pre) => ({ ...pre, title: e }));
  };

  const handleImageChange = (url) => {
    setData((pre) => ({ ...pre, image: url }));
  };

  const handleLocationChange = useCallback((location) => {
    setData((pre) => ({ ...pre, location: location }));
  }, []);

  const handleSumit = () => {
    if (data.image && data.title && data.location) {
      const create = new Place(data.title, data.image, data.location);
      handleCreate(create);
    } else {
      Alert.alert("No Complete", "Waiting or required filed");
    }
  };

  return (
    <ScrollView className="flex-1" alwaysBounceVertical={false}>
      <View className="p-5">
        <Text className="text-teal-500">Title</Text>
        <TextInput
          value={data.title}
          onChangeText={handleTextChange}
          className="bg-teal-200 px-2 py-2 mt-2"
        />
        <ImagePicker handleImage={handleImageChange} />
        <LocationPicker handleLocation={handleLocationChange} />
        <Button onPress={handleSumit}>Submit</Button>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
