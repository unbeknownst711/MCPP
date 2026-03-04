import {Button, Text, View} from "react-native";
import Style from "./style"

export default function home({navigation}){
    return(
        <View style={Style.middle}>
        <Text>Nav List</Text>

        <Button title="User List" onPress={()=>navigation.navigate("userList")}/>

        </View>
    );
}