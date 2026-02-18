import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    docs:{
        margin: 5,
        alignItems: "center"
    },

    textbox:{
        backgroundColor: "#a0a0a0",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5
    },
    card: {
        backgroundColor: "#d0d0d0",
        padding: 4,
        margin: 3,
        borderColor: "white",
        borderRadius: 6,
        borderWidth: 2,
        minWidth: 270,
        minHeight: 100,
        alignItems:"center"
    },
    textCenter:{
        textAlign: "center"
    },
    separator:{
        minHeight: 5
    }


})

export function Style(){
    return styles;
}