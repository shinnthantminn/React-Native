import { View, Text } from "react-native";
import { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";
import { AuthContext } from "../store/AuthContextProvider";

// context

const WelcomeScreen = () => {
  const [data, setData] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios(
      `https://react-native-80c0c-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=${token}`
    ).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-white text-2xl font-bold">Welcome!</Text>
      <Text className="text-white text-xl">
        Your authenticated successfully!!!
      </Text>
      <Text className="text-white">{data}</Text>
    </View>
  );
};

export default WelcomeScreen;
