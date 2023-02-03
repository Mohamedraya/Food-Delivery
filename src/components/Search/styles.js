import { StyleSheet } from "react-native";
import {colors} from "../../global/styles";



const styles = StyleSheet.create({


    masterView: {
        alignItems: "center"
    },

    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#86939e",
        paddingHorizontal: 10
    },

    input: {
        width: "90%"
    },

    searchArea: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
    },

    searchIcon: {
        fontSize: 24,
        color: colors.grey2,
        padding: 5
    },

    view1: {
       height: 70,
       justifyContent: "center",
       paddingHorizontal: 10
    },

    view2: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },

    listtxt: {
       fontSize: 15, 
       color: colors.grey2, 
    },

    icon1: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2
    },

    icon2: {
        color: colors.grey3,
        marginRight: 10
    },

    modal: {
        flex: 1
    }
});


export default styles;