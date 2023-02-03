import React from "react";
import {View,Text} from "react-native";
import {Icon,withBadge} from "react-native-elements";
import {colors} from "../../global/styles";
import styles from "./styles";



function HomeHeader({navigation}) {

    const BadgeIcon = withBadge(7)(Icon);

    return (
        <View style={styles.header}>
            <View style={styles.drawericon}>
                <Icon type="material-community" name="menu" color={colors.cardbackground} size={32}
                      onPress={() => {navigation.toggleDrawer()}}/>
            </View>

            <View>
                <Text style={styles.headerText}>Xpress Food</Text>
            </View>

            <View style={styles.cartView}>
                <BadgeIcon type="material-community" name="cart" color={colors.cardbackground} size={32}/>
            </View>
        </View>
    );
}


export default HomeHeader;