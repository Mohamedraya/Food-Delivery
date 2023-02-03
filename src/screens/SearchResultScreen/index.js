import React from 'react';
import { View, Text,Dimensions,FlatList } from 'react-native';
import SearchResultCard from '../../components/SearchResultCard';
import {resturantsData} from "../../global/Data";
import styles from './styles';


const SCREEN_WIDTH = Dimensions.get("window").width;

function SearchResultScreen({navigation,route}) {

  return (

    <View style={styles.container}>
      
      <View>
         <FlatList data={resturantsData} keyExtractor={(item,index) => index.toString()} showsVerticalScrollIndicator={false}
                   ListHeaderComponent={<View>
                     <Text style={styles.listHeader}>{resturantsData.length} Result for {route.params.item}</Text>
                  </View>}
                   renderItem={({item,index}) => (
                       <View>
                          <SearchResultCard screenwidth={SCREEN_WIDTH} images={item.images}
                                            averageReview={item.averageReview} numberOfReview={item.numberOfReview}
                                            restaurantName={item.resturantName} farAway={item.farAway}
                                            BusinessAddress={item.businessAddress} productData={item.productData}
                                            onPressRestaurantCard={() => {navigation.navigate("RestaurantHomeScreen",{id: index,restaurant: item.resturantName})}}/>
                       </View>
                   )}/> 
      </View>
        
    
    </View>

  )

}


export default SearchResultScreen;