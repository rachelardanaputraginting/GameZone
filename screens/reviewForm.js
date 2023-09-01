import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Formik} from 'formik';
import { globalStyles } from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';

const ReviewForm = ({addReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik initialValues={{title : '', body : '', rating : ''}} onSubmit={(values, action) => {
        action.resetForm()
        addReview(values)
      }}>
        {(props) => (
            <View>
                <TextInput style={globalStyles.input} placeholder='Review Title' onChangeText={props.handleChange('title')} value={props.values.title} />

                <TextInput style={globalStyles.input}  placeholder='Review Body' multiline onChangeText={props.handleChange('body')} value={props.values.body} />   

                <TextInput style={globalStyles.input}  placeholder='Rating (1-5)' keyboardType='numeric' multiline onChangeText={props.handleChange('rating')} value={props.values.rating} />    

                <Button title='Submit' color='gray' onPress={props.handleSubmit} />            
            </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({})