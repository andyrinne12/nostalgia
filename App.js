import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="LinksScreen" component={LinksScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}
