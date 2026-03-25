import {Link, useLocalSearchParams} from "expo-router";
import {Button,View,TouchableOpacity} from "react-native";
import {useTheme, Avatar, Card, Text} from "react-native-paper";
import Style from "./style";
import Animated, {FadeInUp} from 'react-native-reanimated';

export default function Profile({navigation,route}){
    const {user} = route.params
    return(
        <Animated.View style={Style.middle} entering={FadeInUp}>
        <Avatar.Image source={{uri: user.photo_url}} style={Style.avatar}/>
        <Text>{user.name}&apos;s Profile</Text>
        <Text>{user.email}</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("userList")}>
                <Text style={Style.linkText}>User List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("home")}>
                <Text style={Style.linkText}>Home</Text>
            </TouchableOpacity>
        </Animated.View>
    )

}