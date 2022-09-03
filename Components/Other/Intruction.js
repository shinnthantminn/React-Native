import { Text, StyleSheet } from "react-native";
import { Color } from "../../helper/StyleVariable";

const Intruction = ({ children, style }) => {
  return <Text style={[styles.intruction, style]}>{children}</Text>;
};

export default Intruction;

const styles = StyleSheet.create({
  intruction: {
    color: Color.secoundry100,
    fontSize: 21,
    fontFamily:"bold",
  },
});
