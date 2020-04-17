import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {containerStyle} from '../styles/Containers.js';
import * as Font from 'expo-font';
import {Avatar, Button, SocialIcon, ListItem, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Linking} from 'expo';
import bmEdi from '../assets/images/edi.png';
import bmVlad from '../assets/images/vlad.png';
import bmAndrei from '../assets/images/solo.png'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const list = [
  {
    name: 'Vlad Andrei Bucur',
    avatar_url: bmVlad,
    subtitle: 'Student at University of Bristol'

  }, {
    name: 'Andrei Oliviu Sologon',
    avatar_url: bmAndrei,
    subtitle: 'Student at Imperial College London'
  }, {
    name: 'George Edward Nechitoaia',
    avatar_url: bmEdi,
    subtitle: 'Student at University of Bristol'
  }
]

export default class Credits extends React.Component {

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item}) => (<ListItem title={item.name} subtitle={item.subtitle} leftAvatar={{
      source: item.avatar_url,
      title: item.name[0]
    }} bottomDivider="bottomDivider"/>)

  render() {

    return (<View style={styles.mainContainer}>
      <View style={[
          containerStyle(100, 20), {
            //   backgroundColor: 'green'
          }
        ]}>
        <Text style={{
            width: '100%',
            height: '100%',
            padding: 20,
            margin: 20,
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: screenWidth * 0.15,
            fontFamily: 'ArcadeClassic',
            color: '#ed34b3'
          }}>{'\n'}Despre noi</Text>
      </View>
      <View style={[
          containerStyle(100, 70), {
            flexDirection: 'column'
          }
        ]}>
          <TouchableOpacity style={[
              ]} onPress={() => this.props.navigation.pop(1)}>
              <Text style={styles.backFont}> {'<'} </Text>
     </TouchableOpacity>
        <View style={[
            containerStyle(80, 30), {}
          ]}>
          <Text style={styles.creditText}>All rights reserved to the authors of the songs and their record labels.</Text>
          <Text style={styles.creditText}>{'\n'}Icons made by Freepik from flaticon.com</Text>
        </View>
        <View style={[
            containerStyle(100, 20), {
              flexDirection: 'row'
            }
          ]}>
          <SocialIcon type='instagram' onPress={() => {
              //Action to perform onPress of the Icon
              Linking.openURL('https://www.instagram.com/untitledprojectuleanu/');
            }}/>
          <SocialIcon type='facebook' onPress={() => {
              //Action to perform onPress of the Icon
              Linking.openURL('https://www.facebook.com/untitledprojects20/');
            }}/>
        </View>
        <View style={[
            containerStyle(100, 50), {
              flexDirection: 'row'
            }
          ]}>
          <FlatList style={{
              height: '100%'
            }} scrollEnabled={false} keyExtractor={this.keyExtractor} data={list} renderItem={this.renderItem}/>
        </View>
      </View>

      <View style={[
          containerStyle(100, 10), {
            justifyContent: "center"
          }
        ]}>
        <Button style="style" icon={{
            name: 'inbox',
            type: 'font-awesome'
          }} onPress={() => Linking.openURL('mailto:untitledprojects20@gmail.com')} title="Contacteaza-ne pentru sugestii"/>
      </View>

    </View>);
  }
}

function OptionButton({icon, label, onPress, isLastOption}) {
  return (<RectButton style={[
      styles.option, isLastOption && styles.lastOption
    ]} onPress={onPress}>
    <View style={{
        flexDirection: 'row'
      }}>
      <View style={styles.optionIconContainer}>
        <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)"/>
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </View>
  </RectButton>);
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  },
  title: {
    alignSelf: 'center',
    width: '23%',
    height: '60%',
    backgroundColor: 'transparent'
  },
  creditText: {
    color: 'white',
    fontFamily: 'ArcadeClassic',
    textAlign: 'center',
    justifyContent:'center',
    alignSelf:'center',
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  backFont: {
    fontFamily: 'ArcadeClassic',
    color: '#ed34b3',
    fontSize: screenWidth * 0.085,
    //    backgroundColor: 'blue',
    alignSelf: 'flex-end'
  }, 
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1
  }
});
