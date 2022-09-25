import { Button, StyleSheet, Text, View } from "react-native";

const FavScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FavScreen</Text>
      <Button
        title="click me"
        onPress={() => navigation.navigate("Overview", { categoryId: "c1" })}
      />
    </View>
  );
};

export default FavScreen;

const styles = StyleSheet.create({});
