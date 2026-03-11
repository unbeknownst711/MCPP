import { Text, View, TextInput } from "react-native";
import {useState} from "react"
import styles from "./style"
import {CustomTextInput, CustomNimInput} from "./input"

export default function Index() {
    const [name, setName] = useState("")
    const [nim, setNim] = useState("");


    const handleChangeName = (val : string) => {
        setName(val)
    }
    const handleChangeNim = (val : string) => {
        setNim(val)
    }

    return (
        <View style={styles.container}>
            <Text>{name} - {nim}</Text>
            <CustomTextInput input={name} onChange={handleChangeName} />
            <CustomNimInput input={nim} onChange={handleChangeNim} />
        </View>
    );
}