import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [list, setList] = useState([]);

  const [modelIsShow, setModelIsShow] = useState(false);

  const hadleClick = (e) => {
    setList((pre) => [...pre, { text: e, id: Math.random() }]);
  };

  const dropGoal = (id) => {
    setList((pre) => pre.filter((goal) => goal.id !== id));
  };

  const toggleModel = () => {
    setModelIsShow((pre) => !pre);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={style.container}>
        <Button title="Add Goal" color={"#5065ec"} onPress={toggleModel} />
        <GoalInput
          handleClick={hadleClick}
          visible={modelIsShow}
          setModel={toggleModel}
        />
        <View style={style.goalContainer}>
          {/* <ScrollView> */}
          {/* {list.map((goal, inx) => (
          <Text style={style.goalItem} key={inx}>
            {goal}
          </Text>
        ))} => ios မှာ Text ui က BorderRadius မရပါဘူး ဒါကြောင့်တစ်ခြား Element ကို warp ပေးရပါတယ်  */}
          {/* {list.map((goal, inx) => (
            
          ))} */}
          {/* </ScrollView> */}

          <FlatList
            data={list}
            renderItem={(itemData) => {
              //loop ထည်းကလို ပဲ item တစ်ခု ခြင်စီနဲ့ Index ဆိုပြီ ပြန်ပေးပါတယ်
              console.log(itemData);
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  drop={dropGoal}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  goalContainer: {
    flex: 5,
  },
});
