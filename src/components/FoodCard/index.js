import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import {colors,parameters} from "../../global/styles";
import styles from "./styles";



function FoodCard({OnPressFoodCard,resturantName,deliveryAvaliable,discountAvailable,discountPercent,
                  numberOfReview,businessAddress,farAway,averageReview,images,screenWidth}) {

    return (
        <TouchableOpacity>
            <View style={{...styles.cardView,width: screenWidth}}>
               <Image style={{...styles.image,width: screenWidth}} source={{uri: images}}/>

               <View>
                <View>
                    <Text style={styles.restaurantName}>{resturantName}</Text>
                </View>

                <View style={styles.placeView}>
                    <View style={styles.distanceView}>
                        <Icon name="place" type="material" color={colors.grey2} 
                              size={18} iconStyle={{marginTop: 3}}/>

                        <Text style={styles.minutesText}>{farAway} Min</Text>      
                    </View>

                    <View style={styles.addressView}>
                        <Text style={styles.addressText}>{businessAddress}</Text>
                    </View>
                </View>
             </View>
            </View>


            <View style={styles.reviewView}>
                <Text style={styles.averageText}>{averageReview}</Text>
                <Text style={styles.reviewsText}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    );
}

export default FoodCard;