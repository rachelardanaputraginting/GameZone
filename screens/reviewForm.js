import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Formik} from 'formik';
import { globalStyles } from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup'

const ReviewForm = ({addReview}) => {

  const reviewSchema = yup.object({
    title : yup.string().required().min(4),
    body : yup.string().required().min(8),
    rating : yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0
    })
  })

  return (
    <View style={globalStyles.container}>
      <Formik initialValues={{title : '', body : '', rating : ''}}
        validationSchema={reviewSchema}
       onSubmit={(values, action) => {
        action.resetForm()
        addReview(values)
      }}>
        {(props) => (
            <View>
                <TextInput style={globalStyles.input} placeholder='Review Title' onChangeText={props.handleChange('title')} value={props.values.title} onBlur={props.handleBlur('title')} />
                <Text style={globalStyles.errors}>{props.touched.title && props.errors.title}</Text>

                <TextInput style={globalStyles.input}  placeholder='Review Body' multiline onChangeText={props.handleChange('body')} value={props.values.body} onBlur={props.handleBlur('body')} /> 
                <Text style={globalStyles.errors}>{props.touched.body && props.errors.body}</Text>  

                <TextInput style={globalStyles.input}  placeholder='Rating (1-5)' keyboardType='numeric' multiline onChangeText={props.handleChange('rating')} value={props.values.rating} onBlue={props.handleBlur('rating')} /> 
                <Text style={globalStyles.errors}>{props.touched.rating && props.errors.rating}</Text>   

                <Button title='Submit' color='gray' onPress={props.handleSubmit} />            
            </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({})