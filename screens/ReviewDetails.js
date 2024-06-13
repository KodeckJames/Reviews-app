import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Global'

export default function ReviewDetails({ route }) {
  const { title } = route.params
  const { body } = route.params
  const { rating } = route.params
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  )
}
