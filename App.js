import * as React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import ChapterScreen from './screens/ChapterScreen.js';
import SongSelectScreen from './screens/SongSelectScreen.js';
import PlayScreen from './screens/PlayScreen.js';
import Settings from './screens/Settings.js';
import Credits from './screens/Credits.js';

import {saveUserData, loadUserData} from './util/UserData.js';
import {loadData, storeData, clearAll} from './util/DataStorage.js';
import {loadSong} from './util/SoundResources.js';

const Stack = createStackNavigator();

export default function App(props) {
  StatusBar.setHidden(true);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'ArcadeClassic': require('./assets/fonts/ArcadeClassic.ttf')
        });

        //await clearAll();

        await loadUserData();

        global.currency = 100;
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log(e);
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
        <Stack.Screen name="SongSelectScreen" component={SongSelectScreen}/>
        <Stack.Screen name="PlayScreen" component={PlayScreen}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Credits" component={Credits}/>
      </Stack.Navigator>
    </NavigationContainer>);
  }
}
