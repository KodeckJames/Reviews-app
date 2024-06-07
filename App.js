import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import  AppLoading  from 'expo-splash-screen';

const getFonts = () => {
  return SplashScreen.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home/>
     );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
      );
   }
  }

  


