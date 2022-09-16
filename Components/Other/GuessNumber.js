import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../helper/StyleVariable";

const GuessNumber = ({ number }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{number}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

export default GuessNumber;

const style = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24, //******************************* */
    borderRadius: 8,
    borderColor: Color.secoundry100,
  },
  text: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "medium",
    color: Color.secoundry100,
  },
});
