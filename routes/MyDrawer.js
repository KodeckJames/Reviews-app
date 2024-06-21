import { StyleSheet, Text, View, Image } from 'react-native'

import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'

const Drawer = createDrawerNavigator()

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ title: 'GameZone' }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ drawerLabel: 'About', title: 'About GameZone' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
