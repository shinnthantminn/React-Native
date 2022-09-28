import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealList from "../components/ MealList";

const InnerCategories = ({ route, navigation }) => {
  const CateId = route.params.categoryId;

  const dummyData = MEALS.filter((i) => i.categoryIds.includes(CateId));
  const Category = CATEGORIES.find((i) => i.id === CateId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: Category.title,
    });
  }, [CateId]);

  return <MealList dummyData={dummyData} />;
};

export default InnerCategories;
