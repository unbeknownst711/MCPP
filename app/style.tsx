import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    docs:{
        margin: "5px",
        alignItems: "center"
    },

    textbox:{
        backgroundColor: "#a0a0a0",
        borderColor: "black",
        borderWidth: "1px",
        borderRadius: "5px"
    },
    card: {
        backgroundColor: "#d0d0d0",
        padding: "4px",
        margin: "3px",
        borderColor: "white",
        borderRadius: "6px",
        borderWidth: "2px",
        minWidth: "270px",
        minHeight: "100px",
        alignItems:"center"
    },
    textCenter:{
        textAlign: "center"
    }


})

export function Style(){
    return styles;
}