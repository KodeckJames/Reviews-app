import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Global'
import Card from '../shared/Card'
import { images } from '../styles/Global'

export default function ReviewDetails({ route }) {
  const { title } = route.params
  const { body } = route.params
  const { rating } = route.params

  // const ratting = navigation.getParam('rating')

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
})
