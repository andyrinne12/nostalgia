import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  render(){
    return(
    <View style={styles.container}>
      <Text style={{color:'gold',padding:40,backgroundColor:'cyan',fontSize:40}}>Salut clan</Text>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(LinksScreen)}><Text>JOAC-O</Text></TouchableOpacity>
    </View>
  )
}
}

HomeScreen.navigationOptions = {
  header: "bla",
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'cyan',
    borderWidth: 2.5,
    borderRadius: 7,
    opacity: 0.6,
    transition: 0.3,
  },
});
