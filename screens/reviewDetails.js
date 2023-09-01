import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import Card from '../components/card';
import Rating1 from '../assets/images/rating-1.png'
import Rating2 from '../assets/images/rating-2.png'
import Rating3 from '../assets/images/rating-3.png'
import Rating4 from '../assets/images/rating-4.png'
import Rating5 from '../assets/images/rating-5.png'

const ReviewDetails = ({ route }) => {

  const Rating = {
    1: Rating1,
    2: Rating2,
    3: Rating3,
    4: Rating4,
    5: Rating5,
  }

  const { title, body, rating } = route.params;
  return (

    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating : </Text>
          <Image source={Rating[rating]} />
        </View>
        {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '333',
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 16
  }
})