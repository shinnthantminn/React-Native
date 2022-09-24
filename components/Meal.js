import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";

const Meal = ({
  data: { id, title, imageUrl, duration, affordability, complexity },
}) => {
  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate("Detail", { mealID: id });
  };

  return (
    <View style={style.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <View style={style.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>

          <MealItem
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Meal;

const style = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "white",
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 12,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 10,
    fontSize: 12,
  },
});
