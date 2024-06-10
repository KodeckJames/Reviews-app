import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Global'

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Home Screen Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Saepe, aliquid? Doloremque adipisci dolorum voluptatem? Enim libero,
        iste eligendi asperiores optio quis sapiente. Natus dolores repellendus
        dicta soluta harum quod sint.
      </Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  titleText: {
    fontFamily: 'nunito-regular',
    fontSize: 18,
  },
})
