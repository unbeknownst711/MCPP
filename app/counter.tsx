import {Button, Text, View} from "react-native"
import {Style} from "./style"

interface iCounter{
    handleIncrement: () => void;
    handleDecrement: () => void;
    value : number;
}

const style = new Style();

const Counter = ({handleIncrement, handleDecrement, value} : iCounter) =>{
    return (
    <View>
        <Text style={style.textCenter}>{value}</Text>
        <View style={style.separator}/>
        <Button title="Increment" onPress={handleIncrement} style={style.card}/>
        <View style={style.separator}/>
        <Button title="Decrement" onPress={handleDecrement}/>
    </View>
    );

};

export default Counter;