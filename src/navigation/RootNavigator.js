import React, {useContext}from "react";    
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "../navigation/AuthStack";
import AppStack from "./AppStack";
import {SignInContext} from "../contexts/authContext";



function RootNavigator() {

    const {signedIn} = useContext(SignInContext);
    return(
        <NavigationContainer>
            {
                signedIn.userToken === null ? (<AuthStack/>) : (<AppStack/>)
            }
        </NavigationContainer>
    );
}


export default RootNavigator;






/*
function RootNavigator() {

    const {signedIn} = useContext(SignInContext);
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}


export default RootNavigator;*/