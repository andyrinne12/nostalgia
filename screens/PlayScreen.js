import * as React from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  BackHandler
} from 'react-native';
import {Audio} from 'expo-av';
import {AdMobRewarded} from 'expo-ads-admob';

import {Icon} from 'react-native-elements';
import GameStatusBar from '../components/GameStatusBar.js';
import RewardButton from '../components/RewardButton.js';
import {containerStyle} from '../styles/Containers.js';
import {saveUserData} from '../util/UserData.js';
import FuzzySet from 'fuzzyset';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const guessThreshold = 0.75;

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
      this.state.toGuess = FuzzySet([this.props.route.params.track.title]);
    });
    this.props.navigation.addListener('blur', () => {
      global.songFiles[this.props.route.params.track.id].stopAsync();
    })
    //  BackHandler.addEventListener('hardwareBackPress', () => {global.songFiles[this.props.route.params.track.id].stopAsync()});
  };

  updateText(text) {
    if (this.state.toGuess == null || (typeof this.state.toGuess === 'undefined')) {
      this.state.toGUess = FuzzySet([this.props.route.params.track.title]);
    }
    const res = this.state.toGuess.get(text);
    if (res == null) {
      return;
    }
    this.state.progress = parseInt((res[0][0] / guessThreshold) * 100);
    if (this.state.progress > 100) {
      this.state.progress = 100;
    }
    if (this.state.progress == 100) {
      this.guessed();
    }
    this.forceUpdate();
  }

  async openRewardedAd() {
    console.log('pressed');
    try {
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    }
  };

  guessed() {
    global.songProgress[this.props.route.params.track.id].done = true;
    this.playSong();
  };

  async playSong() {
    const status = await global.songFiles[this.props.route.params.track.id].getStatusAsync();
    await global.songFiles[this.props.route.params.track.id].stopAsync();
    if (status.isPlaying == false) {
      await global.songFiles[this.props.route.params.track.id].playAsync();
    }
  }

  async openRewardedAd() {
    console.log('pressed');
    try {
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    }
  };

  rewardUser() {
    global.currency += 20;
    saveUserData();
    this.forceUpdate();
  }

  rgbPercent(percent) {
    if (percent < 50) {
      return ("rgb(" + 255 + "," + percent / 50 * 255 + ",0)");
    } else {
      return ("rgb(" + 255 * (100 - percent) / 50 + "," + 255 + ",0)");
    }
  }

  titleText() {
    return (
      global.songProgress[this.props.route.params.track.id].done
      ? 'Titlu' + '\n' + this.props.route.params.track.title
      : '');
  }

  yearText() {
    return 'An\n' + (
      global.songProgress[this.props.route.params.track.id].year || global.songProgress[this.props.route.params.track.id].done
      ? this.props.route.params.track.year
      : '???');
  }

  authorText() {
    return 'Autor\n' + (
      global.songProgress[this.props.route.params.track.id].author || global.songProgress[this.props.route.params.track.id].done
      ? this.props.route.params.track.author
      : '???');
  }

  revealYear(ammount) {
    if (global.songProgress[this.props.route.params.track.id].year || global.songProgress[this.props.route.params.track.id].done) {
      return;
    }
    if (global.currency < ammount) {
      this.noMoneyAlert();
    } else {
      Alert.alert('Esti sigur ca vrei sa deblochezi anul?', 'Vei cheltui '+ammount+' banuti', [
        {
          text: 'Da',
          onPress: () => {
            global.currency -= ammount;
            global.songProgress[this.props.route.params.track.id].year = true;
            saveUserData();
            this.forceUpdate();
          }
        }, {
          text: 'Nu',
          style: 'cancel'
        }
      ], {cancelable: true});
    }
    this.forceUpdate();
  }

  revealAuthor(ammount) {
    if (global.songProgress[this.props.route.params.track.id].author || global.songProgress[this.props.route.params.track.id].done) {
      return;
    }
    if (global.currency < ammount) {
      this.noMoneyAlert();
    } else {
      Alert.alert('Esti sigur ca vrei sa deblochezi autorul?', 'Vei cheltui '+ammount+' banuti', [
        {
          text: 'Da',
          onPress: () => {
            global.currency -= ammount;
            global.songProgress[this.props.route.params.track.id].author = true;
            saveUserData();
            this.forceUpdate();
          }
        }, {
          text: 'Nu',
          style: 'cancel'
        }
      ], {cancelable: true});
    }
  }

  revealSong(ammount) {
    if (global.songProgress[this.props.route.params.track.id].done) {
      return;
    }
    if (global.currency < ammount) {
      this.noMoneyAlert();
    } else {
      Alert.alert('Esti sigur ca vrei sa deblochezi piesa?', 'Vei cheltui '+ammount+' banuti', [
        {
          text: 'Da',
          onPress: () => {
            global.currency -= ammount;
            global.songProgress[this.props.route.params.track.id].done = true;
            saveUserData();
            this.forceUpdate();
          }
        }, {
          text: 'Nu',
          style: 'cancel'
        }
      ], {cancelable: true});
    }
    this.forceUpdate();
  }

  noMoneyAlert() {
    Alert.alert('Hopa', 'Nu mai ai bani', [
      {
        text: 'Bag un video',
        onPress: () => {this.openRewardedAd();}
      }, {
        text: 'Raman sarac',
        style: 'cancel'
      }
    ], {cancelable: false});
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
        <View style={containerStyle(20, 100)}>{
            global.songProgress[this.props.route.params.track.id].done == false
              ? <Icon raised={true} name='music' type='font-awesome' color={this.rgbPercent(this.state.progress)} style={{
                    backgrundColor: 'transparent'
                  }}/>
              : <Icon raised={true} name='play' type='font-awesome' color='green' style={{
                    backgrundColor: 'transparent'
                  }} onPress={() => this.playSong()}/>
          }</View>
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
        <Text style={styles.emoji}>{this.props.route.params.track.emojis}</Text>
      </View>
      <View style={containerStyle(100, 15)}>
        {
          global.songProgress[this.props.route.params.track.id].done == false && <TextInput style={styles.textInput} allowFontScalling={true} onChangeText={(text) => {
                this.updateText(text);
              }}/>
        }</View>

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
          ]}><RewardButton title='An' ammount={5} onPress={() => {
        this.revealYear(5);
      }} used={global.songProgress[this.props.route.params.track.id].year || global.songProgress[this.props.route.params.track.id].done}/></View>
        <View style={[
            containerStyle(34, 100), {}
          ]}><RewardButton title='Piesa' ammount={20} onPress={() => {
        this.revealSong(20);
      }} used={global.songProgress[this.props.route.params.track.id].done}/></View>
        <View style={[
            containerStyle(33, 100), {}
          ]}><RewardButton title='Autor' ammount={10} onPress={() => {
        this.revealAuthor(10);
      }} used={global.songProgress[this.props.route.params.track.id].author || global.songProgress[this.props.route.params.track.id].done}/></View>
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
