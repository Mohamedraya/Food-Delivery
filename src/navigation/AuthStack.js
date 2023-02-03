import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";




const Auth = createNativeStackNavigator();

function AuthStack() {

    return (
       <Auth.Navigator>
          <Auth.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen}
                            options={{headerShown: false,}}/>
       
          <Auth.Screen name="SignInScreen"        component={SignInScreen}
                           options={{headerShown: false,}}/>

          <Auth.Screen name="SignUpScreen"        component={SignUpScreen}
                           options={{headerShown: false,}}/>                
       </Auth.Navigator>
    );
}

export default AuthStack;



/*

import DrawerNavigator from "./DrawerNavigator";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";

<Auth.Screen name="DrawerNavigator" component={DrawerNavigator}
                           options={{headerShown: false,}}/>

<Auth.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen}
                           options={{headerShown: false}}/>
*/