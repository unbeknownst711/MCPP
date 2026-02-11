import { Text, View, Image, ScrollView, TextInput } from "react-native";
import { Test } from "./test";
import { Style } from "./style"

const style = new Style()

export default function Index() {
  return (
    <ScrollView >
        <TextInput style={style.textbox} />
        <View style = {style.docs}>
            <Test text="HanMok" img="a"/>
            <Test text="Zeba" img="b"/>
            <Test text="MeaTaka" img="c"/>
            <Test text="Gamlimloi" img="d"/>
            <Test text="Sleb" img="e"/>
            <Test text="Crutel" img="f"/>
            <Test text="Jukut" img="g"/>
        </View>
    </ScrollView>
  );
}
