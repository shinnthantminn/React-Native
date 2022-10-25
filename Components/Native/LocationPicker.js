import { Alert, StyleSheet, Text, View, Image } from "react-native";

// outline Button
import OutlineButton from "../ui/OutlineButton";

// React
import { useEffect, useState } from "react";

// location
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

// get Location Image
import { getCurrentMap, getLocation } from "../../helper/Location";

// Navigation
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";

const LocationPicker = ({ handleLocation }) => {
  const nav = useNavigation();
  const route = useRoute();
  const focus = useIsFocused();

  const [locationData, setLocationData] = useState(null);
  const [locationInfo, requestLocationPermission] = useForegroundPermissions();

  const verifyLocationPermission = async () => {
    if (locationInfo.status === PermissionStatus.UNDETERMINED) {
      const permission = await requestLocationPermission();
      return permission.granted;
    }

    if (locationInfo.status === PermissionStatus.DENIED) {
      Alert(
        "Permission Error",
        "You Need to Permit to Open these location access"
      );
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (focus && route.params) {
      const data = route.params.locationData;

      setLocationData({
        lat: data.lat,
        lng: data.lng,
      });
    }
  }, [focus, route]);

  useEffect(() => {
    if (locationData) {
      (async () => {
        const address = await getLocation(locationData.lat, locationData.lng);
        handleLocation({ ...locationData, address });
      })();
    }
  }, [locationData]);

  // Reuse Location Function
  const locationPicking = async () => {
    const permissionAccess = await verifyLocationPermission();

    if (!permissionAccess) {
      return;
    }

    const location = await getCurrentPositionAsync();
    return location;
  };

  const handlePressOnPickMap = async () => {
    const location = await locationPicking();
    nav.navigate("map", { location });
  };

  const handlePressSelectLocation = async () => {
    const location = await locationPicking();
    setLocationData({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  return (
    <View className="mt-5">
      <View className="w-full mb-5 h-[200px] border border-black bg-teal-500 justify-center items-center">
        {locationData ? (
          <Image
            source={{ uri: getCurrentMap(locationData.lat, locationData.lng) }}
            className="w-full h-full"
          />
        ) : (
          <Text className="text-white">Select Your Location</Text>
        )}
      </View>
      <View className="flex-row justify-center items-center space-x-2">
        <View className="flex-[0.5]">
          <OutlineButton onPress={handlePressSelectLocation} icon={"location"}>
            Select Your Location
          </OutlineButton>
        </View>
        <View className="flex-[0.5]">
          <OutlineButton onPress={handlePressOnPickMap} icon="map">
            Pick on Map
          </OutlineButton>
        </View>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
