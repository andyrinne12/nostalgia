import * as React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import {containerStyle} from '../styles/Containers.js';
import musicNoteImage from '../assets/images/musical-note.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Credits extends React.Component {
  state = {
    score: 2020,
    currency: 69420
  }

  render() {
    return (<View style={styles.mainContainer}>
      <View style={containerStyle(40, 100)}>
        <CurrencyShow ammount={this.state.currency}/>
      </View>
      <View style={containerStyle(20, 100)}></View>
      <View style={[
          containerStyle(40, 100), {}
        ]}>
        <CurrencyShow ammount={this.state.score}/>
      </View>
    </View>);
  }
}

function CurrencyShow({ammount}) {
  return (<View style={styles.currencyContainer}>
    <View style={containerStyle(70, 100)}>
      <Text style={styles.currencyFont} allowFontScaling={true} adjustsFontSizeToFit={true}>{ammount}</Text>
    </View>
    <View style={containerStyle(30, 100)}>
      <Image style={styles.icon} source={musicNoteImage}/>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  currencyContainer: {
    width: '90%',
    height: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  currencyFont: {
    width: '100%',
    height: '100%',
    fontFamily: 'ArcadeClassic',
    textAlign: 'right',
    textAlignVertical: "center",
    color: 'white',
    fontSize: 27
  },
  icon: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  }
});
