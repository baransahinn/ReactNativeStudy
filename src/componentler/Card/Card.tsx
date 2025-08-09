import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import styles from './Card.style'

type CardProps = {
  title : string;
  text : string;
}

const Card =({title,text}:CardProps)=> {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.cardBody}> 
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText} >{text}</Text>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={()=>Alert.alert("merhaba "+ title)}>
            <Text style={styles.cardButtonTitle}>I LIKED</Text>
        </TouchableOpacity>
     </View>
  )
}

export default Card