import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../helper/StyleVariable";

const RoundList = ({ data, count }) => {
  console.log(data);
  return (
    <View style={style.container}>
      <Text style={style.text}># {count}</Text>
      <Text style={style.text}>Opponent's Guess {data}</Text>
    </View>
  );
};

export default RoundList;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Color.secoundry100,
    borderRadius: 100,
    marginBottom: 10,
    borderWidth: 2,
    elevation: 8,
    width: "100%",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
  },
  text: {
    fontFamily: "medium",
  },
});
