import React from "react";
import {View,Text,Image} from "react-native";
import styles from "./styles";


function MenuCard ({productName,price,image,productDetails}) {

    return (
        <View style={styles.view1}>
           <View style={styles.view2}>
              <View style={styles.view3}>
                 <Text style={styles.text1}>{productName}</Text>
                 <View>
                   <Text style={styles.text2}>{productDetails}</Text>
                 </View>
                 <Text style={styles.text3}>ZAR {price}</Text>                 
              </View>
              <View style={styles.view4}>
                 <Image style={styles.image} source={{uri: image}}/>
              </View>
           </View>
        </View>
    )
}

export default MenuCard;