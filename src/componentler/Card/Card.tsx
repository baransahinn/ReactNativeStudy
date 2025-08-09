import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import styles from './Card.style'

function Card() {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.cardBody}> 
          <Text style={styles.cardTitle}>John doe</Text>
          <Text style={styles.cardText} >lorem ipsum</Text>
        </View>
        <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>I LIKED</Text>
        </TouchableOpacity>
     </View>
  )
}

export default Card