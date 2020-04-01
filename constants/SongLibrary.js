import * as React from 'react';

export default function SongLibrary() {
  // ids MUST be ordered for both albums and tracks
  const library = {
    tracks: [{
      id: 0,
      title: 'De ce plang chitarele',
      emojis: '😭 🎸🎸',
      author: 'Nicolae Guta',
      year: 2008,
      audio: require('../assets/music/song24.mp3')
    }, {
      id: 1,
      title: 'Dragostea din tei',
      author: 'Florin Salam',
      emojis: '🛸❤️🌿',
      year: 2007,
      audio: require('../assets/music/song23.mp3')
    }, {
      id: 2,
      title: 'Beau beau',
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃',
      author: 'Florin Cercel',
      year: 2020,
      audio: require('../assets/music/song25.mp3')
    }],
    albums: [{
        id: 0,
        title: 'Vara manelelor 2005',
        tracks: [{
            id: 0
          },
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      },
      {
        id: 1,
        title: 'Toamna manelelor 2000',
        tracks: [{
            id: 2
          },
          {
            id: 0
          }
        ]
      }
    ]
  };
  return library;
}