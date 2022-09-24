import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const CategoryList = ({ title, color, press }) => {
  return (
    <View style={style.container}>
      <Pressable
        onPress={press}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.pressableContainer,
          pressed ? style.iosPressable : null,
        ]}
      >
        <View style={[style.innerContainer, { backgroundColor: color }]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    elevation: 4,
    backgroundColor: "white",
    margin: 16,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: "transparent",
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  pressableContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  iosPressable: {
    opacity: Platform.select({ android: 1, ios: 0.5 }),
  },
});
