import React from "react";
import {View,Text,FlatList,TouchableWithoutFeedback,ImageBackground} from "react-native";
import Search from "../../components/Search";
import {filterData} from "../../global/Data";
import styles from "./styles";




function SearchScreen({navigation}) {

    return(
        <View style={styles.container}>
           <Search/>

           <View style={styles.listView}>
              <FlatList data={filterData} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}
                        numColumns={2} ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
                        ListFooterComponent={<Footer/>}
                        renderItem={({item}) => (
                            <TouchableWithoutFeedback onPress={() => {navigation.navigate("SearchResultScreen",{item: item.name})}}>
                                <View style={styles.imageView}>
                                   <ImageBackground source={item.image} style={styles.image}>
                                     <View style={styles.textView}>
                                        <Text style={styles.txt}>{item.name}</Text>
                                     </View>                                      
                                   </ImageBackground>
                                </View>
                            </TouchableWithoutFeedback>
                        )}/>
           </View>
        </View>
    );
}

const Footer = () => {
    return (
        <View style={styles.listView}>
              <FlatList data={filterData} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}
                        numColumns={2} ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
                        renderItem={({item}) => (
                            <TouchableWithoutFeedback>
                                <View style={styles.imageView}>
                                   <ImageBackground source={item.image} style={styles.image}>
                                     <View style={styles.textView}>
                                        <Text style={styles.txt}>{item.name}</Text>
                                     </View>                                      
                                   </ImageBackground>
                                </View>
                            </TouchableWithoutFeedback>
                        )}/>
           </View>
    );
}

export default SearchScreen;