import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./Screen/GameStartScreen";
import GuessingNumScreen from "./Screen/GuessingNumScreen";
import GameOverScreen from "./Screen/GameOverScreen";
import { useCallback, useEffect, useState } from "react";
import { Color } from "./helper/StyleVariable";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [numberChange, setNumberChange] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessingNum, setGuessingNum] = useState(0);

  const [fontsLoaded] = useFonts({
    bold: require("./assets/Font/IBMPlexSansThai-Bold.ttf"),
    medium: require("./assets/Font/IBMPlexSansThai-Medium.ttf"),
  });

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
    })();
  }, []);

  const layoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // simple router
  const routeChange = (number) => {
    setNumberChange(number);
    setGameOver(false);
  };

  const onResetGame = () => {
    setNumberChange(null);
    setGuessingNum(0);
  };

  const GameOverFunction = () => {
    setGameOver(true);
  };

  const count = (e) => {
    setGuessingNum(e);
  };

  let screen = <GameStartScreen router={routeChange} />;

  if (numberChange) {
    screen = (
      <GuessingNumScreen
        onCount={count}
        numberChange={numberChange}
        onGameOver={GameOverFunction}
      />
    );
  }

  if (gameOver && numberChange) {
    screen = (
      <GameOverScreen
        guessNumber={guessingNum}
        userNumber={numberChange}
        onGameRestart={onResetGame}
      />
    );
  }

  return (
    <LinearGradient
      onLayout={layoutView}
      colors={[Color.primary300, Color.secoundry100]}
      end={{ x: 0.5, y: 1.0 }}
      start={{ x: 0.5, y: 0.0 }}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/Image/background.jpg")}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
