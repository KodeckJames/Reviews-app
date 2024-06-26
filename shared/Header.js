import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Game Zone</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
})
