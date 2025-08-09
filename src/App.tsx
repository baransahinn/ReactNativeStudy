import React, { useState } from 'react'
import { View, Text, SafeAreaView,Button, StyleSheet ,TouchableOpacity} from 'react-native'
import Card  from './componentler/Card/Card'

const App = () => {
  
  
  return (
    <SafeAreaView>
      <Card title="Baran Şahin" text="yarı yar olanın yar sarar yarasını"/> 
      <Card title='oktay' text='react bilmek hayat kurtarır'/>  
      <Card title='fatih sultan mehmet' text='sql bilen işsiz kalmaz'/>         
    </SafeAreaView>
     
  )
}

export default App

