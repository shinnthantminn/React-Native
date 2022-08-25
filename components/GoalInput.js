import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import logo from "../assets/image/goal.png";

export default function GoalInput({ handleClick, visible, setModel }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText((pre) => setText(e));
  };

  const onClick = () => {
    if (text.length > 0) {
      handleClick(text);
      setText("");
      setModel();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={style.inputArea}>
        {/* <Image source={logo} style={style.image} /> */}
        <Image
          source={require("../assets/image/goal.png")}
          style={style.image}
        />
        <TextInput
          style={style.input}
          onChangeText={handleChange}
          placeholder="Your Course goal"
          value={text}
        />
        <View style={style.btnContainer}>
          <View style={style.btn}>
            <Button title="Cancel" color={"#f31282"} onPress={setModel} />
          </View>
          <View style={style.btn}>
            <Button title="Add Goal" color="#b180f0" onPress={onClick} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  inputArea: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    marginTop: 16,
    width: 100,
    marginRight: 10,
  },
});
