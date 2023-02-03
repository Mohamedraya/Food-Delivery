import React from "react";
import {View,Text,ImageBackground,TouchableOpacity,FlatList} from "react-native";
import {Icon} from "react-native-elements";
import ProductCard from "../ProductCard";
import styles from "./styles";



function SearchResultCard ({screenwidth,onPressRestaurantCard,restaurantName,deliveryAvailable,discountAvailable,
                            discountPercent,numberOfReview,BusinessAddress,farAway,averageReview,
                            images,productData})                            
{

    return (
        <View>
          <TouchableOpacity onPress={onPressRestaurantCard}>
           <View style={styles.view}>
               <View style={styles.view1}>
                 <ImageBackground  source={{uri: images}} imageStyle={styles.imageStyle}/>
                
                 <View style={styles.image}>
                    <Text style={styles.text1}>{averageReview}</Text>
                    <Text style={styles.text2}>{numberOfReview} reviews</Text>
                 </View>                
               </View> 

               <View style={styles.view3}>
                   <View>
                      <Text style={styles.text5}>{restaurantName}</Text>
                   </View>

                   <View style={styles.distanceView}>
                      <View style={styles.view4}>
                         <Icon name="place" type="material" color="grey" size={18} style={{marginTop:3}}/>
                         <Text style={styles.view5}>{farAway}Min</Text>  
                      </View>

                      <View style={styles.addressView}>
                         <Text style={styles.text6}>{BusinessAddress}</Text>
                      </View>
                   </View>
               </View> 
            </View>
           </TouchableOpacity>
           <View style={styles.productView}>

             <FlatList data={productData} keyExtractor={(item,index) => index.toString()} horizontal
                       renderItem={({item,index}) => (
                         <View>
                            <ProductCard productName={item.name} price={item.price}
                                         image={item.image}/>
                         </View>
                       )}/>             
           </View>
        </View>
    );
}

export default SearchResultCard;