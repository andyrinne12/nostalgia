import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  containerStyle
} from '../styles/Containers.js';

export default function RewardButton({tip,title,ammount,onPress,used}) {
    return (
      <View style={buttonStyle(used)}>
      <TouchableOpacity style={containerStyle(100,100)} onPress={onPress}>
      <Text style={styles.hintButtonText}>{title}</Text>
      {ammount > 0 && <Text style={styles.hintButtonText}>{tip}{ammount}💸</Text>}
    </TouchableOpacity>
  </View>);
  }


function buttonStyle(used){
  return {
    ...styles.hintButton,
    opacity: used ? 0.3 : 1
  }
}

const styles = StyleSheet.create({
  hintButton: {
    ...containerStyle(80, 50),
    borderColor: '#ed34b3',
    borderWidth: 1,
    borderRadius: 7
  },
  hintButtonText: {
    fontFamily: 'ArcadeClassic',
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});
