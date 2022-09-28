import { StyleSheet, Text, View, FlatList } from "react-native";
import Meal from "./Meal";

const MealList = ({ dummyData }) => {
  return (
    <View style={style.container}>
      <FlatList
        alwaysBounceVertical={false}
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meal data={item} title={item.title} imageUrl={item.imageUrl} />
        )}
      />
    </View>
  );
};

export default MealList;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
