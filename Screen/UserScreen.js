import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is the <Text style={styles.text}>User Screen</Text>
      </Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
  },
});
