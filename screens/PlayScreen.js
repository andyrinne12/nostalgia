import * as React from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import GameStatusBar from '../components/GameStatusBar.js';
import RewardButton from '../components/RewardButton.js';
import {containerStyle} from '../styles/Containers.js';
import {saveUserData} from '../util/UserData.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  rgbPercent(percent) {
    var red = (percent) / 100 * 255;
    var green = (100 - percent) / 100 * 255;
    return ("rgb(" + red + "," + green + ",0)");
  }

  titleText() {
    return (
      global.songProgress[this.props.route.params.item.songID].done
      ? 'Title' + '\n' + this.props.route.params.item.title
      : '');
  }

  yearText() {
    return 'Year\n' + (
      global.songProgress[this.props.route.params.item.songID].year || global.songProgress[this.props.route.params.item.songID].done
      ? this.props.route.params.item.year
      : '!!!');
  }

  authorText() {
    return 'Author\n' + (
      global.songProgress[this.props.route.params.item.songID].author || global.songProgress[this.props.route.params.item.songID].done
      ? this.props.route.params.item.author
      : '!!!');
  }

  revealYear(ammount) {
    if(global.songProgress[this.props.route.params.item.songID].year || global.songProgress[this.props.route.params.item.songID].done){
      return;
    }
    if (global.currency < ammount) {
      alert();
    } else {
      global.currency -= ammount;
      global.songProgress[this.props.route.params.item.songID].year = true;
      saveUserData();
    }
    this.forceUpdate();
  }

  revealAuthor(ammount) {
    if(global.songProgress[this.props.route.params.item.songID].author || global.songProgress[this.props.route.params.item.songID].done){
      return;
    }
    if (global.currency < ammount) {
      Alert.alert();
    } else {
      global.currency -= ammount;
      global.songProgress[this.props.route.params.item.songID].author = true;
      saveUserData();
    }
    this.forceUpdate();
  }

  revealSong(ammount) {
    if(global.songProgress[this.props.route.params.item.songID].done){
      return;
    }
    if (global.currency < ammount) {
      Alert.alert();
    } else {
      global.currency -= ammount;
      global.songProgress[this.props.route.params.item.songID].done = true;
      saveUserData();
    }
    this.forceUpdate();
  }

  render() {
    return (<View style={[
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
            backgroundColor: 'transparent',
            flexDirection: 'row'
          }
        ]}>
        <View style={containerStyle(40, 100)}>
          <View style={[
              containerStyle(90, 90), {
                backgroundColor: 'transparent'
              }
            ]}>
            <Text style={styles.headerText}>{this.yearText()}</Text>
          </View>
        </View>
        <View style={containerStyle(20, 100)}></View>
        <View style={containerStyle(40, 100)}>
          <View style={{
              width: '90%',
              height: '90%',
              justifyContent: 'center',
              backgroundColor: 'transparent'
            }}>
            <Text style={styles.headerText}>{this.authorText()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.emojiScreen}>
        <Text style={styles.emoji}>{this.props.route.params.item.emojis}</Text>
      </View>
      <View style={containerStyle(100, 15)}>
        <TextInput style={styles.textInput} allowFontScalling={true}/></View>

      <View style={[
          containerStyle(100, 20), {}
        ]}>
        <Text style={styles.titleText}>{this.titleText()}</Text>
      </View>
      <View style={[
          containerStyle(100, 20), {
            backgrundColor: 'green',
            flexDirection: 'row'
          }
        ]}>
        <View style={[
            containerStyle(33, 100), {}
          ]}><RewardButton title='Year' ammount={5} onPress={() => {this.revealYear(5);this.forceUpdate();}} used={global.songProgress[this.props.route.params.item.songID].year || global.songProgress[this.props.route.params.item.songID].done}/></View>
        <View style={[
            containerStyle(34, 100), {}
          ]}><RewardButton title='Song' ammount={20} onPress={() => {this.revealSong(20);this.forceUpdate();}} used={global.songProgress[this.props.route.params.item.songID].done}/></View>
        <View style={[
            containerStyle(33, 100), {}
          ]}><RewardButton title='Author' ammount={10} onPress={() => {this.revealAuthor(10);this.forceUpdate();}} used={global.songProgress[this.props.route.params.item.songID].author || global.songProgress[this.props.route.params.item.songID].done}/></View>
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
  headerText: {
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  titleText: {
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    fontSize: 40,
    color: 'white'
  },
  emojiScreen: {
    ...containerStyle(96, 15),
    borderRadius: 8,
    borderWidth: 1.7,
    borderColor: '#ed34b3',
    borderStyle: 'dotted'
  },
  emoji: {
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center'
  },
  progressCircle: {
    fontFamily: 'ArcadeClassic',
    fontSize: 20,
    color: 'white'
  }
});
