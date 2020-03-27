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

//import {MonoText} from '../components/StyledText';

import titleGif from '../assets/images/nostalgia.gif';

import {containerStyle} from '../styles/Containers.js'

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
            allignItems: 'center',
            width: '100%'
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
              ]} onPress={() => this.props.navigation.navigate("ChapterScreen")}>
              <Text style={styles.buttonText}>> JOACA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.button, {
                  width: '40%'
                }
              ]} onPress={() => this.props.navigation.navigate("Settings")}>
              <Text style={styles.buttonText}>> SETARI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.button, {
                  width: '40%'
                }
              ]} onPress={() => this.props.navigation.navigate("Credits")}>
              <Text style={styles.buttonText}>> DESPRE</Text>
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
    width: '90%',
    height: '30%',
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
    fontFamily: 'ArcadeClassic',
    opacity: 1
  },
  buttonOnPress: {
    padding: 10,
    opacity: 0.1
  }
});
