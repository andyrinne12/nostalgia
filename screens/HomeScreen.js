import * as React from 'react';
import * as Font from 'expo-font';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import {MonoText} from '../components/StyledText';

import LinksScreen from './LinksScreen.js';
import Settings from './Settings.js';
import Credits from './Credits.js';

import titleGif from '../assets/images/nostalgia.gif';
import robot from '../assets/images/robot-dev.png';

export default class HomeScreen extends React.Component {
  render() {
    return (<View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#40dbe3'
      }}>
      <View style={styles.container}>
        <View style={{
            flex: 2,
            justifyContent: 'center',
            allignItems: 'center'
          }}>
          <Image style={styles.title} source={titleGif}/>
        </View>
        <View style={{
            flex: 4,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{
              width: '100%',
              height: '35%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <TouchableOpacity style={[
                styles.button, {
                  width: '40%'
                }
              ]} onPress={() => this.props.navigation.navigate(LinksScreen)}>
              <Text style={styles.buttonText}>JOACA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.button, {
                  width: '40%'
                }
              ]} onPress={() => this.props.navigation.navigate(Settings)}>
              <Text style={styles.buttonText}>SETARI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.button, {
                  width: '40%'
                }
              ]} onPress={() => this.props.navigation.navigate(Credits)}>
              <Text style={styles.buttonText}>DESPRE NOI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>)
  }
}
HomeScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    alignSelf: 'center',
    width: 300,
    height: 100,
    backgroundColor: 'transparent'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    opacity: 1
  },
  buttonText: {
    fontSize: 20,
    color: '#ed34b3',
    fontFamily: 'ArcadeClassic'
  },
  buttonOnPress: {
    padding: 10,
    opacity: 0.1
  }
});
