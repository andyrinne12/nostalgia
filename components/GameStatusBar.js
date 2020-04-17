import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {containerStyle} from '../styles/Containers.js';
import musicNoteImage from '../assets/images/musical-note.png';
import moneyImage from '../assets/images/piggy-bank.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class GameStatusBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (<View style={styles.mainContainer}>
      <View style={containerStyle(40, 110)}>

        <ScoreShow ammount={global.score}/>
      </View>
      <View style={containerStyle(20, 110)}></View>
      <View style={[
          containerStyle(45, 110), {}
        ]}>
        <CurrencyShow ammount={global.currency}/>
      </View>
    </View>);
  }
}

function CurrencyShow({ammount}) {
  return (<View style={styles.currencyContainer}>
    <View style={containerStyle(65, 100)}>
      <TouchableOpacity style={styles.currencyFontContainer}>
        <Text style={styles.currencyFont}>{ammount}</Text>
      </TouchableOpacity>
    </View>
    <View style={containerStyle(30, 100)}>
      <Image style={styles.icon} source={moneyImage}/>
    </View>
  </View>);
}

function ScoreShow({ammount}) {
  const navigation = useNavigation();
  return (<View style={styles.currencyContainer}>
    <View style={containerStyle(25, 100)}>
    <TouchableOpacity style={[
              ]} onPress={() => navigation.pop(1)}>
              <Text style={styles.backFont}> {'<'} </Text>
     </TouchableOpacity>
    </View>
    <View style={containerStyle(25, 100)}>
      <TouchableOpacity style={styles.currencyFontContainer}>
        <Text style={styles.currencyFont}>{ammount}</Text>
      </TouchableOpacity>
    </View>
    <View style={containerStyle(30, 100)}>
      <Image style={styles.icon} source={musicNoteImage}/>
    </View>
  </View>);
}

export function CurrencyShow2({ammount}) {
  return (<View style={[
      styles.currencyContainer, {
        height: '75%'
      }
    ]}>
    <View style={containerStyle(70, 100)}>
      <TouchableOpacity style={styles.currencyFontContainer}>
        <Text style={[
            styles.currencyFont, {
              alignSelf: 'center'
            }
          ]}>{ammount}</Text>
      </TouchableOpacity>
    </View>
    <View style={containerStyle(30, 100)}>
      <Image style={styles.icon} source={musicNoteImage}/>
    </View>
  </View>);
}

export function CurrencyShow3({ammount}) {
  return (<View style={[
      styles.currencyContainer, {
        height: '75%'
      }
    ]}>
    <View style={containerStyle(70, 100)}>
      <TouchableOpacity style={styles.currencyFontContainer}>
        <Text style={[
            styles.currencyFont, {
              alignSelf: 'center'
            }
          ]}>{ammount}</Text>
      </TouchableOpacity>
    </View>
    <View style={containerStyle(30, 100)}>
      <Image style={styles.icon} source={moneyImage}/>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
     //  backgroundColor: 'green'
  },
  currencyContainer: {
    width: '90%',
    height: '60%',
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    //    backgroundColor: 'black'
  },
  currencyFontContainer: {
    fontFamily: 'ArcadeClassic',
    color: 'white',
    fontSize: 40,
    width: '100%',
    height: '100%',
    //    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  currencyFont: {
    fontFamily: 'ArcadeClassic',
    color: 'white',
    fontSize: screenWidth * 0.085,
    //    backgroundColor: 'blue',
    alignSelf: 'flex-end'
  },
  backFont: {
    fontFamily: 'ArcadeClassic',
    color: '#FF69B4',
    fontSize: screenWidth * 0.085,
    //    backgroundColor: 'blue',
    alignSelf: 'flex-end'
  },
  icon: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    //    backgroundColor: 'gold'
  }
});
