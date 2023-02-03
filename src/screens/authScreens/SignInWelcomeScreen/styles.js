import {StyleSheet} from "react-native";
import {colors,parameters} from "../../../global/styles";


const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    textView: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25,
    },

    text: {
        fontSize: 25,
        color: colors.buttons,
        fontWeight: "bold"
    },

    swiperView: {
       flex: 4,
    },

    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },

    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },

    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },

    image: {
        width: "100%",
        height: "100%"
    },

    buttonsView: {
        flex: 4,
        justifyContent: "center"
    },

    buttonView: {
        margin: 20
    },

    
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },

});


export default styles;