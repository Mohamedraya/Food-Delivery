import { StyleSheet } from "react-native";
import {colors} from "../../../global/styles";


const styles = StyleSheet.create({

    container: {
        flex: 1
    },
   
    signView: {
      marginLeft: 20,
      marginTop: 3
    },

    txtView: {
        alignItems: "center",
        marginTop: 3
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    inputContainerView: {
        marginTop: 12
    },

    textInput1 : {
        borderWidth: 1,
        borderColor: "#86939e",
        borderRadius: 12,
        marginHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 20
    },

    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        borderRadius: 12,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 20
    },

    passInput: {
        width: "80%"
    },

    buttonView: {
        margin: 20
    },

    forgotView: {
        alignItems: 'center',
    },

    orView: {
        alignItems: "center",
        marginTop: 5,
    },

    orText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    socialIcon: {
        borderRadius: 12,
        height: 50
    },

    socialView: {
        marginHorizontal: 12
    },

    foodView: {
        marginLeft: 20,
        marginTop: 6
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },

    createButtonView: {
        alignItems: "flex-end",
        marginRight: 20
    }

});

export default styles;