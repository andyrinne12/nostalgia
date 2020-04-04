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
      emojis:'🤔🤷‍♂️🗺️➡️👩🏻‍🦰',
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
    }, {
      id: 40,
      title: 'Drumurile noastre',
      emojis: '🤝🛣️💌💭🤗',
      author: 'Dan Spataru',
      year: 1985,
      audio: require('../assets/music/song40.mp3')
    }, {
      id: 41,
      title: 'Dragoste la prima vedere',
      emojis: '❤️➡️1️⃣👀',
      author: 'Alex Velea, Connect-R',
      year: 2006,
      audio: require('../assets/music/song41.mp3')
    }, {
      id: 42,
      title: 'Buchet de trandafiri',
      emojis: '👐💐🌹🌹',
      author: 'Akcent',
      year: 2003,
      audio: require('../assets/music/song42.mp3')
    }, {
      id: 43,
      title: 'Soarele meu',
      emojis: '☀️🌅🛣️', // ar merge modificat
      author: 'Mandinga',
      year: 2005,
      audio: require('../assets/music/song43.mp3')
    }, {
      id: 44,
      title: 'Ochii tai',
      emojis: '👀🔙💑',
      author: 'L.A.',
      year: 2001,
      audio: require('../assets/music/song44.mp3')
    }, {
      id: 45,
      title: 'Ani de liceu', //folosit
      emojis: '⏱️🏫😟📚😓📐',
      author: 'Stela Enache',
      year: 1986,
      audio: require('../assets/music/song45.mp3')
    }, {
      id: 46,
      title: 'Asa-s baietii',
      emojis: '👦🚶‍♂️👩‍🦰👱‍♀️👩🏽⚫',
      author: 'Angels',
      year: 2000,
      audio: require('../assets/music/song46.mp3')
    }, {
      id: 47,
      title: 'Am bani de dat', //folosit
      emojis: '🙋‍♂️💵➡️💵🧑‍🤝‍🧑🏛️',
      authors: 'Smiley',
      year: 2008,
      audio: require('../assets/music/song47.mp3')
    }, {
      id: 48, //folosit
      title: 'Super femei',
      emojis: '👈👩👀👉👩👐🦸‍♀️🦸‍♀️',
      authors: 'Body & Soul',
      year: 2000,
      audio: require('../assets/music/song48.mp3')
    }, {
      id: 49,
      title: 'Banii si fetele', //folosit
      emojis: '💰➕👩👩🍽️📅',
      authors: 'Valahia',
      year: 1999,
      audio: require('../assets/music/song49.mp3')
    }, {
      id: 50,
      title: 'La mare la soare', //folosit
      emojis: '🏖️☀️👩‍👧‍👧🚫👙',
      authors: 'Valahia',
      year: 1999,
      audio: require('../assets/music/song50.mp3')
    }, {
      id: 51,
      title: 'Aprinde dragostea',
      emojis: '🙋‍♀️🚫👈🔥', //merge modificata
      authors: 'Alexandra Ungureanu, Crush',
      year: 2005,
      audio: require('../assets/music/song51.mp3')
    }, {
      id: 52,
      title: 'Cu tine in rai',
      emojis: '🤟🌎➡️🙋‍♀️😌👼', //mai merge pus un TOP langa pamant poate
      authors: 'Alexandra Ungureanu, Crush',
      year: 2007,
      audio: require('../assets/music/song52.mp3')
    }, {
      id: 53,
      title: 'Doar cu tine',
      emojis: '🚶🙋‍♀️🤗➡️1️⃣2️⃣3️⃣',
      authors: 'Activ',
      year: 2004,
      audio: require('../assets/music/song53.mp3')
    }, {
      id: 54, //folosit
      title: 'Cred ca m-am indragostit',
      emojis: '❤️🤷😃👊💓',
      authors: 'Latin Express',
      year: 1999,
      audio: require('../assets/music/song54.mp3')
    }, {
      id: 55,
      title: 'Visez',
      emojis: '🙋‍♀️👈🌎➕💭👦',
      authors: 'Activ',
      year: 2004,
      audio: require('../assets/music/song55.mp3')
    }, {
      id: 56,
      title: 'Ploaia',
      emojis: '🌧️😈🛁😡↔️❤️',
      authors:'El Negro',
      year: 2005,
      audio: require('../assets/music/song56.mp3')
    }, {
      id: 57,
      title: 'Oficial imi merge bine', //folosit
      emojis: '❤️➡️😡➡️😡➡️❤️🤷',
      authors: 'Simplu',
      year: 2006,
      audio: require('../assets/music/song57.mp3')
    }, {
      id: 58,
      title: 'Lasa-ma papa la mare', //folosit
      emojis: '👴🙋‍♀️➡️🎉☀️',
      authors: 'Andre',
      year: 2000,
      audio: require('../assets/music/song58.mp3')
    }, {
      id: 59, //folosit
      title: 'Despre tine',
      emojis: '🌊😵👀➕🧑‍🤝‍🧑😭😭',
      authors: 'O-Zone',
      year: 2002,
      audio: require('../assets/music/song59.mp3')
    }, {
      id: 60,
      title: 'Vino la mine',
      emojis: '🙋‍♀️❓🏃‍♂️➡️💑💗♾️',
      authors: 'N&D',
      year: 1999,
      audio: require('../assets/music/song60.mp3')
    }, {
      id: 61,
      title: 'Nu din prima seara',
      emojis: '🚫1️⃣🌃', //grea ca dracu
      authors: 'Cream, CRBL',
      year: 2005,
      audio: require('../assets/music/song61.mp3')
    }, {
      id: 62,
      title: 'Oops eroare',
      emojis: '🚫👩↔️🙋‍♀️➕🚫💗',
      authors: 'Andreea Balan',
      year: 2004,
      audio: require('../assets/music/song62.mp3')
    }],

    albums: [{
        id: 0,
        title: 'Hiturile anilor 2000',
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
            id: 47
          },
          {
            id: 6
          },
          {
            id: 57
          },
          {
            id: 36
          }
        ]
      },
      {
        id: 1,
        title: 'Si mai multe hituri',
        tracks: [{
            id: 3
          },
          {
            id: 15
          },
          {
            id: 27
          },
          {
            id: 58
          },
          {
            id: 59
          },
          {
            id: 39
          },
          {
            id: 33
          },
          {
            id: 5
          },
          {
            id: 48
          },
          {
            id: 54
          }
        ]
      },
      {
        id: 2,
        title: 'Si mai multa nostalgie',
        tracks: [{
            id: 45
          },
          {
            id: 49
          },
          {
            id: 50
          },
          {
            id: 58
          },
          {
            id: 59
          },
          {
            id: 39
          },
          {
            id: 33
          },
          {
            id: 5
          },
          {
            id: 48
          },
          {
            id: 54
          }
        ]
      }
    ]
  };
  return library;
}
