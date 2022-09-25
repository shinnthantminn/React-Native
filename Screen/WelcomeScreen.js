import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is <Text style={styles.title}>WelcomeScreen</Text>
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "red",
  },
});
