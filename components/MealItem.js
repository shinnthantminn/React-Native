import { View, Text, StyleSheet } from "react-native";

const MealItem = ({
  duration,
  affordability,
  complexity,
  outerStyle,
  textStyle,
}) => {
  return (
    <View style={[style.detail, outerStyle]}>
      <Text style={[style.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[style.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
      <Text style={[style.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealItem;

const style = StyleSheet.create({
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
