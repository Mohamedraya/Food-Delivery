import React ,{useContext}from "react";
import {View,Text,Linking,Pressable,Alert,Switch,TouchableOpacity} from "react-native";
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import { Avatar , Button , Icon} from "react-native-elements";
import auth from "@react-native-firebase/auth";
import {SignInContext} from "../../contexts/authContext";
import styles from "./styles";



function DrawerContent(props) {

  const {dispatchSignedIn} = useContext(SignInContext);

  async function signOut() {
     
      try {
          auth().signOut().then(() => {console.log("USER SIGNED OUT")
                                dispatchSignedIn({type: "UPDATE_SIGN_IN" , payload: {userToken:null}})})
      } 
      catch(error) {
        Alert.alert(error.code)
      } 
  }

    return(
        <View style={styles.container}>
           <DrawerContentScrollView {...props}>
          <View style={styles.mainView}>

           <View style={styles.userdataView}>
              <Avatar rounded avatarStyle={styles.avatar} source = {{uri: "https://down.imgspng.com/download/0720/kfc_food_PNG53.png"}}
                      size={75}/>

              <View style={styles.txtView}>                    
                <Text style={styles.nametxt}>john Mark</Text>
                <Text style={styles.mailtxt}>John@expressfood.com</Text>
              </View>                 
           </View>

            <View style={styles.favorateContainer}>

              <View style={styles.favoView1}>
                    <Text style={styles.nametxt}>1</Text>
                    <Text style={styles.mailtxt}>My Favorates</Text>
              </View>             
              
              <View style={styles.favoView1}>
                    <Text style={styles.nametxt}>5</Text>
                    <Text style={styles.mailtxt}>my carts</Text>                 
              </View>

            </View>
            </View>

           <DrawerItemList {...props}/>

           <DrawerItem label= "Payment" icon={({color,size}) => (<Icon name="credit-card-outline" 
                                                                       type="material-community"
                                                                       color={color} size={size}/>)}/>   
           
           <DrawerItem label= "Promotion" icon={({color,size}) => (<Icon name="tag-heart" 
                                                                       type="material-community"
                                                                       color={color} size={size}/>)}/>

           <DrawerItem label= "Settings" icon={({color,size}) => (<Icon name="cog-outline" 
                                                                       type="material-community"
                                                                       color={color} size={size}/>)}/>                                                            
         
           <DrawerItem label= "Help" icon={({color,size}) => (<Icon    name="lifebuoy" 
                                                                       type="material-community"
                                                                       color={color} size={size}/>)}/>
         
           <View style={styles.prefreView}>
               <Text style={styles.prefretxt}>Preferences</Text>

               <View style={styles.switchView}>
                  <Text style={styles.darktxt}>Dark Mode</Text>
                  <Switch trackColor={{false: "#767577" , true: "#81b0ff"}}
                          thumbColor="#f4f3f4"/>
               </View>
           </View>
          
         </DrawerContentScrollView>
        
        
          <DrawerItem label= "Sign Out" icon={({color,size}) => (<Icon name="logout-variant" 
                                                                       type="material-community"
                                                                       color={color} size={size}
                                                                       onPress={() => {signOut()}}/>)}/>
                                                                       
        </View>
    );
}

export default DrawerContent;