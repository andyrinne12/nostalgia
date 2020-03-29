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
import {containerStyle} from '../styles/Containers.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// max 22 emojis
const emoji1 = ['1f439', '1f422', '1f456'];

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 20
    };
  }
  componentDidMount() {}

  rgbPercent(percent) {
    var red = (percent) / 100 * 255;
    var green = (100 - percent) / 100 * 255;
    return ("rgb(" + red + "," + green + ",0)");
  }

  unicodify(code) {
    return String.fromCodePoint(parseInt(code, 16));
  }

  emojisPrint(list) {
    return list.map(code => this.unicodify(code))
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
            <Text style={styles.headerText}>Year:{"\n"}!!!</Text>
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
            <Text style={styles.headerText}>Author:{"\n"}!!!</Text>
          </View>
        </View>
      </View>
      <View style={styles.emojiScreen}>
        <Text style={styles.emoji}>{this.emojisPrint(emoji1)}</Text>
      </View>
      <View style={containerStyle(100, 15)}>
        <TextInput style={styles.textInput} allowFontScalling={true}/></View>

      <View style={[
          containerStyle(100, 20), {
          }
        ]}>
        <Text style={styles.titleText}>Title:{"\n"}!!!</Text>
      </View>
      <View style={[
          containerStyle(100, 20), {
            backgrundColor: 'green',
            flexDirection: 'row'
          }
        ]}>
        <View style={[
            containerStyle(33, 100), {}
          ]}><HintButton title='Year' ammount={5} onPress={() => {
        console.log(3)
      }}/></View>
        <View style={[
            containerStyle(34, 100), {}
          ]}><HintButton title='Song' ammount={20} onPress={() => {
        console.log(3)
      }}/></View>
        <View style={[
            containerStyle(33, 100), {}
          ]}><HintButton title='Author' ammount={10} onPress={() => {
        console.log(3)
      }}/></View>
      </View>
    </View>);
  }
}

function HintButton({title, ammount, onPress}) {
  return (<TouchableOpacity style={styles.hintButton}>
    <Text style={styles.hintButtonText}>{title}</Text>
    <Text style={styles.hintButtonText}>{ammount}💸</Text>
  </TouchableOpacity>);
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
  },
  hintButton: {
    ...containerStyle(80,50),
    borderColor: '#ed34b3',
    borderWidth: 1,
    borderRadius: 7
  },
  hintButtonText: {
    fontFamily: 'ArcadeClassic',
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});
