import React, { useState } from 'react'

import { View, Text, SafeAreaView,Button, StyleSheet } from 'react-native'

const App = () => {
   let [count, setcount] = useState<number>(0)
   const sayacArtsın = () => {
     setcount(count +1)
   } 
   const sayacAzalsın = ()=> {
     setcount(count-1)
   }

  
  return (
    <SafeAreaView style={styles.container}>

       <View style={styles.upperViewContainer}>
          <Text>{count}</Text>
          <Text>hello world</Text>
      </View>

       <View style={styles.bottomViewContainer}>
          <Text>{count}</Text>
          <Text>hello world</Text>
       </View> 
       
       <Button title='ARTTIR' onPress={sayacArtsın}/>
       <Button title='AZALT' onPress={sayacAzalsın}/>
       
    </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  upperViewContainer :{
     backgroundColor :"red",
     flex : 1,
  },
  bottomViewContainer : {
    backgroundColor : "yellow",
    flex : 2,
  }
});

export default App

