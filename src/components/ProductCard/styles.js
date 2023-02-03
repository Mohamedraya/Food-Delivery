import { StyleSheet } from "react-native";
import {colors} from "../../global/styles";


const styles = StyleSheet.create({

    view1: {
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        width: 210,
        padding: 10
    },

    view2: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    view3: {
        justifyContent: "space-between",
        width: 110
    },

    text1: {
        fontSize: 15,
        color: colors.grey1
    },

    view4: {
        width: 75,
        height: 65
    },

    image: {
        width: 75,
        height: 65
    }
});


export default styles;