import React , {useLayoutEffect} from "react";
import {createNativeStackNavigator,TransitionPresets} from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferenceScreen from "../screens/PreferenceScreen";


const Client = createNativeStackNavigator();

function ClientStack({navigation,route}) {

  useLayoutEffect(()=>{

    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
    
    },[navigation,route]);

    return (
        <Client.Navigator>

          <Client.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>

          <Client.Screen name="SearchResultScreen" component={SearchResultScreen} options={{headerShown:false}}/>

          <Client.Screen name="RestaurantHomeScreen" component={RestaurantHomeScreen} options={{headerShown:false}}/>

          <Client.Screen name="MenuProductScreen" component={MenuProductScreen} options={{headerShown:false}}/>

          <Client.Screen name="PreferenceScreen" component={PreferenceScreen} options={{headerShown:false}}/>

        </Client.Navigator>
    );
}


export default ClientStack;