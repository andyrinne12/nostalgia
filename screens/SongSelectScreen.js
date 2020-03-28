import * as React from 'react';
import * as Font from 'expo-font';
import {StyleSheet, Text, View, Dimensions, FlatList, KeyboardAvoidingView} from 'react-native';

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

const list = [
  {
    name: 'De ce plang chitarele',
    tick: true,
    emojis: '😭 🎸🎸'
  }, {
    name: 'Dragostea din tei',
    tick: false,
    emojis: '🛸❤️🌿'
  }, {
    name: 'Beau beau',
    tick: false,
    emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
  }
]

export default class SongSelectscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item}) => (<ListItem title={item.emojis} leftElement={<CheckBox
    checked = {
      item.tick
    }
    />} bottomDivider="bottomDivider"/>)

  componentDidMount() {}

  render() {
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
          containerStyle(100, 75), {

            flexDirection: 'row'
          }
        ]}>

        <FlatList keyExtractor={this.keyExtractor} data={list} renderItem={this.renderItem}/>

      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  }
});
