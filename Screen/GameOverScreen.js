import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Title from "../Components/Other/Title";
import { Color } from "../helper/StyleVariable";

const GameOverScreen = ({ guessNumber, userNumber, onGameRestart }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={style.container}>
      <Title>Game Over</Title>
      <View style={[style.imageContainer, imageStyle]}>
        <Image
          style={style.image}
          source={require("../assets/Image/success.png")}
        />
      </View>
      <Text style={style.content}>
        Your device needed <Text style={style.hightlight}>{guessNumber}</Text>{" "}
        Time for Guess your choseheightn
        <Text style={style.hightlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameRestart}>Start New Game</PrimaryButton>
    </View>
  );
};
34;

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
