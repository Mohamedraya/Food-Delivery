import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import RootClientTabs from "./ClientTabs";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import { colors } from "../global/styles";
import DrawerContent from "../components/DrawerContent";



const Drawer = createDrawerNavigator();


function DrawerNavigator() {

    return (
        <Drawer.Navigator drawerContent = {props => <DrawerContent{...props}/>}>

            <Drawer.Screen name="RootClientTabs" component={RootClientTabs}
                           options= {{
                              headerShown: false,
                              title: "Client",
                              drawerIcon: ({focused,size}) => (<Icon name="home" type="material-community"
                                                                     color={focused ? "#7cc" : colors.grey2}
                                                                     size={size}/>)
                           }}/>

            <Drawer.Screen name="BusinessConsoleScreen" component={BusinessConsoleScreen}
                           options={{
                             headerShown: false,
                             title: "Business Console",
                             drawerIcon: ({focused,size}) => (<Icon name="business" type="material"
                                                                    color={focused ? "#7cc" : colors.grey2}
                                                                    size={size}/>)
                           }}/>  

        </Drawer.Navigator>
    );
}

export default DrawerNavigator;