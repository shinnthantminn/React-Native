import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Title from "../Components/Other/Title";
import { Color } from "../helper/StyleVariable";

const GameOverScreen = ({ guessNumber, userNumber, onGameRestart }) => {
  return (
    <View style={style.container}>
      <Title>Game Over</Title>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../assets/Image/success.png")}
        />
      </View>
      <Text style={style.content}>
        Your device needed <Text style={style.hightlight}>{guessNumber}</Text>{" "}
        Time for Guess your chosen
        <Text style={style.hightlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 150,
    overflow: "hidden",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    fontSize: 20,
    fontFamily: "medium",
    textAlign: "center",
    marginVertical: 20,
  },
  hightlight: {
    color: Color.primary300,
    fontFamily: "bold",
    fontSize: 23,
  },
});
