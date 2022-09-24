import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import Meal from "../components/Meal";
import { MEALS, CATEGORIES } from "../data/dummyData";

const InnerCategories = ({ route, navigation }) => {
  const CateId = route.params.categoryId;

  const dummyData = MEALS.filter((i) => i.categoryIds.includes(CateId));
  const Category = CATEGORIES.find((i) => i.id === CateId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: Category.title,
    });
  }, [CateId]);

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

export default InnerCategories;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
