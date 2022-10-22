import { Button, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {
  async function handlePress() {
    const data = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(data);
  }

  return (
    <View>
      <Button title="Take a picture" onPress={handlePress} />
    </View>
  );
};

export default ImagePicker;
