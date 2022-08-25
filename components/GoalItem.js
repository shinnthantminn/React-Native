import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ text, id, drop }) {
  //   const handleDelete = () => {
  //     drop(id);
  //   };

  return (
    <View style={style.goalItem}>
      <Pressable
        onPress={drop.bind(this, id)}
        android_ripple={{ color: "#dddddd", borderless: true }}
        // style={(pre) => pre.pressed && style.pressStyle}
      >
        <Text style={style.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

// bind ကို function မှာ အသုံပြုပုံ

const style = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "#fff",
    padding: 10,
  },
  pressStyle: {
    opacity: 0.5,
    backgroundColor: "#fff",
  },
});
