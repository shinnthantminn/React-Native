import { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import uuid from "react-native-uuid";

const GoalInput = ({ show, handleModel, theme, onSubmit }) => {
  const [error, setError] = useState(false);
  const color = ["#2f89fc", "#28c7fa", "#f090d9", "#39bdc8", "#f0f696"];

  const [text, setText] = useState({
    title: "",
    goal: "",
  });

  const addGoal = () => {
    if (text.title && text.goal) {
      const data = {
        ...text,
        time: Date.now(),
        id: uuid.v4(),
        color: color[parseInt(Math.random() * 5)],
      };
      onSubmit(data);
      setText({
        title: "",
        goal: "",
      });
      handleModel();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Modal visible={show} animationType="slide">
        <View
          style={[
            style.container,
            { backgroundColor: theme ? "#000" : "#fff" },
          ]}
        >
          <View>
            {error && (
              <View style={style.ErrorAlert}>
                <Text style={{ color: theme ? "#000" : "#fff" }}>
                  Something was needed
                </Text>
                <Pressable
                  onPress={() => {
                    setError(false);
                  }}
                >
                  <FontAwesome name="times" size={20} color="white" />
                </Pressable>
              </View>
            )}
            <View style={{ marginBottom: 10 }}>
              <Text style={[style.text, { color: theme ? "#fff" : "#000" }]}>
                Goal title
              </Text>
              <TextInput
                style={[
                  style.input,
                  {
                    borderColor: theme ? "#fff" : "#000",
                    color: theme ? "#fff" : "#000",
                  },
                ]}
                placeholder="Add title"
                value={text.title}
                onChangeText={(e) => setText((pre) => ({ ...pre, title: e }))}
                placeholderTextColor={theme ? "#fff" : "#d4d4d8"}
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={[style.text, { color: theme ? "#fff" : "#000" }]}>
                Enter your goal
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={3}
                value={text.goal}
                onChangeText={(e) => setText((pre) => ({ ...pre, goal: e }))}
                style={[
                  style.input,
                  {
                    borderColor: theme ? "#fff" : "#000",
                    color: theme ? "#fff" : "#000",
                  },
                  { textAlignVertical: "top", paddingTop: 10 },
                ]}
                placeholder="Enter your goal"
                placeholderTextColor={theme ? "#fff" : "#d4d4d8"}
              />
            </View>
          </View>
          <View style={style.btnContainer}>
            <Pressable
              android_ripple={{
                color: theme ? "#ffffffaa" : "#000000aa",
                radius: 33,
              }}
              onPress={handleModel}
              style={[
                style.btn,
                { marginRight: 10, backgroundColor: "#fc5185" },
              ]}
            >
              <Text style={{ color: "#fff" }}>Cancle</Text>
            </Pressable>
            <Pressable
              onPress={addGoal}
              android_ripple={{
                color: theme ? "#ffffffaa" : "#000000aa",
                radius: 38,
              }}
              style={[style.btn, { backgroundColor: "#28c7fa" }]}
            >
              <Text style={{ color: "#fff" }}>Add goal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 6,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn: {
    paddingHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 5,
  },
  ErrorAlert: {
    backgroundColor: "#fc5185",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
