import * as React from 'react';
import * as Font from 'expo-font';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import GameStatusBar from '../components/GameStatusBar.js';
import {containerStyle} from '../styles/Containers.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ChapterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          containerStyle(100, 80), {
            justifyContent: 'flex-start'
          }
        ]}>
        <Text>TODO</Text>
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
