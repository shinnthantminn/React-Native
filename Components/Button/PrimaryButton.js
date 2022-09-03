import { View, Text, StyleSheet, Pressable } from "react-native";
import { Color } from "../../helper/StyleVariable";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // ios
        // style={({ pressed }) =>
        //   pressed
        //     ? [styles.buttonContainer, styles.pressed]
        //     : styles.buttonContainer
        // }
        style={styles.buttonContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonContainer: {
    paddingVertical: 8,
    backgroundColor: Color.primary200,
    paddingHorizontal: 20,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "medium",
  },
  // for ios
  pressed: {
    opacity: 0.75,
  },
});

//custom button ကို pressiable နဲ့ ripple ပါရအောင်လုပ်နည်းလေးပါ
