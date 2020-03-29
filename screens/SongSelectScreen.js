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

//import Checkbox from '@material-ui/core/Checkbox';
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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const list = {
  title: 'Vara manelelor 2011',
  tracks: [
    {
      name: 'De ce plang chitarele',
      tick: true,
      emojis: '😭 🎸🎸',
      author: 'Nicolae Guta'
    }, {
      name: 'Dragostea din tei',
      tick: false,
      emojis: '🛸❤️🌿'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }, {
      name: 'Beau beau',
      tick: false,
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }
  ]
}
export default class SongSelectscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item}) => (<ListItem containerStyle={styles.listItem} titleStyle={{
      textAlign: 'center'
    }} title={item.emojis} bottomDivider={true}/>)

  renderItem = ({item}) => {
    if (!item.tick) {
      return (<ListItem containerStyle={styles.listItem} titleStyle={{
          textAlign: 'center'
        }} title={item.emojis} bottomDivider={true}/>)
    } else {
      return (<ListItem containerStyle={styles.listItem} titleStyle={{
          fontFamily: 'ArcadeClassic',
          fontSize: 18,
          color: 'white'
        }} leftElement={<Tick tick='*'/>} title={item.name} subtitleStyle={{
          fontFamily: 'ArcadeClassic',
          fontSize: 17,
          color: 'white'
        }} subtitle={item.author} bottomDivider={true}/>)
    }
  }

  componentDidMount() {}

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
        <ListHeader title={list.title}/></View>
      <View style={[
          containerStyle(95, 80), {
            flexDirection: 'row'
          }
        ]}>
        <FlatList showsVerticalScrollIndicator={false} keyExtractor={this.keyExtractor} style={{
            borderColor: 'white',
            borderVertical: 2,
            width: '95%'
          }} data={list.tracks} renderItem={this.renderItem}/>
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
