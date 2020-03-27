import * as React from 'react';
import * as Font from 'expo-font';
import {
  Image,
  ImageBackground,
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import vinylImage from '../assets/images/vinyl.png';

import {containerStyle} from '../styles/Containers.js'

export default class ChapterScreen extends React.Component {
  constructor() {
    super();
    this.albumThumbRotHolder = new Animated.Value(0);
  }
  componentDidMount() {
    this.startAlbumThumbRot();
  }

  startAlbumThumbRot(){
    this.albumThumbRotHolder.setValue(0);
    Animated.timing(this.albumThumbRotHolder, {
      toValue: 20,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.startAlbumThumbRot());
  }

  render() {
    const albumThumbnailRotation = this.albumThumbRotHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (<View style={styles.mainContainer}>
      <View style={containerStyle(100, 25)}></View>
      <View style={[
          containerStyle(100, 50), {
            backgroundColor: 'cyan'
          }
        ]}>
        <Animated.Image style={[
            albumThumbnail(50, 50), {
              transform: [
                {
                  rotate: albumThumbnailRotation
                }
              ]
            }
          ]} resizeMode="contain" source={vinylImage}/>
      </View>
      <View style={containerStyle(100, 25)}></View>
    </View>)
  }
}

const albumThumbnail = function(width, height) {
  return {height: height.toString().concat("%"), width: width.toString().concat("%")}
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  }
});
