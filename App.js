import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screen/CategoriesScreen";
import InnerCategories from "./screen/InnerCategories";
import FavScreen from "./screen/FavScreen";
import { useEffect } from "react";
import Detail from "./screen/Detail";
import { Ionicons } from "@expo/vector-icons";
import FavoriateContextProvider from "./store/context/FavoriateContext";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Provider, useSelector } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  const { ids } = useSelector((state) => state.favoriateMeals);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem("Fav");
      console.log(data);
    })();
  }, []);

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Category"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Your Fav"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        component={FavScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name={"MealCategory"}
              options={{ headerShown: false }}
              component={DrawerContainer}
            />
            <Stack.Screen name={"Overview"} component={InnerCategories} />
            <Stack.Screen name={"Detail"} component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
