import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const InnerGoal = ({ data, show, handlePress, dropItem }) => {
  return (
    <Modal visible={show} animationType="slide">
      <View style={{ backgroundColor: data.color, flex: 1 }}>
        <ScrollView>
          <View style={style.container}>
            <View style={style.tool}>
              <Pressable onPress={handlePress}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </Pressable>
              <Pressable onPress={dropItem.bind(this, data.id)}>
                <Feather name="trash" size={24} color="white" />
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: 26, marginTop: 10, color: "white" }}>
                {data.title}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, marginTop: 10, color: "white" }}>
                {data.goal}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default InnerGoal;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  tool: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
