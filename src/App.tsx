import React, { useState } from 'react'
import { View, Text,Button, StyleSheet ,TouchableOpacity,SafeAreaView,FlatList, ScrollView, Image, Dimensions} from 'react-native'
import news_data from './news_data.json'

import Card from './componentler/NewsCard/Card'
import Benner from './componentler/NewsCard/Benner'


const App = () => {
   
  const renderNews = ({item}: any) => <Card news={item}/>
  return (
    
    <SafeAreaView style={styles.container}>
       <View>
        <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={()=> <Benner/>}
        data={news_data}
        renderItem={renderNews}/>
      </View>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#eceff1'
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 50,
  }
})



export default App

