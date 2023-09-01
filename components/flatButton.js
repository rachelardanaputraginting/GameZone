import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FlatButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default FlatButton

const styles = StyleSheet.create({
    button : {
        backgroundColor: 'gray',
        paddingVertical : 14,
        paddingHorizontal : 10,
        borderRadius : 8,
    }, buttonText : {
        textTransform : 'uppercase',
        color : 'white',
        fontSize : 16,
        textAlign : 'center',
        fontWeight : 'bold'
    }
})