import * as React from 'react';
import * as Font from 'expo-font';
import {
  Image,
  Button,
  ImageBackground,
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  Share,
  Alert
} from 'react-native';

import {AdMobRewarded, AdMob} from 'expo-ads-admob';

import vinylImage from '../assets/images/vinyl.png';
import GameStatusBar from '../components/GameStatusBar.js';
import {CurrencyShow2, CurrencyShow3} from '../components/GameStatusBar.js';
import RewardButton from '../components/RewardButton.js';
import {containerStyle} from '../styles/Containers.js';

import SongLibrary from '../constants/SongLibrary.js';
import {saveUserData} from '../util/UserData.js';
import {CURRENCY_PER_VIDEO} from '../constants/Currency.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const library = SongLibrary();

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumThumbRotHolder: new Animated.Value(0),
      albumAnimationStop: false,
      currentAlbum: 0,
      adLoaded: false,
      isMounted: false
    }
  }

  changeCurrentAlbum(offset) {
    var album = parseInt(offset / screenWidth);
    if (album < 0) {
      album = 0;
    }
    if (album > library.albums.length - 1) {
      album = library.albums.length - 1;
    }
    this.setState({currentAlbum: album});
  }

  async onShare() {
    try {
      const result = await Share.share({message: 'http://onelink.to/nostalgia'});

      if (result.action === Share.sharedAction && result.activityType != 'com.facebook.Messenger.ShareExtension') {
        // Share successful
        console.log(result.activityType);
      } else if (result.action === Share.dismissedAction) {
        // Share failed
      }
    } catch (error) {
      console.log(error);
    }
  };

  async openRewardedAd() {
    if (!this.state.adLoaded) {
      return;
    }

    try {
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    
    if (Platform.OS === 'ios') {
      AdMobRewarded.setAdUnitID('ca-app-pub-8698887398220178/3275562421');
    } else if (Platform.OS === 'android') {
      AdMobRewarded.setAdUnitID('ca-app-pub-8698887398220178/4317181356');
    }
    this.isMounted = true;
    //  AdMobRewarded.setAdUnitID('ca-app-pub-8698887398220178/4317181356');
    //  AdMobRewarded.setTestDeviceID("E45AB38F5846E4CA21DAE91BB9D7E4B1");

    //   AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    // AdMobRewarded.setTestDeviceID("EMULATOR");

    AdMobRewarded.requestAdAsync();
    this.startAlbumThumbRot();
    this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
      if (this.state.adLoaded) {
        global.currency += CURRENCY_PER_VIDEO;
        this.setState({adLoaded: false});
        saveUserData();
        this.forceUpdate();
      }
    });
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => {
      this.setState({adLoaded: true});
      this.forceUpdate();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
      AdMobRewarded.requestAdAsync();
    });

    AdMobRewarded.addEventListener('rewardedVideoDidOpen', () => {
    });

    AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
      this.setState({adLoaded: false});
      AdMobRewarded.requestAdAsync();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidStart', () => {
    });
    AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => {});
    
  }

  componentWillUnmount() { 
   // if(this.isMounted){
      AdMobRewarded.removeAllListeners();
      this.isMounted = false;
   // }
  }

  AlbumList = ({rotation}) => {
    return (library.albums.map((album, index) => <AlbumThumbnail key={album.id} title={album.title} thumbnail={vinylImage} rotation={rotation} press={() => {
        this.albumClick(album.id);
      }} unlocked={global.albumsUnlocked[album.id]}/>));
  }

  albumClick(id) {
    if (global.albumsUnlocked[id]) {
      const album = library.albums[id];
      this.props.navigation.navigate('SongSelectScreen', {album});
    } else {
      const ammount = library.albums[id].price;
      const score = library.albums[id].score_price;
      Alert.alert('Esti sigur ca vrei sa deblochezi albumul?', 'Vei cheltui ' + ammount + ' banuti', [
        {
          text: 'Da',
          onPress: () => {
            if (global.currency < ammount) {
              this.noMoneyAlert();
              return;
            }
            if (global.score < score) {
              this.noScoreAlert();
              return;
            }
            global.currency -= ammount;
            global.albumsUnlocked[id] = true;
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

  startAlbumThumbRot() {
    this.state.albumThumbRotHolder.setValue(0);
    Animated.timing(this.state.albumThumbRotHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => {
      this.startAlbumThumbRot()
    });
  }

  noMoneyAlert() {
    Alert.alert('Hopa', 'Nu mai ai bani', [
      {
        text: 'Bag un video',
        onPress: () => {
          this.openRewardedAd();
        }
      }, {
        text: 'Raman sarac',
        style: 'cancel'
      }
    ], {cancelable: false});
    this.forceUpdate();
  }

  noScoreAlert() {
    Alert.alert('Hopa', 'Nu ai ghicit destule piese', [
      {
        text: 'Bag un video',
        onPress: () => {
          this.openRewardedAd();
        }
      }, {
        text: 'Inapoi',
        style: 'cancel'
      }
    ], {cancelable: false});
    this.forceUpdate();
  }

  songsCompleted(album) {
    const tracks = library.albums[album].tracks;
    return tracks.filter((song) => global.songProgress[song.id].done == true).length;
  }

  render() {
    const albumThumbnailRotation = this.state.albumThumbRotHolder.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: ['0deg', '360deg']
    });

    return (<View style={styles.mainContainer}>

      <View style={[
          containerStyle(100, 10), {
            justifyContent: 'flex-start',
            
          }
        ]}>
        <View style={[
            containerStyle(100, 100), {
              backgroundColor: 'transparent', 
              //backgroundColor: 'blue'
            }
          ]}>
            
          <GameStatusBar />
        </View>
      </View>

      <View style={[
          containerStyle(100, 70), {
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={containerStyle(100, 15)}>
          {
            global.albumsUnlocked[this.state.currentAlbum] == false
              ? <View style={[
                    containerStyle(100, 100), {
                      flexDirection: 'row'
                    }
                  ]}>
                  <View style={containerStyle(40, 100)}>
                    <Text style={{
                        fontFamily: 'ArcadeClassic',
                        fontSize: 28,
                        color: 'white'
                      }}>Cerinte:
                    </Text>
                  </View>
                  <View style={containerStyle(30, 100)}>
                    <View style={containerStyle(100, 100)}>
                      <CurrencyShow3 style={{
                          alignSelf: 'center'
                        }} ammount={library.albums[this.state.currentAlbum].price}/>
                    </View>
                  </View>
                  <View style={containerStyle(30, 100)}>
                    <View style={containerStyle(100, 100)}>
                      <CurrencyShow2 style={{
                          alignSelf: 'center'
                        }} ammount={library.albums[this.state.currentAlbum].score_price}/>
                    </View>
                  </View>
                </View>
              : <View>
                  <Text style={{
                      width: '80%',
                      height: '100%',
                      textAlignVertical: "center",
                      textAlign: "center",
                      fontSize: screenWidth * 0.085,
                      fontFamily: 'ArcadeClassic',
                      color: 'white'
                    }}>Ghicite: {this.songsCompleted(this.state.currentAlbum)}/{library.albums[this.state.currentAlbum].tracks.length}</Text>
                </View>

          }
        </View>
        <View style={containerStyle(100, 65)}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={(event) => {
              this.changeCurrentAlbum(event.nativeEvent.contentOffset.x);
            }
}>
            <this.AlbumList rotation={albumThumbnailRotation}/>
          </ScrollView>
        </View>
        <View style={containerStyle(100, 20)}>
          <Text style={{
              width: '80%',
              height: '100%',
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: screenWidth * 0.1,
              fontFamily: 'ArcadeClassic',
              color: 'white'
            }}>
            {library.albums[this.state.currentAlbum].title}</Text>
        </View>
      </View>
      <View style={[
          containerStyle(100, 20), {
            flexDirection: 'row'
          }
        ]}>
        <View style={containerStyle(50, 100)}>
          <RewardButton title='Distribuie' ammount={0} used={false} onPress={() => {
              this.onShare();
            }}/>
        </View>
        <View style={containerStyle(50, 100)}>
          <RewardButton tip='+' title={this.state.adLoaded
              ? 'Video Ad'
              : 'Se incarca...'} ammount={CURRENCY_PER_VIDEO} used={!this.state.adLoaded} disabled={!this.state.adLoaded} onPress={() => {
              this.openRewardedAd();
            }}/>
        </View>
      </View>
    </View>);
  }
}
function AlbumThumbnail({title, thumbnail, rotation, press, unlocked}) {
  return (<View style={{
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: unlocked
        ? 1
        : 0.2
    }}>
    <TouchableOpacity onPress={press} activeOpacity={0.5}>
      <Animated.Image style={[
          styles.vinylThumbnail, {
            transform: [
              {
                rotate: unlocked
                  ? rotation
                  : '0deg'
              }
            ]
          }
        ]} resizeMode="contain" source={thumbnail}/>
    </TouchableOpacity>
  </View>);
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3',
    justifyContent: 'flex-start'
  },
  vinylThumbnail: {
    padding: 20,
    margin: 20,
    height: '80%',
    aspectRatio: 1,
    alignSelf: 'center'
  }
});
