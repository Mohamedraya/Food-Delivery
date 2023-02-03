/* import React ,{useState}from "react";
import { View,ScrollView,Text,Dimensions } from "react-native"; 
import RestaurantHeader from "../../components/RestaurantHeader";
import {Icon} from "react-native-elements";
import { TabView,TabBar } from "react-native-tab-view";
import { resturantsData } from "../../global/Data";
import styles from "./styles";
import { colors } from "../../global/styles";
import MenuScreen from "../RestaurantTabs/MenuScreen";

const SCREENWIDTH = Dimensions.get("window").width;
const initialLayout = SCREENWIDTH;

function RestaurantHomeScreen ({navigation,route}) {

    const {id,restaurant} = route.params;

    const [routes] = useState([
        {key: "first" ,title: "MENU"},
        {key: "second",title: "INFO"},
        {key: "third" ,title: "REVIEWS"},
        {key: "fourth",title: "GALLERY"},
    ]);

    const [index,setIndex] = useState(0);

    const renderTabBar = props => {
        <TabBar {...props} indicatorStyle={{backgroundColor: colors.cardbackground}} tabStyle={styles.tabStyle}
                scrollEnabled={true} style={styles.tab} labelStyle={styles.tabLabel}
                contentContainerStyle={styles.tabContainer}/>
    }

    const UpdateRoute1 = () => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
           <ScrollView>
             <View>
                <RestaurantHeader id={id} navigation={navigation}/>
                {resturantsData[id].discount &&
                 <View style={styles.view1}>
                   <Text style={styles.text1}>GET {resturantsData[id].discount}% OFF FOOD TOTAL</Text>
                 </View>
                }
                <View style={styles.view2}>
                   <View style={styles.view3}>
                      <Text style={styles.text2}>{resturantsData[id].resturantName}</Text>
                      <Text style={styles.text3}>{resturantsData[id].foodType}</Text>
                      <View style={styles.view4}>
                         <Icon name="star" type="material-community" color= {colors.grey3} size={15}/>
                         <Text style={styles.text4}>{resturantsData[id].averageReview}</Text>
                         <Text style={styles.text5}>{resturantsData[id].numberOfReview}</Text>
                         <Icon name="map-marker" type="material-community" color= {colors.grey3} size={15}/>
                         <Text style={styles.text6}>{resturantsData[id].farAway}mi away</Text>
                      </View>
                   </View>
                   <View style={styles.view5}>
                      <Text style={styles.text2}>Collect</Text>
                      <View style={styles.view7}>
                         <Text style={styles.text7}>{resturantsData[id].collectTime}</Text>
                         <Text style={styles.text8}>min</Text>
                      </View>
                   </View>
                   <View style={styles.view8}>
                      <Text style={styles.text2}>Delivery</Text>
                      <View style={styles.view9}>
                         <Text style={styles.text9}>{resturantsData[id].deliveryTime}</Text>
                         <Text style={styles.text11}>min</Text>
                      </View>
                   </View>
                </View>
              </View>  
              
              <View style={styles.view10}>
                  <TabView navigationState={{index,routes}} renderScene={UpdateRoute1}
                           onIndexChange={setIndex} initialLayout={initialLayout} 
                           renderTabBar={renderTabBar} tabBarPosition= "top"/>
              </View>  

              {index === 0 && <MenuScreen/>}
              
           </ScrollView>
        </View>
    );
}

export default RestaurantHomeScreen;



*/

import React,{useState} from 'react'
import { Text, View,ScrollView,Dimensions,TouchableOpacity ,Modal} from 'react-native'
import RestaurantHeader from "../../components/RestaurantHeader";
import { resturantsData} from "../../global/Data";
import {colors,fonts} from "../../global/styles";
import {Icon} from 'react-native-elements'
import { TabView,TabBar } from 'react-native-tab-view';
import MenuScreen from "../RestaurantTabs/MenuScreen";
import styles from './styles';



