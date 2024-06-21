import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const Stack = createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          title: 'Game Zone',
        }}
      />
      <Stack.Screen
        name="Reviews"
        component={ReviewDetails}
        options={{
          title: 'Reviews Details',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}
export default HomeStack
