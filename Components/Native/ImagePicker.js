import { Alert, Button, View, Image, Text } from "react-native";

// Image Picker Package
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

// React Icons
import { useState } from "react";

// icons Button
import OutlineButton from "../ui/OutlineButton";

const ImagePicker = ({ handleImage }) => {
  const [image, setImage] = useState(null);
  const [cameraInfo, requestCamera] = useCameraPermissions();

  const verifyCamera = async () => {
    if (cameraInfo.status === PermissionStatus.UNDETERMINED) {
      const premissionRequest = await requestCamera();
      return premissionRequest.granted;
    }

    if (cameraInfo.status === PermissionStatus.DENIED) {
      Alert("Insufficent Permission", "You need to permission for Open Camera");
      return false;
    }

    return true;
  };

  async function handlePress() {
    const permission = await verifyCamera();

    if (!permission) {
      return;
    }

    const data = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImage(data.uri);
    handleImage(data.uri);
  }

  return (
    <View className="mt-5">
      <View className="w-full mb-5 h-[200px] border border-black bg-teal-500 justify-center items-center">
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full" />
        ) : (
          <Text className="text-white">Select Your Image</Text>
        )}
      </View>
      <OutlineButton icon={"camera"} onPress={handlePress}>
        Take a picture
      </OutlineButton>
    </View>
  );
};

export default ImagePicker;
