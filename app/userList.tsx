import { Image, ScrollView, StyleSheet, View, TouchableOpacity} from "react-native";
import styles from "./style";
import userData from "./data.json";
import {useTheme, Avatar, Card, Text} from "react-native-paper";
import {Link} from "expo-router";
import Animated, {FadeInLeft} from 'react-native-reanimated';
import { useState } from 'react';


export default function Index({navigation}) {
    const theme = useTheme();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {userData.map((user , index)=>(
            <Animated.View key={index} entering={FadeInLeft.delay(index*300)} style={StyleSheet.flatten([styles.card,{backgroundColor: theme.colors.primary}])}>
                    <TouchableOpacity onPress={()=>navigation.navigate("profile", {user:user})} style={StyleSheet.flatten([styles.card,{backgroundColor: theme.colors.primary}])}>
                        <Avatar.Image source={{uri: user.photo_url}} style={styles.avatar}/>
                        <View>
                            <Text variant="titleMedium">{user.name}</Text>
                            <Text variant="bodyMedium">{user.email}</Text>
                        </View>

                    </TouchableOpacity>
            </Animated.View>
            ))}
        </ScrollView>
    );

}
