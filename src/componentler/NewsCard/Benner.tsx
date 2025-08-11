import React from 'react'
import news_banner_data from './news_banner_data.json'
import { Dimensions, Image ,ScrollView,StyleSheet} from 'react-native'
const Benner=()=> {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerNews =>(<Image style={styles.bennerİmage} source={{uri:bannerNews.imageUrl}}/>))}
        </ScrollView>
  )
}
const styles = StyleSheet.create({
    bennerİmage: {
    height : Dimensions.get('window').height/5,
    width : Dimensions.get('window').width /2,
    },

})
export default Benner