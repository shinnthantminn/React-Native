import MealList from "../components/ MealList";
import { useContext } from "react";
import { FavoriateContext } from "../store/context/FavoriateContext";
import { MEALS } from "../data/dummyData";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const FavScreen = ({ navigation }) => {
  // const { ids } = useContext(FavoriateContext);
  const { ids } = useSelector((state) => state.favoriateMeals);
  const finder = MEALS.filter((i) => ids.includes(i.id));

  if (finder.length > 0) {
    return <MealList dummyData={finder} />;
  } else {
    return (
      <View style={style.container}>
        <Text style={style.title}>You haven't favorite meals yet.</Text>
      </View>
    );
  }
};

export default FavScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
