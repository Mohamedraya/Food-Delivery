import { StyleSheet,Dimensions } from "react-native";
import {colors,fonts} from "../../global/styles";




/*const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    view1: {
        width: "100%",
        padding: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    text1: {
        color: "green",
        fontSize: 14,
        fontWeight: 'bold'
    },

    view2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        marginHorizontal: 10
    },

    text2: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.grey1
    },

    view3: {
        flex: 8
    },   

    text3: {
        fontSize: 15,
        color: colors.grey3
    },

    view4: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },

    text4: {
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 2
    },

    view5: {
        flex: 3,
        alignItems: "center"
    },

    text5: {
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 2,
        marginRight: 5
    },

    text6: {
        fontSize: 15,
        color: colors.grey3
    },

    
   
    view7: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    text7: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginTop: 5
    },

    view8: {
        flex: 3,
        alignItems: 'center'
    },

    text8: {
        fontSize: 13,
        color: "black",
        marginBottom: 5
    },

    view9: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.buttons
    },

    text9: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    },

    view10: {
        elevation: 10,
        backgroundColor: colors.cardbackground
    },

    text10: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.cardbackground,
        marginTop: 5
    },

    view11: {
        height: 50,
        backgroundColor: colors.buttons,
        alignContent: "center",
        marginBottom: 0
    },

    text11: {
        fontSize: 13,
        color: colors.cardbackground,
        marginBottom: 5
    },

    view12: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    text12: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: colors.cardbackground
    },

    view13: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.cardbackground,
        marginRight: 10,
        paddingBottom: 2
    },

    text13: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.cardbackground,
        paddingHorizontal: 3
    },

    tab: {
        paddingTop: 0,
        backgroundColor: colors.buttons,
        justifyContent: "space-between",
        alignItems: "center"
    },

    tabContainer: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    tabLabel: {
        fontWeight: "bold",
        color: colors.cardbackground
    },

    tabStyle: {
        width: SCREENWIDTH/4,
        maxHeight: 45
    }

});*/
const SCREENWIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({

    container:{flex:1,
            paddingTop:20
        },
    
    view1:{
          padding:3,
          alignItems:"center",
          justifyContent:"center"
        },
    
    text1:{color:"green",
        fontSize : 14 ,
        fontWeight:"bold"
      },
    
    view2:{ flexDirection:"row",
          flex:1,
          marginBottom:5,
          marginHorizontal:10,
          justifyContent:"space-between",
          },
    
    view3:{flex:8,
            },
    
    text2:{fontSize:20,
          fontWeight:"bold",  
          color:colors.grey1
        },
    
    text3:{fontSize:15,
          color:colors.grey3
    },
    
    view4:{flexDirection:'row',
          alignItems:"center",
          marginTop:5
          },
    
    text4:{fontFamily :fonts.android.bold,
          fontSize : 13 ,
          color:colors.grey3,
          marginLeft:2,
          },
    
    text5:{fontFamily :fonts.android.bold,
          fontSize : 13 ,
          color:colors.grey3,
          marginLeft:2,
          marginRight:5
          },
      text6:{fontFamily :fonts.android.bold,
            fontSize : 13 ,
            color:colors.grey3,
            marginLeft:0,
            },
    
      view5:{ flex:3,
              alignItems:"center"
            },
    
      text6:{fontSize:15,
            fontWeight:"bold",
            color:colors.grey1
          },
    
      view7:{width:40,
            height:40,
            alignItems:"center",
            borderRadius:20,
            justifyContent:"space-around",
            },
    
      text7:{fontSize:16,
             fontWeight:"bold",
             color:colors.black,
             marginTop:5
            },
    
      text8:{fontSize:13,
            color:colors.black,
            marginBottom:5
          },
    
      view8:{flex:3,
            alignItems:"center"
          },
    
    text9:{fontSize:15,
          fontWeight:"bold",
          color:colors.cardbackground
    },
    
    view9:{width:40,
          height:40,
          backgroundColor:colors.buttons,
          alignItems:"center",
          borderRadius:20,
          justifyContent:"space-around",
        },
    
    text10:{fontSize:16,
          fontWeight:"bold",
          color:colors.cardbackground,
          marginTop:5
          },
    
    text11:{fontSize:13,
            color:colors.cardbackground,
            marginBottom:5
          },
    
    view10:{elevation:10,
           backgroundColor:colors.pagebackground
          },
    
    view11:{backgroundColor:colors.buttons,
            height:50,
            alignContent:"center",
            marginBottom:0,
            justifyContent:"center"
            
    },
    
    view12:{flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
            },
    
    text12:{padding:10,
            fontWeight:"bold",
            fontSize : 18 ,
            color:colors.cardbackground
          },
    
    view13:{ borderWidth:1,
            marginRight:10,
            borderColor:colors.cardbackground,
            borderRadius:6,
            paddingBottom:2
          },
    
    text13:{paddingHorizontal:3,
            fontWeight:"bold",
            fontSize : 18 ,
            color:colors.cardbackground,
          },
    
    tab:{ paddingTop :0,
          backgroundColor:colors.buttons,
          justifyContent:"space-between",
          alignItems:"center"
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color: colors.cardbackground
          },
      
    tabStyle:{width:SCREENWIDTH/4,
              maxHeight:45,
            },

    view14:{flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:25
    },
    
    text14:{fontWeight:"bold",
            marginLeft:40,
            color:colors.black,
            fontSize : 18
        },
    
    view15:{marginTop:5,
            paddingBottom:20
        },          

})


export default styles;