import React from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../global/styles";
import styles from "./styles";


function Header ({title,name,navigation}) {

    return (
        <View style={styles.header}>
            <View style={{marginLeft: 20}}>
                <Icon type="material-community" name={name} color={colors.headerText}
                      size={28} onPress={() => {navigation.goBack()}}/>
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

export default Header;