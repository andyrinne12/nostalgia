import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {containerStyle} from '../styles/Containers.js';

export default class Credits extends React.Component {
  render() {
    return (<View style={[
        containerStyle(100, 100), {
          backgroundColor: 'cyan'
        }
      ]}>
      <Text>
        NEBUNIA LUI JUVEL
      </Text>
    </View>);
  }
}
