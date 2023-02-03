import React ,{useState}from "react";
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList,Pressable
      , Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import HomeHeader from "../../components/HomeHeader";
import {colors,parameters} from "../../global/styles";
import {filterData,resturantsData} from "../../global/Data";
import FoodCard from "../../components/FoodCard";
import styles from "./styles";



export const SCREEN_WIDTH = Dimensions.get("window").width

function HomeScreen({navigation}) {

    const [delivery,setDelivery] = useState(true);
    const [indexCheck,setIndexCheck] = useState("0");


    return (
        <View style={styles.container}>

            <HomeHeader navigation={navigation}/>
        <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
          <View style={styles.buttonsMainView}>  
            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={() => {setDelivery(true)}}>
                    <View style={{...styles.deliveryButton,backgroundColor: delivery? colors.buttons : colors.grey5}}>
                       <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setDelivery(false)
                                                  navigation.navigate("RestaurantsMapScreen")}}>
                    <View style={{...styles.deliveryButton,backgroundColor: delivery? colors.grey5 : colors.buttons}}>
                       <Text style={styles.deliveryText}>Pick Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
         </View>

            <View>
              <View style= {styles.mainView}>
               <View style={styles.firstView}>  
                <View style={styles.markerView}>
                   <Icon type="material-community" name="map-marker" color={colors.grey1}
                         size={26}/>
                   <Text>22 Beessie Street</Text>      
                </View>

                <View style={styles.timeView}>
                   <Icon type="material-community" name="clock-time-four" color={colors.grey1}
                         size={22}/>
                   <Text>Now</Text>      
                </View>
              </View> 
              <View style={styles.filterView}>
                <Icon type="material-community" name="tune" color={colors.grey1} size={26}/>
              </View> 
             </View>                
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Categories</Text>
            </View>

            <View>
               <FlatList horizontal showsHorizontalScrollIndicator={false} data={filterData} keyExtractor={(item) => {item.id}} 
                         extraData={indexCheck}
                         renderItem={({item,index}) => (
                            <Pressable onPress={() => {setIndexCheck(item.id)}}>
                                <View style={indexCheck === item.id ? {...styles.smallCardSelectedView} : {...styles.smallCardView}}>
                                   <Image source={item.image} style={styles.smallCardImage}/>
                                   <View>
                                      <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                                   </View>
                                </View>
                            </Pressable>
                         )}/>
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Free delivery Now</Text>
            </View>

            <View>

                <View style={styles.countView}>
                   <Text style={styles.countText}>options changing in</Text>
                   <CountDown until={3600} size={14} digitStyle={{backgroundColor: colors.lightgreen}}
                              digitTxtStyle={{color: colors.cardbackground}} timeToShow={["M","S"]} 
                              timeLabels = {{m: "Min" , s: "Sec"}}/>
                </View>

                <FlatList data={resturantsData} style={styles.flatListStyle} horizontal showsHorizontalScrollIndicator={false}
                          keyExtractor={(item,index) => index.toString()}
                          renderItem={({item}) => (
                            <View>
                               <FoodCard screenWidth={SCREEN_WIDTH*0.8} images={item.images}
                                         resturantName={item.resturantName} farAway={item.farAway}
                                         businessAddress={item.businessAddress} averageReview={item.averageReview}
                                         numberOfReview={item.numberOfReview}/>
                            </View>
                          )}/>
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Promotions Available</Text>
            </View>

            <View>
                <FlatList data={resturantsData} style={styles.flatListStyle} horizontal showsHorizontalScrollIndicator={false}
                          keyExtractor={(item,index) => {index.toString()}}
                          renderItem={({item}) => (
                            <View>
                               <FoodCard screenWidth={SCREEN_WIDTH*0.8} images={item.images}
                                         resturantName={item.resturantName} farAway={item.farAway}
                                         businessAddress={item.businessAddress} averageReview={item.averageReview}
                                         numberOfReview={item.numberOfReview}/>
                            </View>
                          )}/>
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Restaurants in Your Area</Text>
            </View>

            <View style={styles.lastView}>
                {resturantsData.map(item => (
                    <View key={item.id} style={{paddingBottom: 20}}>
                         <FoodCard screenWidth={SCREEN_WIDTH*0.95} images={item.images}
                                   resturantName={item.resturantName} farAway={item.farAway}
                                   businessAddress={item.businessAddress} averageReview={item.averageReview}
                                   numberOfReview={item.numberOfReview}/>
                    </View>
                ))}
            </View>
        </ScrollView>  
      { delivery &&
        <View style={styles.floatButton}>
           <TouchableOpacity onPress={() => {navigation.navigate("RestaurantsMapScreen")}}>
              <Icon name="place" type="material" size={32} color={colors.buttons}/>
              <Text style={styles.floatTxt}>Map</Text>
           </TouchableOpacity>
        </View>         
      }
    </View>
    );
}

export default HomeScreen;