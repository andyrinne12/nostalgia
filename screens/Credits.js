import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { containerStyle } from '../styles/Containers.js';
import * as Font from 'expo-font';
import { Avatar, Button, SocialIcon, ListItem, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'expo';
import subTitleGif from '../assets/images/sd.gif';
import nerdAlert from '../assets/images/spongeBob.gif';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const list = [
  {
    name: 'Vlad Andrei Bucur',
    avatar_url: 'http://info1cup.com/resources/img/sefu.png',
    subtitle: 'Student at University of Bristol',

  },
  {
    name: 'Andrei Oliviu Sologon',
    avatar_url: 'http://info1cup.com/resources/img/solo2.png',
    subtitle: 'Student at Imperial College London'
  },
  {
    name: 'George Edward Nechitoaia',
    avatar_url: 'http://info1cup.com/resources/img/cristea.png',
    subtitle: 'Student at University of Bristol'
  },

]

export default class Credits extends React.Component {

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider
    />
  )


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
            //   backgroundColor: 'green'
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
            color: '#ed34b3'
          }}>Despre noi</Text>
        </View>


        <View style={[
          containerStyle(100, 70), {
            //   backgroundColor: 'purple',
            flexDirection: 'column'
          }]}>


          {//Social Distance
          }
          <View style={[
            containerStyle(100, 20), {
              //   backgroundColor: 'red',
              flexDirection: 'row',

            }]}>
            <Image style={styles.title} source={subTitleGif} />
          </View>



          {// SOCIAL MEDIA
          }
          <View style={[
            containerStyle(100, 15), {
              // backgroundColor: 'blue',
              flexDirection: 'row',

            }]}>

            <SocialIcon
              type='instagram'
              onPress={() => {
                //Action to perform onPress of the Icon
                Linking.openURL('https://www.instagram.com/untitledprojectuleanu/');
              }}
            />

            <SocialIcon
              type='facebook'
              onPress={() => {
                //Action to perform onPress of the Icon
                Linking.openURL('https://www.facebook.com/untitledprojects20/');
              }}
            />


          </View>


          {//DESPRE CREATORI: 2 cadrane

          }

          <View style={[
            containerStyle(100, 75), {
             // backgroundColor: 'yellow',
              flexDirection: 'column',
              //s alignContent:'flex-start',

            }]}>

            {// CADRAN 1 subTITLU
            }
            <View style={[
              containerStyle(100, 25), {
              //  backgroundColor: 'red',
                flexDirection: 'column',

              }]}>

<Image style={styles.title} source={nerdAlert} />
            </View>

            {//CADRAN 2 CREATORI
            }
            <View style={[
              containerStyle(100, 75), {
              //  backgroundColor: 'blue',
                flexDirection: 'row',
              }]}>

              <FlatList
                scrollEnabled={false}
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
              />

            </View>



          </View>

        </View>



        <View style={[
          containerStyle(100, 15), {
         //   backgroundColor: 'red',
            justifyContent:"center",

          }]}>
          <Button icon={{name:'inbox', type:'font-awesome'}} onPress={() => Linking.openURL('mailto:untitledprojects20@gmail.com') }
          title="Contacteaza-ne" />
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
  title: {
    alignSelf: 'center',
    width: '23%',
    height: '60%',
    backgroundColor: 'transparent'
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
