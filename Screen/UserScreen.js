import { Button, StyleSheet, Text, View } from "react-native";

const UserScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.toggleDrawer();
    // navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text>
        This is <Text style={styles.title}>UserScreen</Text>
      </Text>
      <Button onPress={handlePress} title="Toggle" />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "red",
  },
});
