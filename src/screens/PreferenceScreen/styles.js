import { StyleSheet ,Platform} from "react-native";
import {colors} from "../../global/styles";


const styles = StyleSheet.create({

    container:{flex:1
    },
    fill: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      header: {
        width:"100%",
        backgroundColor: colors.buttons,
        overflow: 'hidden',
        height: 180//HEADER_MAX_HEIGHT,
      },
      backgroundImage: {
        width: "100%", //null,
        height: 180, //HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
      bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 30,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      title: {
        color: 'white',
        fontSize: 28,
        fontWeight:"bold",
        marginLeft:40
      },
      scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        //paddingTop: Platform.OS !== 'ios' ?
        //HEADER_MAX_HEIGHT : 0,
      },
      row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
      },

      view1:{backgroundColor:"white",
      padding:10,
      marginBottom:10
    },

    text1:{fontSize:15,
      color:colors.grey1,
      fontWeight:"bold"
      },

     text2: { fontSize:14,
             color:"black",
             marginTop:5
            },
     view2:{flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between" ,
            },

     text3: {fontSize:16,
       fontWeight:"bold",
       color:colors.grey1,
       marginLeft:10
      },
    
    viw3:{borderWidth:3,
      borderColor:colors.grey5,
      borderRadius:5,
      marginRight:10
    },

    text4:  {fontWeight:"bold",
            color:colors.grey3 ,
            padding:5
          },

     view4:  {backgroundColor:"white",
              marginBottom:10
              },
    view5: {flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingRight:10
            },
    view6:{flexDirection:"row", 
          alignItems:"center"
        },
     text5: {fontWeight:"bold",marginLeft:-10},
     text6:  {fontSize:16,fontWeight:"bold",} , 
     
     view7:{flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between" ,
          },
     
     text8: {fontSize:16,
             fontWeight:"bold",
             color:colors.grey1,
             marginLeft:10
            },
            
    view9:{borderWidth:3,
           borderColor:colors.grey5,
           borderRadius:5,
           marginRight:10
          },

     text7: {fontWeight:"bold",
             color:colors.grey3 ,
             padding:5
            },

    view10: {backgroundColor:"white",
             marginBottom:10
            },

    view11:  { flexDirection:"row" ,
               alignItems:"center",
              },

     view12:{position:"absolute",
             top:35,
              left:15
            },
    
      view13:{paddingBottom:0,
              marginTop:5,
            },

            text11:{paddingLeft:10,
              fontWeight:"bold",
              fontSize:18,
              color:colors.grey3
             },

      view14:{flexDirection:"row",
              backgroundColor:colors.cardbackground,
              paddingVertical:5,marginBottom:0, 
              justifyContent:"space-between",
              paddingHorizontal:15,
              marginBottom:5
            },

      view15:{width:30,
              height:30,
              borderRadius:15,
              backgroundColor:colors.lightgreen,
              alignItems:"center",
              justifyContent:"center"
            },

      text9:{fontWeight:"bold",
              fontSize:18,
            },
      view16:{width:30,
              height:30,
              borderRadius:15,
              backgroundColor:colors.lightgreen, 
              alignItems:"center",
              justifyContent:"center"
            },

      view17:{alignItems:"center",
              padding:10,
              backgroundColor:colors.cardbackground,
              marginTop:-5
            },

      view18:{backgroundColor:colors.buttons,
              alignItems:"center",
              paddingVertical:5,
              marginBottom:0,
              width:320,
              borderRadius:12
            },

      text10:{padding:10,
              fontWeight:"bold",
              fontSize:18,
              },

      view19:{flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       paddingRight:10
      }

});


export default styles;