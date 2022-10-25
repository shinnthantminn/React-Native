// Screen
import { AddPlace, DetailPlace, AllPlace, Map } from "./Screen";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "./Components/ui/IconButton";
const Stack = createNativeStackNavigator();

// color variable
import { Colors } from "./constant/color";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary50,
          contentStyle: { backgroundColor: Colors.primary800 },
        }}
      >
        <Stack.Screen
          name="All Place"
          options={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <IconButton
                name="add"
                color={tintColor}
                size={26}
                onPress={() => navigation.navigate("Add Place")}
              />
            ),
          })}
          component={AllPlace}
        />
        <Stack.Screen name="Add Place" component={AddPlace} />
        <Stack.Screen name="map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
