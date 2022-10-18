import { Text, View } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// screen
import WelcomeScreen from "./Screen/WelcomeScreen";
import SignInScreen from "./Screen/SignInScreen";
import SignUpScreen from "./Screen/SignUpScreen";

// Context API
import AuthContextProvider, { AuthContext } from "./store/AuthContextProvider";
import { useContext } from "react";

// Icons
import IconButton from "./Components/Ui/IconButton";

// AuthStack
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const Authenticated = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              name="exit"
              size={24}
              onPress={logoutUser}
              color={tintColor}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const { isAuthication } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuthication && <AuthStack />}
      {isAuthication && <Authenticated />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthContextProvider>
      <Navigator />
    </AuthContextProvider>
  );
};

export default App;
