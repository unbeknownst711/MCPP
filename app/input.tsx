import { Text, View, TextInput } from "react-native";
import styles from "./style"

interface CustomProps {
    input: string;
    onChange: (val: string) => void;
}

export function CustomTextInput({input, onChange} : CustomProps) {
    return (
        <View>
            <Text>Name</Text>
            <TextInput placeholder="input your name" style={styles.textbox} onChangeText={onChange} />
        </View>
    );
}

export function CustomNimInput({input, onChange} : CustomProps) {
    return (
        <View>
            <Text>Nim</Text>
            <TextInput placeholder="input your nim" style={styles.textbox} onChangeText={onChange} keyboardType="numeric" />
        </View>
    );
}