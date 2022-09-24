import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screen/CategoriesScreen";
import InnerCategories from "./screen/InnerCategories";
import Detail from "./screen/Detail";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
            options={{
              title: "All Category",
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name={"Overview"}
            component={InnerCategories}
            // options={({ route, navigation }) => {
            //   return {
            //     title: route.params.categoryId,
            //   };
            // }}
          />
          <Stack.Screen name={"Detail"} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
