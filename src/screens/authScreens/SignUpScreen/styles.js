import { StyleSheet } from "react-native";
import {colors} from "../../../global/styles";


const styles = StyleSheet.create({
 
    
    container:{flex:1,
        backgroundColor:'white'
      },

      view1:{
             marginVertical:10,
             paddingHorizontal:15,            
            },

      text1:{fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
      },

      view2:{
              marginHorizontal: 15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              alignItems: "center",
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginVertical: 10
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{
        fontSize:16,
        
       },

      iconView: {
        marginTop: 10
      },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
              },

      view20:{marginTop:5
            },
      
      view21:{
        marginVertical:5,
        marginRight: 10,
        alignItems:'flex-end',
      },

      button2:{
        backgroundColor:colors.cardbackground,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.background2,
        height:40,
        paddingHorizontal:20,                                  
      },

      title2:{color:colors.buttons,
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    }
});


export default styles;