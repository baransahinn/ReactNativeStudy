import React, { useState } from 'react'
import { View, Text,Button, StyleSheet ,TouchableOpacity,SafeAreaView,FlatList, ScrollView, Image, Dimensions} from 'react-native'
import news_data from './news_data.json'
import news_banner_data from './news_banner_data.json'
import Card from './componentler/NewsCard/Card'


const App = () => {
   
  const renderNews = ({item}: any) => <Card news={item}/>
  return (
    
    <SafeAreaView style={styles.container}>
       <View>
        <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={()=> <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerNews =>(<Image style={styles.bennerİmage} source={{uri:bannerNews.imageUrl}}/>))}
        </ScrollView>}
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
  bennerİmage:{
    height : Dimensions.get('window').height/5,
    width : Dimensions.get('window').width /2,
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 50,
  }
})



export default App

