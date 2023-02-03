import React from "react";
import { View,Text,Image } from "react-native";
import styles from "./styles";



function ProductCard ({productName,price,image}) {

    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
               <View style={styles.view3}>
                  <Text style={styles.text1}>{productName}</Text>
                  <Text style={styles.text1}>{price}dollar</Text>
               </View>
               <View style={styles.view4}>
                  <Image style={styles.image} source={{uri: image}}/>
               </View>
            </View>
        </View>
    )
}


export default ProductCard;