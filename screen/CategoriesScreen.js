import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryList from "../components/CategoryList";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  const nav = useNavigation("");

  const RenderItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("Overview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryList
        title={itemData.item.title}
        // press={() => nav.navigate("InnerCategory")}
        press={handlePress}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={RenderItem}
    />
  );
};

export default CategoriesScreen;
