import { StyleSheet } from "react-native";
import { colors , parameters } from "../../global/styles";



const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    drawericon: {
        marginLeft: 15
    },


    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
    },

    cartView: {
        justifyContent: "center",
        alignItems:  "center",
        marginRight: 15,
    }
});


export default styles;