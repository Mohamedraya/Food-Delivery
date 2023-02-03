import { StyleSheet , Dimensions} from "react-native";
import { colors } from "../../global/styles";



const SCREEN_WIDTH = Dimensions.get("window").width


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    buttonsMainView: {
        backgroundColor: colors.cardbackground,
        paddingBottom: 10
    },

    buttonsView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },

    deliveryButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
    },

    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },

    countView: {
        flexDirection: "row"
    },

    countText: {
        marginLeft: 15,
        marginRight: 5,
        fontSize: 16,
        marginTop: 10
    },

    mainView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 10
    },

    firstView: {
        backgroundColor: colors.grey4,
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 15,
        paddingHorizontal: 35,
        paddingVertical: 5
    },

    markerView: {
        flexDirection: "row",
        alignItems: "center"
    },

    timeView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginLeft: 5
    },

    filterView: {
        marginLeft: 20
    },

    categoryView: {
        backgroundColor: colors.grey5,
        marginTop: 15,       
    },

    categoryText: {
        color: colors.grey2,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 15
    },

    smallCardView: {
        backgroundColor: colors.grey5,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        height: 100,
        margin: 10
    },

    smallCardSelectedView: {
        backgroundColor: colors.buttons,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        height: 100,
        margin: 10
    },

    smallCardImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },

    smallCardText: {
        color: colors.grey2,
        fontWeight: "bold"
    },

    smallCardTextSelected: {
        color: colors.cardbackground,
        fontWeight: "bold"
    },

    flatListStyle: {
        marginVertical: 10
    },

    lastView: {
        width: SCREEN_WIDTH,
        marginTop: 10
    },

    floatButton: {
        position: "absolute",
        bottom: 10,
        right: 15,
        backgroundColor: "white",
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center"
    },

    floatTxt: {
        color: colors.grey2
    }
});


export default styles;