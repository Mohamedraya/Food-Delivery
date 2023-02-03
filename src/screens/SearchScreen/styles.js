import { StyleSheet,Dimensions } from "react-native";
import { colors } from "../../global/styles";


const SCREEN_WIDTH = Dimensions.get("window").width;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 40
    },

    listView: {
        marginTop: 10
    },

    imageView: {
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH*0.4475,
        height: SCREEN_WIDTH*0.4475,
        marginLeft: SCREEN_WIDTH*0.035,
        marginBottom: SCREEN_WIDTH*0.035,
        borderRadius: 10
    },

    image: {
        width: SCREEN_WIDTH*0.4475,
        height: SCREEN_WIDTH*0.4475,
        borderRadius: 10
    },

    listHeader: {
        fontSize: 16,
        color: colors.grey2,
        marginVertical: 10,
        marginLeft: 12
    },

    textView: {
        justifyContent: "center",
        alignItems: 'center',
        width: SCREEN_WIDTH*0.4475,
        height: SCREEN_WIDTH*0.4475,
        backgroundColor: "rgba(52,52,52,0.3)"
    },

    txt: {
        color: colors.cardbackground
    }
});

export default styles;