const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const RestaurantHomeScreen = ({navigation,route}) => {

    const {id,restaurant} = route.params
    const[routes] = useState([
        {key:'first',title:"MENU"},
        {key:'second',title:"INFO"},
        {key:'third',title:"REVIEWS"},
        {key:'fourth',title:"GALLERY"},
    ])


    const [index,setIndex]   = useState(0);
    //const [modalVisible,setModalVisible] = useState(false);
    
    const renderTabBar = props =>(
        < TabBar 
            {...props}
            indicatorStyle = {{backgroundColor:colors.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style ={styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )
   

    const UpdateRoute1 =()=>{
        return(
            <View>

            </View>
        )
    }


    const menuPressed = () => {
        navigation.navigate("MenuProductScreen");
        //setModalVisible(true);
    }


    return (
        < View  style  = { styles . container } >
            <ScrollView>
                <View>
                     <RestaurantHeader id ={id} navigation ={navigation} />
                     {resturantsData[id].discount &&
                     < View  style  = { styles . view1 } >
                        <Text style ={styles.text1}>GET {resturantsData[id].discount}% OFF ON FOOD TOTAL</Text>
                     </View>
                     }
                <View style ={styles.view2}>
                    < View  style  = { styles . view3 } >
                        <Text style ={styles.text2}>{resturantsData[id].resturantName}</Text>
                        <Text style ={styles.text3}>{resturantsData[id].foodType}</Text>
                        <View style ={styles.view4}>
                            <Icon name ="star" type ="material-community" color = {colors.grey3} size = {15} />
                            <Text style ={styles.text4}>{resturantsData[id].averageReview}</Text>
                            <Text style ={styles.text5}>{resturantsData[id].numberOfReview}</Text>
                            <Icon name ="map-marker" type ="material-community" color = {colors.grey3} size = {15} />
                            <Text style ={styles.text6}>{resturantsData[id].farAway} mi away</Text> 
                        </View>
                    </View>
                    < View  style  = { styles . view5 } >
                       <Text style = {styles.text6}>Collect</Text>
                       < View  style  = { styles . view7 } >
                            <Text style ={styles.text7}>{resturantsData[id].collectTime}</Text>
                            <Text style ={styles.text8}>min</Text>
                       </View>

                    </View>
                    <View style ={styles.view8}>
                        <Text style ={styles.text6}>Delivery</Text>
                        < View  style  = { styles . view9 } >
                            <Text style = {styles.text9}>{resturantsData[id].deliveryTime}</Text>
                            <Text style ={styles.text11}>min</Text>
                        </View>

                    </View>
                </View>
                </View>

                < View  style  = { styles . view10 } >
                     <TabView 
                         navigationState ={{index,routes}}
                         renderScene = {UpdateRoute1}
                         onIndexChange  =  { setIndex }
                         initialLayout = {initialLayout}
                         renderTabBar = {renderTabBar}
                         tabBarPosition = 'top'
                     />
                </View>

                {index === 0 &&
                    <MenuScreen onPress = {menuPressed}/>
                }

              
           </ScrollView>

        <TouchableOpacity>
            < View  style  = { styles . view11 }>
                <View style ={styles.view12}>
                    <Text style ={styles.text13}>View Cart</Text>
                    < View  style  = { styles . view13 } >
                        <Text style ={styles.text13}>0</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RestaurantHomeScreen;


/*
<Modal visible={modalVisible} animationType= "slide">
            <View style={styles.view14}>
               <Icon name="arrow-left" type="material-community" color="black" size={25}
                         onPress={() => setModalVisible(false)}/>

               <Text style={styles.text14}>Menu</Text>          
            </View> 

            <TabView 
                navigationState ={{index2,routes2}}
                renderScene = {renderScene}
                onIndexChange  =  { setIndex2 }
                initialLayout = {initialLayout}
                renderTabBar = {renderTabBar2}
                tabBarPosition = 'top'
                navigation={navigation}
                route= {route}    
                    />          
        </Modal>
*/