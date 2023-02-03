import { StyleSheet } from "react-native";
import { colors } from "../../../global/styles";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20
    },
    
    view1: {
        paddingHorizontal: 10
    },

    view2: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.grey5
    },

    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.grey3
    }
});

export default styles;