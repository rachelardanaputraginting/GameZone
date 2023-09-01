import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const About = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>About GameZone</Text>
      <Text style={globalStyles.paragraph}>Non fugiat ut nisi aliqua cillum Lorem in amet consectetur qui duis amet sunt. Cillum mollit consequat labore esse deserunt id dolor quis. Mollit velit quis occaecat anim quis aliqua deserunt nisi ipsum. Ex nisi occaecat cupidatat magna Lorem ad est enim ut ipsum magna. Enim adipisicing adipisicing eiusmod aute. Quis et non ut laboris ut aliqua adipisicing enim. Incididunt enim commodo veniam elit eiusmod.
      </Text>
      <Text />
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default About

const styles = StyleSheet.create({

})