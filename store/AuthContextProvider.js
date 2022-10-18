import { createContext, useEffect, useState } from "react";

// local storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthication: false,
  successAuthications: () => {},
  logOut: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      const storeToken = await AsyncStorage.getItem("token");
      if (storeToken) {
        setToken(storeToken);
      }
    })();
  }, []);

  const successAuthications = (token) => {
    setToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setToken(null);
    AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        successAuthications,
        isAuthication: !!token,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
