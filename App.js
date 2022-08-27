import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [model, setModel] = useState(false);
  const [list, setList] = useState([]);

  const handleThemeChange = () => {
    setTheme((theme) => !theme);
  };

  const handleModel = () => {
    setModel((pre) => !pre);
  };

  const onSubmit = (e) => {
    setList((pre) => [...pre, e]);
  };

  const DropList = (e) => {
    setList((pre) => pre.filter((x) => x.id !== e));
  };

  return (
    <>
      <StatusBar style={theme ? "light" : "dark"} />
      <View
        style={[style.container, { backgroundColor: theme ? "#000" : "#fff" }]}
      >
        <View style={style.header}>
          <Text style={[style.title, { color: theme ? "#fff" : "#000" }]}>
            Daily Todo
          </Text>
          <Pressable
            onPress={handleThemeChange}
            android_ripple={{
              color: theme ? "#ffffffaa" : "#000000aa",
              borderless: true,
            }}
          >
            <View
              style={[
                style.iconContainer,
                { backgroundColor: theme ? "#fff" : "#000" },
                style.elevation,
              ]}
            >
              {theme ? (
                <Feather name="sun" size={17} color="black" />
              ) : (
                <Feather name="moon" size={17} color="white" />
              )}
            </View>
          </Pressable>
        </View>
        <View style={style.listContainer}>
          <FlatList
            horizontal={false}
            numColumns={2}
            style={{
              flexDirection: "column",
            }}
            data={list}
            renderItem={(item) => (
              <GoalItem
                handleDelete={DropList}
                data={item.item}
                theme={theme}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
        <Pressable style={style.btnContainer} onPress={handleModel}>
          <View style={[style.btn, style.elevation]}>
            <AntDesign name="plus" size={24} color="black" />
          </View>
        </Pressable>
        <GoalInput
          show={model}
          handleModel={handleModel}
          theme={theme}
          onSubmit={onSubmit}
        />
      </View>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  iconContainer: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  listContainer: {
    flex: 1.2,
    marginVertical: 10,
  },
  btnContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 17,
    backgroundColor: "#c5e3f6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
  },
  elevation: {
    elevation: 2,
    shadowColor: "#52006A",
  },
});
