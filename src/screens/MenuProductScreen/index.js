import React , {useState} from "react";
import {View,Text,Dimensions} from "react-native";
import {TabView,TabBar} from "react-native-tab-view";
import {Icon} from "react-native-elements";
import {Route1,Route2,Route3,Route4,Route5,Route6,Route7,Route8} from "../MenuTabs/Route1";
import {menu} from "../../global/Data";
import { colors } from "../../global/styles";
import styles from "./styles";


const SCREEN_WIDTH = Dimensions.get('window').width;


function MenuProductScreen  ({navigation,route})   {

    const [routes] = useState(menu);
    const [index,setIndex] = useState(0);

    const renderTabBar = props => (
        <TabBar {...props} indicatorStyle = {{backgroundColor:colors.cardbackground}}
                tabStyle = {styles.tabStyle} scrollEnabled = {true} style ={styles.tab}
                labelStyle = {styles.tabLabel} contentContainerStyle = {styles.tabContainer}/>

   )

   const renderScene = ({route}) => {

    switch (route.key) {
        case 1:
            return <Route1 navigation={navigation}/> 

        case 2:
            return <Route2 name={navigation}/>
        
        case 3:
            return <Route3 name={navigation}/>

        case 4:
            return <Route4 name={navigation}/>

        case 5:
            return <Route5 name={navigation}/>

        case 6:
            return <Route6 name={navigation}/>

        case 7:
            return <Route7 name={navigation}/> 
            
        case 8:
            return <Route8 name={navigation}/>
        default:
            return null;
    }
}

    return (
        <View style={styles.container}>            
            <View style={styles.view1}>
               <Icon name="arrow-left" type="material-community" color="black" size={25}
                         onPress={() => navigation.goBack()}/>

               <Text style={styles.text1}>Menu</Text>          
            </View> 

            <TabView 
                navigationState ={{index,routes}}
                renderScene = {renderScene}
                onIndexChange  =  { setIndex }
                initialLayout = { SCREEN_WIDTH }
                renderTabBar = {renderTabBar}
                tabBarPosition = 'top'
                navigation={navigation}
                route= {route}    
                    />                  
        </View>
    )
}


export default MenuProductScreen;