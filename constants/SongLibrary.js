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
      audio: require('../assets/music/song0.mp3')
    }, {
      id: 1, //folosit
      title: 'Da-mi noptile inapoi',
      author: 'ASIA',
      emojis: '🤲🌃🌃🔙🌅🌅🔙',
      year: 2002,
      audio: require('../assets/music/song1.mp3')
    }, {
      id: 2,
      title: 'Stereo Love',
      emojis: '📻😍',
      author: 'Edward Maya & Vika Jigulina',
      year: 2009,
      audio: require('../assets/music/song2.mp3')
    }, {
      id: 3, //folosit
      title: 'Minim doi',
      emojis: '👩‍❤️‍💋‍👨2️⃣➕🤫',
      author: 'Alex Velea',
      year: 2012,
      audio: require('../assets/music/song3.mp3')
    }, {
      id: 4,
      title: 'Bomba',
      emojis: '💣💥',
      author: 'King africa',
      year: 2008,
      audio: require('../assets/music/song4.mp3')
    }, {
      id: 5,
      title: 'Suna periculos',
      emojis: '👂👂 ⚠️👇🏻👗',
      author: 'ASIA',
      year: 2000,
      audio: require('../assets/music/song5.mp3')
    }, {
      id: 6,
      title: 'Dragoste de inchiriat', //folosit
      emojis: '❤️💵 💵',
      author: 'Akcent',
      year: 2005,
      audio: require('../assets/music/song6.mp3')
    }, {
      id: 7,
      title: '20 de ani', //folosit
      emojis: '2️⃣0️⃣🎉🚫😧🚫💵',
      author: 'Voltaj',
      year: 2001,
      audio: require('../assets/music/song7.mp3')
    }, {
      id: 8,
      title: 'Dragostea din tei', //folosit
      emojis: '🛸👧❤️🌳🤔💭👀', //ar merge schimbat
      author: 'O-Zone',
      year: 2003,
      audio: require('../assets/music/song8.mp3')
    }, {
      id: 9,
      title: 'De ce plang chitarele', //folosit
      emojis: '❓❓😭 🎸🎸',
      author: 'O-Zone',
      year: 2003,
      audio: require('../assets/music/song9.mp3')
    }, {
      id: 10,
      title: 'Sunetul mai tare',
      emojis: '🔉 👆🔝',
      author: 'Vita de vie',
      year: 2001,
      audio: require('../assets/music/song10.mp3')
    }, {
      id: 11,
      title: 'Barbie girl',
      emojis: '👧💇🎀',
      author: 'Aqua',
      year: 1997,
      audio: require('../assets/music/song11.mp3')
    }, {
      id: 12,
      title: 'Secret', //folosit
      emojis: '🤐🤫 👩‍❤️‍💋‍👨🎥',
      author: 'Alex Velea',
      year: 2009,
      audio: require('../assets/music/song12.mp3')
    }, {
      id: 13,
      title: 'Ghita',
      emojis: '⌛🎓🚪', // ar merge schimbat
      author: 'Cleopatra Stratan',
      year: 2006,
      audio: require('../assets/music/song13.mp3')
    }, {
      id: 14,
      title: 'Gasca mea', //folosit
      emojis: '👭👫👬🙋‍♂️🚫🤫',
      author: 'Hi-Q',
      year: 2004,
      audio: require('../assets/music/song14.mp3')
    }, {
      id: 15, //folosit
      title: 'Daca dragostea dispare',
      emojis: '1️⃣❓🤔🙋‍♂️',
      author: 'Connect-R, Alex Velea',
      year: 2007,
      audio: require('../assets/music/song15.mp3')
    }, {
      id: 16,
      title: 'Strazile',
      emojis: '🇹🇩🧔🏻🧔🏻👩🏻👩🏻🧔🏾🧔🏾👩🏾👩🏾🏛💰👮🏻‍♀️👮🏻‍♀️🐔',
      author: 'BUG Mafia',
      year: 2009,
      audio: require('../assets/music/song16.mp3')
    }, {
      id: 17,
      title: 'Viata buna',
      emojis: '1️⃣📅👍👨‍👨‍👧‍👧',
      author: 'La Familia',
      year: 2007,
      audio: require('../assets/music/song17.mp3')
    }, {
      id: 18,
      title: 'Linii de tramvai',
      emojis: '🍀🚬🚬🚃',
      author: 'Deliric, DOC',
      year: 2011,
      audio: require('../assets/music/song18.mp3')
    }, {
      id: 19,
      title: 'Prinde-ma, aprinde-ma',
      emojis: '🙋‍♀️👐🕯️',
      author: 'Andreea Balan',
      year: 2006,
      audio: require('../assets/music/song19.mp3')
    }, {
      id: 20,
      title: 'Arde',
      emojis: '🔥🔥⛓️🙋‍♂️🔫👮',
      author: 'Parazitii, Mr. Levy',
      year: 2010,
      audio: require('../assets/music/song20.mp3')
    }, {
      id: 21,
      title: 'Ma ucide ea',
      emojis: '🙋‍♂️🔪🔫👩🏻‍🦰🐌',
      author: 'Mihail',
      year: 2015,
      audio: require('../assets/music/song21.mp3')
    }, {
      id: 22,
      title: 'K la meteo',
      emojis: '👨🏻🌪👩🏻‍🦳🔁 🔆🚫🙋‍♂️',
      author: 'WhatsUp, Andra',
      year: 2016,
      audio: require('../assets/music/song22.mp3')
    }, {
      id: 23,
      title: 'Senorita',
      emojis: '🍺🍺👧🏩🛏️🇪🇸💃',
      author: 'Dl Problema',
      year: 2006,
      audio: require('../assets/music/song23.mp3')
    }, {
      id: 24,
      title: 'Plec pe marte',
      emojis: '🚶‍♂️🪐🔴',
      author: 'Smiley',
      year: 2010,
      audio: require('../assets/music/song24.mp3')
    }, {
      id: 25,
      title: 'Perfect fara tine',
      emojis: '👌🚫👩🏻‍🦰',
      author: 'Vama',
      year: 2013,
      audio: require('../assets/music/song25.mp3')
    }, {
      id: 26,
      title: 'Vara nu dorm',
      emojis: '🏖☀️🚫💤',
      author: 'Connect-R',
      year: 2012,
      audio: require('../assets/music/song26.mp3')
    }, {
      id: 27, //folosit
      title: 'Raisa',
      emojis: '👩🏻‍🦰🚫🤥',
      author: 'Fly Project',
      year: 2005,
      audio: require('../assets/music/song27.mp3')
    }, {
      id: 28,
      title: 'Cai verzi pe pereti',
      emojis: '😴💭🐴🟢🧱',
      author: 'Smiley',
      year: 2019,
      audio: require('../assets/music/song28.mp3')
    }, {
      id: 29,
      title: 'Mona',
      emojis: '😵👰⁉️',
      author: 'Azur',
      year: 1981,
      audio: require('../assets/music/song29.mp3')
    }, {
      id: 30,
      title: 'Unde e ea',
      emojis: '🤔🤷‍♂️🗺️➡️👩🏻‍🦰',
      author: 'CIA',
      year: 2011,
      audio: require('../assets/music/song30.mp3')
    }, {
      id: 31,
      title: 'E marfa tare',
      emojis: '☀️🔝🚫😴🥳',
      author: 'Alex Velea',
      year: 2012,
      audio: require('../assets/music/song31.mp3')
    }, {
      id: 32,
      title: 'Amo',
      emojis: '🙋‍♀️❤️➡️1️⃣👦✨🛏️',
      author: 'Anda Adam',
      year: 2013,
      audio: require('../assets/music/song32.mp3')
    }, {
      id: 33, //folosit
      title: 'Daca ploaia s-ar opri',
      emojis: '🚫🌧️😢💧💧🌟🌅',
      author: 'Cargo',
      year: 2003,
      audio: require('../assets/music/song33.mp3')
    }, {
      id: 34,
      title: 'Domnisoare',
      emojis: '🏃‍♂️🏙️🙎🏻‍♀️🙎🏼‍♀️',
      author: 'Maximilian, Zhao, Spike',
      year: 2013,
      audio: require('../assets/music/song34.mp3')
    }, {
      id: 35,
      title: 'Lala song',
      emojis: '🎶🌅🔛🌠🚬-',
      author: 'Grasu XXL',
      year: 2018,
      audio: require('../assets/music/song35.mp3')
    }, {
      id: 36,
      title: 'O secunda', //folosit
      emojis: '1️⃣⌛️✅🔭👩🏻‍🦰💘',
      author: 'Simplu',
      year: 2005,
      audio: require('../assets/music/song36.mp3')
    }, {
      id: 37,
      title: 'Zece',
      emojis: '1️⃣0️⃣🎨👨‍🎨😲✨👧',
      author: 'Florin Chilian',
      year: 2005,
      audio: require('../assets/music/song37.mp3')
    }, {
      id: 38,
      title: 'Nebun de alb',
      emojis: '❤️🥺😱👍🤪⚪🎣👸⚫♾️',
      author: 'Emeric Imre',
      year: 2006,
      audio: require('../assets/music/song38.mp3')
    }, {
      id: 39, //folosit
      title: 'Pseudofabula',
      emojis: '❓🌃❓☀️❓🏙️❓🛏️',
      author: 'Rosu si negru',
      year: 1984,
      audio: require('../assets/music/song39.mp3')
    }],

    albums: [{
      id: 0,
      title: 'Hiturile anilor 2000',
      price: 60,
      tracks: [{
          id: 9
        },
        {
          id: 7
        },
        {
          id: 1
        },
        {
          id: 12
        },
        {
          id: 14
        },
        {
          id: 8
        },
        {
          id: 25
        },
        {
          id: 6
        },
        {
          id: 30
        },
        {
          id: 36
        }
      ]
    }]
  };
  return library;
}