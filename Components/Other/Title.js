import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={style.title}>{children}</Text>;
};

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily:"bold",
    textAlign: "center",
    borderWidth: 2,
    padding: 10,
    color: "white",
    borderColor: "white",
  },
});
