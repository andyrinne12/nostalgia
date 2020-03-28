import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View, Dimensions} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import ChapterScreen from './screens/ChapterScreen.js';
import Settings from './screens/Settings.js';
import Credits from './screens/Credits.js';

import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {
  StatusBar.setHidden(true);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'ArcadeClassic': require('./assets/fonts/ArcadeClassic.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (<NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ChapterScreen" component={ChapterScreen}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Credits" component={Credits}/>
      </Stack.Navigator>
    </NavigationContainer>);
  }
}
