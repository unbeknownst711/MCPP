import Home from "./home";
import UserList from "./userList";
import Profile from "./profile";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default function Index(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="userList" component={UserList}/>
                <Stack.Screen name="profile" component={Profile}/>
            </Stack.Navigator>
    )
}