import * as React from 'react';

import {
  loadData,
  storeData
} from './DataStorage.js';
import SongLibrary from '../constants/SongLibrary.js';


export async function loadUserData() {
  const library = SongLibrary();

  const currency = await loadData('currency');
  console.log(currency);
  if (currency === null) {
    global.currency = 0;
  } else {
    global.currency = parseInt(currency);
  }

  const score = await loadData('score');
  if (score === null) {
    global.score = 0;
  } else {
    global.score = parseInt(score);
  }

  const songProgressData = JSON.parse(await loadData('songProgress'));
  if (songProgressData === null) {
    library.map((album) => {
      global.songProgress = {};
      album.tracks.map((track) => {
        global.songProgress[track.songID] = {};
        global.songProgress[track.songID].done = false;
        global.songProgress[track.songID].year = false;
        global.songProgress[track.songID].author = false;
      })
    });
  } else {
    library.map((album) => {
      global.songProgress = {};
      album.tracks.map((track) => {
        if (track === null) {
          global.songProgress[track.songID] = {};
          global.songProgress[track.songID].done = false;
          global.songProgress[track.songID].year = false;
          global.songProgress[track.songID].author = false;
        } else {
          const song = songProgressData[track.songID];
          global.songProgress[track.songID] = {};
          global.songProgress[track.songID].done = (song.done == true);
          global.songProgress[track.songID].year = (song.year == true);
          global.songProgress[track.songID].author = (song.author == true);
        }
      })
    })
  }
}

export async function saveUserData() {
  await storeData('currency', global.currency.toString());
  await storeData('score', global.score.toString());
  await storeData('songProgress', JSON.stringify(global.songProgress));
}