import React , {Component} from "react";
import {View,Text,ScrollView,Image,TouchableOpacity} from "react-native";
import {Icon,CheckBox} from "react-native-elements";
import { menuDetailedData } from "../../global/Data";
import {colors} from "../../global/styles";
import styles from "./styles";


class PreferenceScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            preference: menuDetailedData[this.props.route.params.index].preferenceData,
            required: menuDetailedData[this.props.route.params.index].required,
            minimum_required: menuDetailedData[this.props.route.params.index].minimum_quatity,
            counter: menuDetailedData[this.props.params.index].counter
        }
        
    }

    render() {

        const index = this.props.route.params.index;
        const {meal,details,price} = menuDetailedData[index];

        return (
            <View style={styles.container}>
               <ScrollView>
                 <View style={styles.header}>
                   <Image style={styles.backgroundImage} source={{uri:"https://down.imgspng.com/download/0720/kfc_food_PNG53.png"}}/>
                 </View>
                 <View style={styles.bar}>
                    <Text style={styles.title}>Choose a Preference</Text>
                 </View>
                 <View style={styles.view12}>
                    <Icon name="arrow-left" type="material-community" color={colors.cardbackground} size={25}
                          onPress={() => {this.props.navigation.goBack()}}/>
                 </View>
                 <View style={styles.view1}>
                    <Text style={styles.text1}>{meal}</Text>
                    <Text style={styles.text2}>{details}</Text>
                 </View>
                 <View style={styles.view2}>
                   <Text style={styles.text3}>Choose a meal type</Text>
                   <View>
                      <Text style={styles.text4}>REQUIRED</Text>
                   </View>
                 </View>
                 <View style={styles.view4}>
                    <View style={styles.view5}>
                      <View style={styles.view6}>
                        <CheckBox center checkedIcon= "dot-circle-o" uncheckedIcon= "circle-o"
                                  checked = {true} checkedColor={colors.buttons}/>
                        <Text style={styles.text5}>- - - - -</Text>          
                      </View>
                      <Text style={styles.text6}>R{price.toFixed(2)}</Text>
                    </View>
                 </View>
                 <View style={styles.view2}>
                   <Text style={styles.text3}>Choose your 2 dips</Text>
                   <View>
                      <Text style={styles.text4}>2 REQUIRED</Text>
                   </View>
                 </View>
                 <View>
                    {
                       this.state.preference.map(item => <View key={item.id}>
                          <View style={styles.view7}>
                             <Text style={styles.text8}>{menuDetailedData[index].preferenceTitle[this.state.preference.indexOf(item)]}</Text>
                             {
                                this.state.required[this.state.preference.indexOf(item)]&&
                                <View style={styles.view9}>
                                   <Text style={styles.text7}>{this.state.minimum_required[this.state.preference.indexOf(item)]}</Text> 
                                </View>
                             }
                          </View>
                          <View style={styles.view10}>
                             {
                              
                                item.map(items => 
                                 <TouchableOpacity key={items.id} onPress={() => {
                                    const id = this.state.preference.indexOf(item)
                                    if(this.state.minimum_quantity != null) {
                                       const check = item.filter(items => items.checked ? items : null);
                                       this.state.preference[id].forEach(i => {
                                          if(i.id === items.id) {
                                             if(check.length < this.state.minimum_quantity[id]){
                                                i.checked = !i.checked
                                             }
                                             else {
                                                i.checked = false
                                             }
                                          }
                                       })
                                       this.state.counter[id] = this.state.counter[id] + 1;
                                       this.setState({
                                          preference: [...this.state.preference],
                                          counter: [...this.state.counter]
                                       })
                                    }
                                    else {
                                       this.state.preference[id].forEach(i => {
                                          if(i.id === items.id) {
                                             i.checked = !i.checked
                                          }
                                       })
                                       this.setState({preference: [...this.state.preference]})
                                    }
                                 }}>   
                                  <View style={styles.view4}>                                 
                                    <View style={styles.view19}>
                                      <View style={styles.view6}>
                                        <CheckBox center checkedIcon= "check-square-o" uncheckedIcon= "square-o"
                                                  checked = {items.checked} checkedColor={colors.buttons}/>
                                        <Text style={styles.text5}>{items.name}</Text>          
                                      </View>
                                      <Text style={styles.text6}>R{items.price.toFixed(2)}</Text>
                                    </View>                              
                                 </View>
                                 </TouchableOpacity>)
                             }
                          </View>
                       </View>)
                    }
                 </View>
               </ScrollView>
               <View style={styles.view13}>
                  <Text style={styles.text8}>Quantity</Text>
               </View>
               <View style={styles.view14}>
                  <View style={styles.view15}>
                    <Icon name="remove" type="material" color="black" size={25}/>
                  </View>
                  <Text style={styles.text9}>1</Text>
                  <View style={styles.view16}>
                    <Icon name="add" type="material" color="black" size={25}/>
                  </View>
               </View>
               <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}>Add 1 to cart</Text>
                  </View>
               </View>
            </View>
        )
    }
}

export default PreferenceScreen;