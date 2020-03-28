import * as React from 'react';
import * as Font from 'expo-font';
import {StyleSheet, Text, View, Dimensions, TextInput,KeyboardAvoidingView} from 'react-native';

import GameStatusBar from '../components/GameStatusBar.js';
import {containerStyle} from '../styles/Containers.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={[
        styles.mainContainer, {
          justifyContent: 'flex-start'
        }
      ]}>

      <View style={[
          containerStyle(100, 10), {
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={[
            containerStyle(100, 100), {
              justifyContent: 'flex-start'
            }
          ]}>
          <GameStatusBar/>
        </View>
      </View>
      <View style={[
          containerStyle(100, 20), {
            backgroundColor: 'transparent'
          }
        ]}>
        <Text style={styles.titleText}>TITLE: ! AUTHOR: !</Text>
      </View>

      <View style={styles.emojiScreen}>
          </View>
      <View style={containerStyle(100,15)}>
          <TextInput style={styles.textInput} allowFontScalling={true}/></View>

      <View style={[
          containerStyle(100, 25), {
            //      backgroundColor: 'cyan'
          }
        ]}>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  },
  textInput: {
    backgroundColor: 'white',
    //color: 'black',
    color: '#00bfff',
    width: '60%',
    borderRadius: 9,
    textAlign: 'center',
    height: 35,
    fontSize: 22,
    fontFamily: 'ArcadeClassic'
  },
  titleText: {
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    fontSize: 35,
    color: 'white'
  },
  emojiScreen: {
    ...containerStyle(96, 15),
    borderRadius: 8,
    borderWidth: 3.5,
    borderColor: '#ed34b3',
    borderStyle: 'dotted'
  }
});
