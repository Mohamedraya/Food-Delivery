import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import {menuData,specialData} from "../../../global/Data";
import {Icon} from "react-native-elements";
import styles from "../MenuScreen/styles";


function MenuScreen ({navigation,restaurant,onPress}) {

    return (
        <View style={styles.container}>
           <View>
              {
                specialData.map((item) => <View key={item.key} style={styles.view1}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.view2}>
                           <Icon name="star" type="material-community" color="gold"/>
                           <Text style={styles.text1}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
              }
           </View>

           <View>
              {
                menuData.map((item) => <View key={item.key} style={styles.view1}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.view2}>
                           <Text style={styles.text1}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
              }
           </View>
        </View>
    );
}

export default MenuScreen;