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
import {AdMobRewarded} from 'expo-ads-admob';

import vinylImage from '../assets/images/vinyl.png';
import GameStatusBar from '../components/GameStatusBar.js';
import {CurrencyShow2} from '../components/GameStatusBar.js';
import RewardButton from '../components/RewardButton.js';
import {containerStyle} from '../styles/Containers.js';

import SongLibrary from '../constants/SongLibrary.js';
import {saveUserData} from '../util/UserData.js';

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
      adLoaded: false
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
      const result = await Share.share({
        message: 'Mare joc aici cu melodii frumoase'
      }, {
        excludedActivityTypes: [

          //'com.facebook.Messenger.ShareExtension',
          //"com.apple.UIKit.activity.PostToTwitter",
          //"com.apple.UIKit.activity.Mail",
          //'com.apple.UIKit.activity.Print',
          //'com.apple.UIKit.activity.CopyToPasteboard',
          //'com.apple.UIKit.activity.AssignToContact',
          //'com.apple.UIKit.activity.SaveToCameraRoll',
          //  'com.apple.UIKit.activity.AddToReadingList',
          //  'com.apple.UIKit.activity.PostToFlickr',
          //  'com.apple.UIKit.activity.PostToVimeo',
          //  'com.apple.UIKit.activity.PostToTencentWeibo',
          //  'com.apple.UIKit.activity.AirDrop',
          //  'com.apple.UIKit.activity.OpenInIBooks',
          //  'com.apple.UIKit.activity.MarkupAsPDF',
          //  'com.apple.reminders.RemindersEditorExtension',
          //  'com.apple.mobilenotes.SharingExtension',
          //  'com.apple.mobileslideshow.StreamShareService',
          //  'com.linkedin.LinkedIn.ShareExtension',
          //  'pinterest.ShareExtension',
          //  'com.google.GooglePlus.ShareExtension',
          //  'com.tumblr.tumblr.Share-With-Tumblr',
          //  'net.whatsapp.WhatsApp.ShareExtension',
        ]
      });

      if (result.action === Share.sharedAction && result.activityType != 'com.facebook.Messenger.ShareExtension') {
        //AICI DACA S A REUSIT SHARE UL
        console.log(result.activityType);
      } else if (result.action === Share.dismissedAction) {
        //AICI DACA S A OPRIT
      }
    } catch (error) {
      //AICI DACA A DAT EROARE
      alert(error.message);
    }
  };

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

  componentDidMount() {
//    AdMobRewarded.setTestDeviceID("E45AB38F5846E4CA21DAE91BB9D7E4B1");
//    AdMobRewarded.setAdUnitID('ca-app-pub-8698887398220178/4317181356');

//    AdMobRewarded.requestAdAsync();
    this.startAlbumThumbRot();
    this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
      this.rewardUser();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => {
      this.setState({adLoaded: true});
      this.forceUpdate();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
      AdMobRewarded.requestAdAsync();
    });
    AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
      AdMobRewarded.requestAdAsync();
    });
  }

  AlbumList = ({rotation}) => {
    return (library.albums.map((album, index) => <AlbumThumbnail key={album.id} title={album.title} thumbnail={vinylImage} rotation={rotation} press={() => {
        this.albumClick(album.id);
      }} unlocked={global.albumsUnlocked[album.id]}/>));
  }

  albumClick(id){
    if(global.albumsUnlocked[id]){
      const album = library.albums[id];
      this.props.navigation.navigate('SongSelectScreen', {album});
    }
    else {
      const ammount = library.albums[id].price;
      Alert.alert('Esti sigur ca vrei sa deblochezi albumul?', 'Vei cheltui '+ ammount +' banuti', [
        {
          text: 'Da',
          onPress: () => {
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

  songsCompleted(album){
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
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={[
            containerStyle(100, 100), {
              backgroundColor: 'transparent'
            }
          ]}>
          <GameStatusBar/>
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
              ? <View style={containerStyle(30, 100)}>
                  <CurrencyShow2 style={{
                      alignSelf: 'center'
                    }} ammount={library.albums[this.state.currentAlbum].price}/>
                </View>
              : <View><Text style={{
                  width: '80%',
                  height: '100%',
                  textAlignVertical: "center",
                  textAlign: "center",
                  fontSize: screenWidth * 0.085,
                  fontFamily: 'ArcadeClassic',
                  color: 'white'
                }}>Completed: {this.songsCompleted(this.state.currentAlbum)}/{library.albums[this.state.currentAlbum].tracks.length}</Text></View>

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
          <RewardButton title='Share' used={false} onPress={() => {
              this.onShare();
            }}/>
        </View>
        <View style={containerStyle(50, 100)}>
          <RewardButton title={this.state.adLoaded
              ? 'Video Ad'
              : 'Se incarca...'} ammount={'+10'} used={!this.state.adLoaded} disabled={!this.state.adLoaded} onPress={() => {
              this.openRewardedAd();
            }}/>
        </View>
      </View>
    </View>);
  }
}
function AlbumThumbnail({title, thumbnail, rotation, press,unlocked}) {
  return (<View style={{
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: unlocked ? 1 : 0.2
    }}>
    <TouchableOpacity onPress={press} activeOpacity={0.5}>
      <Animated.Image style={[
          styles.vinylThumbnail, {
            transform: [
              {
                rotate: unlocked ? rotation : '0deg'
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
