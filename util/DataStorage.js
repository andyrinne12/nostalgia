import * as React from 'react';
import {AsyncStorage} from 'react-native';

export async function loadData(key){
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    // Error retrieving data
  }
}

export async function storeData(key,value){
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    //Error
  }
}

export async function clearAll(){
  await AsyncStorage.clear();
}
