import { Alert } from "react-native";

// mapView Components
import MapView, { Marker } from "react-native-maps";

// React
import { useCallback, useLayoutEffect, useState } from "react";
import IconButton from "../Components/ui/IconButton";

const Map = ({ route, navigation }) => {
  const { location } = route.params;
  const [locationData, setLocationData] = useState(null);

  const handlePress = (event) => {
    setLocationData({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  console.log("map", locationData);

  const savePickerLocation = useCallback(() => {
    if (!locationData) {
      Alert.alert(
        "You Should Select Location",
        "you have no select location so select location and save again"
      );
      return;
    }
    navigation.navigate("Add Place", { locationData });
  }, [locationData, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          name="save"
          size={24}
          color={tintColor}
          onPress={savePickerLocation}
        />
      ),
    });
  }, [navigation, savePickerLocation]);

  const region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView className="flex-1" initialRegion={region} onPress={handlePress}>
      {locationData && (
        <Marker
          coordinate={{
            latitude: locationData.lat,
            longitude: locationData.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
