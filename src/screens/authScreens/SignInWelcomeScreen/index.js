import React ,{useEffect,useContext}from "react";
import {View,Text,Image} from "react-native";
import { parameters } from "../../../global/styles";
import {Button} from "react-native-elements";
import Swiper from "react-native-swiper";
import { SignInContext } from "../../../contexts/authContext";
import auth from "@react-native-firebase/auth";
import styles from "./styles";



function SignInWelcomeScreen ({navigation}) {

   const {dispatchSignedIn} = useContext(SignInContext);

   useEffect(() => {
      auth().onAuthStateChanged((user) => {
         if(user) {
            dispatchSignedIn({type: "UPDATE_SIGN_IN",payload: {userToken: "signed-in"}})
         }
         else {
            dispatchSignedIn({type: "UPDATE_SIGN_IN",payload: {userToken: null}})
         }
      })
      
   },[])

    return (
        <View style={styles.container}>

           <View style={styles.textView}>
              <Text style={styles.text}>DISCOVER RESTAURANTS</Text>
              <Text style={styles.text}>IN YOUR AREA</Text>
           </View>

           <View style={styles.swiperView}>
              <Swiper autoplay={true}>
                 <View style={styles.slide1}>
                    <Image source={{uri:"https://cdn.tasteatlas.com//images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?w=375&h=280"}}
                           style={styles.image}/>
                 </View>

                 <View style={styles.slide2}>
                    <Image source={{uri:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_04/1832426/hot-dog-kb-2x1-220124.jpg"}}
                           style={styles.image}/>
                 </View>

                 <View style={styles.slide3}>
                    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"}}
                           style={styles.image}/>
                 </View>
              </Swiper>
           </View>

           <View style={styles.buttonsView}>
              <View style={styles.buttonView}>
                <Button title="Sign In" buttonStyle={parameters.styledButton} 
                        titleStyle={parameters.buttonTitle} onPress={() => {navigation.navigate("SignInScreen")}}/>
              </View>

              <View style={styles.buttonView}>
                <Button title="create an account" buttonStyle={styles.createButton} titleStyle={styles.createButtonTitle}
                        onPress={() => {navigation.navigate("SignUpScreen")}}/>
              </View>
           </View>
        </View>
    );
}

export default SignInWelcomeScreen;