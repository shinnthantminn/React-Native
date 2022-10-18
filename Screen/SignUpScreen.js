// Auth
import Auth from "../Components/Auth/Auth";
import { createUser } from "../API/http";
import { useState, useContext } from "react";

// loading and Error
import LoadingOverlay from "../Components/Ui/LoadingOverlay";
import { Alert } from "react-native";

// context API
import { AuthContext } from "../store/AuthContextProvider";

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { successAuthications } = useContext(AuthContext);

  const signUp = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      successAuthications(token);
    } catch (e) {
      Alert.alert(
        "Authications Error",
        "Sign In Failed , Please check your input , internet connection and  try again"
      );
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message={"Creating User..."} />;
  } else return <Auth handleSubmit={signUp} />;
};

export default SignUpScreen;
