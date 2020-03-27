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
  Dimensions
} from 'react-native';

import vinylImage from '../assets/images/vinyl.png';

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
      toValue: 360,
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
        0, 360
      ],
      outputRange: ['0deg', '360deg']
    });

    return (<View style={styles.mainContainer}>
      <View style={containerStyle(100, 25)}></View>
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
              fontSize: screenWidth*0.2,
              fontFamily: 'ArcadeClassic'
            }}>{this.state.albumTitle}</Text>
        </View>
      </View>
      <View style={containerStyle(100, 15)}></View>
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
