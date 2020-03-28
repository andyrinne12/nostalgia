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
  View,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';

import vinylImage from '../assets/images/vinyl.png';
import GameStatusBar from '../components/GameStatusBar.js';
import {containerStyle} from '../styles/Containers.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ChapterScreen extends React.Component {

  componentDidMount() {
    this.startAlbumThumbRot();
  }
  state = {
    albumThumbRotHolder: new Animated.Value(0),
    albumAnimationStop: false,
    albumTitle: "Title"
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

  render() {
    const albumThumbnailRotation = this.state.albumThumbRotHolder.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: ['0deg', '360deg']
    });

    return (<View style={styles.mainContainer}>
      {
        // Top container
      }
      <View style={[
          containerStyle(100, 20), {
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={[
            containerStyle(100, 50), {
              backgroundColor: 'transparent'
            }
          ]}>
          <GameStatusBar/>
        </View>
      </View>
      {
        // Middle container
      }
      <View style={[
          containerStyle(100, 70), {
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={containerStyle(100, 60)}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
            <AlbumThumbnail title='bla' thumbnail={vinylImage} rotation={albumThumbnailRotation}/>
            <AlbumThumbnail title='bla' thumbnail={vinylImage} rotation={albumThumbnailRotation}/>
            <AlbumThumbnail title='bla' thumbnail={vinylImage} rotation={albumThumbnailRotation}/>
            <AlbumThumbnail title='bla' thumbnail={vinylImage} rotation={albumThumbnailRotation}/>
          </ScrollView>
        </View>
        <View style={containerStyle(100, 40)}>
          <Text style={{
              width: '80%',
              height: '100%',
              padding: 20,
              margin: 20,
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: screenWidth * 0.2,
              fontFamily: 'ArcadeClassic',
              color: 'white'
            }}>{StatusBar.currentHeight}</Text>
        </View>
      </View>
      {
        // Footer
      }
      <View style={containerStyle(100, 10)}></View>
    </View>)
  }
}

function AlbumThumbnail({title, thumbnail, rotation}) {
  return (<View style={{
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Animated.Image style={[
        styles.vinylThumbnail, {
          transform: [
            {
              rotate: rotation
            }
          ]
        }
      ]} resizeMode="contain" source={thumbnail}/>
  </View>);
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  },
  vinylThumbnail: {
    padding: 20,
    margin: 20,
    height: '80%',
    width: '80%',
    alignSelf: 'center'
  }
});
