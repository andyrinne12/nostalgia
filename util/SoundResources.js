import * as React from 'react';
import {
  Audio
} from 'expo-av';

import SongLibrary from '../constants/SongLibrary.js';

export async function loadSong(id, src) {
  try {
    global.songFiles[id] = new Audio.Sound();
    await global.songFiles[id].loadAsync(src);
  } catch (error) {
    console.log(error);
  }
}

export async function unloadSong(id) {
  try {
    global.songFiles[id] = await Audio.Sound.unloadAsync();
  } catch (error) {
    // An error occurred!
  }
}

export async function loadSongLibrary() {
  const library = SongLibrary();
  global.songFiles = {};
  await library.tracks.map((track, index) => {
    loadSong(track.id, track.audio);
    console.log(index);
  });
}

export async function unloadSongLibrary() {
  const library = SongLibrary();
  library.tracks.map((track) => {
    unloadSong(track.id)
  });
}