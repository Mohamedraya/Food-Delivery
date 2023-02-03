import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";


const styles = StyleSheet.create({

    view1: {
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        padding: 10
    },

    view2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    view3: {
        flex: 6,
        justifyContent: "space-between"
    },

    view4: {
        width: 80,
        height: 80
    },

    text1: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.grey1
    },

    text2: {
        fontSize: 15,
        color: colors.grey3,
        marginRight: 2
    },

    text3: {
        fontSize: 15,
        color: colors.black
    },

    image: {
        //flex: 1
        width: 80,
        height: 80
        
    }

});


export default styles;