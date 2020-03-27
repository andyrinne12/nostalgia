import * as React from 'react';
import {
  View
} from 'react-native';

export function ContainerCenter(width, height, ...props) {
  return ( <
    View {
      ...props
    }
    style = {
      {
        width: width,
        height: height,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }
    }
    />);
  }