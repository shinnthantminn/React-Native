import { View, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../helper/StyleVariable";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: Color.primary100,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
});
