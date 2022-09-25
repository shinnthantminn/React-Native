// Navigate
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// icons
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

//Screen
import UserScreen from "./Screen/UserScreen";
import WelcomeScreen from "./Screen/WelcomeScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        screenOptions={{
          headerStyle: { backgroundColor: "violet" },
          headerTintColor: "white",
          drawerStyle: {
            backgroundColor: "violet",
          },
          drawerActiveBackgroundColor: "red",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "red",
        }}
      >
        <Drawer.Screen
          options={{
            drawerLabel: "User Screen",
            drawerIcon: ({ color, size, focused }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
          name="User"
          component={UserScreen}
        />
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerIcon: ({ color, size, focused }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
