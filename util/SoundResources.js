import * as React from 'react';
import {
  Audio
} from 'expo-av';

import SongLibrary from '../constants/SongLibrary.js';

const library = SongLibrary();

export async function loadSong(id) {
  try {
    const src = library.tracks[id].audio;
    const audio = new Audio.Sound();
    await audio.loadAsync(src);
    return audio;
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
  await library.tracks.map((track) => {
    unloadSong(track.id)
  });
}