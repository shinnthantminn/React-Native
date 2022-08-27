import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import InnerGoal from "./InnerGoal";

const GoalItem = ({ data, theme, handleDelete }) => {
  const [showInnerTodo, setInnerTodo] = useState(false);

  const handlePress = () => {
    setInnerTodo((pre) => !pre);
  };

  const DeleteItem = (e) => {
    handleDelete(e);
    setInnerTodo((pre) => !pre);
  };

  return (
    <>
      <View style={style.container}>
        <Pressable onPress={handlePress}>
          <View
            style={[
              style.innerContainer,
              style.elevation,
              { backgroundColor: data.color },
            ]}
          >
            <View style={{ marginBottom: 5 }}>
              <Text
                style={[
                  style.text,
                  {
                    fontSize: 19,
                    textTransform: "capitalize",
                    color: theme ? "#fff" : "#000",
                  },
                ]}
              >
                {data.title.length > 10
                  ? `${data.title.slice(0, 10)} ...`
                  : data.title}
              </Text>
            </View>
            <View>
              <Text style={[style.text, { color: theme ? "#fff" : "#000" }]}>
                {data.goal.length > 10
                  ? `${data.goal.slice(0, 10)}...`
                  : data.goal}
              </Text>
            </View>
            <View
              style={{
                marginTop: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={14}
                style={{ marginRight: 10 }}
                color={theme ? "#fff" : "#000"}
              />
              <Text style={[style.text, { color: theme ? "#fff" : "#000" }]}>
                {new Date(data.time).toDateString()}
              </Text>
            </View>
          </View>
        </Pressable>
        <InnerGoal
          dropItem={DeleteItem}
          data={data}
          show={showInnerTodo}
          handlePress={handlePress}
        />
      </View>
    </>
  );
};

export default GoalItem;

const style = StyleSheet.create({
  container: {
    width: "50%",
    padding: 5,
  },
  innerContainer: {
    padding: 10,
    borderRadius: 10,
  },
  text: {},
  elevation: {
    elevation: 7,
    shadowColor: "#52006A",
  },
});
