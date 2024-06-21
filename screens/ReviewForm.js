import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/Global'
import { TextInput } from 'react-native-gesture-handler'

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          addReview(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />

            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({})
