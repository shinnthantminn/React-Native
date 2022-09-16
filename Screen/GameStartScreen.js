import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Title from "../Components/Other/Title";
import { Color } from "../helper/StyleVariable";
import Card from "../Components/Other/Card";

const GameStartScreen = ({ router }) => {
  const [enterText, setEnterText] = useState("");
  const { height } = useWindowDimensions();

  const confirm = () => {
    const confirmText = parseInt(enterText);

    if (isNaN(confirmText) || confirmText <= 0 || confirmText > 99) {
      Alert.alert(
        "Please enter a valid number",
        "Number was should be between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: reset }]
      );
      return;
    }
    router(confirmText);
  };

  const reset = () => {
    setEnterText("");
  };

  console.log(height);

  return (
    <ScrollView alwaysBounceVertical={height < 420 ? true : false}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[styles.rootContainer, { marginTop: height < 420 ? 40 : 100 }]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.intruction}>Enter a number</Text>
            <TextInput
              value={enterText}
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={(e) => setEnterText(e)}
              autoCapitalize={false}
              autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={reset}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default GameStartScreen;

// const deviceHeight = Dimensions.get("window").height; Dyanmic မရပါဘူး

// console.log(deviceHeight);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  intruction: {
    color: Color.secoundry100,
    fontSize: 21,
    fontFamily: "medium",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Color.secoundry100,
    marginVertical: 8,
    color: Color.secoundry100,
    fontFamily: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
