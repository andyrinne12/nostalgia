import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { containerStyle } from '../styles/Containers.js';
import * as Font from 'expo-font';
import { Avatar, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default class Credits extends React.Component {



  render() {

    return (
      <View style={styles.mainContainer}>
        {
          // Top container

        }

        <View style={[
          containerStyle(100, 5), {
            //navbar
          }]}>
        </View>

        <View style={[
          containerStyle(100, 15), {
            backgroundColor: 'green'
          }]}>
          {//title 
          }
          <Text style={{
            width: '100%',
            height: '100%',
            padding: 20,
            margin: 20,
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: screenWidth * 0.15,
            fontFamily: 'ArcadeClassic',
            color: 'pink'
          }}>Despre noi</Text>
        </View>


        <View style={[
          containerStyle(100, 70), {
            backgroundColor: 'purple',
            flexDirection: 'row'
          }]}>

          <SocialIcon
            type='instagram'
          />

          <SocialIcon
            type='facebook'
          />
          <SocialIcon
            type='twitter'
          />
<Text>Mai vedem.</Text>

        </View>



        <View style={[
          containerStyle(100, 15), {
            backgroundColor: 'blue'
          }]}>
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="yellow"
              />
            }
            title="da si tu un leu"
          />
        </View>

      </View>

    );
  }
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    ...containerStyle(100, 100),
    backgroundColor: '#40dbe3'
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
