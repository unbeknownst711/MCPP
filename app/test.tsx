import { Text, View, Image, ScrollView } from "react-native";
import { Style } from "./style"

const images = {
    a: require('./pic/a.webp'),
    b: require('./pic/b.webp'),
    c: require('./pic/c.webp'),
    d: require('./pic/d.webp'),
    e: require('./pic/e.webp'),
    f: require('./pic/f.webp'),
    g: require('./pic/g.webp')
};
const style = new Style()

export function Test(props){
    return (
        <View style={style.card}>
            <Text style={style.textCenter}>{props.text}</Text>
            <Image source={images[props.img]} />
        </View>
      );
}

