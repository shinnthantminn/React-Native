import { View, Text, StyleSheet, Pressable } from "react-native";

const List = ({ data, onPress }) => {
  return (
    <>
      {data.map((i, index) => (
        <Pressable onPress={onPress.bind(this, i)} key={index}>
          <View style={style.container}>
            <Text style={style.innerText}>{i}</Text>
          </View>
        </Pressable>
      ))}
    </>
  );
};

export default List;

const style = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 4,
    backgroundColor: "#FFAE6D",
    padding: 10,
    borderRadius: 10,
  },
  innerText: {
    textAlign: "center",
  },
});
