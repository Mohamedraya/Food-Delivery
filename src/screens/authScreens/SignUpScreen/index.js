import React from "react";
import {View,Text,ScrollView,TextInput,Alert} from "react-native";
import auth from "@react-native-firebase/auth";
import Header from "../../../components/Header";
import {Formik} from "formik"
import styles from "./styles";
import { Icon,Button } from "react-native-elements";
import { colors } from "../../../global/styles";


const initialValues = {phone_number: "" , name: "" , family_name: "" , email: "" , password: "", username: ""}

function SignUpScreen ({navigation}) {


  async function signUp(data)  {
     
      const {email,password} = data;
      try{
         await auth().createUserWithEmailAndPassword(email,password)
      }
      catch(error) {
         if(error.code === "auth/email-already-in-use") {
            Alert.alert("this email address is already inuse");
         }
         if(error.code === "auth/invalid-email") {
            Alert.alert("this email address is invalid");
         }
         else {
            Alert.alert(error.code);
         }
      }
    } 

    return (
        <View style={styles.container}>

           <Header title="MY ACCOUNT" name="arrow-left" navigation={navigation}/>

           <ScrollView keyboardShouldPersistTaps = "always">
              <View style={styles.view1}>
                <Text style={styles.text1}>Sign UP</Text>
                <Text style={styles.text2}>New on Xpreesfood ?</Text>
              </View>

              <Formik initialValues={{initialValues}} onSubmit={(values) => {signUp(values)}}>
                { (props) => <View style={styles.view2}>
                    <View style={styles.view4}>
                       <TextInput placeholder="Mobile Number" style={styles.input1} keyboardType="number-pad"
                                  onChangeText={props.handleChange("phone_number")} autoFocus={true}
                                  value={props.values.phone_number}/>
                    </View>  
                    <View style={styles.view4}>
                       <TextInput placeholder="Name" style={styles.input1} 
                                  onChangeText={props.handleChange("name")} 
                                  value={props.values.name}/>
                    </View>  
                    <View style={styles.view4}>
                       <TextInput placeholder="family Name" style={styles.input1} 
                                  onChangeText={props.handleChange("family_name")} 
                                  value={props.values.family_name}/>
                    </View>
                    <View style={styles.view4}>                   
                       <Icon name="email" type="material" color={colors.grey3} />                       
                       <TextInput placeholder="Email" style={styles.input1} 
                                  onChangeText={props.handleChange("email")} 
                                  value={props.values.email}/>
                    </View> 
                    <View style={styles.view4}>                        
                       <Icon name="lock" type="material" color={colors.grey3} />                                                
                       <TextInput placeholder="password" style={{...styles.input1,width:"80%"}} 
                                  onChangeText={props.handleChange("password")} 
                                  value={props.values.password}/>                       
                         <Icon name="visibility-off" type="material" color={colors.grey3}/>                                                        
                    </View>
                    <View style={styles.view15}>
                       <Text style={styles.text3}>By Creating or logging into an account you are</Text>
                       <View style={styles.view16}>
                          <Text style={styles.text3}>agreeing with our</Text>
                          <Text style={styles.text4}>Terms & Conditions</Text>
                          <Text style={styles.text3}>and</Text>                          
                       </View>
                       <Text style={styles.text4}>Privacy Statement</Text>
                    </View> 
                    <View style={styles.view17}>
                       <Button title="create my account" buttonStyle={styles.button1} titleStyle={styles.title1}
                               onPress={props.handleSubmit}/>
                    </View>  
                </View>}
              </Formik>
              <View style={styles.view15}>
                 <Text style={styles.text5}>OR</Text>
              </View> 
              <View style={styles.view2}>
                <Text>Already have an account with xpressfood ?</Text>
              </View>              
              <View style={styles.view21}>
                 <Button title="Sign-In" buttonStyle={styles.button2} titleStyle={styles.title2}
                         onPress={() => {navigation.navigate("SignInScreen")}}/>
              </View>
           </ScrollView>
        </View>
    );
}

export default SignUpScreen;