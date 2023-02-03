import { StyleSheet } from "react-native";
import {colors} from "../../global/styles";
 


const styles = StyleSheet.create({

    image: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "rgba(52,52,52,0.4)",
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },

    imageStyle: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 150
    },

    view: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },

    view1: {
        height: 150
    },

    text1: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 3
    },
   
    view2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },

    text2: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    },
  
    view3: {
        marginHorizontal: 5,
        marginBottom: 10,
        marginTop: 5        
    },

    text3: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.grey2
    },

    view4: {
        flex: 4,
        flexDirection: "row",
        borderRightWidth: 1,
        borderRightColor: colors.grey4,
        paddingHorizontal: 5
    },

    text4: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.grey2
    },

    view5: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: colors.grey3
    },

    text5: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.grey1
    },

    text6: {
        fontSize: 12,
        color: colors.grey2,
        paddingTop: 5,
        paddingHorizontal: 10
    },

    distanceView: {
        flexDirection: "row"
    },

    addressView: {
        flex: 9
    },

    productView: {
        marginTop: 5,
    }
});

export default styles;