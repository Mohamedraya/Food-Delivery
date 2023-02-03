import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";



const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    mainView: {
        backgroundColor: colors.buttons,
    },
    userdataView: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingVertical: 10
    },

    avatar: {
        borderWidth: 4,
        borderColor: "white",
        
    },

    txtView: {
        marginLeft: 10
    },

    nametxt: {
        color: colors.cardbackground,
        fontWeight: "bold",
        fontSize: 18
    },

    mailtxt: {
        color: colors.cardbackground,
        fontSize: 14
    },

    favorateContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },

    favoView1: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },

    prefreView: {
        borderTopWidth: 1,
        borderTopColor: colors.grey5,
    },

    prefretxt: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },

    switchView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 7
    },

    darktxt: {
        fontSize: 15,
        color: colors.grey2,
        fontWeight: "bold"
    }
});


export default styles;