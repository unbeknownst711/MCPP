import {Button, Text, View} from "react-native"
import {useState, useContext} from "react"
import { Style } from "./style"
import Counter from "./counter"

const style = new Style()

export default function Index() {
    const [count , setCount] = useState(0);
    const [name, setName] = useContext<String>("");
    const [strings, setStrings] = useState("")
    const handleIncrement = () => { setCount(count + 1) };
    const handleDecrement = () => { setCount(count-1) };
    const handleTextBox = (curName) => setName(curName);
    const changeWelcomeText = () => {
    }


    return (
        <View style = {style.docs}>
            <Counter value={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
            <View style={style.separator}/>
            <Button title="Pass Value"/>
            <View style={style.separator}/>
            <TextInput onChangeText={handleTextBox}/>
        </View>
    )

  return (
    <Counter/>
  );
}
