import { useState, useContext } from "react";

//loading
import LoadingOverlay from "../Components/Ui/LoadingOverlay";

// auth
import Auth from "../Components/Auth/Auth";
import { loginUser } from "../API/http";
import { Alert } from "react-native";

// context API
import { AuthContext } from "../store/AuthContextProvider";

const SignInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { successAuthications } = useContext(AuthContext);

  const signIn = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await loginUser(email, password);
      console.log(token);
      successAuthications(token);
    } catch (e) {
      Alert.alert(
        "Authications Failed",
        "Login Fail creditial error please try again"
      );
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message={"User Loading..."} />;
  } else return <Auth isSignIn handleSubmit={signIn} />;
};

export default SignInScreen;
