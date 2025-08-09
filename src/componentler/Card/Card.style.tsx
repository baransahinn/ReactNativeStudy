import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
   flex : 1,
   backgroundColor:'#e0e0e0'
  },
  cardContainer : { 
    backgroundColor :'white',
    margin :10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius :10,
  },
  cardBody : {
    padding : 10,
  },
  cardTitle :{
    fontSize:20,
    fontWeight:'bold',
    margin :10,
    marginBottom:3
  },
  cardText : {
    fontSize : 15,
    margin : 10,
    marginTop:3,
  },
  cardButton :{
    backgroundColor:'#00C2FF',
    padding : 10,
    alignItems :'center',
    borderBottomLeftRadius :10,
    borderBottomRightRadius :10,
  },
  cardButtonTitle : {
    fontWeight:'bold',
    color: 'white',
    fontSize : 18,
  }
})