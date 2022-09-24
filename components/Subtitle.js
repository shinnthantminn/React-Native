import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const style = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#FFAE6D",
    borderBottomWidth: 2,
    marginHorizontal: 26,
    marginVertical: 4,
    padding: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#FFAE6D",
    fontSize: 18,
  },
});
