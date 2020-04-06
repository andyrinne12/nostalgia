import * as React from 'react';

import {
  loadData,
  storeData
} from './DataStorage.js';
import SongLibrary from '../constants/SongLibrary.js';


export async function loadUserData() {
  const library = SongLibrary();

  const currency = await loadData('currency');
  if (currency === null) {
    global.currency = 0;
  } else {
    global.currency = parseInt(currency);
  }

  console.log('curr');

  const score = await loadData('score');
  if (score === null) {
    global.score = 0;
  } else {
    global.score = parseInt(score);
  }

  const albumsUnlockedData = JSON.parse(await loadData('albumsUnlocked'));
  global.albumsUnlocked = {};
  if (albumsUnlockedData === null) {
    library.albums.map((album) => {
      global.albumsUnlocked[album.id] = false;
    });
  } else {
    library.albums.map((album) => {
      const albumUnlocked = albumsUnlockedData[album.id];
      if (albumUnlocked === null) {
        global.albumsUnlocked[album.id] = false;
      } else {
        global.albumsUnlocked[album.id] = albumUnlocked;
      }
    });
  }
  console.log(global.albumsUnlocked);

  const songProgressData = JSON.parse(await loadData('songProgress'));
  global.songProgress = {};
  if (songProgressData === null) {
    library.tracks.map(((track) => {
      global.songProgress[track.id] = {};
      global.songProgress[track.id].done = false;
      global.songProgress[track.id].year = false;
      global.songProgress[track.id].author = false;
    }));
  } else {
    library.tracks.map((track) => {
      if (track === null) {
        global.songProgress[track.id] = {};
        global.songProgress[track.id].done = false;
        global.songProgress[track.id].year = false;
        global.songProgress[track.id].author = false;
      } else {
        const song = songProgressData[track.id];
        global.songProgress[track.id] = {};
        global.songProgress[track.id].done = (song.done == true);
        global.songProgress[track.id].year = (song.year == true);
        global.songProgress[track.id].author = (song.author == true);
      }
    });
  }
}

export async function saveUserData() {
  await storeData('currency', global.currency.toString());
  await storeData('score', global.score.toString());
  await storeData('songProgress', JSON.stringify(global.songProgress));
  await storeData('albumsUnlocked', JSON.stringify(global.albumsUnlocked));
}