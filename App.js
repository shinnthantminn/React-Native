// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tap = createBottomTabNavigator();

//Screen
import UserScreen from "./Screen/UserScreen";
import WelcomeScreen from "./Screen/WelcomeScreen";

//icon
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
          // tabBarActiveBackgroundColor: "red",
          tabBarActiveTintColor: "red",
        }}
      >
        <Tap.Screen
          name="User"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
          component={UserScreen}
        />
        <Tap.Screen
          name="Welcome"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          component={WelcomeScreen}
        />
      </Tap.Navigator>
    </NavigationContainer>
  );
}
