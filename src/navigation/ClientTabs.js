import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyProfileScreen from "../../src/screens/MyProfileScreen/Index";
import ClientStack from "./ClientStack";

 


const ClientTabs = createBottomTabNavigator();

function RootClientTabs() {

    return (
        <ClientTabs.Navigator tabBarOptions={{activeTintColor: colors.buttons}}>

            <ClientTabs.Screen name="HomeScreen" component={HomeScreen}
                               options={{
                                  headerShown: false,
                                  tabBarLabel: "Home",
                                  tabBarIcon: ({color,size}) => (
                                       <Icon name="home" type="material" color={color} size={size}/>)
                               }}/>

           <ClientTabs.Screen name="SearchStack" component={ClientStack}
                              options={{
                                  headerShown: false,
                                  tabBarLabel: "Search",
                                  tabBarIcon: ({color,size}) => (
                                       <Icon name="search" type="material" color={color} size={size}/>)
                               }}/>

            <ClientTabs.Screen name="MyOrdersScreen" component={MyOrdersScreen}
                               options={{
                                   headerShown: false,
                                   tabBarLabel: "My Orders",
                                   tabBarIcon: ({color,size}) => (
                                        <Icon name="view-list" type="material" color={color} size={size}/>
                                      )
                               }}/>
         
            
            <ClientTabs.Screen name="MyProfileScreen" component={MyProfileScreen}
                               options={{
                                  headerShown: false,
                                  tabBarLabel: "My Profile",
                                  tabBarIcon: ({color,size}) => (
                                       <Icon name="person" type="material" color={color} size={size}/>  
                                     )
                               }}/>                  

        </ClientTabs.Navigator>
    );
}

export default RootClientTabs;

