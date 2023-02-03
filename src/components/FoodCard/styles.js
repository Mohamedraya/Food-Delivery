import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";


const styles = StyleSheet.create({

    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },

    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 150
    },

    restaurantName: {
       fontSize: 17,
       fontWeight: "bold",
       color: colors.grey1,
       marginTop: 5,
       paddingLeft: 10
    },

    placeView: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 6
    },

    distanceView: {
        flex: 4,
        flexDirection: "row",
        borderRightWidth: 1,
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
    },

    minutesText: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.grey3,
        paddingTop: 5
    },

    addressView: {
        flex: 9,
        flexDirection: "row"
    },

    addressText: {
        fontSize: 12,
        color: colors.grey2,
        paddingTop: 5,
        paddingHorizontal: 10 
    },

    reviewView: {
        position: "absolute",
        top: 0,
        right: 10,
        padding: 2,
        backgroundColor: "rgba(52,52,52,0.3)",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },

    averageText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 5
    },

    reviewsText: {
        color: "white"
    }
});


export default styles;