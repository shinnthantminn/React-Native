import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../helper/StyleVariable";

const GuessNumber = ({ number }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{number}</Text>
    </View>
  );
};

export default GuessNumber;

const style = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 20,
    margin: 24, //******************************* */
    borderRadius: 8,
    borderColor: Color.secoundry100,
  },
  text: {
    fontSize: 34,
    fontFamily:"medium",
    color: Color.secoundry100,
  },
});
