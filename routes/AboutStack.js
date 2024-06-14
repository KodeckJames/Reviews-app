import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../screens/About'

const Stack = createNativeStackNavigator()

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About Game Zone',
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
