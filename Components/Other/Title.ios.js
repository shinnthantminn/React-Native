import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={style.title}>{children}</Text>;
};

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "bold",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 0 : 2,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 10,
    color: "white",
    maxWidth: "80%",
    width: 300, // width 300 နဲ့ screen မှာ အဆင်ပြေရင် width 300 ပြပြီးတော့ အဆင်မပြေတော့ရင်တော့ maxWidth 80% ကို တော့ 300px နဲ့ မဆန့်တဲ့ Screen တွေမှာ ယူသွားမှာ ဖြစ်ပါတယ်
  },
});
