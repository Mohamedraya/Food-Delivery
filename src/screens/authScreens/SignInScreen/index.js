import React ,{useState,useRef,useContext}from "react";
import {View,Text,TextInput,Dimensions, Alert} from "react-native";
import { Icon , Button , SocialIcon} from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import {title,colors,parameters} from "../../../global/styles";
import Header from "../../../components/Header";
import { SignInContext } from "../../../contexts/authContext";
import styles from "./styles";



function SignInScreen ({navigation}) {

  const {dispatchSignedIn} = useContext(SignInContext); 

  const [textInputFocused,setTextInputfocused] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

 async function signIn (data) {

    try{
      const {email,password} = data
      const user = await auth().signInWithEmailAndPassword(email,password)
      if (user) {
         dispatchSignedIn({type: "UPDATE_SIGN_IN",payload: {userToken: "signed-in"}})
      }
    }
    catch(error) {
         Alert.alert(error.name,error.message)     
      }
  }


    return (
        <View style={styles.container}>

           <Header title="MY ACCOUNT" name="arrow-left" navigation={navigation}/>

           <View style={styles.signView}>
             <Text style={title}>Sign In</Text>
           </View>

           <View style={styles.txtView}>
             <Text style={styles.text1}>Please Enter the email and password</Text>
             <Text style={styles.text1}>Registered with your account</Text>
           </View>

           <Formik initialValues={{email: "" , password: ""}} 
                   onSubmit={(values) => {signIn(values)}}>
             { (props) =>
             <View>        
              <View style={styles.inputContainerView}>
               <View>
                 <TextInput style={styles.textInput1} placeholder= "Email" ref={textInput1}
                            onChangeText = {props.handleChange("email")}
                            value = {props.values.email} />
               </View>
              <View style={styles.textInput2}>
                <Animatable.View animation={textInputFocused? "" : "fadeInLeft"} duration={400}>
                   <Icon name="lock" color={colors.grey3} type="material"/>
                </Animatable.View>

                <TextInput style={styles.passInput} placeholder= "Password" ref={textInput2}
                           onFocus={() => {setTextInputfocused(false)}} onBlur={() => {setTextInputfocused(true)}}
                           onChangeText = {props.handleChange("password")} value = {props.values.password}/>

                <Animatable.View animation={textInputFocused? "" : "fadeInLeft"} duration={400}>
                   <Icon name="visibility-off" color={colors.grey3} type="material" 
                         style={{paddingRight: 10}}/>
                </Animatable.View>
              </View>
            </View>

            <View style={styles.buttonView}>
              <Button title="Sign In" buttonStyle={parameters.styledButton} 
                      titleStyle={parameters.buttonTitle} onPress={props.handleSubmit}/>
            </View>
            </View>}
           </Formik>         

           <View style={styles.forgotView}>
              <Text style={{...styles.text1,textDecorationLine:"underline"}}>Forgot Password?</Text>
           </View>

           <View style={styles.orView}>
              <Text style={styles.orText}>OR</Text>
           </View>

           <View style={styles.socialView}>
              <SocialIcon button title="Sign In With Facebook"  type="facebook" style={styles.socialIcon}
                          onPress={() => {}}/>
           </View>
               
           <View style={styles.socialView}>
              <SocialIcon button title="Sign In With Google"  type="google" style={styles.socialIcon}
                          onPress={() => {}}/>
           </View>

           <View style={styles.foodView}>
              <Text style={styles.text1}>New On XpressFood ?</Text>
           </View>

           <View style={styles.createButtonView}>
              <Button title="create an account" buttonStyle={styles.createButton} titleStyle={styles.createButtonTitle}
                      onPress={() => {navigation.navigate("SignUpScreen")}}/>
           </View>
        </View>
    );
}


export default SignInScreen;



