import { Text, View, Image, ScrollView, TextInput } from "react-native";
import { Test } from "./test";
import { Style } from "./style"

const style = new Style()

export default function W2() {
  return (
    <ScrollView >
        <TextInput style={style.textbox} />
        <View style = {style.docs}>

        </View>
    </ScrollView>
  );
}
