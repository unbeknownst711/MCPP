import { Image, ScrollView, Text, View} from "react-native";
import {Stack} from "expo-router";
import styles from "./style";
import userData from "./data.json";
import {useTheme} from "react-native-paper";


export default function Index() {
    const theme = useTheme();
    return (
    <>
        <Text>{"aa"}</Text>
        <Stack.Screen options={{title: "User List"}} />

        <ScrollView>
            {userData.map((user , index)=>(
                <View style={[styles.container,{backgroundColor: theme.colors.background}]} key={index}>
                    <View style={[styles.card,{backgroundColor: theme.colors.primary}]}>
                        <Image source={{uri: user.photo_url}} style={styles.avatar}/>
                        <View>
                            <Text>{user.name}</Text>
                            <Text>{user.email}</Text>
                        </View>
                    </View>
                </View>


            ))}
        </ScrollView>
    </>
    );

}
