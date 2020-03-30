import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  containerStyle
} from '../styles/Containers.js';

export default function RewardButton({title,ammount,onPress}) {
    return (<TouchableOpacity style={styles.hintButton} onPress={onPress}>
      <Text style={styles.hintButtonText}>{title}</Text>
      <Text style={styles.hintButtonText}>{ammount}💸</Text>
    </TouchableOpacity>);
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
