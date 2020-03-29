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
  StatusBar
} from 'react-native';

import vinylImage from '../assets/images/vinyl.png';
import GameStatusBar from '../components/GameStatusBar.js';
import {containerStyle} from '../styles/Containers.js';

import SongLibrary from '../constants/SongLibrary.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const library = SongLibrary();

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumThumbRotHolder: new Animated.Value(0),
      albumAnimationStop: false,
      currentAlbum: 0
    }
  }

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

  render() {
    const albumThumbnailRotation = this.state.albumThumbRotHolder.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: ['0deg', '360deg']
    });

    console.log(typeof(SongLibrary().library));

    return (<View style={styles.mainContainer}>

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

      <View style={[
          containerStyle(100, 70), {
            justifyContent: 'flex-start'
          }
        ]}>
        <View style={containerStyle(100, 60)}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={(event) => {
              this.setState({
                currentAlbum: event.nativeEvent.contentOffset.x / screenWidth
              })
            }}>
            <this.AlbumList rotation={albumThumbnailRotation}/>
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
              fontSize: screenWidth * 0.1,
              fontFamily: 'ArcadeClassic',
              color: 'white'
            }}>
            {library[this.state.currentAlbum].albumName}</Text>
        </View>
      </View>
      <View style={containerStyle(100, 10)}>
        <Text style={{
            width: '80%',
            height: '100%',
            padding: 20,
            margin: 20,
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: screenWidth * 0.07,
            fontFamily: 'ArcadeClassic',
            color: 'white'
          }}>{this.state.albumTitle}</Text>
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
    backgroundColor: '#40dbe3'
  },
  vinylThumbnail: {
    padding: 20,
    margin: 20,
    height: '80%',
    aspectRatio: 1,
    alignSelf: 'center'
  }
});
