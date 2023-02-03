import { StyleSheet } from "react-native";
import {colors,parameters} from "../../global/styles";


const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.buttons,
        flexDirection: "row",
        height: parameters.headerHeight
    },

    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 50
    }
});


export default styles;