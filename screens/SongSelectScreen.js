import * as React from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';

import SongLibrary from '../constants/SongLibrary.js';
import GameStatusBar from '../components/GameStatusBar.js';
import {containerStyle} from '../styles/Containers.js';

import {
  Avatar,
  Button,
  SocialIcon,
  ListItem,
  Badge,
  CheckBox
} from 'react-native-elements';

const library = SongLibrary();

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SongSelectscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyExtractor = (song) => song.id;

  renderItem = ({item}) => {
    const id = item.id;
    const track = library.tracks[id];
    if (!global.songProgress[id].done) {
      return (<ListItem containerStyle={styles.listItem} titleStyle={{
          textAlign: 'center'
        }} title={track.emojis} bottomDivider={true} onPress={() => {
          this.props.navigation.navigate('PlayScreen', {track});
        }}/>);
    } else {
      return (<ListItem containerStyle={styles.listItem} titleStyle={{
          fontFamily: 'ArcadeClassic',
          fontSize: 18,
          color: 'white'
        }} leftElement={<Tick tick = '*' />} title={track.title} subtitleStyle={{
          fontFamily: 'ArcadeClassic',
          fontSize: 17,
          color: 'white'
        }} subtitle={track.author} bottomDivider={true} onPress={() => {
          this.props.navigation.navigate('PlayScreen', {track});
        }}/>);
    }
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
  };

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
              backgroundColor: 'transparent'
            }
          ]}>
          <GameStatusBar/>
        </View>
      </View>

      <View style={[
          containerStyle(100, 10), {}
        ]}>
        <ListHeader title={this.props.route.params.album.title}/></View>
      <View style={[
          containerStyle(95, 80), {
            flexDirection: 'row'
          }
        ]}>
        <FlatList pagingEnabled={true} showsVerticalScrollIndicator={false} keyExtractor={this.keyExtractor} style={{
            borderColor: 'white',
            borderVertical: 2,
            width: '95%'
          }} data={this.props.route.params.album.tracks} renderItem={this.renderItem}/>
      </View>
    </View>);
  }
}

function ListHeader({title}) {
  return (<View style={styles.listHeader}>
    <Text style={styles.listHeaderText}>{title}</Text>
  </View>);
}

function Tick({tick}) {
  return (<View style={{
      height: '100%',
      width: '15%',
      justifyContent: 'center'
    }}>
    <Text style={styles.tick}>{tick}</Text>
  </View>);
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  },
  listItem: {
    backgroundColor: '#68e6ed',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    width: '100%',
    height: 60,
    alignSelf: 'center'
  },
  listHeader: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 7,
    borderColor: 'white',
    justifyContent: 'center'
  },
  listHeaderText: {
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  tick: {
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
});
