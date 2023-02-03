import React ,{useState,useEffect}from "react";
import { View,Text,ImageBackground,Animated } from "react-native";
import { Icon } from "react-native-elements";
import {resturantsData} from "../../global/Data";
import { colors } from "../../global/styles";
import styles from "./styles";


function RestaurantHeader ({navigation,id}) {

    const index2 = 10;
    //  const currentValue = new Animated.Value(1);
    const [liked,setLiked]     = useState(false);
    const [counter,setCounter] = useState(-2);
    const [visible,setVisible] = useState(false);


    const likeHandler =() => {
        if(liked == false) 
            setVisible(true);
              
            setLiked(!liked);
            setCounter(index2);
        
    }

   /* useEffect(() => {
        if(liked == true){
            Animated.spring(currentValue,{toValue: 3,friction: 2 ,useNativeDriver: true}).start(()=>{

            })
        }
    },[liked])*/

    return (
        <View style={styles.container}>
           <ImageBackground style={styles.container}  source={{uri: resturantsData[id].images}}>
            
             <View style={styles.view1}>
                <View style={styles.view2}>
                   <Icon name="arrow-left" type="material-community" color="black" size={25}
                         onPress={() => {navigation.goBack()}}/>
                </View>
                <View style={styles.view2}>
                   <Icon name={liked && (index2 == counter) ? "favorite":"favorite-border"} type="material" color="red"
                         size={27} onPress={likeHandler}/>
                </View>
             </View>             
           </ImageBackground>
        </View>
    );
}

export default RestaurantHeader;