import React from "react";
import {View,FlatList,TouchableOpacity,Text} from "react-native";
import MenuCard from "../../../components/MenuCard";
import { menuData,menuDetailedData } from "../../../global/Data";
import styles from "./styles";


export function Route1 ({navigation}) {

    return (
       <View style={styles.container}>
          <View style={styles.view2}>
             <FlatList data={menuDetailedData} keyExtractor={(item) => {item.id}} showsVerticalScrollIndicator={false}
                       renderItem = {({item,index}) => (
                          <TouchableOpacity onPress={() => {navigation.navigate("PreferenceScreen",{index})}}>
                             <MenuCard productName={item.meal} image={item.image} price={item.price}
                                       productDetails={item.details}/>
                          </TouchableOpacity>
                       )}/>
          </View>
       </View>
    )
}


export const Route2 = () => {return<View style={styles.scene}/>}
export const Route3 = () => {return<View style={styles.scene}/>}
export const Route4 = () => {return<View style={styles.scene}/>}
export const Route5 = () => {return<View style={styles.scene}/>}
export const Route6 = () => {return<View style={styles.scene}/>}
export const Route7 = () => {return<View style={styles.scene}/>}
export const Route8 = () => {return<View style={styles.scene}/>}


