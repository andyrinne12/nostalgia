import * as React from 'react';
import {AsyncStorage} from 'react-native';

export async function loadData(key){
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error);
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
