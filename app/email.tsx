import {Link} from "expo-router";
import {Button, Text, View} from "react-native";
import Style from "./style"

export default function email(){
    return(
        <View style={Style.container}>
            <Text>Email list page</Text>
            <Link href="/home" push asChild>
                <Button title="Home"/>
            </Link>
        </View>
    );
}