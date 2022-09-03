import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import GuessNumber from "../Components/Other/GuessNumber";
import Title from "../Components/Other/Title";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Card from "../Components/Other/Card";
import Intruction from "../Components/Other/Intruction";
import { Ionicons } from "@expo/vector-icons";
import RoundList from "../Components/Other/RoundList";

const generateRandomNumber = (min, max, extend) => {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;

  if (rnNum === extend) {
    return generateRandomNumber(min, max, extend);
  } else {
    return rnNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GuessingNumScreen = ({ numberChange, onGameOver, onCount }) => {
  const initialNumber = generateRandomNumber(1, 100, numberChange);
  const [guessNumber, setGuessNumber] = useState(initialNumber);
  const [roundNumber, setRoundNumber] = useState([initialNumber]);

  useEffect(() => {
    if (guessNumber === numberChange) {
      onGameOver();
    }
  }, [guessNumber, numberChange, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const GuessNextNumber = (direction) => {
    if (
      (direction === "lower" && guessNumber < numberChange) ||
      (direction === "greater" && guessNumber > numberChange)
    ) {
      Alert.alert("Don't Lie", "လီးလား...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") maxBoundary = guessNumber;
    else minBoundary = guessNumber + 1;
    const newGuessNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      guessNumber
    );
    setGuessNumber(newGuessNumber);
    setRoundNumber((pre) => [newGuessNumber, ...pre]);
    onCount(roundNumber.length);
  };

  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <GuessNumber number={guessNumber} />
      <Card>
        <Intruction style={style.IntructionText}>Highter or Lower</Intruction>
        <View style={style.btnContainer}>
          <View style={style.innerBtnContainer}>
            <PrimaryButton onPress={GuessNextNumber.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={style.innerBtnContainer}>
            <PrimaryButton onPress={GuessNextNumber.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={style.listContainer}>
        <FlatList
          data={roundNumber}
          renderItem={(data) => (
            <RoundList
              data={data.item}
              count={roundNumber.length - data.index}
            />
          )}
          keyExtractor={(data, index) => index}
        />
      </View>
    </View>
  );
};

export default GuessingNumScreen;

const style = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1,
    padding: 24,
  },
  btnContainer: {
    flexDirection: "row",
  },
  innerBtnContainer: {
    flex: 1,
  },
  IntructionText: {
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 16,
  },
});
