import { StyleSheet } from "react-native";
import {colors} from "../../global/styles";



const styles = StyleSheet.create({

    container: {
        height: 150
    },

    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },

    view2: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.cardbackground
    },

    view4: {
        justifyContent: "center",
        alignItems: 'center'
    }

});


export default styles;