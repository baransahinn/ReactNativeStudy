import React from 'react'
import { View,Text,Image,SafeAreaView } from 'react-native'
import styles from './Card.style'

 type News = {
  u_id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
};
 type Props ={news :News}
const Card=({news}: Props) =>{
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : news.imageUrl}}/>

            <View style={styles.innerContainer}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>
            </View>
            
        </View>
    </SafeAreaView> 

  )
}

export default Card