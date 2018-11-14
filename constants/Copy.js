export const instructions = [
  { key: '', description: 'One turn per player' },
  { key: '', description: 'Clockwise order' },
  { key: '', description: 'The darker the color of the card, the worse the punishment it will be' },
];

export const permanentRules = [
  { key: 'SMARTPHONE', description: 'If a player gets a notification on his/her phone, it has to drink the whole cup' },
  { key: 'SACRIFICE', description: 'All players can now ask for a slap/kiss from any other player to avoid drinking' },
];

export const rules = [
  { key: 'WATERFALL',
    description: 'Start drinking and it goes round the circle (to the right), you only stop drinking when the person on your left finishes.',
    level: 3,
  },
  { key: 'GOD',
    description: 'Pick someone to drink',
    level: 2,
  },
  { key: 'KAMIKAZE',
    description: 'Ok, YOU drink',
    level: 1,
  },
  { key: 'WHORES',
    description: 'All girls drink',
    level: 1,
  },
  { key: 'FLOOR',
    description: 'Everyone races to touch the floor, last person to touch it drinks',
    level: 3,
  },
  { key: 'DICK',
    description: 'All guys drink',
    level: 3,
  },
  { key: 'MATE',
    description: 'Pick a person to drink with',
    level: 4,
  },
  { key: 'FRIENDS',
    description: 'Drink as many sips as persons playing the game',
    level: 1,
  },
  // TODO: add more rules
];
