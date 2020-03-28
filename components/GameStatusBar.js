import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {containerStyle} from '../styles/Containers.js';
import musicNoteImage from '../assets/images/musical-note.png';

export default class Credits extends React.Component {
  render() {
    return (<View style={styles.mainContainer}>
      <View style={styles.currency}>
        <Text style={styles.currencyFont}>20</Text>
        <Image style={styles.icon} source={musicNoteImage}/>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '30%',
    height: '85%',
    justifyContent: 'center'
  },
  currency: {
    flexDirection: 'row',
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  currencyFont: {
    flex: 5,
    fontFamily: 'ArcadeClassic',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  icon: {
    flex: 2,
    resizeMode: 'contain',
    aspectRatio: 1
  }
});
