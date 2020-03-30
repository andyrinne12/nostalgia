import * as React from 'react';

export default function SongLibrary() {
  const library = [{
    albumID: 1,
    albumName: 'Vara manelelor 2005',
    tracks: [{
      songID: 1,
      title: 'De ce plang chitarele',
      emojis: '😭 🎸🎸',
      author: 'Nicolae Guta',
      year: 2008
    }, {
      songID: 2,
      title: 'Dragostea din tei',
      author: 'Florin Salam',
      emojis: '🛸❤️🌿',
      year: 2007
    }, {
      songID: 3,
      title: 'Beau beau',
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃',
      author: 'Florin Cercel',
      year: 2020
    }]
  }, {
    albumID: 2,
    albumName: 'Toamna manelelor 2005',
    tracks: [{
      songID: 1,
      title: 'De ce plang chitarele',
      emojis: '😭 🎸🎸',
      author: 'Nicolae Guta'
    }, {
      songID: 2,
      title: 'Dragostea din tei',
      emojis: '🛸❤️🌿'
    }, {
      songID: 3,
      title: 'Beau beau',
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃'
    }]
  }];
  return library;
}
