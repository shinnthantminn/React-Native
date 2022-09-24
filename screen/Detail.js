import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { MEALS } from "../data/dummyData";
import IconButton from "../components/IconButton";

const Detail = ({ route, navigation }) => {
  const id = route.params.mealID;

  const data = MEALS.find((i) => i.id === id);

  const handlePress = () => {
    navigation.popToTop();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="md-exit-outline"
          onPress={handlePress}
          color="white"
          size={24}
        />
      ),
    });
  }, [id, handlePress]);

  const handleSearch = (i) => {
    console.log(i);
    Linking.openURL(`https://google.com/search?q=${i}`);
  };

  return (
    <ScrollView alwaysBounceVertical={false}>
      <Image style={style.image} source={{ uri: data.imageUrl }} />
      <Text style={style.title}>{data.title}</Text>
      <MealItem
        duration={data.duration}
        affordability={data.affordability}
        complexity={data.complexity}
        textStyle={{ color: "white" }}
      />
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={data.ingredients} onPress={handleSearch} />
          <Subtitle>Steps</Subtitle>
          <List data={data.steps} onPress={handleSearch} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  innerContainer: {
    width: "80%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    margin: 16,
  },
});
