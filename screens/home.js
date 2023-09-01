import { FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import Card from '../components/card'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


const Home = ({ navigation }) => {

  const [modalOpen, setModalOpen] = useState(false)

  const [review, setReview] = useState([
    { title: 'Dinda Indriana', rating: 3, body: 'Dinda adalah cewe paling cantiq', key: '1' },
    { title: 'Rachel Ginting', rating: 4, body: 'Rachel adalah cowo Dinda', key: '2' },
    { title: 'Rachel Dinda', rating: 5, body: 'Mereka saling menyayangi', key: '3' },
  ])


  const addReview = (review) => {
    review.key = Math.random().toString()
    setReview((currentReview) => {
      return [review, ...currentReview]
    }) 
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons name='close' size={24} onPress={() => setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalToggleClose}}  />
          <ReviewForm addReview={addReview} />
        </View>
      </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons name='add' size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />

      <FlatList data={review} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  modalToggle : {
    alignSelf : 'center',
    marginBottom : 10,
    borderWidth : 1,
    borderColor : '#ddd',
    padding : 10,
    borderRadius : 10,
  }, modalToggleClose : {
    marginTop : 10,
    marginBottom : 0 
  }, modalContent : {
    flex : 1,
    padding : 10
  }
})