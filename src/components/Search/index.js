import React , {useState,useRef} from "react";
import {View , Text , TouchableWithoutFeedback , Modal , TextInput,FlatList,
        TouchableOpacity,Keyboard}  from "react-native";
import * as Animatable from "react-native-animatable";
import {Icon} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import  filter  from "lodash/filter";
import {filterData} from "../../global/Data";
import styles from "./styles";




function Search() {


    const [modalVisible,setModalVisible] = useState(false);
    const [textInputFocused,setTextInputFocused] = useState(false);
    const [data,setData] = useState([...filterData]); 
    const textInput = useRef(0);

    const navigation = useNavigation();


    const contains = ({name},query) => {
        if(name.includes(query)) {
            return true;
        }
        return false;
    }

    const handleSearch  = (text) => {
        const searchData = filter(filterData, user => {
            return contains(user,text)
        })

        setData([...searchData]);
    }

    return (
        <View style={styles.masterView}>
           <TouchableWithoutFeedback onPress={() => {setModalVisible(true)}}>
               <View style={styles.searchArea}>
                  <Icon name="search" type="material" style={styles.searchIcon} 
                        iconStyle={{marginLeft:5}} size={30}/>

                  <Text>What are you looking for?</Text>      
               </View>
           </TouchableWithoutFeedback>

           <Modal animationType="fade" transparent={false} visible= {modalVisible}>
               
               <View style={styles.modal}>
                  <View style={styles.view1}>
                     <View style={styles.TextInput}>
                         <Animatable.View animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
                                          duration={400}>
                            <Icon name= {textInputFocused ? "arrow-back" : "search"} type= "material"
                                  onPress = {() => {if(textInputFocused){
                                                     setModalVisible(false)
                                                     setTextInputFocused(false)}}}
                                  style = {styles.icon1}  iconStyle={{marginRight: 5}}                  
                                  />
                         </Animatable.View>

                         <TextInput style={styles.input} placeholder= "" autoFocus= {false}
                                    ref={textInput} onFocus={() => {setTextInputFocused(true)}}
                                    onBlur={() => {setTextInputFocused(false)}}
                                    onChangeText = {handleSearch}/>

                        <Animatable.View animation={textInputFocused ? "fadeInLeft" : "fadeInRight"}
                                         duration={400}>
                            <Icon name= {textInputFocused ? "cancel" : null}
                                  type= "material" style={styles.icon2}
                                  onPress={() => {
                                     textInput.current.clear()
                                     
                                  }}/>
                        </Animatable.View>
                     </View>
                  </View>

                 <FlatList data={data} keyExtractor={item => item.id}
                           renderItem={({item}) => (
                               <TouchableOpacity onPress={() => {
                                                   Keyboard.dismiss
                                                   navigation.navigate("SearchResultScreen",{item: item.name})
                                                   setModalVisible(false)
                                                   setTextInputFocused(false)
                                                   }}>

                                   <View style={styles.view2}>
                                      <Text style={styles.listtxt}>{item.name}</Text>
                                   </View>                 
                                  
                               </TouchableOpacity>
                           )}/>

               </View>
           </Modal>
        </View>
    );
}

export default Search;
