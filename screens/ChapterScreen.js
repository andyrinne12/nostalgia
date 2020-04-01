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
  Share
} from 'react-native';

import {
  AdMobRewarded,
} from 'expo'

import vinylImage from '../assets/images/vinyl.png';
import GameStatusBar from '../components/GameStatusBar.js';
import RewardButton from '../components/RewardButton.js';
import {containerStyle} from '../styles/Containers.js';

import SongLibrary from '../constants/SongLibrary.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const library = SongLibrary();

AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
AdMobRewarded.setTestDeviceID('EMULATOR');

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumThumbRotHolder: new Animated.Value(0),
      albumAnimationStop: false,
      currentAlbum: 0
    }
  }

   onShare = async () => {
    try {
      const result =
      await Share.share(
      {
        message:
          'Mare joc aici cu melodii frumoase',
      },
      {
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
        ],
      }
      );


      if (result.action === Share.sharedAction && result.activityType !='com.facebook.Messenger.ShareExtension') {
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

  componentDidMount() {
    this.startAlbumThumbRot();
  }

  AlbumList = ({rotation}) => {
    return (library.map((album, index) => <AlbumThumbnail key={album.albumID} title='album.albumTitle' thumbnail={vinylImage} rotation={rotation} press={() => {
        this.props.navigation.navigate('SongSelectScreen', {album})
      }}/>));
  }

  startAlbumThumbRot() {
    this.state.albumThumbRotHolder.setValue(0);
    Animated.timing(this.state.albumThumbRotHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => {
      if (!this.state.albumAnimationStop)
        this.startAlbumThumbRot()
    });
  }

  albumClick() {
    this.setState({albumTitle: 'puya'})
  }

  _openRewarded = async () => {
    try {
      await AdMobRewarded.requestAdAsync()
      await AdMobRewarded.showAdAsync()
    } catch (error) {
      console.error(error)
    } 
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
        <View style={containerStyle(100, 80)}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={(event) => {
              this.setState({
                currentAlbum: event.nativeEvent.contentOffset.x / screenWidth
              })
            }}>
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
            {library[this.state.currentAlbum].albumName}</Text>
        </View>
      </View>
      <View style={[containerStyle(100, 20),{flexDirection:'row'}]}>
        <View style={containerStyle(50,100)}>
        <RewardButton title='Share' ammount={'+5'} used={false} onPress={this.onShare}/>
        </View>
        <View style={containerStyle(50,100)}>
        <RewardButton title='Video   Ads' ammount={'+10'} used={false} onPress={() => {this._openRewarded}}/>
        </View>
      </View>
    </View>);
  }
}
function AlbumThumbnail({title, thumbnail, rotation, press}) {
  return (<View style={{
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <TouchableOpacity onPress={press} activeOpacity={0.5}>
      <Animated.Image style={[
          styles.vinylThumbnail, {
            transform: [
              {
                rotate: rotation
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
