import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {children}
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card : {
      borderRadius : 6,
      backgroundColor : '#fff',
      elevation : 3,
      shadowOffset: {
        width : 1, height : 1
      },
      shadowColor : '#333',
      shadowOpacity : 0.3,
      marginHorizontal: 4,
      marginVertical : 6
    }, cardContent: {
        marginHorizontal : 18,
        marginVertical : 10
    }
})