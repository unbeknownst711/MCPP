import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    docs:{
        margin: 5,
        alignItems: "center"
    },
    container:{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        display: "flex"
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
        borderColor: "black",
        borderRadius: 6,
        borderWidth: 2,
        minWidth: 270,
        minHeight: 100,
        alignItems:"center",
        flexDirection: "row",
        gap: 8
    },
    textCenter:{
        textAlign: "center"
    },
    separator:{
        minHeight: 5
    },
    avatar:{
        width: 75,
        height: 75,
        borderRadius: 100
    }


})

export default styles;